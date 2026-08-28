import { 
  Cpu, 
  Brain, 
  Database, 
  Code, 
  Wrench, 
  Users, 
  Check 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={22} />;
      case 'Database':
        return <Database size={22} />;
      case 'Code':
        return <Code size={22} />;
      case 'Wrench':
        return <Wrench size={22} />;
      case 'Users':
        return <Users size={22} />;
      default:
        return <Cpu size={22} />;
    }
  };

  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Conhecimentos</span>
          </div>
          <h2 className="section-title">Habilidades & Competências</h2>
          <p className="section-subtitle">
            Stack tecnológica, bibliotecas de IA/ML, bancos de dados, ferramentas de infraestrutura e habilidades interpessoais.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="skill-cat-title">{category.name}</h3>
              </div>

              <div className="skill-tags-wrapper">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

