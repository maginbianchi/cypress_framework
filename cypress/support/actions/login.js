import Login from '../elements/login'

Cypress.Commands.add('login', (username, password) => {
	Login.email().type(username)

	Login.password().type(password)

	Login.signIn().should('be.visible').click()
})
