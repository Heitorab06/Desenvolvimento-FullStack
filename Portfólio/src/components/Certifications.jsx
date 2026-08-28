import { Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certificacoes" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Qualificações</span>
          </div>
          <h2 className="section-title">Certificações</h2>
          <p className="section-subtitle">
            Cursos especializados e certificações emitidas por instituições reconhecidas do mercado de tecnologia.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="card cert-card">
              <div className="cert-icon-wrapper">
                <Award size={24} />
              </div>
              <div className="cert-info">
                <span className="cert-badge-tag">{cert.badge}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

