# ZestFindz Seller Landing – Local Setup

This repo is a Vite + React (TypeScript) project implementing seller Login and Register pages that visually match the live ZestFindz panels.

## Prerequisites
- Node.js 18+ (recommend LTS)
- npm 9+ (comes with Node)

## Install
```bash
npm install
```

## Run (development)
```bash
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

## Routes
- `/seller/login` – Email + password login
  - On submit, saves `{ email, password }` to `sessionStorage` under `auth_credentials` and redirects to `/dashboard`.
- `/seller/register` – Mobile + OTP flow (send/resend, basic validation)
- `/dashboard` – Simple landing page after login

## Build (production)
```bash
npm run build
```
Output is in the `dist/` folder.

## Preview build locally
```bash
npm run preview
```

## Linting
ESLint is configured. Run:
```bash
npm run lint
```

## Project structure
- `src/pages/Login/` – Login component and `login.css`
- `src/pages/Register/` – Register component and `register.css`
- `src/pages/Dashboard/` – Post-login placeholder page
- `src/components/core/` – Reusable form controls (TextField, PasswordField, Button)
- `src/components/layout/` – Header
- `src/main.tsx` – Router setup
- `src/App.tsx` – Layout with `Header` + nested `<Outlet />`

## Notes
- Background images are pulled from the live site URLs for visual parity.
- Remove `backdrop-filter: blur(...)` in `login.css` / `register.css` if you prefer a crisp background.

## Troubleshooting
- If the dev server doesn’t start:
  - Ensure Node 18+ (`node -v`)
  - Remove lockfile and `node_modules` then reinstall: `rm -rf node_modules package-lock.json && npm i`
  - Check if port 5173 is free or set a custom port: `npm run dev -- --port 3000`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
