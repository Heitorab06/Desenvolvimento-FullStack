import { Code2, Bot, Database, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const getProjectIcon = (id) => {
    if (id === 'multi-agent-bank') {
      return <Bot size={18} />;
    }
    return <Database size={18} />;
  };

  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Portfólio</span>
          </div>
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Aplicações práticas com agentes autônomos, inteligência artificial, engenharia de dados e modelagem preditiva.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className="project-badge-top">
                {getProjectIcon(project.id)}
                <span>{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    #{tag}
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

