# Portfólio de Atividades Práticas — Desenvolvimento Web

Este projeto é uma aplicação React desenvolvida individualmente como portfólio acadêmico na disciplina de **Desenvolvimento Full Stack** da **Universidade Senai Cimatec** (2026), sob orientação do Professor Celso Barreto.

A aplicação apresenta uma sequência estruturada de 30 atividades práticas, contemplando desde a marcação semântica e estilização responsiva até a componentização, controle de estados, persistência local e publicação contínua.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` e hierarquia correta de headings.
- **CSS3 & Design System**: Custom Properties (variáveis CSS), Flexbox, CSS Grid responsivo com `minmax` e alternância de tema Claro / Escuro.
- **JavaScript (ES6+)**: Funções puras, manipulação de arrays com `map` e `filter`, e Web Storage API (`localStorage`).
- **React 19 & Vite**: Componentização desacoplada, hooks nativos (`useState`, `useEffect`), acessibilidade ARIA e janelas modais com eventos de teclado.
- **Git & GitHub**: Versionamento atômico e semântico, organização de branches e tags de release (`v1.0.0`).
- **Vercel**: Implantação contínua (CI/CD) e hospedagem em ambiente público.

---

## 📂 Estrutura do Projeto

```text
roteiro_pratica/
├── public/                  # Arquivos estáticos (favicon, ícones)
├── src/
│   ├── assets/              # Logos e recursos de mídia
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Cabecalho.jsx    # Identidade do autor e ancoragem
│   │   ├── CardAtividade.jsx# Card individual parametrizável por props
│   │   ├── Contato.jsx      # Formulário validado com envio simulado
│   │   ├── ModalDetalhes.jsx# Modal acessível de visualização detalhada
│   │   ├── Rodape.jsx       # Rodapé com ano dinâmico e link de topo
│   │   └── Sobre.jsx        # Seção autoral com competências e links
│   ├── data/
│   │   └── atividades.js    # Modelagem desacoplada dos dados das 30 etapas
│   ├── App.css              # Estilos modulares da interface e layouts
│   ├── App.jsx              # Orquestração de estado, busca e filtros
│   ├── index.css            # Variáveis globais, reset e temas claro/escuro
│   └── main.jsx             # Ponto de entrada da aplicação React
├── index.html               # Documento HTML base
├── package.json             # Metadados e dependências do ecossistema
├── vite.config.js           # Configurações do Vite
└── README.md                # Documentação técnica do projeto
```

---

## ⚙️ Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:
- [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

---

## 🛠️ Comandos de Instalação e Execução

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Heitorab06/Desenvolvimento-FullStack.git
   cd Desenvolvimento-FullStack/roteiro_pratica
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar em ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:5173`.

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

5. **Visualizar o build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🔗 Links de Entrega

- **Repositório no GitHub:** [https://github.com/Heitorab06/Desenvolvimento-FullStack](https://github.com/Heitorab06/Desenvolvimento-FullStack)
- **Aplicação Publicada na Vercel:** [https://desenvolvimento-full-stack-roteiro.vercel.app](https://desenvolvimento-full-stack-roteiro.vercel.app)

---

## 👤 Autor

**Heitor Barreto**  
Estudante de Desenvolvimento Full Stack — Universidade Senai Cimatec  
Contato: [habarreto06@gmail.com](mailto:habarreto06@gmail.com)

