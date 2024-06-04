///<reference types='cypress'/>

describe('Funcionalidade: Login', ()=> { }
    
it ('Deve fazer login com sucesso', () => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username') .type ('celita27.teste@teste.com.br')
     cy.get('#password').type('271518vini')
     cy.get('.woocommerce-form >.button').click()
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, celita27.teste (não é celita27.teste? Sair)')

}) 


})