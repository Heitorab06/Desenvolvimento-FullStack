import { ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-text">
          <span>&copy; {new Date().getFullYear()} </span>
          <span className="footer-highlight">{personal.name}</span>
          <span> &bull; Desenvolvido com React</span>
        </div>

        <div className="footer-actions">
          <button 
            onClick={scrollToTop} 
            className="btn-scroll-top"
            title="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

