describe("Authentication functionality", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows login form", () => {
    cy.showLoginForm();
  });

  it("logs in user with correct login-information", () => {
    cy.showLoginForm();
    cy.loginCorrectUser();
  });

  it("does not log in a user with wrong credentials and also displays a message", () => {
    cy.showLoginForm();
    cy.loginWrongUser();
    cy.browserAlert();
  });

  it("logs out the user", () => {
    cy.showLoginForm();
    cy.loginCorrectUser();
    cy.logout();
  });
});
