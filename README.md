# Jonathan's Portfolio — React + TypeScript + Vite

A modern, production-grade developer portfolio built with an enterprise mindset.  
This project leverages scalable architecture, strict typing, automated visual testing, and component-driven development using the latest ecosystem tools.

---

## 🚀 Tech Stack

| Tool            | Purpose                                                          |
|-----------------|------------------------------------------------------------------|
| **React 19**          | UI library for declarative, component-driven interfaces    |
| **TypeScript**        | Static typing for reliability and self-documented code     |
| **Vite**              | Lightning-fast bundler with HMR and TS-first setup         |
| **Tailwind CSS**      | Utility-first CSS framework for styling                    |
| **React Router**      | SPA navigation with nested routes and layouts              |
| **Zod**               | Schema validation for forms and type inference             |
| **React Hook Form**   | Optimized, flexible forms with minimal re-renders          |
| **Storybook**         | Isolated component development, visual docs & snapshots    |
| **Chromatic**         | CI for Storybook with visual regression testing            |
| **Framer Motion**     | Animation library for micro-interactions and UX polish     |
| **clsx / cva**        | Dynamic class management with variants                     |
| **Lucide-react**      | Icon system with Tailwind-ready SVGs                       |
| **ESLint + Prettier** | Code style consistency and linting best practices          |

---

## 👢 Project Structure

```
src/
│
├── assets/         # Static images, icons, logos
├── components/     # Atomic design system (atoms, molecules, organisms)
├── constants/      # Global constants (enums, configs, keys)
├── hooks/          # Custom React hooks
├── layout/         # Layout components like <MainLayout />
├── lib/            # Utilities, API clients, formatters
├── pages/          # Page-level components (used by router)
├── router/         # Centralized route definitions with React Router v6+
├── styles/         # Tailwind config, global styles, theming
├── types/          # Shared TypeScript types and interfaces
├── App.tsx         # Entry point component with RouterProvider
└── main.tsx        # Vite entry point
```

This structure follows **Atomic Design + Scalable Feature-based Separation**, making it easy to maintain, test, and grow with new features or domains.

---

## 📚 Storybook Integration

This project uses Storybook with:

- Tailwind theming (light/dark toggle)
- `@storybook/test` for snapshot visual testing
- Component-driven workflows with isolated `Input`, `Form`, and more
- Chromatic CI integration for visual regression testing

Run Storybook locally:

```bash
yarn storybook
```

---

## ✅ Chromatic Visual CI

This project runs **Chromatic** on every PR using GitHub Actions:

- Blocks merges if visual diffs are found
- Publishes a preview of the full Storybook
- Snapshot testing per component story

[![Chromatic](https://github.com/JonaLGarza/porfolio/actions/workflows/chromatic.yml/badge.svg)](https://github.com/JonaLGarza/porfolio/actions/workflows/chromatic.yml)

---

## 📦 Scripts

```bash
yarn dev             # Local dev server (Vite)
yarn build           # Production build
yarn preview         # Preview production locally
yarn storybook       # Run Storybook locally
yarn chromatic       # Run Chromatic visual CI
yarn lint            # Run ESLint
```

---

## 👨‍💻 Dev Notes

This setup is built for clarity, scale, and flexibility:

- Uses `vite-tsconfig-paths` for `@/` aliasing
- Strict linting rules for consistency
- Modular component layers (atoms → molecules → organisms)
- Tailwind integrated into Storybook previews
- Ready for feature flags, async loading, and SSR if needed

---

## 🥪 Testing Setup

Coming soon: integration with `Vitest`, `Testing Library`, and `@storybook/test-runner`.

---

## 📘 Storybook Dev Notes

For developers:

- All components follow atomic structure (`atoms`, `molecules`, `organisms`)
- Write stories using `CSF` and `autodocs` tags for automated documentation
- Test accessibility and interaction with `@storybook/test`, `@storybook/addon-a11y`, and `@storybook/test-runner`
- Run `yarn test-storybook` to generate interaction test snapshots (coming soon)

---

## 🙌 Contributions

This is a personal project for my portfolio and technical showcase. If you'd like to collaborate or ask anything, feel free to open a discussion or PR!

---

## 📧 Contact

Built with ❤️ by Jonathan Arturo López de la Garza  
[LinkedIn](https://www.linkedin.com/in/jonathan-arturo-lopez-de-la-garza) • [Twitter](https://twitter.com/your_handle) • [Portfolio](https://your-site.com)

