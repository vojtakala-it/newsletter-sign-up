describe('Newsletter Sign-up Form', () => {
    const baseUrl = Cypress.config().baseUrl;
    before(() => {
        cy.visit(baseUrl);
    })
    beforeEach(() => {
        cy.wait(1000);
    });

    it('display a newsletter form with two columns next to each other', () => {
        cy.get('.grid--template-areas-a-b')
            .invoke('css', 'grid-template-areas')
            .should('eq', '"A B"');
    });

    it('the left column should display a title: Stay updated!', () => {
        cy.get('.grid__item-a div h1')
            .should('have.text', 'Stay updated!');
    });

    it('there should be a list with three points', () => {
        cy.get('.grid__item-a list ul li')
            .should('have.length', 3);
    });

    it('below the list should be an input field with label: Email address', () => {
        cy.get('.form__label')
            .should('have.text', 'Email address');
    });

    it('the input field should have a placeholder: email@company.com', () => {
        cy.get('.form__input')
            .should('have.attr', 'placeholder', 'email@company.com');
    });

    it('validation should fail if invalid e-mail is inserted', () => {
        cy.get('.form__input')
            .type('invalid-mail@gmail.c')
            .should('have.class', 'form__input--invalid')
            .clear();
    });

    it('should not proceed if submit button is clicked, div with text Valid email required is still displayed', () => {
        cy.get('#submitBtn').click();
        cy.wait(1000);
        cy.get('.form__input__warning')
            .should('have.text', 'Valid email required');
    });

    it('validation should pass if valid e-mail is inserted', () => {
        cy.get('.form__input')

            .type('n3ey@gmail.com')
            .should('have.class', 'form__input--valid');
    });

    it('should proceed if submit button is clicked', () => {
        cy.get('#submitBtn').click();
        cy.wait(1000);
        cy.get('main div')
            .should('have.class', 'loader');
    });

    it('a success message with title Thanks for subscribing should appear', () => {
        cy.get('.success-container h1')
            .should('have.text', 'Thanks for subscribing!');
    });

    it('Should return back to the form if dismiss button is clicked', () => {
        cy.get('#return').click();
        cy.wait(1000);
        cy.get('.grid__item-a div h1')
            .should('have.text', 'Stay updated!');
    });
});
