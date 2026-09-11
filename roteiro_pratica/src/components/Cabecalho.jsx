export default function Cabecalho() {
  return (
    <header id="inicio" className="cabecalho-container">
      <div className="cabecalho-avatar" aria-label="Avatar de Heitor Barreto" role="img">
        HB
      </div>
      <h1 className="cabecalho-titulo">
        Heitor Barreto
      </h1>
      <p className="cabecalho-subtitulo">
        Desenvolvimento Full Stack • Universidade Senai Cimatec
      </p>
      <p className="cabecalho-descricao">
        Portfólio de atividades práticas demonstrando a evolução de 1 a 30 em HTML5, CSS3, React, Git e Vercel.
      </p>
      <a href="#atividades" className="btn-primario">
        Ver Atividades ↓
      </a>
    </header>
  );
}
