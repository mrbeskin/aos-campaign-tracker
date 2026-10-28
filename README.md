# Age of Sigmar Campaign Tracker

A public-source, friends-only campaign tracker for Path to Glory-style armies and campaign packs.

The repository is currently in the planning stage. The implementation blueprint, data model, first playable slice, and delivery phases are in [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

## Intended stack

- React + TypeScript + Vite frontend
- GitHub Pages deployment from GitHub Actions
- Firebase Authentication with Google sign-in
- TypeScript API on Google Cloud Run
- Cloud Firestore persistence

The GitHub repository and GitHub Pages frontend will be public. Authentication protects campaign and roster data through the API; it does not make the source code or downloaded frontend bundle private.
