/// <reference types="Cypress" />
describe('login and add item to cart ', () => {
  it('login & add item to the cart', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type("lanaehab")
    cy.get('#loginFrm_password').type("lanaabbasl123")
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.get('.nav-pills > :nth-child(1) > .active').click()
    cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
    cy.get('#block_frame_special_1772 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart').click()
    cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
    cy.get('#cart_checkout1').click()
    cy.get('#checkout_btn').click()
    cy.get('.maintext').should('include.text', 'Your Order Has Been Processed!')






  });
});
