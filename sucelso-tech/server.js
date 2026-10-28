import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { supabase } from './supabaseClient.js';

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para identificar usuário pelo e-mail enviado no header 'x-user-email'
async function autenticar(req, res, next) {
  const email = req.headers['x-user-email'] || req.query.email;
  if (!email) {
    return res.status(401).json({ erro: 'Usuário não autenticado. Informe o e-mail no login.' });
  }

  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !usuario) {
    return res.status(401).json({ erro: 'Usuário não encontrado.' });
  }

  req.usuario = usuario;
  next();
}

function exigirPerfil(...perfisPermitidos) {
  return (req, res, next) => {
    if (!req.usuario || !perfisPermitidos.includes(req.usuario.perfil)) {
      return res.status(403).json({
        erro: `Acesso negado. Perfil '${req.usuario?.perfil}' não possui permissão. Requer: ${perfisPermitidos.join(' ou ')}.`
      });
    }
    next();
  };
}

async function registrarHistorico(usuarioId, operacao, detalhes) {
  await supabase.from('historico_alteracoes').insert([
    {
      usuario_id: usuarioId,
      operacao,
      valores_alterados: JSON.stringify(detalhes)
    }
  ]);
}

// ============================================================================
// MÓDULO 1: LOGIN E DADOS AUXILIARES
// ============================================================================
app.post('/api/login', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ erro: 'Informe o e-mail.' });

  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email.trim())
    .single();

  if (error || !usuario) {
    return res.status(404).json({ erro: 'E-mail não cadastrado no sistema SUCELSO TECH.' });
  }

  let vinculo = null;
  if (usuario.perfil === 'Professor') {
    const { data } = await supabase.from('professores').select('*').eq('usuario_id', usuario.id).single();
    vinculo = data;
  } else if (usuario.perfil === 'Aluno') {
    const { data } = await supabase.from('alunos').select('*, turmas(*)').eq('usuario_id', usuario.id).single();
    vinculo = data;
  }

  return res.json({ usuario, vinculo });
});

app.get('/api/usuarios-demo', async (_req, res) => {
  const { data } = await supabase.from('usuarios').select('*').order('id');
  res.json(data || []);
});

