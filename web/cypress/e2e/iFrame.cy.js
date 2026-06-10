describe( 'Tocar o vídeo',()=>{
    beforeEach(()=>{
        cy.login(true)
    })

    it('Deve poder tocar o video de exemeplo', ()=>{

        cy.contains('Video').click()

        cy.wait(3000) //esperar para carregar thinking time

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})