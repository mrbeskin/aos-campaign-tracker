# Local development

## Requirements

- Node.js 22 or newer
- pnpm 11
- Firebase CLI for emulator work
- Google Cloud CLI for later Cloud Run deployment

## Install and verify

```bash
pnpm install
pnpm check
```

## Run the web application

```bash
pnpm dev:web
```

The Vite development server uses `http://localhost:5173` by default.

## Run the API

```bash
cp apps/api/.env.example apps/api/.env
pnpm dev:api
```

The API listens on port `8080` by default and exposes `GET /healthz`.

## Run Firebase emulators

Copy `.firebaserc.example` to `.firebaserc`, replace the placeholder with the development project ID, and run:

```bash
firebase emulators:start
```

The local emulator ports are:

- Authentication: `9099`
- Firestore: `8085`
- Emulator UI: `4000`

Client access to Firestore is intentionally denied. The application will access Firestore through the authenticated Cloud Run API.

## Environment policy

- Commit `.env.example` files, never `.env` files.
- Do not download or commit service-account keys.
- Use `gcloud auth application-default login` for local server credentials when cloud integration begins.
- Use the Cloud Run runtime service account in deployed environments.

