import loginPage from '../pages/LoginPage';

describe('Suite de Testes de Navegação via Teclado', () => {
    beforeEach(() => {
        loginPage.visitar();
    });

    it('Deve navegar entre os elementos da página principal na ordem correta', () => {
        cy.tab();
        cy.focused().should('have.id', 'email-input');
        cy.tab();
        cy.focused().should('have.id', 'password-input');
        cy.tab();
        cy.focused().should('contain.text', 'Entrar');
        cy.tab();
        cy.focused().should('have.id', 'open-modal-btn');
    });

    it('Deve prender o foco (focus trap) dentro do modal quando ele estiver aberto', () => {
        loginPage.abrirModalDeTermos();
        loginPage.verificarVisibilidadeDoModal();
        cy.focused().should('have.id', 'close-btn');
        cy.tab();
        cy.focused().should('have.id', 'ok-btn');
        cy.tab();
        cy.focused().should('have.id', 'close-btn');
        cy.tab({ shift: true });
        cy.focused().should('have.id', 'ok-btn');
    });
});