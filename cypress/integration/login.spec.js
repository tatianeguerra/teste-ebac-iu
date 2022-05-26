///<reference types="cypress" />

context('funcionalidade login', () =>{

it('deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get ('#password').type('teste@teste.com')
        cy.get ('woocommerce-form > .button') .click ()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)'). should('contain')
    })

 it ('deve exibir uma mensagem de erro ao inserir usuario ou senha invalidos', () => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username') .type('ebac@test.com')
     cy.get('#password') .type('teste@teste')
     cy.get('.woocommerce-form > .button') .click()

     cy.get('.woocommwerce-error') .should('contain', 'Endereçode e-mail desconhecido')
})

it('deve exibir uma mensagem de erro ao inserir senha invalida' , () => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type ('aluno_ebac@teste.com')
    cy.get('#passwork').type('teste@teste')
    cy.get ('.woocommerce-form > .button').click ()

    cy.get('.woocommerce-error'). should('contain', 'erro: a senha fornecida para o e-mail aluno_ebac@teste.com esta incorreta. perdeu a senha?')
})
})
