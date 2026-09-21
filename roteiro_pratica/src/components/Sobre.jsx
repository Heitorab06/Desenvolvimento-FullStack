export default function Sobre() {
  const tecnologias = [
    'HTML5 Semântico',
    'CSS3 & Design Responsivo',
    'JavaScript Moderno (ES6+)',
    'React (Hooks & Componentização)',
    'Git & Versionamento Semântico',
    'Vercel & Publicação Web'
  ];

  return (
    <section id="sobre" className="sobre-secao">
      <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginTop: 0 }}>
        Sobre o Autor e o Projeto
      </h2>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1rem' }}>
        Olá! Meu nome é <strong>Heitor Barreto</strong>, estudante de <strong>Desenvolvimento Full Stack</strong> na <strong>Universidade Senai Cimatec</strong>. Este projeto documenta minha jornada prática ao longo de 30 atividades estruturadas, cobrindo os fundamentos essenciais para o desenvolvimento de aplicações web modernas, acessíveis e escaláveis.
      </p>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
        Meu objetivo é aprofundar competências em frontend com React e ecossistema JavaScript, aplicando boas práticas de versionamento com Git e entrega contínua.
      </p>

      <div>
        <h3 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
          Tecnologias Praticadas
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {tecnologias.map((tec, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                fontWeight: '600',
                fontSize: '0.8rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px'
              }}
            >
              {tec}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Links Profissionais & Acadêmicos
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Heitorab06/Desenvolvimento-FullStack"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario"
            style={{ fontSize: '0.85rem' }}
          >
            GitHub do Projeto ↗
          </a>
          <a
            href="mailto:habarreto06@gmail.com"
            className="btn-filtro"
            style={{ fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            E-mail de Contato
          </a>
        </div>
      </div>
    </section>
  );
}
