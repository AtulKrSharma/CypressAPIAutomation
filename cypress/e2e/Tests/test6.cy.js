/// <reference types="Cypress" />


// before(() => {
//   // root-level hook
//   // runs once before all tests
//   cy.log('root-level hook: this is set up block')
// })

// beforeEach(() => {
//   // root-level hook
//   // runs before every test block
//   cy.log('root-level hook:this is before each')
// })

// afterEach(() => {
//   // runs after each test block
//   cy.log('root-level hook:this is after each')
// })

// after(() => {
//   // runs once all tests are done
//   cy.log('root-level hook:this is tear down block')
// })



describe('TestSuite6-Hooks', () => {


  before(() => {
    // runs once before all tests in the block
    cy.log('this is set up block')
  })

  beforeEach(() => {
    // runs before each test in the block

    cy.log('this is before each')
  })

  afterEach(() => {
    // runs after each test in the block
    cy.log('this is after each')
  })

  after(() => {
    // runs once after all tests in the block
    cy.log('this is tear down block')
  })


  it('searching', () => {

    cy.log('I am in searching')

  });


  it('Adv searching', () => {

    cy.log('I am in Adv searching')

  });



  it('Prod Listing', () => {

    cy.log('I am in Prod Listing')

  });













});