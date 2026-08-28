import React from 'react';
import { Users, SearchX } from 'lucide-react';

export default function EmptyState({ isSearching, searchTerm }) {
  if (isSearching) {
    return (
      <div className="empty-state">
        <div className="empty-icon-box search">
          <SearchX size={36} />
        </div>
        <h3 className="empty-title">Nenhum participante encontrado</h3>
        <p className="empty-description">
          Não encontramos nenhum registro correspondente a <strong>"{searchTerm}"</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="empty-state">
      <div className="empty-icon-box">
        <Users size={36} />
      </div>
      <h3 className="empty-title">Nenhum participante credenciado ainda</h3>
      <p className="empty-description">
        Utilize o formulário acima para registrar a entrada do primeiro visitante da Mostra de Tecnologia.
      </p>
    </div>
  );
}

