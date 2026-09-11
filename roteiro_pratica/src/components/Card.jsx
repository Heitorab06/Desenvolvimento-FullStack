import { useState } from 'react'

export default function Card({ id, titulo, descricao, tecnologias, link, versoes, children }) {
  const numeroFormatado = String(id).padStart(2, '0');

  return (
    <article style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      {/* Cabeçalho do Card */}
      <div>
        <span style={{
          display: 'inline-block',
          backgroundColor: '#e0f2fe',
          color: '#0369a1',
          fontWeight: 'bold',
          fontSize: '0.8rem',
          padding: '0.25rem 0.6rem',
          borderRadius: '9999px',
          marginBottom: '0.5rem'
        }}>
          Atividade {numeroFormatado}
        </span>
        <h2 style={{ fontSize: '1.35rem', margin: 0, color: '#111827' }}>
          {titulo}
        </h2>
      </div>

      {/* Descrição */}
      <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.5', fontSize: '0.95rem' }}>
        {descricao}
      </p>

      {/* Tecnologias */}
      <div>
        <span style={{ fontWeight: 'bold', fontSize: '0.875rem', color: '#374151' }}>
          Tecnologias: 
        </span>{' '}
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {tecnologias.join(', ')}
        </span>
      </div>

      {/* Evidência / Detalhes */}
      {versoes && versoes.length > 0 && (
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '0.75rem 1rem',
          fontSize: '0.875rem'
        }}>
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
          style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '0.55rem 1.1rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 'bold'
          }}
        >
          Visualizar Atividade
        </a>
      </div>
    </article>
  );
}