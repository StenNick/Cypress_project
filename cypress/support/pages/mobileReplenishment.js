export class MobilePhoneReplenishment {


    selectCountryNumber(code) {
        cy.get('[data-qa-node="phone-code"]')
        .click()
        .get('[data-qa-node="phone-code-list"]').within(()=>{
            cy.get('input').type(code); 
            cy.get('[data-qa-value=Russia]').click()
    })
    }

    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
        .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type('5100 0000 0000 0008')

            .get('[data-qa-node="expiredebitSource"]')
            .type('12/24')

            .get('[data-qa-node="cvvdebitSource"]')
            .type(123)
            .wait(2000)
    }
    submitPayment() {
        cy.get('[data-qa-node="submit"]')
        .click()
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
         .should('have.text', debitCard)
    }

    checkNameOperator(operator) {
        cy.get('[data-qa-node="nameB"]')
        .should('have.text', operator)
    }

    checkAmountSum(sum) {
        cy.get('[data-qa-node="amount"]')
        .should('have.text', sum)
    }

    checkTypeAmount(currency) {      
        cy.get('[data-qa-node="currency"]')
        .eq(0)
        .should('have.text', currency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()