/// <reference types="Cypress" />

describe("Find Elements on the page", ()=> {


    it('Equel Get one element from many', () => {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
        cy.get(".traversal-drinks-list>*").eq(2).should("contain", "Milk")
    });

    it('Filter elements', () => {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
        let button = cy.get(".btn-group-toggle>*").eq(2).click();
        button.filter(".focus").should("contain", "Button-3");
    });



    it.only('Find elements', () => {
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
        cy.get(".traversal-pagination").find("li").find("a").should("have.length", 7)
    });


})