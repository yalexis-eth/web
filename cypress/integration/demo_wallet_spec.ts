import { HistoryTimeframe } from '@shapeshiftoss/types'
import { translations } from 'assets/translations'

const DEMO_WALLET_LABEL = 'DemoWallet'

describe('Demo wallet', () => {
  const baseUrl = Cypress.config().baseUrl
  // const foxContract = Cypress.env('foxContract')

  before(() => {
    cy.clearIndexedDB()
  })

  beforeEach(() => {
    cy.mockAllRequests()
  })

  describe('Connect wallet page', () => {
    it('renders view a demo button', () => {
      cy.visit('')
      cy.getBySel('view-a-demo-button')
        .should('exist')
        .and('have.text', translations.en.connectWalletPage.orViewADemo)
    })

    it('can access dashboard with a demo wallet', () => {
      cy.visit('')
      cy.getBySel('view-a-demo-button').as('viewADemoButton')
      cy.get('@viewADemoButton').should('exist').and('be.visible')
      cy.get('@viewADemoButton').click()
      cy.url().should('equal', `${baseUrl}dashboard`)
    })
  })

  describe('Demo wallet Dashboard', () => {
    beforeEach(() => {
      cy.connectDemoWallet()
    })

    it('renders user menu with connected state', () => {
      cy.getBySel('user-menu-button').as('userMenuButton')
      cy.get('@userMenuButton').should('exist').and('have.text', DEMO_WALLET_LABEL)
      cy.getBySel('user-menu-wallet-warning-icon').should('not.exist')
      cy.get('@userMenuButton').click()
      cy.getBySel('connected-wallet-menu-wallet-name')
        .should('exist')
        .and('have.text', DEMO_WALLET_LABEL)
      cy.getBySel('connected-wallet-menu-wallet-disconnected').should('not.exist')
    })

    it('FiatRamps button triggers connect wallet modal', () => {
      cy.getBySel('nav-bar-fiat-ramps-button').click()
      cy.getBySel('wallet-provider-select-modal-header')
        .should('exist')
        .and('be.visible')
        .and('have.text', translations.en.walletProvider.selectModal.header)
    })

    it('Portfolio graph renders with an initial timeframe of 1 month', () => {
      cy.getBySel('dashboard-portfolio-card-header')
        .find('.chakra-button__group > input')
        .eq(3)
        .should('have.value', HistoryTimeframe.MONTH)
        .and('be.checked')
    })
  })

  // Why does waiting for select wallet modal cause a 'ResizeObserver loop limit exceeded' error?
  // describe('Demo wallet Assets', () => {
  //   beforeEach(() => {
  //     cy.connectDemoWallet()
  //   })

  //   it('opens connect wallet modal on send', () => {
  //     cy.getBySel('account-row-asset-name-FOX').as('foxAsset')

  //     cy.get('@foxAsset').should('exist')
  //     cy.get('@foxAsset').click()
  //     cy.url().should('equal', `${baseUrl}assets/${foxContract}`)

  //     cy.getBySel('asset-action-send').as('sendButton')
  //     cy.get('@sendButton').should('be.visible').and('not.be.disabled')
  //     cy.get('@sendButton').click()

  //     cy.getBySel('wallet-provider-select-modal-header')
  //       .should('exist')
  //       .and('be.visible')
  //       .and('have.text', translations.en.walletProvider.selectModal.header)

  //     cy.getBySel('select-modal-close-button').click()
  //   })

  //   it('opens connect wallet modal on receive', () => {
  //     cy.getBySel('account-row-asset-name-FOX').as('foxAsset')

  //     cy.get('@foxAsset').should('exist')
  //     cy.get('@foxAsset').click()
  //     cy.url().should('equal', `${baseUrl}assets/${foxContract}`)

  //     cy.getBySel('asset-action-receive').as('receiveButton')
  //     cy.get('@receiveButton').should('be.visible').and('not.be.disabled')
  //     cy.get('@receiveButton').click()

  //     cy.getBySel('wallet-provider-select-modal-header')
  //       .should('exist')
  //       .and('be.visible')
  //       .and('have.text', translations.en.walletProvider.selectModal.header)

  //     cy.getBySel('select-modal-close-button').click()
  //   })
  // })
})
