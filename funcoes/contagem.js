/**
 * Conta de 1 até `limite` e retorna os números em um array.
 * Ex.: contagem(3) => [1, 2, 3]
 *
 * @param {number} limite - inteiro maior ou igual a 0
 * @returns {number[]}
 */
function contagem(limite) {
  if (!Number.isInteger(limite)) {
    throw new TypeError('contagem: o limite deve ser um número inteiro.');
  }
  if (limite < 0) {
    throw new RangeError('contagem: o limite não pode ser negativo.');
  }

  const numeros = [];
  for (let i = 1; i <= limite; i++) {
    numeros.push(i);
  }
  return numeros;
}

module.exports = contagem;
