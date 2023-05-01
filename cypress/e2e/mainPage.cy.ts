describe('Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render cards', () => {
    cy.get('div[data-testid="card"]').should('have.length', 12);
  });

  it('should show loading after search', () => {
    cy.intercept({ url: 'https://api.unsplash.com/search/**', middleware: true }, (req) => {
      req.on('response', (res) => {
        res.setDelay(1000);
      });
    });

    cy.get('input[type="search"]').type('boy');
    cy.get('form').submit();

    cy.get('.planet').should('be.visible');
  });

  it('should show modal after clicking on a card', () => {
    cy.get('div[data-testid="cardsList"] > div[data-testid="card"]:first-of-type').click();
    cy.get('div[data-testid="modal"]').should('be.visible');
  });
});

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should render form', () => {
    cy.get('form').should('be.visible');
  });

  it('should create card', () => {
    cy.get('#nickname').type('Abcdef');
    cy.get('select').select('Canada');
    cy.get('input[type="datetime-local"]').type('2017-06-01T08:30');
    cy.get('input[type=file]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.png',
      lastModified: Date.now(),
    });
    cy.get('input[name="sex"]:first-of-type').check();
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();
    cy.wait(100);
    cy.get('div[data-testid="usersList"] > *:first-child').should('be.visible');
  });
});
