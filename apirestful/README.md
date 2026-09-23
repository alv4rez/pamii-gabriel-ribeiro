# Como iniciar o projeto Express
API RESTful feita com Express.js e MySQL para gerenciar um catálogo de filmes de cinema.

### Tecnologias

- Node.js
- Express
- MySQL (mysql2)
- dotenv

### Como rodar

1. Clone o repositório
2. Instale as dependências:
   \`\`\`
   npm install
   \`\`\`
3. Copie o `.env.example` para `.env` e preencha com suas credenciais do MySQL
4. Crie o banco e a tabela:
   \`\`\`sql
   CREATE DATABASE cinema;
   USE cinema;

   CREATE TABLE filmes (
     id INT AUTO_INCREMENT PRIMARY KEY,
     titulo VARCHAR(150) NOT NULL,
     sinopse TEXT,
     genero VARCHAR(50),
     duracao_minutos INT,
     classificacao VARCHAR(10)
   );
   \`\`\`
5. Rode o servidor:
   \`\`\`
   npm run dev
   \`\`\`

### Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | /filmes | Lista todos os filmes |
| GET | /filmes/:id | Busca um filme pelo id |
| POST | /filmes | Cadastra um filme |
| PUT | /filmes/:id | Atualiza um filme |
| DELETE | /filmes/:id | Remove um filme |

### Exemplo de corpo (POST/PUT)

\`\`\`json
{
  "titulo": "Interestelar",
  "sinopse": "Exploradores viajam por um buraco de minhoca.",
  "genero": "Ficção científica",
  "duracao_minutos": 169,
  "classificacao": "10"
}
\`\`\`
