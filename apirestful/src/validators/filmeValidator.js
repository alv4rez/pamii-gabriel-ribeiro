const CLASSIFICACOES = ['Livre', '10', '12', '14', '16', '18'];

function validarFilme(dados = {}) {
  const { titulo, sinopse, genero, duracao_minutos, classificacao } = dados;
  const erros = [];

  if (typeof titulo !== 'string' || titulo.trim() === '') {
    erros.push('O título é obrigatório');
  } else if (titulo.length > 150) {
    erros.push('O título deve ter no máximo 150 caracteres');
  }

  if (sinopse !== undefined && typeof sinopse !== 'string') {
    erros.push('A sinopse deve ser um texto');
  }

  if (genero !== undefined && (typeof genero !== 'string' || genero.length > 50)) {
    erros.push('O gênero deve ser um texto de até 50 caracteres');
  }

    if (duracao_minutos !== undefined && (!Number.isInteger(duracao_minutos) || duracao_minutos <= 0)) {
  erros.push('A duração deve ser um número inteiro maior que zero');
}

  if (classificacao !== undefined && !CLASSIFICACOES.includes(classificacao)) {
    erros.push(`A classificação deve ser uma destas: ${CLASSIFICACOES.join(', ')}`);
  }

  return erros;
}

module.exports = { validarFilme };