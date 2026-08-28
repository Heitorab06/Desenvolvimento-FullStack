import React, { useState } from 'react';
import { Search, X, Users, Copy, Check } from 'lucide-react';
import ParticipantItem from './ParticipantItem';
import EmptyState from './EmptyState';

export default function ParticipantList({
  participants,
  onDeleteParticipant,
  onUpdateParticipantName,
  onClearAll
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);

  const filteredParticipants = participants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const handleCopyList = () => {
    if (participants.length === 0) return;
    const textList = participants
      .map((p, idx) => `${idx + 1}. ${p.name} (Entrada: ${p.registeredAt})`)
      .join('\n');
    
    navigator.clipboard.writeText(
      `--- LISTA DE PARTICIPANTES | MOSTRA DE TECNOLOGIA ---\nTotal: ${participants.length}\n\n${textList}`
    );

    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="card list-card">
      <div className="list-card-header">
        <div>
          <div className="list-title-row">
            <h2 className="card-title">Participantes Registrados</h2>
            <span className="count-pill">
              {filteredParticipants.length} {filteredParticipants.length === 1 ? 'visitante' : 'visitantes'}
            </span>
          </div>
          <p className="card-description">
            Visualização em tempo real das pessoas que ingressaram no evento.
          </p>
        </div>

        {participants.length > 0 && (
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleCopyList}
              title="Copiar lista de participantes formatada"
            >
              {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              <span>{copied ? 'Copiado!' : 'Copiar Lista'}</span>
            </button>
            <button
              type="button"
              className="btn btn-danger-ghost btn-sm"
              onClick={onClearAll}
              title="Limpar todos os registros"
            >
              <span>Limpar Tudo</span>
            </button>
          </div>
        )}
      </div>

      {/* Barra de Pesquisa */}
      {participants.length > 0 && (
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar participante por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchTerm('')}
                title="Limpar busca"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {searchTerm && (
            <span className="search-results-hint">
              Mostrando {filteredParticipants.length} de {participants.length} registros
            </span>
          )}
        </div>
      )}

      {/* Conteúdo da Lista */}
      {filteredParticipants.length === 0 ? (
        <EmptyState
          isSearching={searchTerm.trim().length > 0}
          searchTerm={searchTerm}
        />
      ) : (
        <ul className="participants-list">
          {filteredParticipants.map((participant, index) => {
            // Encontrar o índice real no array original
            const originalIndex = participants.findIndex((p) => p.id === participant.id);
            return (
              <ParticipantItem
                key={participant.id}
                participant={participant}
                index={originalIndex !== -1 ? originalIndex : index}
                onDelete={onDeleteParticipant}
                onUpdateName={onUpdateParticipantName}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

