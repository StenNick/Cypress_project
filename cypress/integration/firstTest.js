/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { cardTransfer } from "../support/pages/cardTransfer"
import { basePage } from "../support/pages/basePage"


it('Replenishment phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
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


it('Money transfer between cards', () => {

    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
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

it('GET request', () => {
    cy.request({
        method: 'GET',
        url: "https://reqres.in/api/users?page=2",
        body: "",
        headers: "",
        "content-type": "application/json; charset=utf-8"

    }).then((response)=> {
            console.log(response)
        })
});

it('POST request', () => {

    const requestBody = {
            "name": "STEN",
            "job": "Developer"
    }

    cy.request({
        method : "POST",
        url : "https://reqres.in/api/users",
        body: requestBody
    }).then((response) => {
        expect(response).to.have.property('status').to.equal(201)
        expect(response.body).to.have.property('job').to.equal('Developer')
        console.log(response.body)
    })
});


it.only('GET list users', () => {
    cy.request({
        method : "GET",
        url : "https://reqres.in/api/unknown"
    }).then((response) => {
        expect(response).to.have.property('status').to.equal(200)
        expect(response.body).to.have.property('page').to.equal(1)
        console.log(response.body)
    })

});