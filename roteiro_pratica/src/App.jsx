import { useState } from 'react'
import Card from './components/Card';
import { listaAtividades } from './data/atividades';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif',
      color: '#1f2937',
      padding: '2rem 1rem'
    }}>
      <header id="inicio" style={{
        textAlign: 'center',
        marginBottom: '2rem',
        backgroundColor: '#ffffff',
        padding: '2rem 1.5rem',
        borderRadius: '12px',
        maxWidth: '700px',
        margin: '0 auto 1.5rem auto',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.75rem',
          fontWeight: 'bold',
          margin: '0 auto 1rem auto'
        }} aria-label="Avatar de Heitor Barreto" role="img">
          HB
        </div>
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: '#111827' }}>
          Heitor Barreto
        </h1>
        <p style={{ margin: '0 0 0.5rem 0', color: '#2563eb', fontWeight: 'bold', fontSize: '1rem' }}>
          Desenvolvimento Full Stack • Universidade Senai Cimatec
        </p>
        <p style={{ margin: '0 0 1.25rem 0', color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Portfólio de atividades práticas demonstrando a evolução de 1 a 30 em HTML5, CSS3, React, Git e Vercel.
        </p>
        <a
          href="#atividades"
          style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '0.65rem 1.25rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}
        >
          Ver Atividades ↓
        </a>
      </header>

      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginBottom: '2rem',
        padding: '0.75rem',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        maxWidth: '700px',
        margin: '0 auto 2rem auto',
        border: '1px solid #e5e7eb'
      }}>
        <a href="#inicio" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>Início</a>
        <a href="#atividades" style={{ color: '#4b5563', textDecoration: 'none' }}>Atividades</a>
      </nav>

      <main style={{ maxWidth: '700px', margin: '0 auto' }}>
        <section id="atividades">
          <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: '1rem' }}>
            Lista de Atividades (1 a 30)
          </h2>
          {listaAtividades.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              tecnologias={item.tecnologias}
              link={item.link}
              versoes={item.versoes}
            >
            </Card>
          ))}
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '3rem',
        padding: '1.5rem',
        borderTop: '1px solid #e5e7eb',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <p>© 2026 Heitor Barreto - Universidade Senai Cimatec</p>
      </footer>
    </div>
  );
}