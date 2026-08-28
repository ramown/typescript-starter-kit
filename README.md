# TypeScript Starter Kit

Boilerplate para projetos Node.js com TypeScript, preparado com ferramentas de qualidade, testes e integração contínua.

O objetivo é fornecer uma base simples e reutilizável para iniciar novos projetos sem precisar configurar novamente TypeScript, ESLint, Prettier, testes e CI.

## Stack

- Node.js 24
- TypeScript 7
- ESLint
- Prettier
- Vitest
- Husky
- lint-staged
- GitHub Actions

## Requisitos

- Node.js 24+
- npm

## Instalação

Clone o repositório:

```bash
git clone <repository-url>
cd typescript-starter-kit
npm install
```

## Variáveis de ambiente

O arquivo `.env.example` contém variáveis de exemplo usadas pelo boilerplate. Para utilizá-las localmente, crie um arquivo `.env`:

```bash
cp .env.example .env
```

O carregamento é feito pela API nativa do Node.js. A ausência do arquivo `.env` não impede a execução, pois os exemplos possuem valores padrão.

Adapte ou remova as variáveis conforme as necessidades do projeto criado a partir deste starter.

## Comandos

| Comando                | Descrição                                      |
| ---------------------- | ---------------------------------------------- |
| `npm run lint`         | Verifica o código com ESLint.                  |
| `npm run lint:fix`     | Corrige automaticamente problemas suportados.  |
| `npm run format`       | Formata os arquivos com Prettier.              |
| `npm run format:check` | Verifica a formatação sem modificar arquivos.  |
| `npm run typecheck`    | Verifica os tipos do código e dos testes.      |
| `npm run test`         | Executa os testes em modo interativo.          |
| `npm run test:run`     | Executa os testes uma vez.                     |
| `npm run build`        | Compila o código para o diretório `dist`.      |
| `npm start`            | Executa o código compilado em `dist/index.js`. |

## Execução

Compile e execute o exemplo:

```bash
npm run build
npm start
```

Durante o desenvolvimento, execute os testes em modo interativo:

```bash
npm run test
```

## Estrutura

```text
.
├── .github/             # CI e templates do GitHub
├── .husky/              # Hooks do Git
├── src/
│   ├── config/          # Configurações do exemplo
│   └── index.ts         # Ponto de entrada
├── tests/               # Testes automatizados
├── eslint.config.js     # Configuração do ESLint
├── vitest.config.ts     # Configuração do Vitest
├── tsconfig.json        # Configuração TypeScript compartilhada
├── tsconfig.build.json  # Configuração de compilação
└── tsconfig.test.json   # Configuração de testes e typecheck
```

O diretório `dist` é gerado pelo build e não deve ser versionado.

## Alias de imports

Imports iniciados por `#/` apontam para o diretório `src`:

```ts
import { sum } from '#/sum';
```

O alias é resolvido pelo campo `imports` do `package.json` durante a execução e pela configuração do Vitest nos testes.

## TypeScript

O projeto utiliza duas dependências relacionadas ao compilador de forma intencional:

- `typescript`, atualmente baseado no TypeScript 6, mantém a compatibilidade com o ecossistema `typescript-eslint`;
- `@typescript/native` disponibiliza o compilador nativo do TypeScript 7 usado pelos comandos `tsc`.

Antes de atualizar ou remover uma delas, verifique a compatibilidade declarada pelo `typescript-eslint`.

## Qualidade e integração contínua

O hook de pre-commit executa o `lint-staged`, aplicando ESLint e Prettier somente aos arquivos preparados para o commit.

O workflow de CI é executado em pushes para `main` e em pull requests. Ele verifica:

1. lint;
2. formatação;
3. tipos;
4. testes;
5. build.

## Usando como base

Depois de criar um projeto a partir deste repositório:

1. atualize os metadados do `package.json`;
2. substitua os exemplos em `src` e `tests`;
3. adapte o `.env.example`;
4. revise este README para refletir o novo projeto.
