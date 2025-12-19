# Cypress Cross-Origin Test Suite

This project demonstrates how to test two different websites in a single Cypress test using the `cy.origin()` command.

---

## Description

Browsers normally block scripts from one website from touching another website for security. This is called the Same-Origin Policy. Cypress uses `cy.origin()` to bypass this limit, allowing you to test flows like logging in through Google or visiting an external payment page.

## Prerequisites

- Node.js (version 14 or higher)
- Cypress (version 9.6.0 or higher is required for cross-origin support)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the necessary dependencies:

```bash
npm install

```

## Usage

To run the test in the Cypress runner, execute the following command:

```bash
npx cypress open

```

Alternatively, to run the test in headless mode:

```bash
npx cypress run

```

## Implementation Details

The test script performs the following sequence of operations:

1. **Initial Visit**: The test starts by visiting a primary domain (w3schools.com).
2. **Origin Shift**: The `cy.origin()` block is invoked to shift the testing context to a second domain (https://www.google.com/search?q=google.com).
3. **Internal Navigation**: Once inside the second origin, the test navigates to the root path.
4. **Assertion**: The test validates that the page title contains the expected string.
