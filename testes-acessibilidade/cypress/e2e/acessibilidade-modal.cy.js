import loginPage from '../pages/LoginPage';

describe('Suite de Testes de Acessibilidade em Fluxos Dinâmicos', () => {
  beforeEach(() => {
    loginPage.visitar();
    cy.injectAxe();
  });

  it('Não deve encontrar violações de acessibilidade no modal após ele ser aberto', () => {
    cy.checkA11y(); // Verifica a página inicial
    loginPage.abrirModalDeTermos();
    loginPage.verificarVisibilidadeDoModal();
    cy.checkA11y(); // Verifica a página com o modal aberto
  });
});