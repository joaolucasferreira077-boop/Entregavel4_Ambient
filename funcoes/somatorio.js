/**
 * Soma todos os números de um array.
 * Ex.: somatorio([10, 20]) => 30
 *
 * @param {number[]} numeros
 * @returns {number}
 */
function somatorio(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError('somatorio: o argumento deve ser um array.');
  }
  if (!numeros.every((item) => typeof item === 'number' && !Number.isNaN(item))) {
    throw new TypeError('somatorio: o array deve conter apenas números.');
  }

  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}

module.exports = somatorio;
