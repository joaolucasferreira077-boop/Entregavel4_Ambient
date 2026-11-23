const somatorio = require('../funcoes/somatorio');

test('somatório de 10 + 20 deve ser 30', () => {
  expect(somatorio([10, 20])).toBe(30);
});

test('somatório de -10 + 20 deve ser 10', () => {
  expect(somatorio([-10, 20])).toBe(10);
});

test('somatório de lista vazia deve ser 0', () => {
  expect(somatorio([])).toBe(0);
});

test('somatorio deve rejeitar entradas inválidas', () => {
  expect(() => somatorio(10)).toThrow(TypeError);
  expect(() => somatorio([1, '2'])).toThrow(TypeError);
});
