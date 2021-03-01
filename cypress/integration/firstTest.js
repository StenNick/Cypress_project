/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { cardTransfer } from "../support/pages/cardTransfer"


it('Replenishment phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en');
    // type number phone
    mobileReplenishment.typePhoneNumber('686979712');
    // type amount sum
    mobileReplenishment.typeAmount(200);
    // type data to the card
    mobileReplenishment.typeDebitCardData('5100 0000 0000 0008', '12/24', 123);
    // submit
    mobileReplenishment.submitPayment();
    //basket
    mobileReplenishment.checkDebitCard('5100 **** **** 0008')
    // check operator name
    mobileReplenishment.checkNameOperator('Kyivstar Ukraine');
    // check sum
    mobileReplenishment.checkAmountSum('200')
    // check amount 
    mobileReplenishment.checkTypeAmount('UAH')
});


it.only('Money transfer between cards', () => {

    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

    cardTransfer.fillOurCard('4552331448138217', '0524', '111')
    cy.wait(1000)
    cardTransfer.fillOwnerCard('Shon', 'Bin')
        // Recipient's cards
    cardTransfer.fillRecipientCard('5309233034765085','Sam',  'Fisher')
        // Amount
    cardTransfer.typeAmount(4000)
        // our card
    cardTransfer.checkOurCard('* 8217', '4 000 UAH')
        // recent card
    cardTransfer.checkRecentCard('* 5085', '4 000 UAH')
});