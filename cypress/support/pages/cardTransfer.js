export class TransferBetweenCard {

    fillOurCard(numberCard, dateCard, cvv) {

        cy.get('[data-qa-node="numberdebitSource"]')
        .clear()
        .type(numberCard)

        .get('[data-qa-node="expiredebitSource"')
        .type(dateCard)

        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
        .wait(1000)
    }

    fillOwnerCard(firstName, lastName) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .clear()
            .type(lastName)
    }

    fillRecipientCard(numberCard, firstName, lastName) {
        cy.get('[data-qa-node="numberreceiver"]')
        .type(numberCard)
        .get('[data-qa-node="firstNamereceiver"]')
        .type(firstName)
        .get('[data-qa-node="lastNamereceiver"]')
        .type(lastName)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
        .clear()
        .type(amount)
        .get('button[type=submit]')
        .wait(1000)
        .click()
        // checkout amount
        // .get('[data-qa-node="currency"]')
        // .click()
        // .get('[data-qa-value="USD"]')
        // .should('have.text', 'USD')
        // .click()
    }

    checkOurCard(numberCard, amount) {
        cy.get('[data-qa-node="payer-card"]')
        .should('have.text', numberCard)
        .get('[data-qa-node="payer-amount"]')
        .should('contain.text', amount)
    }

    checkRecentCard(numberCard, amount) {
        cy.get('[data-qa-node="receiver-card"]')
        .should('contain.text', numberCard)
        .get('[data-qa-node="receiver-amount"]')
        .should('contain.text', amount)
    }

}



export const cardTransfer = new TransferBetweenCard()