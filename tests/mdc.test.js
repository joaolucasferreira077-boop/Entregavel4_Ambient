const mdc = require('../funcoes/mdc');

test('mdc de 10 e 5 deve ser 5', () => {
  expect(mdc(10, 5)).toBe(5);
});

test('mdc de 48 e 18 deve ser 6', () => {
  expect(mdc(48, 18)).toBe(6);
});

test('mdc de números primos entre si deve ser 1', () => {
  expect(mdc(17, 13)).toBe(1);
});

test('mdc deve aceitar negativos e rejeitar valores que não são inteiros', () => {
  expect(mdc(-12, 18)).toBe(6);
  expect(() => mdc('a', 2)).toThrow(TypeError);
  expect(() => mdc(1.5, 2)).toThrow(TypeError);
});
