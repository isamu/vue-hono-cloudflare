# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + Hono + Cloudflare Workers application called "mulmocast". It's a monorepo using Yarn workspaces with a clear separation between frontend (Vue SPA) and backend (Hono API).

**Key Architecture:**
- **Frontend**: Vue 3 SPA in `web/` workspace with Tailwind CSS v4, Vue Router with i18n support, and shadcn-vue UI components
- **Backend**: Hono server in `server/` workspace running on Cloudflare Workers
- **Deployment**: Cloudflare Workers with single-page-application asset handling

## Workspace Commands

This is a Yarn workspace monorepo. Commands are run from the root or within specific workspaces.

### Development

```bash
# Frontend dev server (Vite) - most common during development
yarn dev
# or: yarn workspace web run dev

# Backend dev server (Wrangler) - for testing API locally
yarn dev:server
# or: yarn workspace server run dev
```

### Building

```bash
# Build frontend (TypeScript check + Vite build)
yarn build
# or: yarn workspace web run build

# Build backend
yarn build:server
# or: yarn workspace server run build
```

### Linting and Formatting

```bash
# Lint (web workspace only)
yarn lint

# Format all code (both workspaces)
yarn format
```

### Type Checking

```bash
# Type check Vue files (web workspace)
yarn workspace web run type-check
```

### Deployment

```bash
# Deploy to Cloudflare Workers (dev environment)
yarn workspace server run deploy

# Deploy to production
yarn workspace server run deploy-prod
```

### Environment Configuration

The web workspace has environment-specific config files:

```bash
# Switch to dev config
yarn workspace web run config:dev

# Switch to prod config
yarn workspace web run config:prod
```

## Architecture Details

### Monorepo Structure

- **Root package.json**: Defines workspace structure and shared scripts
- **web/**: Frontend Vue 3 application
- **server/**: Hono API backend for Cloudflare Workers

### Frontend (`web/`)

**Router Setup:**
- Uses Vue Router with `createWebHistory`
- Internationalized routing: `/:lang(en|ja)?` prefix for all routes
- Layout component wraps all page routes
- Supported languages: English (en), Japanese (ja)

**Key Dependencies:**
- Vue 3.5 with Composition API
- Vue Router for SPA navigation
- Vue I18n for internationalization (composition mode, not legacy)
- Tailwind CSS v4 with @tailwindcss/vite plugin
- shadcn-vue UI components (Reka UI based)
- mulmocast-viewer (custom package)
- @unhead/vue for meta tag management

**Configuration:**
- Config files in `web/src/configs/` - `config.ts` is generated from `config-dev.ts` or `config-prod.ts`
- Vite uses `@` alias pointing to `web/src/`
- ESLint configured with strict TypeScript rules, Vue rules, and SonarJS
- Prettier integration with Tailwind plugin

**UI Components:**
- Located in `web/src/components/ui/`
- ESLint ignores `src/components/ui/**` (auto-generated shadcn components)
- Uses class-variance-authority and clsx for styling utilities

### Backend (`server/`)

**Hono API:**
- Entry point: `server/src/index.ts`
- Example endpoint: `POST /api/echo` - accepts `{ text: string }`, returns uppercased text
- Type-safe with Cloudflare Workers types

**Deployment:**
- Wrangler config: `wrangler.jsonc` at root
- Worker name: `mulmocast-dev` (dev), `mulmocast-prod` (production)
- Static assets served from `web/dist` with SPA fallback
- Main entry: `server/src/index.ts`

### Development Workflow

1. **Local development**: Use `yarn dev` for frontend-only development with Vite
2. **Full stack testing**: Use `yarn workspace server run dev` to test with Wrangler (includes API)
3. **Type safety**: Run `yarn workspace web run type-check` before committing
4. **Linting**: ESLint enforces strict rules including no explicit `any`, unused vars with `__` prefix allowed
5. **Formatting**: Prettier with 2-space indentation, Unix line endings, semicolons required

### Important Notes

- The project uses Tailwind CSS v4 (not v3) - use `@tailwindcss/vite` plugin
- Vue I18n is in composition mode (`legacy: false`), not Options API mode
- TypeScript is configured for strict mode
- ESLint requires 2-space indentation and enforces no-explicit-any
- Cloudflare Workers assets are configured for SPA with not_found_handling
