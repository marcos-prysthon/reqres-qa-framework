# QA Test Automation Framework – Reqres API & UI

This project is a full-featured **QA test automation framework** targeting the [Reqres API](https://reqres.in) and its UI counterpart built in React ([React-Reqres UI](https://github.com/bramantyobk/react-reqres)).  
It is designed to simulate real-world QA engineering workflows for both **API** and **UI testing** using modern tools and practices.

---

## 📌 Project Goals

- ✅ Gain hands-on experience building a modular test automation framework
- ✅ Cover API and UI testing using Playwright
- ✅ Implement CI/CD and reporting workflows
- ✅ Build a professional portfolio project for interviews and technical growth

---

## 🧪 Application Under Test

- **API:** [Reqres API](https://reqres.in) – provides mock endpoints like `GET /users`, `POST /login`, etc.
- **UI:** [React-Reqres](https://github.com/bramantyobk/react-reqres) – React application consuming the Reqres API

---

## 🛠 Tech Stack

| Category        | Tool / Library               |
| --------------- | ---------------------------- |
| Language        | JavaScript / TypeScript      |
| API Testing     | Playwright Test              |
| UI Testing      | Playwright                   |
| CI/CD           | GitHub Actions               |
| Reporting       | HTML Reporter / Allure (TBD) |
| Version Control | Git + GitHub                 |

---

## 📁 Folder Structure (Planned)

```plaintext
qa-framework-reqres/
├── tests/
│   ├── api/         # API test cases
│   └── ui/          # UI test cases
├── config/          # Environment settings
├── helpers/         # Reusable utilities
├── fixtures/        # Test data
├── reports/         # Test output
├── .github/
│   └── workflows/   # CI pipeline
├── playwright.config.js
└── README.md
```

## 🚀 Getting Started

# Clone the repository

git clone https://github.com/YOUR_USERNAME/qa-framework-reqres.git
cd qa-framework-reqres

# Install dependencies (to be defined in package.json)

npm install

# Run Playwright tests (after implementation)

npx playwright test
