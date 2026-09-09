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
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: '#111827' }}>
          Portfólio de Desenvolvimento Web
        </h1>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '1rem' }}>
          Registro das 30 etapas práticas com React, HTML, CSS, Git e Vercel
        </p>
      </header>

      <main style={{ maxWidth: '700px', margin: '0 auto' }}>
        {listaAtividades.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            descricao={item.descricao}
            tecnologias={item.tecnologias}
            link={item.link}
          >
          </Card>
        ))}
      </main>
    </div>
  );
}