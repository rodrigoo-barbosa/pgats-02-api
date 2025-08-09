# API de Transferências e Usuários

Esta API permite o registro, login, consulta de usuários e transferências de valores entre usuários, com regras de negócio para aprendizado de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório:
   ```sh
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```sh
   npm install express swagger-ui-express
   ```

## Executando a API

```sh
node server.js
```

A API estará disponível em `http://localhost:3000`.

## Documentação Swagger

Acesse a documentação interativa em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints Principais

### Registro de Usuário
- `POST /api/users/register`
  - Body: `{ "username": "string", "password": "string", "isFavored": true|false }`

### Login
- `POST /api/users/login`
  - Body: `{ "username": "string", "password": "string" }`

### Listar Usuários
- `GET /api/users`

### Transferências
- `POST /api/transfers`
  - Body: `{ "from": "string", "to": "string", "amount": number }`
- `GET /api/transfers`

## Regras de Negócio
- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha.
- Transferências acima de R$ 5.000,00 só são permitidas para destinatários marcados como "favorecido".
- O banco de dados é em memória (os dados são perdidos ao reiniciar o servidor).

## Testes
Para testar a API, utilize ferramentas como Postman, Insomnia ou scripts automatizados (ex: Supertest).
