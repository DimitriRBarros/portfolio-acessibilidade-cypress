# Testes Automatizados de Acessibilidade com Cypress + Axe

![Status do Workflow](https://img.shields.io/github/actions/workflow/status/DimitriRBarros/portfolio-acessibilidade-cypress/accessibility-check.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-13.9.0-blue?style=for-the-badge&logo=cypress&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js&logoColor=white)

Este repositório implementa uma solução completa e escalável de auditoria automatizada de acessibilidade, utilizando Cypress e `axe-core` para garantir que aplicações web estejam em conformidade com os padrões **WCAG 2.1 AA**.

O projeto foi estruturado seguindo as melhores práticas de automação de testes, incluindo Page Object Model (POM), relatórios avançados, testes cross-browser e integração contínua (CI/CD), tornando-o um framework robusto e pronto para ser adaptado a qualquer projeto web.

## 🔬 Demonstração do Pipeline em Ação

O branch `main` deste repositório está configurado para passar em todos os testes, representando uma aplicação em conformidade (✅).

Para provar a eficácia deste pipeline, criei um Pull Request que introduz intencionalmente uma série de falhas de acessibilidade. O workflow do GitHub Actions foi acionado automaticamente, detectou as violações e bloqueou o merge.

## 🚀 Valor Agregado

Este projeto estabelece um pipeline de qualidade que oferece:
- **Detecção precoce de falhas** que poderiam impactar usuários com deficiência.
- **Prevenção de regressões** de acessibilidade a cada Pull Request.
- **Código de teste limpo e manutenível** graças ao uso de padrões de design como o POM.
- **Relatórios visuais e detalhados** para facilitar a análise de falhas.

## 🛠️ Tecnologias Utilizadas
- **[Cypress](https://www.cypress.io/):** Framework de testes end-to-end.
- **[Axe-Core](https://github.com/dequelabs/axe-core):** Motor de testes de acessibilidade padrão da indústria.
- **[cypress-axe](https://github.com/component-driven/cypress-axe):** Plugin para integrar o motor Axe aos testes Cypress.
- **[cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter):** Biblioteca para geração de relatórios avançados em HTML.
- **[ESLint](https://eslint.org/) e [Prettier](https://prettier.io/):** Ferramentas para garantir a qualidade e padronização do código.
- **[GitHub Actions](https://github.com/features/actions):** Automação de CI/CD para execução dos testes na nuvem.

## 🏛️ Arquitetura e Estratégia de Testes

- **Page Object Model (POM):** A interação com as páginas é abstraída em classes (`/cypress/pages`) para tornar os testes mais limpos e fáceis de manter.
- **Cobertura Abrangente:** Os testes cobrem auditorias estáticas, de componentes e de **fluxos dinâmicos**, incluindo a verificação de **navegação via teclado** e **focus trap** em modais.

## 📊 Relatórios de Execução

- **Geração Local:** Após rodar `npm run cy:run`, um relatório interativo é gerado em `testes-acessibilidade/cypress/reports/index.html`.
- **Artefatos no CI/CD:** A cada execução no GitHub Actions, o relatório HTML é salvo como um "artefato".

## ⚙️ Como Rodar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/DimitriRBarros/portfolio-acessibilidade-cypress.git](https://github.com/DimitriRBarros/portfolio-acessibilidade-cypress.git)
    cd portfolio-acessibilidade-cypress
    ```
2.  **Instale as dependências:**
    ```bash
    cd testes-acessibilidade
    npm install
    ```
3.  **Execute os testes em modo interativo:**
    ```bash
    # Em um terminal
    npm run start:app

    # Em outro terminal
    npm run cy:open
    ```
