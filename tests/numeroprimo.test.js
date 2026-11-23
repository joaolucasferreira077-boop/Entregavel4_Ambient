const numeroPrimo = require('../funcoes/numeroprimo');

test('7 e 13 devem ser primos', () => {
  expect(numeroPrimo(7)).toBe(true);
  expect(numeroPrimo(13)).toBe(true);
});

test('10 e 9 não devem ser primos', () => {
  expect(numeroPrimo(10)).toBe(false);
  expect(numeroPrimo(9)).toBe(false);
});

test('0, 1 e negativos não são primos; 2 é primo', () => {
  expect(numeroPrimo(0)).toBe(false);
  expect(numeroPrimo(1)).toBe(false);
  expect(numeroPrimo(-7)).toBe(false);
  expect(numeroPrimo(2)).toBe(true);
});

test('numeroPrimo deve rejeitar entradas inválidas', () => {
  expect(() => numeroPrimo('7')).toThrow(TypeError);
  expect(() => numeroPrimo(2.5)).toThrow(TypeError);
});
