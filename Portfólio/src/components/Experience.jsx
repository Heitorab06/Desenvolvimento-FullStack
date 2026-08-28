import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Trajetória</span>
          </div>
          <h2 className="section-title">Experiência & Atividades</h2>
          <p className="section-subtitle">
            Vivência acadêmica, monitoria técnica e participação em grupos de estudo e desenvolvimento em nuvem.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="org-name">
                    <Building2 size={16} />
                    <span>{exp.organization}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <span className="exp-type-tag">{exp.type}</span>
                  <div className="exp-period">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="exp-description">{exp.description}</p>

              <div className="exp-skills-box">
                <span className="exp-skills-label">Competências:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

