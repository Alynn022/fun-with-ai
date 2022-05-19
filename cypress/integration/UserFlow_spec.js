describe('User flow', () => {
  it('should be able to enter a prompt and view prompt and response after submit', () => {
    cy.visit('http://localhost:3000/')
    .get('textarea').type('Write me a poem')
    .intercept(
      "POST",
      "https://api.openai.com/v1/engines/text-curie-001/completions", 
      { fixture: 'aiData.json'}
    )
    .get('.submit-btn').click()
    .get('.user-prompt').should('have.text', 'Write me a poem')
    .get('.user-response').should('have.text', 'This is a test')
  })
})