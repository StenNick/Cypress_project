describe("Iterate over elements", ()=>{
    it("Log information of all makeUp", ()=> {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        cy.get(".fixed_wrapper").each(($el, index, $list)=> {
            cy.log("Index: " + index + " : " + $el.text())
        });
    });


    it("Add product to basket", ()=> {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();

        cy.get(".fixed_wrapper").each(($el, index, $list)=> {
            if($el.text().includes("Product with stock locations")) {
                cy.wrap($el).click()
            }
        });
    });
});