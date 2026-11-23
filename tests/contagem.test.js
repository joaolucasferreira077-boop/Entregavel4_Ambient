const contagem = require('../funcoes/contagem');

test('contagem(5) deve retornar de 1 a 5', () => {
  expect(contagem(5)).toEqual([1, 2, 3, 4, 5]);
});

test('contagem(0) deve retornar uma lista vazia', () => {
  expect(contagem(0)).toEqual([]);
});

test('contagem deve rejeitar entradas inválidas', () => {
  expect(() => contagem(-3)).toThrow(RangeError);
  expect(() => contagem('abc')).toThrow(TypeError);
});
