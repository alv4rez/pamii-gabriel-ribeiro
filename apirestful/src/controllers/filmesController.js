const db = require('../config/db');
const { validarFilme } = require('../validators/filmeValidator');

async function listarFilmes(req, res) {
  const [filmes] = await db.query('SELECT * FROM filmes');
  res.json(filmes);
}

module.exports = { listarFilmes };
async function buscarFilme(req, res) {
  const id = req.params.id;
  const [linhas] = await db.query('SELECT * FROM filmes WHERE id = ?', [id]);

  if (linhas.length === 0) {
    return res.status(404).json({ erro: 'Filme não encontrado' });
  }

  res.json(linhas[0]);
}

   async function criarFilme(req, res) {
  const erros = validarFilme(req.body);
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  const { titulo, sinopse, genero, duracao_minutos, classificacao } = req.body;

  const [resultado] = await db.query(
    'INSERT INTO filmes (titulo, sinopse, genero, duracao_minutos, classificacao) VALUES (?, ?, ?, ?, ?)',
    [titulo, sinopse, genero, duracao_minutos, classificacao]
  );

  res.status(201).json({
    id: resultado.insertId,
    titulo,
    sinopse,
    genero,
    duracao_minutos,
    classificacao,
  });
}
 async function atualizarFilme(req, res) {
  const id = req.params.id;

  const erros = validarFilme(req.body);
  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  const { titulo, sinopse, genero, duracao_minutos, classificacao } = req.body;

  const [resultado] = await db.query(
    'UPDATE filmes SET titulo = ?, sinopse = ?, genero = ?, duracao_minutos = ?, classificacao = ? WHERE id = ?',
    [titulo, sinopse, genero, duracao_minutos, classificacao, id]
  );

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ erro: 'Filme não encontrado' });
  }

  res.json({ id, titulo, sinopse, genero, duracao_minutos, classificacao });
}
async function deletarFilme(req, res) {
  const id = req.params.id;

  const [resultado] = await db.query('DELETE FROM filmes WHERE id = ?', [id]);

  if (resultado.affectedRows === 0) {
    return res.status(404).json({ erro: 'Filme não encontrado' });
  }

  res.status(204).send();
}
module.exports = { listarFilmes, buscarFilme, criarFilme, atualizarFilme, deletarFilme };