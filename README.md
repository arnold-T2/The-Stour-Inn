# React + Vite Template

Minimal React (JS) + Vite starter template with:

- ESLint 9 (flat config)
- Prettier (separate from ESLint)
- EditorConfig
- Scoped linting to `src`
- VS Code auto-format + auto-fix setup

---

## Scripts

`npm run dev`  
Start development server (HMR enabled)

`npm run build`  
Create production build (`dist`)

`npm run preview`  
Preview production build

`npm run lint`  
Run ESLint (fails on warnings)

`npm run lint:fix`  
Auto-fix lint issues

`npm run format`  
Format files with Prettier

`npm run format:check`  
Check formatting only

`npm run check`  
Lint + format check

---

## Tooling Philosophy

Separation of concerns:

- ESLint – correctness and best practices
- Prettier – formatting only

---

## Project Conventions

- Linting is scoped to `src/`
- Formatting ignores `node_modules`, `dist`, `.vite`, and `coverage`
- Editor formatting rules are enforced via:
  - `.editorconfig`
  - `.prettierrc`
  - `.vscode/settings.json`

On save (VS Code):

- Prettier formats
- ESLint applies safe fixes

---

## Notes

- ESLint 9 is pinned intentionally.
- Do not run `npm audit fix --force` (may upgrade ESLint major and break peer dependencies).

---

### Prettier Configuration

- Semicolons enabled
- Double quotes enforced
- 2-space indentation
- Trailing commas (ES5)
- 100 character line width
