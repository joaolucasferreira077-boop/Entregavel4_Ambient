/**
 * Verifica se um número é primo.
 * Ex.: numeroPrimo(7) => true; numeroPrimo(10) => false
 *
 * @param {number} numero - inteiro
 * @returns {boolean}
 */
function numeroPrimo(numero) {
  if (!Number.isInteger(numero)) {
    throw new TypeError('numeroPrimo: o valor deve ser um número inteiro.');
  }

  if (numero < 2) return false;

  for (let divisor = 2; divisor * divisor <= numero; divisor++) {
    if (numero % divisor === 0) return false;
  }
  return true;
}

module.exports = numeroPrimo;
