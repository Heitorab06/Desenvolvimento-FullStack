import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  FileDown, 
  ArrowRight, 
  Sparkles,
  Bot
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro text & CTAs */}
          <div className="hero-content">
            <div className="hero-status-badge">
              <span className="status-dot"></span>
              <span>Buscando primeira oportunidade profissional</span>
            </div>

            <h1 className="hero-title">
              Olá, eu sou <br />
              <span className="gradient-text">{personal.name}</span>
            </h1>

            <h2 className="hero-subtitle">
              {personal.title}
            </h2>

            <p className="hero-description">
              Especializando em <strong style={{ color: '#ffffff' }}>Inteligência Artificial</strong>, <strong style={{ color: '#ffffff' }}>Machine Learning</strong> e <strong style={{ color: '#ffffff' }}>Engenharia & Análise de Dados</strong>. Desenvolvendo soluções com arquiteturas multiagentes e pipelines modernos.
            </p>

            <div className="hero-location">
              <MapPin size={16} />
              <span>{personal.location}</span>
            </div>

            <div className="hero-actions">
              <a href="#projetos" className="btn-primary">
                <span>Ver Projetos</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href={personal.resumePdf} 
                download="Curriculo_Heitor_Barreto.pdf" 
                className="btn-secondary"
              >
                <FileDown size={18} />
                <span>Download CV</span>
              </a>

              <a href="#contato" className="btn-secondary">
                <Mail size={18} />
                <span>Contato</span>
              </a>
            </div>

            <div className="hero-socials">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                title="GitHub de Heitor"
              >
                <Github size={20} />
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                title="LinkedIn de Heitor"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personal.email}`} 
                className="social-icon-btn" 
                title={`Enviar e-mail para ${personal.email}`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture with Glow & Badges */}
          <div className="hero-image-col">
            <div className="hero-avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-border">
                <img 
                  src={personal.avatar} 
                  alt={personal.name} 
                  className="avatar-img"
                  onError={(e) => {
                    // Fallback to local image in root if needed
                    e.currentTarget.src = './foto.png';
                  }}
                />
              </div>
              <div className="avatar-badge-tag">
                <Sparkles size={14} />
                <span>AI & Data Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

