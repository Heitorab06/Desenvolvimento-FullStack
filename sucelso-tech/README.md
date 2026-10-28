# Conexao Supabase com Node.js

Projeto de testes para duas conexoes independentes:

1. **API HTTPS** com `@supabase/supabase-js` (`supabaseClient.js`, `teste.js`).
2. **PostgreSQL direto** com `pg` (`db.js`, `index.js`, `diagnostico.js`).

## Passo a passo no Windows (PowerShell)

1. Instale Node.js 22 ou superior e abra o terminal nesta pasta.
2. Copie `.env.example` para `.env`:
   ```powershell
   Copy-Item .env.example .env
   ```
3. No Supabase Dashboard, abra **Connect** e confirme host, porta, usuario e banco do **Session Pooler**. Confira a URL e a chave publicavel nas configuracoes de API.
4. Redefina a senha PostgreSQL que foi compartilhada anteriormente; preencha a **nova** senha no `.env`. Nunca envie `.env` a terceiros nem ao Git.
5. Instale as dependencias:
   ```powershell
   npm install
   ```
6. Teste primeiro a API HTTPS:
   ```powershell
   npm run test:api
   ```
7. Teste o PostgreSQL:
   ```powershell
   npm run diagnostico
   npm run test:db
   ```

## Interpretacao

- `Senha configurada: false`: `.env` ausente, nome incorreto ou senha nao preenchida.
- `ECONNRESET`: a conexao foi encerrada; verifique endpoint/porta no painel, TLS, firewall e rede. Nao conclua que e erro de senha.
- `password authentication failed`: credenciais incorretas.
- `relation does not exist` / `PGRST205`: confirme o nome exato da tabela (`TSENHA` vs `TSenha`) e o schema.
- `permission denied` / consulta vazia: revise grants e politicas RLS, sem liberar tabelas sensiveis indiscriminadamente.
- `TCP acessivel` comprova apenas a abertura da porta, nao a autenticacao PostgreSQL.

## Seguranca

- A chave **publicavel** nao substitui a senha PostgreSQL.
- Nao exponha `DB_PASSWORD` nem chave secreta/service_role no navegador.
- O exemplo PostgreSQL usa `rejectUnauthorized: false` apenas para diagnostico; em producao, valide o certificado do servidor com CA confiavel.
- A tabela de exemplo pode conter credenciais. O teste de API seleciona somente `id`, nunca `Password`. Prefira **Supabase Auth** para senhas de usuarios e mantenha RLS corretamente configurado.
- A conexao so podera ser confirmada apos executar os testes na sua rede com as credenciais atuais.
