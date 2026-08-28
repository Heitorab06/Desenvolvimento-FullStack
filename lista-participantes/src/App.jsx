import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ParticipantForm from './components/ParticipantForm';
import ParticipantList from './components/ParticipantList';
import './App.css';

const STORAGE_KEY = 'mostra_tech_participantes_v1';

// Dados iniciais de exemplo para a Mostra de Tecnologia
const INITIAL_SAMPLE = [
  { id: '1', name: 'Ana Carolina Pereira', registeredAt: '09:15', edited: false },
  { id: '2', name: 'Lucas Gabriel Martins', registeredAt: '09:22', edited: false },
  { id: '3', name: 'Beatriz Vasconcelos', registeredAt: '09:30', edited: false },
];

export default function App() {
  const [participants, setParticipants] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Erro ao ler localStorage:', e);
    }
    return INITIAL_SAMPLE;
  });

  const [notification, setNotification] = useState(null);

  // Salvar no localStorage sempre que a lista mudar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
    } catch (e) {
      console.error('Erro ao salvar no localStorage:', e);
    }
  }, [participants]);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // Cadastrar novo participante
  const handleAddParticipant = (name) => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const newParticipant = {
      id: Date.now().toString(),
      name: name.trim(),
      registeredAt: formattedTime,
      edited: false
    };

    setParticipants((prev) => [...prev, newParticipant]);
    showNotification(`"${name}" foi adicionado(a) à lista!`, 'success');
  };

  // Excluir participante inserido por engano
  const handleDeleteParticipant = (id, name) => {
    setParticipants((prev) => prev.filter((p) => p.id !== id));
    showNotification(`"${name}" foi removido(a) do credenciamento.`, 'info');
  };

  // Corrigir nome digitado incorretamente
  const handleUpdateParticipantName = (id, newName) => {
    setParticipants((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, name: newName.trim(), edited: true } : p
      )
    );
    showNotification(`Nome atualizado para "${newName.trim()}".`, 'success');
  };

  // Limpar todos os registros
  const handleClearAll = () => {
    if (window.confirm('Tem certeza que deseja limpar todos os registros de participantes? Esta ação não pode ser desfeita.')) {
      setParticipants([]);
      showNotification('Todos os participantes foram removidos.', 'info');
    }
  };

  return (
    <div className="app-layout">
      {/* Toast Notification */}
      {notification && (
        <div className={`toast-notification toast-${notification.type}`} role="status">
          {notification.message}
        </div>
      )}

      <div className="app-container">
        {/* Cabeçalho */}
        <Header />

        {/* Estatísticas em Tempo Real */}
        <StatsCard participants={participants} />

        {/* Painel Principal com Formulário e Lista */}
        <main className="main-content-grid">
          {/* Formulário de Cadastro */}
          <section className="section-form">
            <ParticipantForm onAddParticipant={handleAddParticipant} />
          </section>

          {/* Listagem de Participantes */}
          <section className="section-list">
            <ParticipantList
              participants={participants}
              onDeleteParticipant={handleDeleteParticipant}
              onUpdateParticipantName={handleUpdateParticipantName}
              onClearAll={handleClearAll}
            />
          </section>
        </main>

        {/* Rodapé da Aplicação */}
        <footer className="app-footer">
          <p>
            Mostra de Tecnologia &bull; Sistema de Credenciamento Digital &bull; Desenvolvido em React
          </p>
        </footer>
      </div>
    </div>
  );
}

