import React from 'react';
import { Cpu, Sparkles, Radio } from 'lucide-react';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-badge-container">
        <span className="event-badge">
          <Sparkles size={14} className="sparkle-icon" />
          Mostra de Tecnologia 2026
        </span>
        <span className="status-live-badge">
          <Radio size={14} className="live-dot" />
          Credenciamento Ativo
        </span>
      </div>

      <div className="header-title-wrapper">
        <div className="header-icon-box">
          <Cpu size={32} className="header-tech-icon" />
        </div>
        <div>
          <h1 className="header-title">Lista de Participantes</h1>
          <p className="header-subtitle">
            Registro e controle de visitantes em tempo real na entrada do evento.
          </p>
        </div>
      </div>
    </header>
  );
}

