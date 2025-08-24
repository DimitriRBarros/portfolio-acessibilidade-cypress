describe('Suite de Testes de Acessibilidade na Página de Login', () => {
    
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('Não deve encontrar nenhuma violação de acessibilidade na página inteira', () => {
    cy.checkA11y({ exclude: ['button'] });
  });

  it('Não deve encontrar nenhuma violação de acessibilidade no formulário de login', () => {
    cy.checkA11y('#login-form', {
      rules: {
        'color-contrast': {
          enabled: false
        }
      }
    });
  });
});