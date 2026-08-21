# Island Roaster — Base44 Dev Environment

## Overview
Pure frontend Angular 18 app (Island Roaster coffee marketing site). No backend, no database, no external services. All data is mocked in `src/app/core/services/`. No secrets required.

## Running
- `docker compose -f docker-compose.base44.yml up -d` brings up the Angular dev server (`ng serve`) on host port 3000 (container 4200).
- First boot runs `npm install` inside the container (~20s), then compiles and serves. `node_modules` is a named volume so reinstalls are skipped on subsequent boots.
- Live reload is enabled (`--poll 1000` for bind-mount compatibility); edits to `src/` appear in the preview automatically.

## Dev server notes
- Angular 18's esbuild-based dev server does not support `--disable-host-check`; it accepts all hosts by default when bound to `0.0.0.0`, so the preview's external hostname works without extra config.
- The served HTML includes `/@vite/client` — this confirms it is the live dev server (not a prebuilt bundle).

## Verification
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` returns 200 with the app's HTML.
- `docker compose -f docker-compose.base44.yml logs web` shows "Watch mode enabled" and the Local/Network URLs.
