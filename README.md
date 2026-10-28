# Age of Sigmar Campaign Tracker

A public-source, friends-only campaign tracker for Path to Glory-style armies and campaign packs.

The Phase 0 foundation is implemented. The implementation blueprint, data model, first playable slice, and delivery phases are in [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md). Local setup instructions are in [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Intended stack

- React + TypeScript + Vite frontend
- GitHub Pages deployment from GitHub Actions
- Firebase Authentication with Google sign-in
- TypeScript API on Google Cloud Run
- Cloud Firestore persistence

The GitHub repository and GitHub Pages frontend will be public. Authentication protects campaign and roster data through the API; it does not make the source code or downloaded frontend bundle private.

## Current foundation

- Responsive original frontend shell for the campaign tracker
- Type-safe shared campaign contracts using Zod
- Express API with a validated `/healthz` endpoint
- Cloud Run-ready Docker image
- Deny-by-default Firestore client rules and emulator configuration
- CI checks and GitHub Pages deployment workflow

## Local verification

```bash
pnpm install
pnpm check
pnpm dev:web
```
