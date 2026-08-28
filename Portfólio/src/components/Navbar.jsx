import { useState } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = portfolioData;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Certificações', href: '#certificacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="nav-brand">
          <span className="brand-icon">HB</span>
          <span>Heitor<span className="brand-highlight">.dev</span></span>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a 
            href={personal.resumePdf} 
            download="Curriculo_Heitor_Barreto.pdf" 
            className="btn-cv-nav"
            title="Baixar Currículo em PDF"
          >
            <FileDown size={16} />
            <span>Currículo</span>
          </a>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={personal.resumePdf} 
            download="Curriculo_Heitor_Barreto.pdf" 
            className="btn-cv-nav"
            style={{ display: 'inline-flex', justifyContent: 'center', marginTop: '0.5rem' }}
            onClick={() => setIsOpen(false)}
          >
            <FileDown size={16} />
            <span>Baixar Currículo (PDF)</span>
          </a>
        </div>
      )}
    </nav>
  );
}

