# Webdojo - Projeto de Testes Automatizados com Cypress

## 📋 Visão Geral

Este projeto contém os testes automatizados da aplicação **Webdojo**, desenvolvidos utilizando o framework **Cypress**.

O objetivo é validar os principais fluxos da aplicação por meio de testes end-to-end (E2E), garantindo maior qualidade, confiabilidade e rapidez na identificação de problemas.

---

## 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Fixtures (dados de teste em JSON)
- Custom Commands
- Actions Pattern

---

## 📁 Estrutura do Projeto

```text
cypress/
│
├── e2e/
│   └── Arquivos de testes automatizados
│
├── fixtures/
│   ├── 1.pdf
│   ├── cep.json
│   └── consultancy.json
│
├── integration/
│
├── plugins/
│
└── support/
    ├── actions/
    │   └── consultancy.actions.js
    │
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

### Descrição das Pastas

| Pasta | Descrição |
|---------|-----------|
| `e2e` | Contém os cenários de testes automatizados. |
| `fixtures` | Massa de dados utilizada nos testes. |
| `support/actions` | Implementação das ações reutilizáveis da aplicação. |
| `support/commands.js` | Comandos customizados do Cypress. |
| `support/e2e.js` | Configurações globais executadas antes dos testes. |
| `support/utils.js` | Funções auxiliares utilizadas nos cenários. |
| `plugins` | Plugins e configurações adicionais do Cypress. |
| `integration` | Estrutura legada do Cypress (quando aplicável). |

---

## 🚀 Pré-requisitos

Antes de executar os testes, certifique-se de possuir instalado:

- Node.js 18+ (ou versão compatível com o projeto)
- NPM
- Cypress

---

## ▶️ Executando a Aplicação

A aplicação **Webdojo** está localizada no mesmo repositório deste projeto.

Antes de executar os testes automatizados, é necessário iniciar a aplicação.

```bash
npm run dev
```

Este comando executará a aplicação localmente na porta **3000**.

---

## 🧪 Executando os Testes

### Executar toda a suíte de testes

```bash
npm test
```

Comando executado:

```bash
npx cypress run --config viewportWidth=1440,viewportHeight=900
```

### Executar Cypress em modo gráfico

```bash
npm run test:ui
```

Comando executado:

```bash
npx cypress open
```

### Executar apenas os testes de Login

```bash
npm run test:login
```

Comando executado:

```bash
npx cypress run --spec cypress/e2e/login.cy.js
```

### Executar testes de Login em Mobile

```bash
npm run test:login:mobile
```

Executa os cenários de login simulando um dispositivo móvel.

---

## 📂 Massa de Dados

Os dados utilizados nos testes encontram-se na pasta:

```text
cypress/fixtures
```

Arquivos disponíveis:

| Arquivo | Finalidade |
|----------|-----------|
| `cep.json` | Dados para validação de CEP. |
| `consultancy.json` | Dados para cadastro e validação de consultorias. |
| `1.pdf` | Arquivo utilizado para cenários de upload. |

---

## 🧩 Padrão de Desenvolvimento

### Actions

As ações encapsulam interações com a interface da aplicação, promovendo:

- Reutilização de código;
- Melhor manutenção;
- Maior legibilidade dos testes.

### Custom Commands

Os comandos customizados ficam centralizados em:

```text
cypress/support/commands.js
```

---

## 📊 Boas Práticas Adotadas

- Separação de dados utilizando Fixtures;
- Reutilização de ações através do padrão Actions;
- Utilização de comandos customizados;
- Organização dos cenários por funcionalidade;
- Redução de duplicação de código;
- Facilidade de manutenção e escalabilidade.

---

## 🔧 Fluxo de Execução

1. Clonar o repositório

```bash
git clone <repositorio>
```

2. Instalar dependências

```bash
npm install
```

3. Iniciar a aplicação

```bash
npm run dev
```

4. Executar os testes

Modo Headless:

```bash
npm test
```

Modo Interface Gráfica:

```bash
npm run test:ui
```

---

## 👨‍💻 Autor

Projeto de automação desenvolvido para validação da aplicação **Webdojo**, utilizando Cypress para execução dos testes End-to-End (E2E).
