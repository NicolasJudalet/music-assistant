describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/')

        cy.get('#startButton').click()
        cy.url().should('include', '/studio')
    })
})
