const CONFIG_STATUS = {
  'Concluída': { classe: 'status-concluida', rotulo: '✓ Concluída' },
  'Em andamento': { classe: 'status-andamento', rotulo: '⏳ Em andamento' },
  'Planejada': { classe: 'status-planejada', rotulo: '📋 Planejada' }
};

function getStatusConfig(status) {
  return CONFIG_STATUS[status] || CONFIG_STATUS['Concluída'];
}

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
  const statusInfo = getStatusConfig(status);

  return (
    <article className="card-atividade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
        <span className="card-badge-num">
          Atividade {numFormatado}
        </span>
        <span className={`badge-status ${statusInfo.classe}`}>
          {statusInfo.rotulo}
        </span>
      </div>

      <h3 className="card-titulo">{titulo}</h3>
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
          {numero === 16 && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge-status status-concluida">✓ Concluída</span>
              <span className="badge-status status-andamento">⏳ Em andamento</span>
              <span className="badge-status status-planejada">📋 Planejada</span>
            </div>
          )}
        </div>
      )}

      <div>
        <button
          type="button"
          className="card-botao-acao"
          onClick={onVerDetalhes}
        >
          Visualizar Atividade
        </button>
      </div>
    </article>
  );
}
