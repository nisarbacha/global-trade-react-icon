# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Global Trade React Icon Package

## Overview

The Global Trade React Icon Package is a comprehensive set of icons designed for use in financial market applications. This package includes icons for Forex, metals, cryptocurrencies, commodities, and indices, making it an essential toolkit for any developer working in the finance sector. The icons are provided in scalable SVG format, ensuring high-quality rendering across all devices and screen sizes.

## Features

- **Comprehensive Coverage**: Includes icons for Forex (USD, EUR, GBP, JPY, etc.), metals (Gold, Silver, Platinum, etc.), cryptocurrencies (Bitcoin, Ethereum, Ripple, etc.), commodities (Oil, Wheat, Corn, etc.), and indices (S&P 500, Dow Jones, NASDAQ, etc.).
- **Scalable Vector Graphics (SVG)**: Icons are designed as SVGs, providing crisp and clear visuals at any size.
- **Easy Integration**: Simple React component setup for seamless integration into your projects.
- **Consistent Style**: All icons follow a consistent design language, making them visually cohesive.

## Installation

You can install the package via npm:

```sh
npm install global-trade-react-icon
```
