import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Conexão</span>
          </div>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estou disponível para novas oportunidades, estágios e projetos na área de tecnologia e dados.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details List */}
          <div className="contact-info-col">
            <a 
              href={`mailto:${personal.email}`}
              className="card contact-card-item"
            >
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">E-mail</span>
                <span className="contact-value">{personal.email}</span>
              </div>
            </a>

            <a 
              href={personal.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="card contact-card-item"
            >
              <div className="contact-icon-box" style={{ color: '#34d399', background: 'rgba(52, 211, 153, 0.1)' }}>
                <Phone size={22} />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">WhatsApp / Telefone</span>
                <span className="contact-value">{personal.phone}</span>
              </div>
            </a>

            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="card contact-card-item"
            >
              <div className="contact-icon-box" style={{ color: '#60a5fa', background: 'rgba(96, 165, 250, 0.1)' }}>
                <Linkedin size={22} />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">in/{personal.linkedinUsername}</span>
              </div>
            </a>

            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer"
              className="card contact-card-item"
            >
              <div className="contact-icon-box">
                <Github size={22} />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">@{personal.githubUsername}</span>
              </div>
            </a>

            <div className="card contact-card-item">
              <div className="contact-icon-box" style={{ color: '#f87171', background: 'rgba(248, 113, 113, 0.1)' }}>
                <MapPin size={22} />
              </div>
              <div className="contact-text-box">
                <span className="contact-label">Localização</span>
                <span className="contact-value">{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Direct CTA card */}
          <div className="card contact-direct-card">
            <h3 className="direct-title">Vamos conversar?</h3>
            <p className="direct-desc">
              Tem um projeto, vaga de estágio ou quer trocar uma ideia sobre inteligência artificial e dados? Sinta-se à vontade para me enviar uma mensagem!
            </p>

            <div className="direct-buttons">
              <a 
                href={`mailto:${personal.email}?subject=Contato%20via%20Portfolio`}
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                <Send size={18} />
                <span>Enviar E-mail</span>
              </a>

              <a 
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ justifyContent: 'center' }}
              >
                <MessageSquare size={18} />
                <span>Conversar no WhatsApp</span>
              </a>

              <button 
                onClick={() => copyToClipboard(personal.email)}
                className="btn-secondary"
                style={{ justifyContent: 'center' }}
              >
                {copiedEmail ? (
                  <>
                    <Check size={18} style={{ color: '#34d399' }} />
                    <span style={{ color: '#34d399' }}>E-mail Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

