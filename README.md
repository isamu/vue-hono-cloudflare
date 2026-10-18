# vue-hono-cloudflare

A Vue 3 + Hono + Cloudflare Workers application built with Vite and deployed on Cloudflare Workers.

## Directory Structure

```text
.
├─ web/                   # Vue 3 SPA (Vite)
│  ├─ src/
│  │  ├─ components/      # Vue components
│  │  │  └─ ui/           # shadcn-vue UI components
│  │  ├─ router/          # Vue Router (SPA routing with i18n)
│  │  ├─ views/           # Page components
│  │  ├─ i18n/            # Internationalization (en, ja)
│  │  ├─ configs/         # Environment configs (dev/prod)
│  │  ├─ lib/             # Utilities
│  │  └─ main.ts          # Client entry
│  ├─ vite.config.ts      # Vite config (Vue / Tailwind v4)
│  └─ package.json        # Web workspace dependencies
├─ server/                # Hono API (Cloudflare Workers)
│  ├─ src/
│  │  └─ index.ts         # Hono app entry (Example: POST /api/echo)
│  └─ package.json        # Server workspace dependencies
├─ wrangler.jsonc         # Cloudflare Workers config
├─ package.json           # Root workspace config
└─ CLAUDE.md              # Development guide
```

## Technology Stack

- **Frontend**: Vue 3.5 + Vue Router + Vite + Tailwind CSS v4
- **UI Components**: shadcn-vue (Reka UI based)
- **Backend**: Hono 4.10 on Cloudflare Workers
- **i18n**: Vue I18n (English, Japanese)
- **Package Manager**: Yarn Workspaces

## About Hono and the Vue SPA

- **Frontend (SPA)**: Located under `web/`. The router in `web/src/router/index.ts` uses `createWebHistory` (History API) for navigation with internationalized routes (`/:lang(en|ja)?`).
- **Backend (API)**: Located under `server/`. Hono powers a Cloudflare Workers API under `/api/*`. An example endpoint `POST /api/echo` accepts JSON `{ text: string }` and returns the uppercased text.
- **Build/Deploy**: Vite builds the SPA, and Wrangler deploys the Worker with static assets served from `web/dist` with SPA fallback handling.

## Setup and Commands

### Installation

```bash
yarn install
```

### Development

**Frontend only (SPA with Vite dev server)**

```bash
yarn dev
# or: yarn workspace web run dev
```

**Backend (API with Wrangler)**

```bash
yarn dev:server
# or: yarn workspace server run dev
```

### Building

**Frontend**

```bash
yarn build
# or: yarn workspace web run build
```

**Backend**

```bash
yarn build:server
# or: yarn workspace server run build
```

### Linting & Formatting

```bash
# Lint (web workspace)
yarn lint

# Format all code
yarn format
```

### Environment Configuration

```bash
# Switch to dev config
yarn workspace web run config:dev

# Switch to prod config
yarn workspace web run config:prod
```

### Deployment (Cloudflare Workers)

**Deploy to dev environment**

```bash
yarn workspace server run deploy
```

**Deploy to production**

```bash
yarn workspace server run deploy-prod
```

## UI Components (shadcn-vue)

This project uses [shadcn-vue](https://shadcn-vue.com/) for UI components. The configuration is defined in `components.json` at the root of the project.

### What is shadcn-vue?

shadcn-vue is a collection of re-usable Vue components built with Reka UI and Tailwind CSS. Unlike traditional component libraries, shadcn-vue components are copied directly into your project, giving you full control over the code.

### Adding New Components

Use the shadcn-vue CLI to add components to your project:

```bash
# Navigate to the web workspace
cd web

# Add a specific component (e.g., button, card, dialog)
npx shadcn-vue@latest add button

# Add multiple components at once
npx shadcn-vue@latest add button card dialog

# See available components
npx shadcn-vue@latest add
```

Components will be automatically added to `web/src/components/ui/` with proper configuration based on `components.json`.

### Already Included Components

The following shadcn-vue components are already included:

- Alert
- Avatar
- Badge
- Button
- Card
- Input
- Label
- Select
- Separator
- Skeleton
- Textarea
- Tooltip

For more information, visit the [shadcn-vue documentation](https://shadcn-vue.com/).
