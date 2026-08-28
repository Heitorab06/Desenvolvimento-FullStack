import React from 'react';
import { Users, UserCheck, Clock } from 'lucide-react';

export default function StatsCard({ participants }) {
  const total = participants.length;
  const lastParticipant = total > 0 ? participants[participants.length - 1] : null;

  return (
    <div className="stats-grid">
      <div className="stat-card primary">
        <div className="stat-icon-wrapper primary">
          <Users size={22} />
        </div>
        <div className="stat-content">
          <span className="stat-label">Total de Credenciados</span>
          <span className="stat-value">{total}</span>
          <span className="stat-hint">
            {total === 1 ? '1 participante registrado' : `${total} pessoas registradas`}
          </span>
        </div>
      </div>

      <div className="stat-card accent">
        <div className="stat-icon-wrapper accent">
          <UserCheck size={22} />
        </div>
        <div className="stat-content">
          <span className="stat-label">Último Visitante</span>
          <span className="stat-value truncate" title={lastParticipant ? lastParticipant.name : 'Nenhum'}>
            {lastParticipant ? lastParticipant.name : '—'}
          </span>
          <span className="stat-hint">
            {lastParticipant ? `Chegada às ${lastParticipant.registeredAt}` : 'Aguardando primeiro registro'}
          </span>
        </div>
      </div>

      <div className="stat-card emerald">
        <div className="stat-icon-wrapper emerald">
          <Clock size={22} />
        </div>
        <div className="stat-content">
          <span className="stat-label">Portaria / Recepção</span>
          <span className="stat-value text-emerald">Operando</span>
          <span className="stat-hint">Entrada liberada para a mostra</span>
        </div>
      </div>
    </div>
  );
}

