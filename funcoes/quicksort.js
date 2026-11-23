/**
 * Ordena um array de números em ordem crescente com o algoritmo Quicksort.
 * Não altera o array original.
 * Ex.: quicksort([5, 4, 3, 1]) => [1, 3, 4, 5]
 *
 * @param {number[]} lista
 * @returns {number[]}
 */
function quicksort(lista) {
  if (!Array.isArray(lista)) {
    throw new TypeError('quicksort: o argumento deve ser um array.');
  }
  if (!lista.every((item) => typeof item === 'number' && !Number.isNaN(item))) {
    throw new TypeError('quicksort: o array deve conter apenas números.');
  }

  if (lista.length <= 1) return [...lista];

  const [pivo, ...resto] = lista;
  const menores = resto.filter((n) => n < pivo);
  const maiores = resto.filter((n) => n >= pivo);

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

module.exports = quicksort;
