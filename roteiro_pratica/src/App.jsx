import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import { listaAtividades } from './data/atividades';

export default function App() {
  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <header id="inicio" className="cabecalho-container">
        <div className="cabecalho-avatar" aria-label="Avatar de Heitor Barreto" role="img">
          HB
        </div>
        <h1 className="cabecalho-titulo">
          Heitor Barreto
        </h1>
        <p className="cabecalho-subtitulo">
          Desenvolvimento Full Stack • Universidade Senai Cimatec
        </p>
        <p className="cabecalho-descricao">
          Portfólio de atividades práticas demonstrando a evolução de 1 a 30 em HTML5, CSS3, React, Git e Vercel.
        </p>
        <a href="#atividades" className="btn-primario">
          Ver Atividades ↓
        </a>
      </header>

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
          <h2 style={{ fontSize: '1.4rem', color: '#1f2937', marginBottom: '1.25rem' }}>
            Lista de Atividades (1 a 30)
          </h2>
          <div className="grid-atividades">
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
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contato" style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ fontSize: '1.4rem', color: '#111827', marginTop: 0 }}>Contato</h2>
          <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>
            Heitor Barreto — <a href="mailto:habarreto06@gmail.com" style={{ color: '#2563eb' }}>habarreto06@gmail.com</a>
          </p>
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