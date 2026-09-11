export default function CardAtividade({
  numero,
  titulo,
  descricao,
  tecnologia,
  tecnologias,
  link,
  status,
  versoes,
  onVerDetalhes
}) {
  const numFormatado = String(numero || '').padStart(2, '0');
  const listaTecs = tecnologias || (tecnologia ? [tecnologia] : []);

  return (
    <article className="card-atividade">
      <div>
        <span className="card-badge-num">
          Atividade {numFormatado}
        </span>
        <h3 className="card-titulo">{titulo}</h3>
      </div>

      <p className="card-descricao">{descricao}</p>

      <div>
        <span className="card-tecs-label">Tecnologias: </span>
        <span className="card-tecs-lista">{listaTecs.join(', ')}</span>
      </div>

      {versoes && versoes.length > 0 && (
        <div className="card-evidencia">
          <strong style={{ display: 'block', marginBottom: '0.25rem', color: '#334155' }}>Evidência:</strong>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', lineHeight: '1.4' }}>
            {versoes.map((v, idx) => (
              <li key={idx}>{v}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <a href={link || '#'} className="card-botao-acao">
          Visualizar Atividade
        </a>
      </div>
    </article>
  );
}
