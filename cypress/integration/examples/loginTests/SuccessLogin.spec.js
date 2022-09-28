describe('Login', () => {
	afterEach('tearDown', () => {
		cy.log('Test finalizado')
		cy.clearLocalStorage()
		cy.clearCookies()
	})

	it.skip('should login correctly', { browser: '!chrome' }, () => {
		//cy.viewport(1280,720)
		//cy.viewport('iphone-4')

		cy.visit('', { timeout: 10000 })

		cy.screenshot({ capture: 'fullPage' })

		cy.fixture('user').then(user => {
			cy.login(user.email, user.password)
		})

		cy.contains('Your Feed', { timeout: 7000 }).should('be.visible')
		cy.contains('Your Feed', { timeout: 7000 }).screenshot()
	})
})

context('Visual testing', () => {
	it('should show the home page', { retries: 2 }, () => {
		cy.visit('').then(() => {
			cy.document().toMatchImageSnapshot()
		})
	})
	it('should show a h1 element', () => {
		cy.visit('').then(() => {
			cy.get('h1').toMatchImageSnapshot()
		})
	})

	const sizes = ['iphone-6', 'ipad-2', [1280, 920]]

	sizes.forEach(size => {
		it(`should match in resolution ${size}`, () => {
			cy.setResolution(size)
			cy.visit('').document().toMatchImageSnapshot()
		})
	})
})

describe.skip('Assertions', () => {
	it('ideas and tips', () => {
		//retry until we find 5 matching selected lists
		cy.get('li.selected').should('have.length', 5)

		//retry until input does not hace class disabled
		cy.get('form').find('input').should('not.have.class', 'disabled')

		//retry until textarea has the correct value
		cy.get('textarea').should('have.value', 'Texto')

		//retry until span does not contain "click me"
		cy.get('a').parent('span').should('not.contain', 'click me')

		//retry until a element is visible
		cy.get('button').should('be.visible')

		//retry until a element exists
		cy.get('button').should('exist')
	})
})
