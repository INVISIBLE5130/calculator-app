# Calculator App Documentation

Welcome to the documentation for the Calculator App! This calculator app is built using React and allows you to perform basic calculations.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Features](#features)
- [Usage](#usage)
- [Build](#build)
- [Dependencies](#dependencies)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18.7.0 recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the Calculator App repository from GitHub:

   ```bash
   git clone https://github.com/your-username/calculator-app.git
   ```

2. Change to the project directory:

   ```bash
   cd calculator-app
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

### Running the App

To run the app in development mode, use the following command:

```bash
npm start
```

The app will open in your default web browser at [http://localhost:3000](http://localhost:3000). You can now use the calculator for calculations.

## Features

- Perform basic calculations (addition, subtraction, multiplication, division).
- Display the history of the last 20 clicked buttons.
- Clear the calculation history.

## Usage

- Use the numeric buttons (0-9) to input numbers for calculations.
- Use the operation buttons (+, -, *, /) to perform calculations.
- Press the "=" button to see the result of the calculation.
- The last 20 clicked buttons are displayed in the history section.
- Click the "Clear History" button to clear the calculation history.

## Build

To build the app for production, use the following command:

```bash
npm run build
```

The optimized production build will be available in the `build` folder.

## Dependencies

All project dependencies are managed using Node.js v18.7.0. You can find the complete list of dependencies in the `package.json` file.
