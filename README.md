# Vollmed QA Automation 🏥

[![Cypress](https://img.shields.io/badge/-cypress-%23E9E9E9?style=for-the-badge&logo=cypress&logoColor=17202C)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Faker](https://img.shields.io/badge/Data%20Gen-Faker.js-green?style=for-the-badge)](https://fakerjs.dev/)

A professional end-to-end (E2E) and API testing suite for the **Vollmed** medical management platform. This project implements industry-standard automation patterns to ensure high reliability and maintainability.

## 🚀 Project Overview

The automation suite covers the critical business paths of the Vollmed ecosystem:
- **Clinic Lifecycle:** From registration with dynamic data to authenticated management.
- **Authentication:** Multi-method validation (UI-based and API-driven).
- **Specialist Management:** Modal-driven workflows and insurance configuration.
- **Data Integrity:** Real-time validation of form fields and API responses.

## 🏗️ Professional Architecture

This project is built with scalability in mind, utilizing:
- **Page Object Model (POM):** Decouples test specifications from UI selectors, centralizing maintenance in `cypress/support/pages`.
- **Custom Commands:** Abstracts complex sequences (like session-based login) into reusable commands.
- **Dynamic Data Injection:** Uses `@faker-js/faker` for localized (PT-BR) data generation, avoiding test pollution and hardcoded dependencies.
- **Session Management:** Implements `cy.session` to drastically reduce test execution time by persisting authentication states.

## 📁 Project Structure

```text
cypress/
├── e2e/               # Test specifications (Feature-based)
├── fixtures/          # Static data for edge cases
├── support/
│   ├── pages/         # Page Object Model classes (POM)
│   ├── commands.js    # Global custom commands
│   └── e2e.js         # Framework configuration and hooks
└── results/           # Execution reports and artifacts
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v18.x or higher)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JessyTeixeira-QA/voll-qa-automation.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

| Mode | Command | Description |
| :--- | :--- | :--- |
| **Interactive** | `npx cypress open` | Opens the Cypress Test Runner for debugging. |
| **Headless** | `npx cypress run` | Executes all tests in the background. |
| **Tablet** | `npm run test:tablet` | Runs tests in tablet-specific viewport. |

## 🧪 Testing Best Practices
- ✅ **Independence:** Each test file is self-contained and manages its own state.
- ✅ **Reliability:** Leverages Cypress's automatic waiting and retry logic over static `cy.wait()`.
- ✅ **Clean Code:** Adheres to ESLint rules for consistent JavaScript styling.
- ✅ **Readability:** Uses descriptive Gherkin-style `it` blocks for clear documentation of test intent.

---
Developed by [Jessy Teixeira](https://github.com/JessyTeixeira-QA) | Professionalized by Manus AI
