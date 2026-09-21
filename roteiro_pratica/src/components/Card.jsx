import { useState } from 'react'

export default function Card({ id, titulo, descricao, tecnologias, link, versoes, children }) {
  const numeroFormatado = String(id).padStart(2, '0');

  return (
    <article className="card-atividade">
      {/* Cabeçalho do Card */}
      <div>
        <span className="card-badge-num">
          Atividade {numeroFormatado}
        </span>
        <h3 className="card-titulo">
          {titulo}
        </h3>
      </div>

      {/* Descrição */}
      <p className="card-descricao">
        {descricao}
      </p>

      {/* Tecnologias */}
      <div>
        <span className="card-tecs-label">
          Tecnologias: 
        </span>{' '}
        <span className="card-tecs-lista">
          {tecnologias.join(', ')}
        </span>
      </div>

      {/* Evidência / Detalhes */}
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

      {/* Espaço dinâmico para evidências (children) */}
      {children && (
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '6px',
          padding: '1rem'
        }}>
          {children}
        </div>
      )}

      {/* Botão de Ação */}
      <div>
        <a
          href={link}
          className="card-botao-acao"
        >
          Visualizar Atividade
        </a>
      </div>
    </article>
  );
}