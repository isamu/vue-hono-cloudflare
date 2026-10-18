# fix: `yarn build:server` fails (server has no build script)

Issue: #14

## Problem

Root `build:server` runs `yarn workspace server run build`, and README / CLAUDE.md document it, but
`server/package.json` never defined `build` (missing since the first commits). CI never checked the
server workspace, so nothing noticed.

## Decision (from the issue: options B + C)

- `server` `build`: `wrangler deploy --dry-run --cwd .. --outdir server/dist` — bundles
  the Worker without deploying. `wrangler.jsonc` points `assets.directory` at `./web/dist`, so root
  `build:server` runs `yarn build` (web) first.
- `server` `type-check`: `tsc --noEmit`. Root `type-check` now runs web and server.
- CI: the existing type-check step now covers server; a new step runs `yarn run build:server`.
- README / CLAUDE.md describe the real scripts.

## Out of scope (left on #14)

- `deploy` / `deploy-prod` are documented but undefined; `deploy-prod` needs a production Worker
  name / env that `wrangler.jsonc` does not have.
- README's `yarn workspace web run config:dev` / `config:prod` are also undefined in `web/package.json`.

## Verification

Clean install, then format, lint, type-check, build, build:server. Break-verify: a type error in
`server/src/index.ts` turns `yarn type-check` red; an unresolvable import turns `build:server` red.

Note: `--cwd ..` (not `--config ../wrangler.jsonc`) because with `--config` wrangler resolves
`--outdir` against the config's directory for the bundle but writes its README into the shell's
cwd, splitting the output across `dist/` and `server/dist/`.
