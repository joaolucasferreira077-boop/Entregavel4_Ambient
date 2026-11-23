/**
 * Calcula o MDC (máximo divisor comum) de dois inteiros pelo algoritmo de Euclides.
 * Ex.: mdc(10, 5) => 5
 *
 * @param {number} a - inteiro
 * @param {number} b - inteiro
 * @returns {number}
 */
function mdc(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError('mdc: os dois valores devem ser números inteiros.');
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

module.exports = mdc;
