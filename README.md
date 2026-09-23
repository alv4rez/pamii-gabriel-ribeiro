# pamii-gabriel-ribeiro
Aulas de Programação e Aplicação Mobile com o professor João Siles.

## [1 - Express.js](./apirestful)

## Como criar e iniciar um projeto Express

### 1. Gerar o projeto

Todo projeto Express começa com o **Node.js** instalado. Depois, você cria a pasta do projeto e inicializa o gerenciador de pacotes:

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y
```

O `npm init -y` cria o `package.json`, o arquivo que identifica o projeto como Node.js e lista todas as dependências escolhidas.

Depois, instale as bibliotecas que o projeto vai usar. Cada uma adiciona uma funcionalidade pronta, por exemplo:

- **express**: para criar as rotas da API
- **mysql2**: para conectar com um banco MySQL
- **dotenv**: para carregar variáveis de ambiente (como senhas) de um arquivo `.env`, sem deixá-las no código

```bash
npm install express mysql2 dotenv
```

Também é comum instalar o **nodemon** como dependência de desenvolvimento, para reiniciar o servidor sozinho a cada alteração:

```bash
npm install --save-dev nodemon
```

### 2. Abrir o projeto no editor

Abra a pasta no seu editor (por exemplo, o VS Code). Diferente de projetos Java, não existe uma etapa de build: as bibliotecas já ficam prontas na pasta `node_modules`, criada pelo `npm install`.

Uma organização comum separa o projeto em pastas por responsabilidade:
src/
├── config/ # conexão com o banco
├── controllers/ # lógica de cada rota
├── routes/ # definição das rotas
└── server.js # ponto de entrada


### 3. Iniciar a aplicação

O Express precisa de um ponto de partida: o arquivo `server.js`, onde o código:

- cria a aplicação com `express()`
- define as rotas que a API vai responder
- chama `app.listen(PORT)`, que liga o servidor e o deixa escutando requisições em um endereço local, por padrão `http://localhost:3000`

Para rodar, adicione um script no `package.json`:

```json
"scripts": {
  "dev": "nodemon src/server.js"
}
```

E execute no terminal:

```bash
npm run dev
```

Quando o terminal mostrar uma mensagem como `Servidor rodando na porta 3000`, a aplicação está no ar e pronta para receber requisições.
