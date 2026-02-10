# Vollmed QA Automation 🏥

![Cypress](https://img.shields.io/badge/-cypress-%23E9E9E9?style=for-the-badge&logo=cypress&logoColor=17202C)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Testing Library](https://img.shields.io/badge/-Testing%20Library-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

This repository contains the automated end-to-end (E2E) and API testing suite for the **Vollmed** platform, a medical management system. The project uses **Cypress** with a professional architecture focused on maintainability and scalability.

## 🚀 Project Overview

The automation suite covers critical user journeys, including:
- **Clinic Registration:** Full flow with dynamic data generation.
- **Authentication:** Secure login via UI and API.
- **Dashboard Management:** Specialist registration and insurance plan configuration.
- **API Testing:** Validation of authentication and resource endpoints.

## 🏗️ Architecture

The project follows industry best practices:
- **Page Object Model (POM):** Encapsulates page logic to reduce duplication and improve readability.
- **Custom Commands:** Reusable utility functions for common actions (e.g., `cy.login`).
- **Data Generation:** Uses `@faker-js/faker` for realistic and unique test data.
- **Environment Configuration:** Secure handling of credentials and API endpoints via `cypress.config.js`.

## 📁 Project Structure

```text
cypress/
├── e2e/               # Test specifications (E2E and API)
├── fixtures/          # Static test data
├── support/
│   ├── pages/         # Page Object classes
│   ├── commands.js    # Custom Cypress commands
│   └── e2e.js         # Global configuration and hooks
└── results/           # Test execution reports (Mochawesome)
```

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

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

**Open Cypress Test Runner (Interactive Mode):**
```bash
npx cypress open
```

**Run All Tests (Headless Mode):**
```bash
npx cypress run
```

**Run Tests in Specific Viewport (Tablet):**
```bash
npm run test:tablet
```

## 📊 Reporting
Test results are automatically generated using **Mochawesome**. After execution, you can find the HTML reports in the `cypress/results` directory.

## 🧪 Best Practices Implemented
- ✅ **Independent Tests:** Each test can run in isolation.
- ✅ **Dynamic Data:** No hardcoded data for registration flows.
- ✅ **Wait Strategy:** Uses built-in Cypress retries and assertions instead of fixed `cy.wait()`.
- ✅ **Clean Code:** ESLint integration for consistent code style.

---
Developed with ❤️ by [Jessy Teixeira](https://github.com/JessyTeixeira-QA)
