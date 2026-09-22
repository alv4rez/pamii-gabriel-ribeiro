require('dotenv').config();
const express = require('express');
const filmesRoutes = require('./routes/filmesRoutes');
const { rotaNaoEncontrada, errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

app.use('/filmes', filmesRoutes);

app.use(rotaNaoEncontrada);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});