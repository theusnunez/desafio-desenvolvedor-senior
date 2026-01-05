## Dependencias
- Bootstrap 4
- Bootstrap select
- Datatables
- Alertify
- Summernote WYSIWYG
- AdonisJS (Node framework)
- PostgreSQL (Production)
- SQLite (Development)

### Licença
GNU GENERAL PUBLIC LICENSE v3

### Manual de Uso
- Faça o CLONE do repositório para sua máquina local.
- Abra a pasta do projeto no terminal.

Siga os passos abaixo para configurar e executar o projeto em ambiente de desenvolvimento:

1. Instale as dependências:
   - cd helpdesk
   - npm install

2. Configure as variáveis de ambiente:
   - copie `.env.example` para `.env` e ajuste as variáveis (DB, MAIL, SESSIONS, etc.)

3. (Opcional) Prepare ferramentas de desenvolvimento e hooks:
   - npm run setup

4. Execute migrations e seeds (se necessário):
   - node ace migration:run
   - node ace db:seed

5. Cheque linting e formatação (opcional):
   - npm run lint
   - npm run format

6. Execute em modo desenvolvimento:
   - adonis serve --dev
   (ou)
   - npm run dev

7. Execute testes:
   - npm test

8. (Docker) Rodar com Docker Compose (produção / docker-first):
   - docker compose up --build -d
   - O container `app` irá aguardar o banco e executar migrações automaticamente (MIGRATE=true por padrão). Para ver logs:
     - docker compose logs -f app

9. (Desenvolvimento) Rodar localmente com override (hot-reload):
   - docker compose up --build -d  # irá automaticamente usar docker-compose.override.yml se presente
   - Esse modo monta seu diretório como volume e executa `npm run dev` (nodemon)

Para executar migrações manualmente dentro do container app (se necessário):
  - docker compose exec app node ace migration:run
  - docker compose exec app node ace db:seed

Após este processo, o sistema estará rodando em http://localhost:3333.

> Observação: por segurança, não deixe credenciais sensíveis no repositório; use variáveis de ambiente e configure serviços de e-mail/DB corretamente antes de usar recursos como envio de e-mail.

### Docker / Notas de configuração
- O compose já cria e expõe um serviço PostgreSQL (porta 5432) e a aplicação (porta 3333).
- As variáveis de banco padrão no `docker-compose.yml` são:
  - DB_HOST=db
  - DB_PORT=5432
  - DB_USER=postgres
  - DB_PASSWORD=postgres
  - DB_DATABASE=helpdesk
- O container `app` aguarda o banco subir antes de iniciar o servidor; o tempo máximo de espera pode ser configurado via `WAIT_TIMEOUT` (segundos).
- Se preferir, edite o arquivo `.env` para sobrescrever variáveis antes de subir os serviços.
- Uso em desenvolvimento: o serviço `app` monta o diretório atual como volume, permitindo hot reload com `npm run dev`.

- O app expõe um endpoint de saúde: `GET /health` (retorna `{ status: 'ok' }`) — o docker-compose usa esse endpoint para a checagem de health do serviço `app`.

### Uso do sistema
Para iniciar o uso do sistema, basta acessar com o navegador o endereço http://localhost:3333.

Você será direcionado inicialmente para a pagina de login.

Para acessar como administrador, deverá ser utilizada a seguinte combinação:
-User: admin
-PSW: admin



-


