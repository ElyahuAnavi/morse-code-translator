# 🚀 Morse Code Translator API with TSOA in Node.js! 🚀

## Table of Contents

1. [About the Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Technologies and Structure](#-technologies-and-structure)
4. [Getting Started](#-getting-started)
5. [Running with Docker](#-running-with-docker)
6. [Dependencies](#-dependencies)
7. [CI/CD Pipeline](#-cicd-pipeline)
8. [API Endpoints Overview](#api-endpoints-overview-)

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

## 🐳 Running with Docker

### Prerequisites
- Ensure you have Docker and Docker Compose installed.

### Setting Up Environment Variables
Create a `.env` file in the root of your project with the following content:
```env
NODE_ENV=development
PORT=5500
```

### Running the App with Docker
1. Build and start the containers:
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
   ```
2. Access the application at `http://localhost:5500`.
3. Swagger documentation will be available at `http://localhost:5500/docs`.

### Stopping the App
To stop the containers, run:
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```

## 📦 Dependencies
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **typescript**: Typed JavaScript at Any Scale.
- **tsoa**: Build OpenAPI-compliant REST APIs using TypeScript and Node.
- **nodemon**: Simple monitor script for use during development of a Node.js app.
- **jest**: Delightful JavaScript Testing Framework with a focus on simplicity.
- **ts-node**: TypeScript execution and REPL for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.
- **winston**: A logger for just about everything.
- **zod**: TypeScript-first schema declaration and validation library.
- **body-parser**: Node.js body parsing middleware.
- **swagger-ui-express**: Middleware to serve Swagger UI bound to your Swagger document.

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

## API Endpoints Overview 🚏

After launching the server, the API endpoints can be accessed at `http://localhost:5500`.

### Endpoints
- **POST /morse/text-to-morse**: Translate text to Morse code.
- **POST /morse/morse-to-text**: Translate Morse code to text.

Feel free to clone the repo, try it out, and let me know what you think! Your feedback is highly appreciated.
