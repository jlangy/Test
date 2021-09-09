/// <reference types="cypress" />

const CONTAINS_DASHBOARD_LINK = 'My Dashboard';
const CONTAINS_REQUEST_INTEGRATION = 'Request Integration';
const CONTAINS_NOT_PROJECT_LEAD_TEXT =
  'We can only process access requests submitted by product owners, project admin or team leads.';
const CONTAINS_NEXT_BUTTON = 'Next';
const CONTAINS_SUBMIT_BUTTON = 'Submit';
const CONTAINS_DELETE_BUTTON = 'Delete';
const CONTAINS_INSTALLATION_JSON = 'Installation JSON';

const GET_PROJECT_LEAD_FIELDS = '#root_projectLead';
const GET_NEW_TO_SSO_FIELDS = '#root_newToSso';
const GET_PROJECT_NAME = '#root_projectName';
const GET_PUBLIC_ACCESS = '#root_publicAccess';
const GET_DEV_REDIRECT_URIS = '#root_devValidRedirectUris_0';
const GET_DEV_REDIRECT_URIS_1 = '#root_devValidRedirectUris_1';
const GET_TEST_REDIRECT_URIS = '#root_testValidRedirectUris_0';
const GET_PROD_REDIRECT_URIS = '#root_prodValidRedirectUris_0';
const GET_AGREE_WITH_TERMS = '#root_agreeWithTerms';

const projectName = 'cypress test';

const answerRadio = (getBy, answer) => {
  cy.get(getBy).within(() => {
    cy.contains(answer).click();
  });
};

const validateSubmission = (filename) => {
  cy.contains('tr.active', projectName);
  cy.contains('tr.active', 'Submitted');
  cy.contains(CONTAINS_INSTALLATION_JSON, {timeout: 600000}).screenshot(filename);
};

beforeEach(() => {
  cy.window().then((win) => {
    throw new Error(JSON.stringify(Cypress.env('TOKEN')))
    // console.log(typeof Cypress.env('TOKEN'))

    // win.sessionStorage.setItem('tokens', JSON.stringify(Cypress.env('TOKEN')));
  });
  cy.visit('https://bcgov.github.io/sso-terraform-dev/');
});

describe('Main Workflows', () => {

  it('should be logged in', () => {
    cy.contains('Log out')
    cy.screenshot('test')
  });
});
