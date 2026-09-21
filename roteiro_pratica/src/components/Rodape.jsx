export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape-container">
      <p style={{ margin: '0 0 0.5rem 0' }}>
        © {anoAtual} Heitor Barreto — Universidade Senai Cimatec
      </p>
      <p style={{ margin: 0 }}>
        <a href="#inicio" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
          Voltar ao topo ↑
        </a>
      </p>
    </footer>
  );
}
