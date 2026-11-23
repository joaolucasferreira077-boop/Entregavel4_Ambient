/**
 * Retorna os primeiros `quantidadeNumeros` termos da sequência de Fibonacci.
 * Ex.: fibonacci(5) => [0, 1, 1, 2, 3]
 *
 * @param {number} quantidadeNumeros - inteiro maior ou igual a 0
 * @returns {number[]}
 */
function fibonacci(quantidadeNumeros) {
  if (!Number.isInteger(quantidadeNumeros)) {
    throw new TypeError('fibonacci: a quantidade deve ser um número inteiro.');
  }
  if (quantidadeNumeros < 0) {
    throw new RangeError('fibonacci: a quantidade não pode ser negativa.');
  }

  if (quantidadeNumeros === 0) return [];
  if (quantidadeNumeros === 1) return [0];

  const sequencia = [0, 1];
  for (let i = 2; i < quantidadeNumeros; i++) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }
  return sequencia;
}

module.exports = fibonacci;
