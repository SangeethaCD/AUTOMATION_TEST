# Testing-Training

This project uses **Playwright** and **Cucumber** (with TypeScript) to run automated tests. It currently has two main feature sets:

- **Login Feature**
- **Organization Feature**

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or above recommended)
- npm (comes with Node.js)

---

## Setup

1. Clone this repository:

```bash
git clone https://github.com/SangeethaCD/AUTOMATION_TEST.git
cd testing-training
```
2. Install dependencies:
```bash
npm install

```

3. (Optional) If your tests require environment variables, add a .env file in the root folder.
### Available Scripts
#### Run all tests
```bash
npm test

```
This runs all Cucumber scenarios.
Run only Organization feature tests
```bash
npm run test:org
```
Runs only scenarios tagged with @organization.
Run only Login feature tests

```bash
npm run test:login
```

Runs only scenarios tagged with @login.
Generate and open the HTML report
```bash
npm run report
```

This will generate the cucumber JSON report and then create a human-readable HTML report. The report will open automatically in your default browser.