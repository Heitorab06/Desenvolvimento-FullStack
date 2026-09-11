import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="contato-secao">
      <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: 0 }}>
        Entre em Contato
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Tem alguma dúvida ou oportunidade de colaboração? Envie uma mensagem!
      </p>

      {enviado ? (
        <div className="alerta-sucesso">
          <strong>✓ Mensagem enviada com sucesso!</strong>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
            Obrigado, {formData.nome}. Entrarei em contato pelo e-mail {formData.email} em breve.
          </p>
          <button
            type="button"
            className="btn-primario"
            style={{ marginTop: '1rem', fontSize: '0.85rem' }}
            onClick={() => {
              setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
              setEnviado(false);
            }}
          >
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-contato">
          <div className="form-grupo">
            <label htmlFor="contato-nome" className="form-label">Nome completo *</label>
            <input
              id="contato-nome"
              name="nome"
              type="text"
              required
              className="form-input"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="contato-email" className="form-label">E-mail *</label>
            <input
              id="contato-email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="contato-assunto" className="form-label">Assunto *</label>
            <input
              id="contato-assunto"
              name="assunto"
              type="text"
              required
              className="form-input"
              placeholder="Assunto da mensagem"
              value={formData.assunto}
              onChange={handleChange}
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="contato-mensagem" className="form-label">Mensagem *</label>
            <textarea
              id="contato-mensagem"
              name="mensagem"
              required
              rows={4}
              className="form-input form-textarea"
              placeholder="Escreva sua mensagem aqui..."
              value={formData.mensagem}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-primario" style={{ alignSelf: 'flex-start' }}>
            Enviar Mensagem
          </button>
        </form>
      )}
    </section>
  );
}
