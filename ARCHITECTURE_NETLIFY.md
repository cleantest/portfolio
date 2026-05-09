# Netlify Hosting Architecture


## Goal
Host this Vue + Vite single-page application (SPA) publicly on Netlify with reliable routing, automated builds, and a simple rollback path.

## Current App Shape
- Frontend framework: Vue 3
- Bundler/build tool: Vite
- Router mode: `createWebHistory` (history API)
- Build command: `npm run build` (runs `vite build`)
- Production output directory: `dist`

## Deployment Architecture
1. Source code is stored in a Git provider (GitHub/GitLab/Bitbucket).
2. Netlify is connected to the repository and listens for pushes.
3. On each push to the production branch, Netlify:
   - installs dependencies with `npm install`
   - runs `npm run build`
   - publishes static files from `dist`
4. Public traffic is served through Netlify CDN over HTTPS.

## Request Flow
1. Browser requests the site URL.
2. Netlify edge serves static assets from the built `dist` directory.
3. For client-side routes (for example `/services`), Netlify rewrites the request to `/index.html`.
4. Vue Router resolves the route in the browser and renders the correct view.

## Required Netlify Settings
- Base directory: project root (`.`)
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: align with local LTS (recommended: Node 20)
- Production branch: choose your main branch (for example `main`)

## SPA Routing Requirement
Because this app uses history mode routing, direct requests to nested paths must fallback to `index.html`.

Recommended `netlify.toml` for this repository:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Environment and Secrets
- This app currently appears static and does not require runtime secrets.
- If environment variables are added later, store them in Netlify Site Settings -> Environment Variables.
- For Vite, expose client-safe variables using the `VITE_` prefix only.

## Environments
- **Production**: deploy from `main` (or your chosen stable branch).
- **Preview**: every pull request gets a unique preview URL from Netlify for validation before merge.

## CI/CD and Operational Guidance
- Enable deploy notifications (email/Slack) for failed builds.
- Keep lockfile committed for predictable installs.
- Use Netlify deploy history for one-click rollback if a release is bad.

## DNS and Public Access
1. Start with the Netlify-generated subdomain.
2. Add a custom domain in Netlify (optional).
3. Update DNS records at your registrar to point to Netlify.
4. Verify HTTPS certificate issuance (automatic on Netlify).

## Verification Checklist
- `npm run build` succeeds locally.
- Production deploy status is "Published".
- Deep links like `/portfolio` load correctly on refresh.
- Browser tab title updates per route (already implemented in router).
- Lighthouse/performance checks pass for the public URL.
