# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds route entrypoints (e.g., `src/pages/index.astro`).
- `src/content/` contains Markdown/MDX content; currently `src/content/home/index.mdx` drives the homepage.
- `src/components/` includes shared Astro UI components.
- `src/styles/` contains global styles (`src/styles/global.css`).
- `src/assets/` is for imported build-time assets.
- `public/` hosts static files served as-is (e.g., fonts, favicon).

## Build, Test, and Development Commands
- `bun run dev` or `npm run dev`: start local dev server with hot reload.
- `bun run build` or `npm run build`: create a production build in `dist/`.
- `bun run preview` or `npm run preview`: preview the production build locally.
- `bun run format` or `npm run format`: run Prettier across the repo.

## Coding Style & Naming Conventions
- Use 2-space indentation and follow existing Astro/MDX formatting.
- Keep component names in `PascalCase` (e.g., `BaseHead.astro`).
- Prefer descriptive, kebab-case filenames for content (`index.mdx`) and assets.
- Formatting is handled by Prettier; run `bun run format` before committing.

## Testing Guidelines
- No automated tests are currently configured.
- If you add tests, document the framework and how to run it here.

## Commit & Pull Request Guidelines
- Git history is minimal; no strict convention detected. Use concise, imperative commit messages (e.g., “Update home content”).
- PRs should include a brief summary, screenshots for UI changes, and any relevant deployment notes.

## Configuration Notes
- Astro is configured via `astro.config.mjs`.
- Content collections are defined in `src/content.config.ts`.
