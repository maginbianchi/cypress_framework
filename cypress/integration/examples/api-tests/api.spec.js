describe('REST API Test with Cypress', () => {
	it('API Test - Validate headers', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})

	it('API Test - Validate Status Code', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
		cy.get('@pokemon').its('status').should('equal', 200)
	})

	it('API Test - Validate Name Value', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
		cy.get('@pokemon').its('body').should('include', { name: 'pikachu' })
	})

	it('API Test - Validate Negative status code', () => {
		cy.request({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/1000',
			failOnStatusCode: false,
		}).as('pokemon')
		cy.get('@pokemon').its('status').should('equal', 404)
	})

	it('API Test - Validate all together', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').then(pokemon => {
			cy.wrap(pokemon.headers)
				.its('content-type')
				.should('include', 'application/json; charset=utf-8')
			expect(pokemon.status).equal(200)
			expect(pokemon.body).include({ name: 'pikachu' })
		})
	})
})

describe('Backend testing', () => {
	it('Itercept a request', () => {
		cy.server
	})
})
