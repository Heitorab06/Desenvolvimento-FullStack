# 📋 Lista de Participantes - Mostra de Tecnologia

Aplicação React desenvolvida para o credenciamento e gerenciamento em tempo real dos visitantes da **Mostra de Tecnologia**.

---

## 🎯 Contexto e Situação-Problema

- **Contexto**: Uma instituição de ensino realizará uma mostra de tecnologia aberta à comunidade. Na entrada, os organizadores precisam registrar os participantes. O método anterior (papel) dificultava a contagem de pessoas e a correção de registros incorretos.
- **Solução**: Sistema digital em React que permite cadastrar visitantes instantaneamente, ver a contagem e listagem em tempo real, impedir cadastros com campos vazios, corrigir erros de digitação e excluir nomes inseridos por engano.

---

## ✨ Funcionalidades

1. **Cadastro Instantâneo**: Adicione visitantes via formulário com suporte ao teclado (`Enter`).
2. **Validação Rigorosa**: Bloqueia tentativas de registrar nomes vazios ou compostos apenas por espaços, exibindo alerta visual amigável.
3. **Contador em Tempo Real**: Card com a contagem exata e dinâmica de credenciados no evento.
4. **Visualização Detalhada**: Listagem com numeração de chegada, iniciais em avatar colorido e horário de registro.
5. **Correção de Erros de Digitação**: Botão de edição inline para corrigir nomes sem precisar excluir e recadastrar.
6. **Exclusão de Registros**: Botão de remoção para limpar cadastros feitos por engano.
7. **Busca Dinâmica**: Filtro de pesquisa por nome para localizar visitantes rapidamente.
8. **Cópia da Lista**: Botão para exportar/copiar a lista completa de presença formatada para a área de transferência.
9. **Persistência de Dados**: Armazenamento automático em `localStorage` para evitar perda de dados ao recarregar a página.

---

## 🚀 Como Executar o Projeto

1. Abra o terminal na pasta do projeto:
   ```bash
   cd lista-participantes
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador pelo endereço indicado (normalmente `http://localhost:5173`).

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite**
- **Lucide React** (Ícones modernos)
- **CSS3 Moderno** (Variáveis, Flexbox, Grid, Animações e Design Responsivo)

