import React, { useState, useRef, useEffect } from 'react';
import { Trash2, Edit3, Check, X, Clock } from 'lucide-react';

export default function ParticipantItem({
  participant,
  index,
  onDelete,
  onUpdateName
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(participant.name);
  const [editError, setEditError] = useState('');
  const editInputRef = useRef(null);

  // Obter as iniciais do nome para o avatar
  const getInitials = (name) => {
    if (!name) return '??';
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [isEditing]);

  const handleStartEdit = () => {
    setEditName(participant.name);
    setEditError('');
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditName(participant.name);
    setEditError('');
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const trimmed = editName.trim();
    if (!trimmed) {
      setEditError('O nome não pode ser vazio.');
      return;
    }
    onUpdateName(participant.id, trimmed);
    setIsEditing(false);
    setEditError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <li className={`participant-item ${isEditing ? 'editing' : ''}`}>
      <div className="participant-order-badge" title={`Participante nº ${index + 1}`}>
        #{index + 1}
      </div>

      <div className="avatar-initials" aria-hidden="true">
        {getInitials(participant.name)}
      </div>

      <div className="participant-info">
        {isEditing ? (
          <div className="edit-box">
            <input
              ref={editInputRef}
              type="text"
              className={`edit-input ${editError ? 'input-error' : ''}`}
              value={editName}
              onChange={(e) => {
                setEditName(e.target.value);
                if (editError) setEditError('');
              }}
              onKeyDown={handleKeyDown}
              placeholder="Digite o nome corrigido..."
            />
            {editError && <span className="inline-error">{editError}</span>}
          </div>
        ) : (
          <div>
            <div className="participant-name-row">
              <h3 className="participant-name">{participant.name}</h3>
              {participant.edited && (
                <span className="edited-badge" title="Nome foi corrigido">
                  (editado)
                </span>
              )}
            </div>
            <div className="participant-meta">
              <Clock size={12} className="meta-icon" />
              <span>Registrado às {participant.registeredAt}</span>
            </div>
          </div>
        )}
      </div>

      <div className="participant-actions">
        {isEditing ? (
          <>
            <button
              type="button"
              className="action-btn btn-save"
              onClick={handleSaveEdit}
              title="Salvar alteração (Enter)"
              aria-label="Salvar nome"
            >
              <Check size={16} />
            </button>
            <button
              type="button"
              className="action-btn btn-cancel"
              onClick={handleCancelEdit}
              title="Cancelar edição (Esc)"
              aria-label="Cancelar edição"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="action-btn btn-edit"
              onClick={handleStartEdit}
              title="Corrigir nome digitado"
              aria-label={`Editar nome de ${participant.name}`}
            >
              <Edit3 size={16} />
            </button>
            <button
              type="button"
              className="action-btn btn-delete"
              onClick={() => onDelete(participant.id, participant.name)}
              title="Excluir participante"
              aria-label={`Excluir ${participant.name}`}
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

