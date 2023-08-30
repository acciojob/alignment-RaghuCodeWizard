//your JS code here. If required.
describe("HTML Assignment #3", () => {
    const baseUrl = "http://localhost:3000"; // Replace with your base URL
    
    it("should assert colspan attribute", () => {
        cy.visit(baseUrl);
        cy.get('.center[colspan="6"]').should('have.length', 2);
    });

    it("should assert padding and border styles", () => {
        cy.visit(baseUrl);
        cy.get('td')
            .should('have.css', 'padding', '1px')
            .and('have.css', 'border', '1px solid rgb(0, 0, 0)');
    });
});
