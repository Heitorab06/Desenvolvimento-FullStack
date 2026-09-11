export const listaAtividades = [

  {
    id: 1,
    numero: 1,
    titulo: "Preparação do Ambiente e Inicialização do Projeto",
    descricao: "Instalação e verificação das ferramentas essenciais, criação do projeto base com Vite e limpeza da estrutura inicial.",
    tecnologias: ["Node.js", "npm", "Git", "Vite", "React"],
    link: "#atividade-01",
    versoes: [
      "Node.js: v20.x",
      "npm: v10.x",
      "Git: v2.x",
      "Vite 5.x / React 18"
    ],
    status: "Ambiente configurado com sucesso e pronto para o desenvolvimento!"
  },
{
    id: 2,
    numero: 2,
    titulo: "Inicializar o repositório Git",
    descricao: "Inicialização do controle de versões local, configuração de branch principal e exclusão de arquivos desnecessários com .gitignore.",
    tecnologias: ["Git"],
    link: "#atividade-02",
    versoes: [
      "Repositório: Inicializado localmente com git init para controle de versão.",
      "Branch principal: Padronizada como main para o fluxo de trabalho.",
      "Commit: Registro de alterações atômicas com histórico semântico.",
      ".gitignore: Configurado e validado para ignorar node_modules, dist e arquivos de ambiente."
    ],
    status: "Repositório Git inicializado e primeiro commit registrado com sucesso."
  },
  {
    id: 3,
    numero: 3,
    titulo: "Construir a estrutura semântica",
    descricao: "Aplicação de elementos estruturais semânticos do HTML5 dentro do JSX, garantindo acessibilidade e hierarquia correta de títulos.",
    tecnologias: ["HTML5 Semântico", "React JSX"],
    link: "#atividade-03",
    versoes: [
      "Elementos utilizados: header, nav, main, section, footer",
      "Hierarquia: Apenas um <h1> principal na página",
      "Layout: Área reservada para a listagem das 30 atividades"
    ],
    status: "Marcação semântica estruturada de acordo com as diretrizes da W3C."
  },
  {
    id: 4,
    numero: 4,
    titulo: "Criar cabeçalho e identidade",
    descricao: "Desenvolvimento da apresentação visual do autor com informações institucionais, avatar acessível e botão de ancoragem para os cards.",
    tecnologias: ["HTML5", "CSS3", "React JSX"],
    link: "#atividade-04",
    versoes: [
      "Identificação: Nome do autor e curso/turma",
      "Avatar: Imagem com texto alternativo (alt) descritivo",
      "Ação: Botão de rolagem direta para a seção de atividades"
    ],
    status: "Cabeçalho e identidade visual implementados e documentados."
  },
  {
    id: 5,
    numero: 5,
    titulo: "Criar menu de navegação",
    descricao: "Implementação de menu de navegação por âncoras com rolagem suave entre as seções e indicadores visuais de foco acessíveis.",
    tecnologias: ["HTML5", "CSS3", "Acessibilidade"],
    link: "#atividade-05",
    versoes: [
      "Links internos: Início, Sobre, Atividades e Contato",
      "Efeito de transição: Rolagem suave (scroll-behavior: smooth)",
      "Acessibilidade: Indicador visual claro de foco (:focus)"
    ],
    status: "Navegação por âncoras testada e 100% funcional."
  },
  {
    id: 6,
    numero: 6,
    titulo: "Definir o sistema visual em CSS",
    descricao: "Criação de um Design System base utilizando CSS Custom Properties (variáveis) para cores, tipografia, espaçamentos e normalização.",
    tecnologias: ["CSS3 Variables", "Design System"],
    link: "#atividade-06",
    versoes: [
      "Variáveis declaradas: Cores primárias/neutras, radii e sombras",
      "Tipografia: Escala tipográfica definida para títulos e corpo",
      "Reset: Aplicação global de box-sizing: border-box"
    ],
    status: "Base visual padronizada com variáveis CSS nativas."
  },
  {
    id: 7,
    numero: 7,
    titulo: "Construir cartões de atividades",
    descricao: "Desenvolvimento do layout base do card contemplando número, textos, tecnologias e estados interativos com foco em contraste.",
    tecnologias: ["CSS3", "UI Design"],
    link: "#atividade-07",
    versoes: [
      "Campos do componente: Número, título, descrição, tag e botão",
      "Estados visuais: Hover e focus com transições suaves",
      "Contraste: Relação de cores validada para legibilidade"
    ],
    status: "Componente de cartão construído com estados visuais validados."
  },
  {
    id: 8,
    numero: 8,
    titulo: "Organizar o layout com Flexbox",
    descricao: "Alinhamento e distribuição unidimensional de elementos no cabeçalho, menu e ações com Flexbox.",
    tecnologias: ["CSS Flexbox"],
    link: "#atividade-08",
    versoes: [
      "Propriedades aplicadas: justify-content, align-items, flex-direction",
      "Espaçamento: gap para distribuição proporcional sem margens manuais",
      "Aplicação: Menu de navegação e alinhamentos do cabeçalho"
    ],
    status: "Alinhamentos flexíveis aplicados e testados com sucesso."
  },
  {
    id: 9,
    numero: 9,
    titulo: "Organizar atividades com CSS Grid",
    descricao: "Construção de uma malha bidimensional responsiva para os 30 cartões utilizando regras dinâmicas de repetição sem largura fixa.",
    tecnologias: ["CSS Grid"],
    link: "#atividade-09",
    versoes: [
      "Regra aplicada: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))",
      "Espaçamento da grade: gap consistente entre colunas e linhas",
      "Prevenção: Zero rolagem horizontal em telas pequenas"
    ],
    status: "Grade de atividades adaptável e responsiva estruturada."
  },
  {
    id: 10,
    numero: 10,
    titulo: "Tornar a homepage responsiva",
    descricao: "Adaptação da interface para múltiplos viewports com Media Queries, validando layout em dispositivos móveis, tablets e desktop.",
    tecnologias: ["CSS3 Media Queries", "Design Responsivo"],
    link: "#atividade-10",
    versoes: [
      "Dispositivos móveis: Testado em ~360px",
      "Tablets: Testado em ~768px",
      "Telas desktop: Testado em ~1440px"
    ],
    status: "Breakpoints configurados e interface adaptada a diferentes resoluções."
  },
  {
    id: 11,
    numero: 11,
    titulo: "Criar o componente Cabecalho",
    descricao: "Refatoração e isolamento do cabeçalho da aplicação em um componente funcional React com responsabilidade única.",
    tecnologias: ["React", "Componentização"],
    link: "#atividade-11",
    versoes: [
      "Arquivo criado: src/components/Cabecalho.jsx",
      "Responsabilidade: Exibir título, introdução e identidade",
      "Ponto de uso: Importado e renderizado em App.jsx"
    ],
    status: "Cabeçalho isolado em componente sem duplicação de lógica."
  },
  {
    id: 12,
    numero: 12,
    titulo: "Criar o componente Rodape",
    descricao: "Desenvolvimento de componente reutilizável para o rodapé com cálculo dinâmico do ano corrente e atalho de retorno ao topo.",
    tecnologias: ["React", "JavaScript ES6"],
    link: "#atividade-12",
    versoes: [
      "Arquivo criado: src/components/Rodape.jsx",
      "Lógica dinâmica: new Date().getFullYear() encapsulado",
      "Navegação: Link funcional de retorno para o topo da página"
    ],
    status: "Rodapé componentizado e integrado à raiz da aplicação."
  },
  {
    id: 13,
    numero: 13,
    titulo: "Criar o componente CardAtividade",
    descricao: "Criação do componente reutilizável de cartão configurado para receber propriedades dinâmicas e renderizar instâncias distintas.",
    tecnologias: ["React Props"],
    link: "#atividade-13",
    versoes: [
      "Arquivo criado: src/components/CardAtividade.jsx",
      "Props mapeadas: id/numero, titulo, descricao, tecnologias, link",
      "Reutilização: Capacidade de renderizar qualquer atividade do roteiro"
    ],
    status: "Componente base parametrizável via props construído e testado."
  },
  {
    id: 14,
    numero: 14,
    titulo: "Modelar os dados das atividades",
    descricao: "Separação entre a camada de dados e a camada visual, estruturando as informações das atividades em um array de objetos dedicado.",
    tecnologias: ["JavaScript", "Arquitetura de Software"],
    link: "#atividade-14",
    versoes: [
      "Objeto de exemplo: { id: 14, numero: 14, titulo: 'Modelar dados', tecnologia: 'JavaScript', status: 'Concluída', link: '#...' }",
      "Separação de responsabilidades: Conteúdo isolado da camada visual em src/data/atividades.js",
      "Consumo: Importação e renderização dinâmica na seção de atividades."
    ],
    status: "Modelagem de dados isolada da camada de apresentação."
  },
  {
    id: 15,
    numero: 15,
    titulo: "Renderizar a lista com map",
    descricao: "Geração dinâmica dos 30 cartões na tela iterando sobre o array de dados com o método map e chaves de identificação únicas.",
    tecnologias: ["React", "JavaScript ES6 (Array.map)"],
    link: "#atividade-15",
    versoes: [
      "Método de iteração: Array.prototype.map",
      "Propriedade de rastreamento: key={item.id} exclusiva e estável",
      "Escopo de renderização: Sequência contínua de 1 a 30 itens"
    ],
    status: "Renderização dinâmica de lista implementada com chave estável."
  },
  {
    id: 16,
    numero: 16,
    titulo: "Mostrar status condicional",
    descricao: "Aplicação de estilização e renderização condicional baseada no estado de progresso de cada atividade do projeto.",
    tecnologias: ["React", "Renderização Condicional"],
    link: "#atividade-16",
    versoes: [
      "Estados previstos: Planejada, Em andamento, Concluída",
      "Mapeamento visual: Indicadores de cores e badges contextuais",
      "Arquitetura: Regras de exibição desacopladas da marcação JSX"
    ],
    status: "Renderização condicional de status implementada nos cards."
  },
  {
    id: 17,
    numero: 17,
    titulo: "Criar filtro por tecnologia",
    descricao: "Filtragem reativa dos cartões exibidos na tela com base na tecnologia selecionada através de botões de controle e useState.",
    tecnologias: ["React (useState)", "Imutabilidade"],
    link: "#atividade-17",
    versoes: [
      "Categorias de filtro: Todos, HTML, CSS, React, Git, Vercel",
      "Gerenciador de estado: useState controlando a categoria ativa",
      "Princípio: Filtragem derivada sem mutação do array original"
    ],
    status: "Filtro dinâmico por categorias de tecnologias operacional."
  },
  {
    id: 18,
    numero: 18,
    titulo: "Criar busca por texto",
    descricao: "Campo de pesquisa em tempo real controlado via estado que filtra atividades por título e descrição com feedback de lista vazia.",
    tecnologias: ["React (Controlled Components)", "Eventos"],
    link: "#atividade-18",
    versoes: [
      "Mecanismo de busca: Case-insensitive em títulos e descrições",
      "Tratamento de entrada: Input text com onChange vinculado a estado",
      "Estado vazio: Mensagem exibida caso nenhum card corresponda ao termo"
    ],
    status: "Busca textual interativa integrada à lista de atividades."
  },
  {
    id: 19,
    numero: 19,
    titulo: "Criar contador de progresso",
    descricao: "Cálculo e exibição em tempo real do número de atividades concluídas utilizando valores derivados dos dados sem redundância de estado.",
    tecnologias: ["React", "Lógica de Estado"],
    link: "#atividade-19",
    versoes: [
      "Lógica de cálculo: Array.prototype.filter para atividades concluídas",
      "Formato de exibição: X de 30 concluídas",
      "Otimização: Estado derivado calculado diretamente na renderização"
    ],
    status: "Contador numérico de progresso sincronizado com os dados."
  },
  {
    id: 20,
    numero: 20,
    titulo: "Criar barra de progresso",
    descricao: "Componente visual acessível que representa graficamente a porcentagem total de conclusão das entregas do portfólio.",
    tecnologias: ["React", "CSS3", "Acessibilidade (ARIA)"],
    link: "#atividade-20",
    versoes: [
      "Cálculo percentual: (concluidas / total) * 100",
      "Atributos acessíveis: role='progressbar', aria-valuenow, aria-valuemax",
      "Limites testados: Renderização proporcional e validada em 0% e 100%"
    ],
    status: "Barra de progresso acessível sincronizada com o contador."
  },
  {
    id: 21,
    numero: 21,
    titulo: "Criar modal de detalhes",
    descricao: "Janela modal acessível para exibição aprofundada dos detalhes da atividade ao clicar na ação correspondente do cartão.",
    tecnologias: ["React Portal / Component State", "Eventos de Teclado"],
    link: "#atividade-21",
    versoes: [
      "Abertura: Clique na ação 'Visualizar Atividade'",
      "Controles de fechamento: Botão fechar, clique fora do modal e tecla Escape",
      "Acessibilidade: Manutenção de foco e legibilidade para navegação por teclado"
    ],
    status: "Modal de detalhes interativo e acessível implementado."
  },
  {
    id: 22,
    numero: 22,
    titulo: "Criar formulário de contato",
    descricao: "Formulário com campos controlados, validação nativa de preenchimento e feedback simulado de envio sem recarregamento de página.",
    tecnologias: ["React Form Events", "Validação HTML5"],
    link: "#atividade-22",
    versoes: [
      "Campos do formulário: Nome, e-mail, assunto e mensagem",
      "Validação e acessibilidade: Labels devidamente associados e atributo required",
      "Tratamento de submissão: e.preventDefault() com mensagem de confirmação"
    ],
    status: "Formulário de contato validado com prevenção de reload."
  },
  {
    id: 23,
    numero: 23,
    titulo: "Implementar alternância de tema",
    descricao: "Sistema de alternância dinâmica entre tema claro (light) e escuro (dark) gerenciado via estado React e classes raiz.",
    tecnologias: ["React (useState)", "CSS Variables"],
    link: "#atividade-23",
    versoes: [
      "Controle: Botão alternador (toggle) acessível",
      "Mecanismo: Aplicação de classes ou atributos de tema no elemento raiz",
      "Critério de qualidade: Contraste mínimo preservado em ambos os modos"
    ],
    status: "Alternância entre modos claro e escuro implementada com sucesso."
  },
  {
    id: 24,
    numero: 24,
    titulo: "Persistir preferência local",
    descricao: "Gravação e leitura da preferência de tema do usuário no armazenamento do navegador através da Web Storage API.",
    tecnologias: ["Web Storage (localStorage)", "React (useEffect)"],
    link: "#atividade-24",
    versoes: [
      "Chave de persistência: Armazenamento via chave no localStorage",
      "Ciclo de leitura: Recuperação da preferência no primeiro carregamento",
      "Fallback: Tema padrão aplicado caso não existam dados gravados"
    ],
    status: "Preferência visual do usuário persistida localmente no navegador."
  },
  {
    id: 25,
    numero: 25,
    titulo: "Adicionar seção Sobre",
    descricao: "Componente dedicado à apresentação do perfil do desenvolvedor, competências técnicas praticadas e links de contato profissional.",
    tecnologias: ["React", "HTML Semântico"],
    link: "#atividade-25",
    versoes: [
      "Componente: src/components/Sobre.jsx",
      "Conteúdo: Perfil acadêmico, competências adquiridas e objetivos",
      "Conexões externas: Links profissionais com atributos target e rel seguros"
    ],
    status: "Seção de perfil profissional adicionada e vinculada ao menu."
  },
  {
    id: 26,
    numero: 26,
    titulo: "Revisar acessibilidade",
    descricao: "Auditoria estrutural e correções para assegurar navegabilidade por teclado, leitura de tela e conformidade com critérios WCAG.",
    tecnologias: ["Acessibilidade Web (WCAG)", "ARIA"],
    link: "#atividade-26",
    versoes: [
      "Hierarquia: Revisão de headings e associação de labels a inputs",
      "Mídias: Atributos alt descritivos em todas as imagens",
      "Navegabilidade: Indicadores de foco visíveis e checagem de contraste"
    ],
    status: "Auditoria de acessibilidade concluída com 5 correções documentadas."
  },
  {
    id: 27,
    numero: 27,
    titulo: "Criar o README do repositório",
    descricao: "Documentação completa do projeto orientando sobre objetivos, pré-requisitos, instalação, arquitetura de pastas e autoria.",
    tecnologias: ["Markdown", "Git"],
    link: "#atividade-27",
    versoes: [
      "Seções do documento: Descrição, tecnologias, pré-requisitos e comandos",
      "Estrutura: Mapeamento detalhado das principais pastas do projeto",
      "Metadados: Identificação do autor e links para repositório e deploy"
    ],
    status: "Documentação README.md estruturada na raiz do projeto."
  },
  {
    id: 28,
    numero: 28,
    titulo: "Organizar o histórico Git",
    descricao: "Validação do fluxo de versionamento, inspeção de integridade dos commits sem arquivos indevidos e geração da tag de release v1.0.0.",
    tecnologias: ["Git CLI", "Versionamento Semântico"],
    link: "#atividade-28",
    versoes: [
      "Auditoria do histórico: Commits descritivos inspecionados com git log",
      "Limpeza: Confirmação da ausência de arquivos temporários e dependências",
      "Marcação de versão: Tag local v1.0.0 criada com sucesso"
    ],
    status: "Histórico de commits validado e tag v1.0.0 gerada."
  },
  {
    id: 29,
    numero: 29,
    titulo: "Enviar o projeto ao repositório remoto",
    descricao: "Vinculação do repositório local a uma plataforma remota, envio das branches de trabalho e validação pública dos arquivos.",
    tecnologias: ["Git Remoto", "GitHub / GitLab"],
    link: "#atividade-29",
    versoes: [
      "Vinculação remota: git remote add origin",
      "Envio de dados: git push da branch main e da tag v1.0.0",
      "Verificação: Teste de clonagem e integridade em janela anônima"
    ],
    status: "Repositório remoto sincronizado com código e tags publicados."
  },
  {
    id: 30,
    numero: 30,
    titulo: "Publicar e validar na Vercel",
    descricao: "Implantação contínua da aplicação na plataforma Vercel, auditoria funcional dos recursos publicados e link final homologado.",
    tecnologias: ["Vercel", "CI/CD", "Deploy"],
    link: "#atividade-30",
    versoes: [
      "Hospedagem: Projeto importado e compilado com sucesso na Vercel",
      "Auditoria funcional: Teste de filtros, busca, responsividade e modais",
      "Homologação: URL pública definitiva registrada no README e na homepage"
    ],
    status: "Aplicação publicada em produção e 100% homologada na Vercel."
  }
];
