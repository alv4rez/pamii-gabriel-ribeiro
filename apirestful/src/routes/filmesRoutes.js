const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesController');

router.get('/', filmesController.listarFilmes);
router.post('/', filmesController.criarFilme);
router.get('/:id', filmesController.buscarFilme);
router.put('/:id', filmesController.atualizarFilme);
router.delete('/:id', filmesController.deletarFilme);
module.exports = router;
