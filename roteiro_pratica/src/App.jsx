import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import CardAtividade from './components/CardAtividade';
import ModalDetalhes from './components/ModalDetalhes';
import Contato from './components/Contato';
import { listaAtividades } from './data/atividades';

export default function App() {
  const [tema, setTema] = useState('light');
  const [filtroTecnologia, setFiltroTecnologia] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [atividadeModal, setAtividadeModal] = useState(null);

  const tecnologiasFiltro = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel'];

  // Contador e Barra de Progresso (Cards 19 e 20)
  const totalAtividades = listaAtividades.length;
  const concluidas = listaAtividades.filter((item) => item.status === 'Concluída').length;
  const percentual = totalAtividades > 0 ? Math.round((concluidas / totalAtividades) * 100) : 0;

  const atividadesFiltradas = listaAtividades.filter((item) => {
    const matchTec =
      filtroTecnologia === 'Todos' ||
      item.tecnologias.some((tec) =>
        tec.toLowerCase().includes(filtroTecnologia.toLowerCase())
      );
    const termoBusca = busca.toLowerCase();
    const matchBusca =
      item.titulo.toLowerCase().includes(termoBusca) ||
      item.descricao.toLowerCase().includes(termoBusca);
    return matchTec && matchBusca;
  });

  return (
    <div className="app-container" data-theme={tema}>
      {/* Barra Superior com Alternador de Tema (Card 23) */}
      <div className="top-bar">
        <button
          type="button"
          className="btn-tema"
          onClick={() => setTema(prev => prev === 'light' ? 'dark' : 'light')}
          aria-label="Alternar entre tema claro e escuro"
        >
          {tema === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
        </button>
      </div>

      {/* Cabeçalho */}
      <Cabecalho />

      {/* Navegação */}
      <nav aria-label="Navegação principal" className="nav-principal">
        <a href="#inicio" className="nav-link ativo">Início</a>
        <a href="#sobre" className="nav-link">Sobre</a>
        <a href="#atividades" className="nav-link">Atividades</a>
        <a href="#contato" className="nav-link">Contato</a>
      </nav>

      <main className="main-container">
        {/* Seção Sobre */}
        <section id="sobre" style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ fontSize: '1.4rem', color: '#111827', marginTop: 0 }}>Sobre o Projeto</h2>
          <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Este portfólio acadêmico reúne 30 entregas práticas desenvolvidas na disciplina de Desenvolvimento Full Stack, abordando desde os fundamentos de marcação semântica e estilização responsiva até a componentização e gerenciamento de estado em React.
          </p>
        </section>

        {/* Seção Atividades */}
        <section id="atividades">
          <h2 style={{ fontSize: '1.4rem', color: '#1f2937', marginBottom: '1rem' }}>
            Lista de Atividades (1 a 30)
          </h2>

          {/* Contador e Barra de Progresso (Cards 19 e 20) */}
          <div className="progresso-container">
            <div className="progresso-cabecalho">
              <span className="progresso-titulo">Progresso das Atividades</span>
              <span className="progresso-contador">{concluidas} de {totalAtividades} concluídas ({percentual}%)</span>
            </div>
            <div
              className="barra-trilha"
              role="progressbar"
              aria-valuenow={percentual}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progresso geral do projeto: ${percentual}%`}
            >
              <div
                className="barra-preenchimento"
                style={{ width: `${percentual}%` }}
              />
            </div>
          </div>

          {/* Busca por Texto (Card 18) */}
          <div className="busca-container">
            <input
              type="text"
              placeholder="Buscar por título ou descrição..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="input-busca"
              aria-label="Buscar atividades"
            />
          </div>

          {/* Filtro por Tecnologia (Card 17) */}
          <div className="filtros-container">
            <span className="filtros-label">Filtrar por tecnologia:</span>
            {tecnologiasFiltro.map((tec) => (
              <button
                key={tec}
                type="button"
                className={`btn-filtro ${filtroTecnologia === tec ? 'ativo' : ''}`}
                onClick={() => setFiltroTecnologia(tec)}
              >
                {tec}
              </button>
            ))}
          </div>

          {/* Lista de Atividades ou Estado Vazio */}
          {atividadesFiltradas.length > 0 ? (
            <div className="grid-atividades">
              {atividadesFiltradas.map((item) => (
                <CardAtividade
                  key={item.id}
                  numero={item.numero || item.id}
                  titulo={item.titulo}
                  descricao={item.descricao}
                  tecnologias={item.tecnologias}
                  link={item.link}
                  status={item.status}
                  versoes={item.versoes}
                  onVerDetalhes={() => setAtividadeModal(item)}
                />
              ))}
            </div>
          ) : (
            <div className="estado-vazio">
              <p>Nenhuma atividade encontrada para "{busca}".</p>
            </div>
          )}
        </section>

        {/* Seção Contato (Card 22) */}
        <Contato />
      </main>

      <Rodape />

      {/* Modal de Detalhes (Card 21) */}
      {atividadeModal && (
        <ModalDetalhes
          atividade={atividadeModal}
          onClose={() => setAtividadeModal(null)}
        />
      )}
    </div>
  );
}