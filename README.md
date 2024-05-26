
# 🚀 Morse Code Translator API with TSOA in Node.js! 🚀

## Table of Contents

1. [About the Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Technologies and Structure](#-technologies-and-structure)
4. [Getting Started](#-getting-started)
5. [Dependencies](#-dependencies)
6. [CI/CD Pipeline](#-cicd-pipeline)
7. [API Endpoints Overview](#api-endpoints-overview-)

## 📖 About the Project
This project is a Morse Code Translator API built using Node.js and TSOA. It provides endpoints for translating text to Morse code and vice versa. The project utilizes TypeScript for strong typing and leverages TSOA for streamlined API development and automatic OpenAPI (Swagger) documentation generation.

## 🛠 Key Features
- **TypeScript**: Leveraged for strong typing and robust code.
- **TSOA**: Simplified API development with decorators and automatic documentation.
- **Node.js**: Built on Node.js for a fast and scalable server foundation.
- **Express**: Utilized Express for routing and middleware support.
- **OpenAPI Documentation**: Made API exploration effortless with generated Swagger docs.
- **Unit Testing**: Ensured reliability with comprehensive tests using Jest.
- **Nodemon**: Enhanced development workflow with automatic server restarts.
- **CI/CD Pipeline**: Automated testing and ensured code quality with GitHub Actions.

## 🏗 Technologies and Structure
- **Backend**: Node.js with Express, utilizing TypeScript for robust development practices.
- **Documentation**: TSOA for creating and managing API documentation.
- **Testing**: Jest for writing and running unit tests.
- **Development Tools**: Nodemon for automatic server restarts during development.

## 🚀 Getting Started

### Prerequisites
- Ensure you have Node.js installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ElyahuAnavi/morse-code-translator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd morse-code-translator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
- Start the development server:
  ```bash
  npm run dev
  ```
- Run tests:
  ```bash
  npm test
  ```

## 📦 Dependencies
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **typescript**: Typed JavaScript at Any Scale.
- **tsoa**: Build OpenAPI-compliant REST APIs using TypeScript and Node.
- **nodemon**: Simple monitor script for use during development of a Node.js app.
- **jest**: Delightful JavaScript Testing Framework with a focus on simplicity.
- **ts-node**: TypeScript execution and REPL for Node.js.

## 🚀 CI/CD Pipeline
The CI/CD pipeline for this project is set up using GitHub Actions. The pipeline ensures that all tests pass before any changes are merged into the `main` branch. Here's a brief overview of the setup:

### Workflow Configuration
The workflow is defined in the `.github/workflows/ci.yml` file. It triggers on pushes and pull requests to the `main` branch and includes the following steps:
- Checkout the repository.
- Set up Node.js.
- Install dependencies.
- Run tests.

### Branch Protection
The `main` branch is protected, requiring all CI checks to pass before merging.

```yaml
name: CI Pipeline

on:
  push:
    branches:
      - '*'
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14, 16]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

## API Endpoints Overview 🚏

After launching the server, the API endpoints can be accessed at `http://localhost:3000`.

### Endpoints
- **POST /morse/text-to-morse**: Translate text to Morse code.
- **POST /morse/morse-to-text**: Translate Morse code to text.


Feel free to clone the repo, try it out, and let me know what you think! Your feedback is highly appreciated.

---

This README provides a comprehensive overview of your project, including setup instructions, key features, dependencies, CI/CD pipeline configuration, and API endpoints.
