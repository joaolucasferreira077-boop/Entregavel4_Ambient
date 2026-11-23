# Atividade 4 – Ambientes de Desenvolvimento

Algoritmos fundamentais em JavaScript com testes unitários usando [Jest](https://jestjs.io/docs/getting-started).

## Estrutura

```
funcoes/   -> código fonte dos algoritmos
  contagem.js
  fibonacci.js
  mdc.js
  numeroprimo.js
  quicksort.js
  somatorio.js
tests/     -> testes unitários (pelo menos 2 por algoritmo)
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (inclui o npm)

## Como executar os testes

1. Clone o repositório e entre na pasta:

   ```bash
   git clone <URL-DO-SEU-REPOSITORIO>
   cd atividade4_ambientes
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   ```bash
   npm test
   ```

Se tudo estiver certo, o Jest mostra todas as suites com `PASS`.

## Boas práticas aplicadas

- Nomes de variáveis e funções significativos.
- Validação das entradas (tipo e faixa de valores).
- Tratamento de exceções com `TypeError` e `RangeError`, cobertos pelos testes.