app.get('/api/turmas', autenticar, async (_req, res) => {
  const { data, error } = await supabase.from('turmas').select('*').order('id');
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

app.get('/api/professores', autenticar, async (_req, res) => {
  const { data, error } = await supabase
    .from('professores')
    .select('*, usuarios(nome, email)')
    .order('id');
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

app.get('/api/versoes', autenticar, async (_req, res) => {
  const { data, error } = await supabase
    .from('versoes_horario')
    .select('*')
    .order('id', { ascending: false });
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

// ============================================================================
// ENDPOINTS OBRIGATÓRIOS DA SEÇÃO 8
// ============================================================================

// 1. GET /api/disciplinas - Consultar disciplinas
app.get('/api/disciplinas', autenticar, async (_req, res) => {
  const { data, error } = await supabase.from('disciplinas').select('*').order('id');
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

// 2. GET /api/salas - Consultar salas
app.get('/api/salas', autenticar, async (_req, res) => {
  const { data, error } = await supabase.from('salas').select('*').order('id');
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

// 3. GET /api/horarios/minha-turma - Consultar horário do aluno (ou por turma_id para Coordenador)
app.get('/api/horarios/minha-turma', autenticar, async (req, res) => {
  let turmaId = req.query.turma_id ? Number(req.query.turma_id) : null;

  if (req.usuario.perfil === 'Aluno') {
    const { data: aluno } = await supabase
      .from('alunos')
      .select('turma_id')
      .eq('usuario_id', req.usuario.id)
      .single();
    if (!aluno) return res.status(404).json({ erro: 'Vínculo de aluno não encontrado.' });
    turmaId = aluno.turma_id;
  }

  let versaoQuery = supabase.from('versoes_horario').select('*').order('id', { ascending: false }).limit(1);
  if (req.usuario.perfil === 'Aluno') {
    versaoQuery = versaoQuery.eq('status', 'publicada');
  } else if (req.query.versao_id) {
    versaoQuery = supabase.from('versoes_horario').select('*').eq('id', Number(req.query.versao_id)).limit(1);
  }

  const { data: versoes } = await versaoQuery;
  if (!versoes || versoes.length === 0) {
    return res.json({ versao: null, horarios: [], mensagem: 'Nenhuma grade publicada disponível no momento.' });
  }

  const versao = versoes[0];
  let queryHorarios = supabase
    .from('horarios')
    .select(`
      id, versao_id, dia, inicio, fim,
      turmas ( id, nome, turno ),
      disciplinas ( id, nome, codigo ),
      professores ( id, matricula, usuarios ( nome ) ),
      salas ( id, identificacao )
    `)
    .eq('versao_id', versao.id);

  if (turmaId) {
    queryHorarios = queryHorarios.eq('turma_id', turmaId);
  }

  const { data: horarios, error } = await queryHorarios;
  if (error) return res.status(500).json({ erro: error.message });

  res.json({ versao, horarios });
});

// 4. GET /api/horarios/professor - Consultar horário docente
app.get('/api/horarios/professor', autenticar, exigirPerfil('Professor', 'Coordenador'), async (req, res) => {
  let professorId = req.query.professor_id ? Number(req.query.professor_id) : null;

  if (req.usuario.perfil === 'Professor') {
    const { data: prof } = await supabase
      .from('professores')
      .select('id')
      .eq('usuario_id', req.usuario.id)
      .single();
    if (!prof) return res.status(404).json({ erro: 'Cadastro de professor não encontrado.' });
    professorId = prof.id;
  }

  const { data: versoes } = await supabase
    .from('versoes_horario')
    .select('*')
    .order('id', { ascending: false })
    .limit(1);

  if (!versoes || versoes.length === 0) {
    return res.json({ versao: null, horarios: [] });
  }

  const versao = versoes[0];
  let query = supabase
    .from('horarios')
    .select(`
      id, versao_id, dia, inicio, fim,
      turmas ( id, nome, turno ),
      disciplinas ( id, nome, codigo ),
      professores ( id, matricula, usuarios ( nome ) ),
      salas ( id, identificacao )
    `)
    .eq('versao_id', versao.id);

  if (professorId) query = query.eq('professor_id', professorId);

  const { data: horarios, error } = await query;
  if (error) return res.status(500).json({ erro: error.message });

  res.json({ versao, horarios });
});

// Consultar disponibilidades
app.get('/api/disponibilidades', autenticar, async (req, res) => {
  let query = supabase
    .from('disponibilidades')
    .select('*, professores(id, matricula, usuarios(nome))')
    .order('id');

  if (req.usuario.perfil === 'Professor') {
    const { data: prof } = await supabase.from('professores').select('id').eq('usuario_id', req.usuario.id).single();
    if (prof) query = query.eq('professor_id', prof.id);
  } else if (req.query.professor_id) {
    query = query.eq('professor_id', Number(req.query.professor_id));
  }

  const { data, error } = await query;
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

// 5. POST /api/disponibilidades - Registrar disponibilidade (Não altera automaticamente a grade oficial)
app.post('/api/disponibilidades', autenticar, exigirPerfil('Professor', 'Coordenador'), async (req, res) => {
  const { dia, inicio, fim, professor_id } = req.body;
  if (!dia || !inicio || !fim) {
    return res.status(400).json({ erro: 'Campos obrigatórios: dia, inicio, fim.' });
  }

  let profId = professor_id;
  if (req.usuario.perfil === 'Professor') {
    const { data: prof } = await supabase.from('professores').select('id').eq('usuario_id', req.usuario.id).single();
    if (!prof) return res.status(404).json({ erro: 'Professor não localizado.' });
    profId = prof.id;
  }

  const { data, error } = await supabase
    .from('disponibilidades')
    .insert([{ professor_id: profId, dia, inicio, fim }])
    .select()
    .single();

  if (error) return res.status(400).json({ erro: error.message });

  await registrarHistorico(req.usuario.id, 'REGISTRO_DISPONIBILIDADE', data);
  res.status(201).json({
    mensagem: 'Disponibilidade registrada! A grade oficial publicada não foi alterada automaticamente.',
    disponibilidade: data
  });
});

// 6. PUT /api/disponibilidades/:id - Atualizar disponibilidade
app.put('/api/disponibilidades/:id', autenticar, exigirPerfil('Professor', 'Coordenador'), async (req, res) => {
  const id = Number(req.params.id);
  const { dia, inicio, fim } = req.body;

  if (req.usuario.perfil === 'Professor') {
    const { data: prof } = await supabase.from('professores').select('id').eq('usuario_id', req.usuario.id).single();
    const { data: disp } = await supabase.from('disponibilidades').select('*').eq('id', id).single();
    if (!disp || disp.professor_id !== prof?.id) {
      return res.status(403).json({ erro: 'Você só pode alterar a sua própria disponibilidade.' });
    }
  }

  const { data, error } = await supabase
    .from('disponibilidades')
    .update({ dia, inicio, fim })
    .eq('id', id)
    .select()
    .single();

  if (error) return res.status(400).json({ erro: error.message });

  await registrarHistorico(req.usuario.id, 'ATUALIZACAO_DISPONIBILIDADE', data);
  res.json({
    mensagem: 'Disponibilidade atualizada! Mudanças após publicação ficam sujeitas à revisão do coordenador.',
    disponibilidade: data
  });
});

// 7. POST /api/horarios/gerar - Algoritmo Inteligente de Geração de Proposta de Grade
app.post('/api/horarios/gerar', autenticar, exigirPerfil('Coordenador'), async (req, res) => {
  const periodo = req.body.periodo || '2026.1';

  const [
    { data: turmas },
    { data: salas },
    { data: disponibilidades },
    { data: vinculos },
    { data: disciplinas },
    { data: professores }
  ] = await Promise.all([
    supabase.from('turmas').select('*'),
    supabase.from('salas').select('*').order('id'),
    supabase.from('disponibilidades').select('*'),
    supabase.from('turma_disciplinas').select('*'),
    supabase.from('disciplinas').select('*'),
    supabase.from('professores').select('*, usuarios(nome)')
  ]);

  const { data: novaVersao, error: erroVersao } = await supabase
    .from('versoes_horario')
    .insert([{ periodo, status: 'rascunho', responsavel: req.usuario.nome }])
    .select()
    .single();

  if (erroVersao) return res.status(500).json({ erro: erroVersao.message });

  const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
  const slotsPorTurno = {
    Matutino: [
      { inicio: '08:00:00', fim: '10:00:00' },
      { inicio: '10:00:00', fim: '12:00:00' }
    ],
    Noturno: [
      { inicio: '18:45:00', fim: '20:30:00' },
      { inicio: '20:45:00', fim: '22:30:00' }
    ]
  };

  const alocacoes = [];
  const conflitosNaoAlocados = [];

  for (const vinculo of vinculos) {
    const turma = turmas.find(t => t.id === vinculo.turma_id);
    const disc = disciplinas.find(d => d.id === vinculo.disciplina_id);
    const prof = professores.find(p => p.id === vinculo.professor_id);
    if (!turma) continue;

    const blocosNecessarios = Math.max(1, Math.ceil((vinculo.carga_semanal || 4) / 2));
    let blocosAlocados = 0;
    const slotsTurno = slotsPorTurno[turma.turno] || slotsPorTurno.Matutino;

    for (const dia of diasSemana) {
      if (blocosAlocados >= blocosNecessarios) break;

      for (const slot of slotsTurno) {
        if (blocosAlocados >= blocosNecessarios) break;

        const profDisponivel = disponibilidades.some(
          d =>
            d.professor_id === vinculo.professor_id &&
            d.dia === dia &&
            d.inicio <= slot.inicio &&
            d.fim >= slot.fim
        );
        if (!profDisponivel) continue;

        const turmaOcupada = alocacoes.some(
          a => a.turma_id === turma.id && a.dia === dia && a.inicio === slot.inicio
        );
        if (turmaOcupada) continue;

        const profOcupado = alocacoes.some(
          a => a.professor_id === vinculo.professor_id && a.dia === dia && a.inicio === slot.inicio
        );
        if (profOcupado) continue;

        const salaLivre = salas.find(
          s => !alocacoes.some(a => a.sala_id === s.id && a.dia === dia && a.inicio === slot.inicio)
        );
        if (!salaLivre) continue;

        alocacoes.push({
          versao_id: novaVersao.id,
          turma_id: turma.id,
          disciplina_id: vinculo.disciplina_id,
          professor_id: vinculo.professor_id,
          sala_id: salaLivre.id,
          dia,
          inicio: slot.inicio,
          fim: slot.fim
        });

        blocosAlocados++;
      }
    }

    if (blocosAlocados < blocosNecessarios) {
      conflitosNaoAlocados.push({
        turma: turma.nome,
        disciplina: disc?.nome,
        professor: prof?.usuarios?.nome || `Prof #${vinculo.professor_id}`,
        blocos_necessarios: blocosNecessarios,
        blocos_alocados: blocosAlocados,
        motivo: 'Restrição de disponibilidade docente ou colisão de horários/salas'
      });
    }
  }

  if (alocacoes.length > 0) {
    const { error: erroInsert } = await supabase.from('horarios').insert(alocacoes);
    if (erroInsert) return res.status(500).json({ erro: erroInsert.message });
  }

  await registrarHistorico(req.usuario.id, 'GERACAO_AUTOMATICA_GRADE', {
    versao_id: novaVersao.id,
    total_aulas_alocadas: alocacoes.length,
    pendencias: conflitosNaoAlocados
  });

  res.status(201).json({
    mensagem: 'Proposta de grade gerada com sucesso!',
    versao: novaVersao,
    total_alocacoes: alocacoes.length,
    pendencias: conflitosNaoAlocados
  });
});

// 8. PUT /api/horarios/:id - Alterar alocação manualmente (Somente Coordenador)
app.put('/api/horarios/:id', autenticar, exigirPerfil('Coordenador'), async (req, res) => {
  const id = Number(req.params.id);
  const { dia, inicio, fim, sala_id, professor_id } = req.body;

  const camposAtualizar = {};
  if (dia) camposAtualizar.dia = dia;
  if (inicio) camposAtualizar.inicio = inicio;
  if (fim) camposAtualizar.fim = fim;
  if (sala_id) camposAtualizar.sala_id = Number(sala_id);
  if (professor_id) camposAtualizar.professor_id = Number(professor_id);

  const { data, error } = await supabase
    .from('horarios')
    .update(camposAtualizar)
    .eq('id', id)
    .select()
    .single();

  if (error) return res.status(400).json({ erro: error.message });

  await registrarHistorico(req.usuario.id, 'AJUSTE_MANUAL_HORARIO', { horario_id: id, ...camposAtualizar });
  res.json({ mensagem: 'Alocação atualizada pelo coordenador!', horario: data });
});

// 9. POST /api/horarios/versoes/:id/publicar - Aprovar e publicar grade oficial
app.post('/api/horarios/versoes/:id/publicar', autenticar, exigirPerfil('Coordenador'), async (req, res) => {
  const versaoId = Number(req.params.id);

  await supabase
    .from('versoes_horario')
    .update({ status: 'em_revisao' })
    .eq('status', 'publicada');

  const { data, error } = await supabase
    .from('versoes_horario')
    .update({ status: 'publicada' })
    .eq('id', versaoId)
    .select()
    .single();

  if (error) return res.status(400).json({ erro: error.message });

  await registrarHistorico(req.usuario.id, 'PUBLICACAO_GRADE_OFICIAL', { versao_id: versaoId });
  res.json({ mensagem: `Versão #${versaoId} publicada como grade oficial!`, versao: data });
});

// 10. GET /api/horarios/conflitos - Consultar conflitos de sala, professor, turma e disponibilidade
app.get('/api/horarios/conflitos', autenticar, exigirPerfil('Coordenador'), async (req, res) => {
  const { data: versoes } = await supabase
    .from('versoes_horario')
    .select('*')
    .order('id', { ascending: false })
    .limit(1);

  if (!versoes || versoes.length === 0) {
    return res.json({ versao: null, conflitos: [] });
  }

  const versao = versoes[0];
  const [{ data: horarios }, { data: disponibilidades }] = await Promise.all([
    supabase
      .from('horarios')
      .select(`
        id, dia, inicio, fim, turma_id, professor_id, sala_id,
        turmas(nome), disciplinas(nome), salas(identificacao),
        professores(id, usuarios(nome))
      `)
      .eq('versao_id', versao.id),
    supabase.from('disponibilidades').select('*')
  ]);

  const conflitos = [];
  const lista = horarios || [];

  for (let i = 0; i < lista.length; i++) {
    const a = lista[i];

    const dentroDisp = disponibilidades.some(
      d => d.professor_id === a.professor_id && d.dia === a.dia && d.inicio <= a.inicio && d.fim >= a.fim
    );
    if (!dentroDisp) {
      conflitos.push({
        tipo: 'INDISPONIBILIDADE_DOCENTE',
        descricao: `Prof. ${a.professores?.usuarios?.nome} alocado em ${a.dia} (${a.inicio.slice(0, 5)}) fora de sua disponibilidade registrada.`,
        horario_id: a.id
      });
    }

    for (let j = i + 1; j < lista.length; j++) {
      const b = lista[j];
      if (a.dia === b.dia && a.inicio === b.inicio) {
        if (a.professor_id === b.professor_id) {
          conflitos.push({
            tipo: 'CHOQUE_PROFESSOR',
            descricao: `Prof. ${a.professores?.usuarios?.nome} alocado simultaneamente em duas turmas (${a.dia} às ${a.inicio.slice(0, 5)}).`,
            horarios: [a.id, b.id]
          });
        }
        if (a.sala_id === b.sala_id) {
          conflitos.push({
            tipo: 'CHOQUE_SALA',
            descricao: `Sala '${a.salas?.identificacao}' com duas turmas simultâneas (${a.dia} às ${a.inicio.slice(0, 5)}).`,
            horarios: [a.id, b.id]
          });
        }
        if (a.turma_id === b.turma_id) {
          conflitos.push({
            tipo: 'CHOQUE_TURMA',
            descricao: `Turma '${a.turmas?.nome}' com duas disciplinas no mesmo horário (${a.dia} às ${a.inicio.slice(0, 5)}).`,
            horarios: [a.id, b.id]
          });
        }
      }
    }
  }

  res.json({ versao, total_conflitos: conflitos.length, conflitos });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor SUCELSO TECH rodando em http://localhost:${PORT}`);
});
