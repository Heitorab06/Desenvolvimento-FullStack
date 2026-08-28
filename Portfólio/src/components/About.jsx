import { User, GraduationCap, Languages, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education, languages } = portfolioData;

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Perfil</span>
          </div>
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça minha trajetória acadêmica, interesses e objetivos na área de tecnologia.
          </p>
        </div>

        <div className="about-grid">
          {/* Resumo Profissional */}
          <div className="card about-info-card">
            <div className="about-header-box">
              <div className="about-icon-box">
                <Sparkles size={24} />
              </div>
              <h3 className="about-title">Resumo Profissional</h3>
            </div>

            <p className="about-text">
              {personal.summary}
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">2024+</div>
                <div className="stat-label">Graduação</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">5+</div>
                <div className="stat-label">Certificações</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">2+</div>
                <div className="stat-label">Idiomas</div>
              </div>
            </div>
          </div>

          {/* Formação Acadêmica & Idiomas */}
          <div className="card edu-card-content">
            <div className="about-header-box">
              <div className="about-icon-box">
                <GraduationCap size={24} />
              </div>
              <h3 className="about-title">Formação Acadêmica</h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="edu-item">
                <span className="edu-period">{edu.period}</span>
                <h4 className="edu-degree">{edu.degree} ({edu.level})</h4>
                <div className="edu-institution">{edu.institution}</div>
                <p className="edu-description">{edu.description}</p>
              </div>
            ))}

            <div className="languages-box">
              <div className="languages-title">
                <Languages size={18} />
                <span>Idiomas</span>
              </div>
              <div className="lang-list">
                {languages.map((lang) => (
                  <div key={lang.name} className="lang-row">
                    <div className="lang-info">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: lang.proficiency }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

