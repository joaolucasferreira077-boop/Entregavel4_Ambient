const quicksort = require('../funcoes/quicksort');

test('quicksort deve ordenar [5, 4, 3, 1] em ordem crescente', () => {
  expect(quicksort([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('quicksort deve ordenar [100, 4, 3, 150] em ordem crescente', () => {
  expect(quicksort([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});

test('quicksort deve lidar com repetidos, lista vazia e não alterar o original', () => {
  const original = [3, 1, 3, 2];
  expect(quicksort(original)).toEqual([1, 2, 3, 3]);
  expect(original).toEqual([3, 1, 3, 2]);
  expect(quicksort([])).toEqual([]);
});

test('quicksort deve rejeitar entradas inválidas', () => {
  expect(() => quicksort('abc')).toThrow(TypeError);
  expect(() => quicksort([1, 'a', 3])).toThrow(TypeError);
});
