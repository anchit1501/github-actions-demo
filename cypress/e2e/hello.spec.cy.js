// cypress/e2e/hello.spec.cy.js
describe('Hello API', () => {
  it('returns a hello message', () => {
    // Make a request to our single endpoint
    cy.request('GET', 'http://localhost:3000/api/hello')
      .then((response) => {
        // Check that the status code is 200
        expect(response.status).to.eq(200);

        // Check that the response body has { message: 'Hello World!' }
        expect(response.body).to.have.property('message', 'Hello World!');
      });
  });
});
