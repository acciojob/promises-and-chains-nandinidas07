describe('Voting Form Tests', () => {
  const baseUrl = 'http://localhost:3000'; // change to your actual URL

  beforeEach(() => {
    cy.visit(baseUrl + '/main.html');
  });

  it('should show alert for empty input fields', () => {
    cy.get('#btn').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter valid details.');
    });
  });

  it('should show welcome message if age > 18', () => {
    cy.get('#age').type('20');
    cy.get('#name').type('John');
    cy.get('#btn').click();

    cy.wait(4000); // simulate promise delay
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Welcome, John. You can vote.');
    });
  });

  it('should show rejection message if age < 18', () => {
    cy.get('#age').type('17');
    cy.get('#name').type('Doe');
    cy.get('#btn').click();

    cy.wait(4000); // simulate promise delay
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Oh sorry Doe. You aren't old enough.");
    });
  });
});