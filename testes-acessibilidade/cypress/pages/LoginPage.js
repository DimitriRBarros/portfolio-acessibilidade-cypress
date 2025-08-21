class LoginPage {
    get botaoAbrirModal() {
        return cy.get('#open-modal-btn');
    }

    get modalDeTermos() {
        return cy.get('#terms-modal');
    }

    visitar() {
        cy.visit('/');
    }

    abrirModalDeTermos() {
        this.botaoAbrirModal.click();
    }

    verificarVisibilidadeDoModal() {
        this.modalDeTermos.should('be.visible');
    }
}

export default new LoginPage();