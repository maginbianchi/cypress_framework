export default class Login {
    static email() {
        return cy.get('input[type="email"]');
    }

    static password() {
        return cy.get('input[type="password"]');
    }

    static signIn() {
        return cy.get('.btn')
            .contains('Sign in');
    }
}