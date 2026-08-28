import React, { useState, useRef, useEffect } from 'react';
import { UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ParticipantForm({ onAddParticipant }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focar no campo ao carregar
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    // Validação: Impedir registros vazios ou apenas com espaços
    if (!trimmedName) {
      setError('Por favor, informe o nome do participante antes de cadastrar.');
      setSuccessMessage('');
      inputRef.current?.focus();
      return;
    }

    if (trimmedName.length < 2) {
      setError('O nome do participante deve conter pelo menos 2 caracteres.');
      setSuccessMessage('');
      inputRef.current?.focus();
      return;
    }

    // Sucesso no cadastro
    onAddParticipant(trimmedName);
    setName('');
    setError('');
    setSuccessMessage(`"${trimmedName}" cadastrado(a) com sucesso!`);
    inputRef.current?.focus();

    // Limpar mensagem de sucesso após 3 segundos
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="card form-card">
      <div className="card-header">
        <h2 className="card-title">Novo Registro de Entrada</h2>
        <p className="card-description">
          Digite o nome completo do visitante para credenciá-lo no evento.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="registration-form" noValidate>
        <div className="input-group">
          <label htmlFor="participant-name" className="input-label">
            Nome do Participante <span className="required-star">*</span>
          </label>
          <div className="input-with-button">
            <input
              id="participant-name"
              ref={inputRef}
              type="text"
              className={`text-input ${error ? 'input-error' : ''}`}
              placeholder="Ex: Carlos Eduardo Silva, Mariana Souza..."
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary" title="Cadastrar visitante">
              <UserPlus size={18} />
              <span>Adicionar</span>
            </button>
          </div>
        </div>

        {/* Mensagem de Erro / Validação */}
        {error && (
          <div className="feedback-message error-feedback" role="alert">
            <AlertCircle size={16} className="feedback-icon" />
            <span>{error}</span>
          </div>
        )}

        {/* Mensagem de Sucesso */}
        {successMessage && (
          <div className="feedback-message success-feedback">
            <CheckCircle2 size={16} className="feedback-icon" />
            <span>{successMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
}

