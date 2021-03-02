export class BassePage {
    // тут будут выводится ОБЩИЕ сценарии для всех страниц

    open(url) {
        cy.visit(url)
    }

     
}

export const basePage = new BassePage()