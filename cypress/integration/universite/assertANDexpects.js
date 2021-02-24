/// <reference types="Cypress" />



it("button web element", ()=> {
    cy.visit("https://webdriveruniversity.com/Page-Object-Model/index.html");
    cy.get("#button-find-out-more").contains("Find out more!", {matchCase: false})
})


it("Should", ()=> {
    cy.visit("https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=100");
    cy.get("#myInput")
        .type(100)
        .should("have.value", 100)
})


it("Expect", ()=> {
    cy.visit("https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=100");
    cy.get("#myInput")
        .type(100)
        .then(input => {
            expect(input).to.have.value(100)
        })
})



it("should have attr - placeholder", ()=> {
    cy.visit("https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=100");
    cy.get("#myInput")
        .should("have.attr", "placeholder", "Food Item")
})

it("Get some elements with method WITHIN()", ()=>{ // находим РОДИТЕЛЯ и ищем ВНУТРИ ПРЕДКА его дочерние элементы
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get('#form-textfield').within(()=> {
        cy.get('input').eq(0).should('have.attr', 'name', 'firstname')
        .type(100)
        .should('have.value', 100)
        cy.get('input').eq(1).should('have.attr', 'name', 'lastname');
    })

});



it.only('Mouse hover', () => {
    cy.visit('https://webdriveruniversity.com/Actions/index.html');
    cy.get(".dropbtn").eq(0)
        .trigger('mouseover') // наведение на элемент
        .get('.list-alert').eq(0).click({force: true}) // если элемент скрыт
        .should('have.class', 'list-alert')
});
