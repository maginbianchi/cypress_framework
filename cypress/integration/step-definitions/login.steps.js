import { When, Then, defineStep } from 'cypress-cucumber-preprocessor/steps'

When('I login the application with invalid credentials', () => {
	cy.fixture('user').then(user => {
		cy.login(user.email, user.password)
	})
})

Then('I should see an error message', () => {
	cy.get('.error-messages')
		.should('be.visible')
		.and('contain', 'email or password is invalid')
		.wait(2000)
})

When('I login with the valid credentials:', datatable => {
	datatable.hashes().forEach(element => {
		cy.login(element.username, element.password)
	})
})

defineStep('I should see the {string} tab', (tabName) => {
	cy.contains(tabName).should('be.visible')
})
