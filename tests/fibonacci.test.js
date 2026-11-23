const fibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros números da contagem de fibonacci devem ser os corretos', () => {
  expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('os 2 primeiros números da contagem de fibonacci devem ser 0 e 1', () => {
  expect(fibonacci(2)).toMatchObject([0, 1]);
});

test('fibonacci(0) deve retornar uma lista vazia e fibonacci(1) apenas [0]', () => {
  expect(fibonacci(0)).toEqual([]);
  expect(fibonacci(1)).toEqual([0]);
});

test('fibonacci deve rejeitar entradas inválidas', () => {
  expect(() => fibonacci(-1)).toThrow(RangeError);
  expect(() => fibonacci('5')).toThrow(TypeError);
  expect(() => fibonacci(2.5)).toThrow(TypeError);
});
