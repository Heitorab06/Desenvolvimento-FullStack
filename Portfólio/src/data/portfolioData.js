export const portfolioData = {
  personal: {
    name: "Heitor Alves Barreto",
    title: "Estudante de Engenharia da Computação",
    focus: "Inteligência Artificial, Machine Learning & Ciência de Dados",
    location: "Salvador, BA",
    email: "habarreto06@gmail.com",
    phone: "(71) 98850-4655",
    whatsapp: "https://wa.me/5571988504655",
    linkedin: "https://linkedin.com/in/heitor-barreto-310344285",
    linkedinUsername: "heitor-barreto-310344285",
    github: "https://github.com/Heitorab06",
    githubUsername: "Heitorab06",
    avatar: "/foto.png",
    resumePdf: "/Curriculo_Heitor_Barreto.pdf",
    summary:
      "Estudante de Engenharia da Computação com foco em Inteligência Artificial, Machine Learning e Ciência de Dados. Experiência em projetos de agentes de IA, visão computacional, análise de dados e pipelines de dados. Busco minha primeira experiência profissional para aplicar conhecimentos técnicos na resolução de problemas reais."
  },

  education: [
    {
      degree: "Engenharia da Computação",
      level: "Bacharelado",
      institution: "Universidade SENAI CIMATEC",
      period: "2024 - Presente",
      location: "Salvador, BA",
      description:
        "Formação com ênfase em fundamentos de computação, inteligência artificial, engenharia de software, sistemas embarcados e análise de dados."
    }
  ],

  experiences: [
    {
      role: "Monitor de Mecânica Geral",
      type: "Atividade Acadêmica",
      organization: "Universidade SENAI CIMATEC",
      period: "03/2025 - 12/2025",
      description:
        "Prestação de suporte didático continuado e orientação técnica a estudantes para resolução de problemas complexos de engenharia. Responsabilidade pelo planejamento e acompanhamento de atividades de reforço, estimulando o trabalho em equipe e a organização.",
      skills: [
        "Comunicação técnica",
        "Didática",
        "Resolução de problemas",
        "Organização",
        "Planejamento",
        "Responsabilidade"
      ]
    },
    {
      role: "AWS Student Builder Group - Ferramentas e Serviços",
      type: "Grupo de Desenvolvimento",
      organization: "AWS Community",
      period: "2024 - 2025",
      description:
        "Participação ativa em grupo focado no estudo prático de Fundamentos de Computação em Nuvem e exploração de Serviços AWS. Colaboração mútua no desenho de arquiteturas básicas de sistemas seguindo as boas práticas recomendadas pelo mercado de tecnologia.",
      skills: [
        "Computação em nuvem",
        "Serviços AWS",
        "Aprendizado colaborativo",
        "Desenvolvimento técnico contínuo"
      ]
    }
  ],

  projects: [
    {
      id: "multi-agent-bank",
      title: "Arquitetura Multiagentes para Análise de Dados Bancários",
      category: "Inteligência Artificial & LLMs",
      summary:
        "Construção de uma arquitetura baseada em múltiplos agentes autônomos aplicada à inteligência e análise de dados financeiros complexos.",
      description:
        "Desenvolvimento e implementação de modelos de predição e de classificação para identificação de padrões e suporte à tomada de decisões. Integração com LLMs (Large Language Models) via consumo de APIs externas com gerenciamento seguro de chaves de acesso. Estruturação de sistemas de recomendação integrados com etapas automatizadas de processamento e manipulação de grandes volumes de dados.",
      tags: ["Python", "LLM APIs", "Pandas", "Multi-Agent AI", "Machine Learning", "Classificação & Predição"],
      highlight: true
    },
    {
      id: "weather-pipeline",
      title: "Pipeline de Dados e Machine Learning para Análise Meteorológica",
      category: "Engenharia de Dados & ML",
      summary:
        "Pipeline completo de ponta a ponta com ingestão, validação, banco PostgreSQL e modelos preditivos com variáveis temporais.",
      description:
        "Desenvolvimento de um pipeline completo de dados meteorológicos, abrangendo ingestão de dados via API, transformação, validação, limpeza e armazenamento em PostgreSQL. Estruturação de um fluxo modular para preparação dos dados e desenvolvimento de etapas de feature engineering e modelagem preditiva. Implementação de variáveis temporais e lags para utilização em modelos de Machine Learning, com containerização do pipeline via Docker.",
      tags: ["Python", "Pandas", "PostgreSQL", "Scikit-Learn", "Docker", "Data Pipelines"],
      highlight: true
    }
  ],

  skillCategories: [
    {
      name: "Inteligência Artificial & Machine Learning",
      icon: "Brain",
      skills: [
        "Agentes de IA",
        "LLM & IA Generativa",
        "Machine Learning",
        "Visão Computacional",
        "Modelos de Classificação",
        "Modelos de Predição"
      ]
    },
    {
      name: "Dados & Ciência de Dados",
      icon: "Database",
      skills: [
        "Python",
        "Pandas & NumPy",
        "Scikit-Learn",
        "Matplotlib & Seaborn",
        "Análise Estatística",
        "Pré-processamento & Limpeza",
        "Manipulação de Dados"
      ]
    },
    {
      name: "Desenvolvimento & Banco de Dados",
      icon: "Code",
      skills: [
        "Python",
        "SQL (PostgreSQL)",
        "C++",
        "POO",
        "Consumo de APIs REST",
        "Jupyter Notebook"
      ]
    },
    {
      name: "Ferramentas & Infraestrutura",
      icon: "Wrench",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "Linux",
        "AWS Cloud"
      ]
    },
    {
      name: "Competências Interpessoais",
      icon: "Users",
      skills: [
        "Pensamento Analítico",
        "Resolução de Problemas",
        "Trabalho em Equipe",
        "Comunicação Técnica",
        "Aprendizado Contínuo",
        "Organização e Planejamento"
      ]
    }
  ],

  languages: [
    { name: "Português", level: "Nativo", proficiency: "100%" },
    { name: "Inglês", level: "Avançado", proficiency: "85%" }
  ],

  certifications: [
    {
      title: "Hugging Face Agents Course",
      issuer: "Hugging Face",
      badge: "AI Agents",
      icon: "Award"
    },
    {
      title: "Santander Bootcamp Python Backend",
      issuer: "Santander / DIO",
      badge: "Backend & Python",
      icon: "Award"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      badge: "Cloud Computing",
      icon: "Award"
    },
    {
      title: "Data Science",
      issuer: "Data Science Academy",
      badge: "Data Science",
      icon: "Award"
    },
    {
      title: "Linux Fundamentals",
      issuer: "Cisco",
      badge: "Infra & OS",
      icon: "Award"
    }
  ]
};

