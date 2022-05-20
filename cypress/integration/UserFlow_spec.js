describe('User flow', () => {
  it('should be able to see the home page', () => {
    cy.visit('http://localhost:3000/')
    .get('h1').should('have.text', 'Fun with AI')
    .get('.enter-prompt-label').should('have.text', 'Enter Prompt')
    .get('.prompt').should('exist')
    .get('#enterPrompt').should('exist')
    .get('.select-box').should('exist')
    .get('.responses').should('exist')
    .get('.response-header').should('have.text', 'Responses')
    .get('.no-response-text').should('have.text','You have no responses saved')
  })

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

  it('should be able to see error in text area', () => {
    cy.visit('http://localhost:3000/')
    .get('textarea').type('Write me a poem')
    .intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions',
    {
      ok: false, 
      statusCode: 401,  
    })
    .get('.submit-btn').click()
    .get('.error-message').should('have.text', 'We\'re sorry, something went wrong with the server. Please try again later')
  })
})