# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

First, install the dependencies, use one of the following commands:

```bash
npm install
# or
yarn install
```

To run the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Tech Stack

This project is built using the following technologies:

- **React.js**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **Vite**: A modern, fast build tool that provides a rapid development experience with optimized performance.
- **Shadcn**: A collection of UI components that are customizable and easy to use.
- **Lucide-React**: A set of high-quality icons for React, providing a wide range of customizable icons.
- **Sonner**: A minimal and customizable toast notification library for React to show in-app notifications.
- **Tailwind CSS**: A utility-first CSS framework that provides a flexible and fast way to design the UI.
- **Context API**: A simple and efficient state management solution to share state across components without needing prop-drilling.

## State Management with Context API

This project uses **React's Context API** to manage global state in a simple and efficient manner. The Context API allows you to share values like user preferences, authentication status, etc., across your component tree without having to manually pass props down at every level.

### Key Points:

- Context API is used for global state, eliminating the need for more complex solutions like Redux in this project.
- Custom hooks are used to access and modify state within components. This keeps the state logic modular and reusable.

## Project Structure

The project is organized into several directories to ensure maintainability and scalability. Below is the breakdown of the key directories and files:

### Directory Breakdown

- **/src**:

  - **/components**: This folder contains all the UI components used throughout the app. Components are built as reusable and modular units to be composed across different views or pages.
  - **/pages**: This folder contains all the pages or screen of the web app.
  - **/api**: Here, you'll find all the apis of the application.
  - **/utils**: Utility functions or helper files for simulating logic or handling common tasks across the app.
  - **/hooks**: Custom React hooks are placed here. These hooks encapsulate reusable logic, including state management and side effects.
  - **index.tsx**: This is the main entry file for React integration, where the `ReactDOM.render()` method is invoked to mount the app.
  - **index.html**: The entry HTML file for the project, usually for quick testing or a vanilla JS setup.

- **/build**:
  - Contains the output of the project when running the production build.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
