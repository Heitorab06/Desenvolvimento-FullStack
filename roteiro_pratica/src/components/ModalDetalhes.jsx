import { useEffect } from 'react';

export default function ModalDetalhes({ atividade, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!atividade) return null;

  const numFormatado = String(atividade.numero || atividade.id).padStart(2, '0');

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
    >
      <div
        className="modal-conteudo"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-cabecalho">
          <div>
            <span className="card-badge-num">Atividade {numFormatado}</span>
            <h3 id="modal-titulo" style={{ margin: '0.25rem 0 0 0', fontSize: '1.35rem' }}>
              {atividade.titulo}
            </h3>
          </div>
          <button
            type="button"
            className="modal-btn-fechar"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-corpo">
          <p style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            {atividade.descricao}
          </p>

          <div style={{ marginBottom: '0.75rem' }}>
            <strong>Tecnologias: </strong>
            <span>{atividade.tecnologias.join(', ')}</span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Status: </strong>
            <span className={`badge-status ${atividade.status === 'Concluída' ? 'status-concluida' : atividade.status === 'Em andamento' ? 'status-andamento' : 'status-planejada'}`}>
              {atividade.status}
            </span>
          </div>

          {atividade.versoes && atividade.versoes.length > 0 && (
            <div className="card-evidencia" style={{ marginTop: '1rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem', color: '#334155' }}>
                Evidências e Aprendizagens:
              </strong>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', lineHeight: '1.5' }}>
                {atividade.versoes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button type="button" className="btn-primario" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
