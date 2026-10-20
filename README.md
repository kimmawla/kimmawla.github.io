# kim-mawla-site

Personal site for Kim Mawla. Astro static site, hosted free on GitHub Pages.

## Edit content
All copy lives in `src/data/site.ts`. Replace every `REPLACE_ME`, and drop `KimMawla_Resume.pdf` into `public/`.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
```

## Deploy free ($0) — kimmawla.github.io
1. GitHub username must be `kimmawla` (create it, or rename yours).
2. Create a public repo named exactly `kimmawla.github.io` and push this folder to `main`.
3. Repo → Settings → Pages → Source: **GitHub Actions**.
4. Every push to `main` deploys via `.github/workflows/deploy.yml`.

Alternatives, also free: Cloudflare Pages (`kimmawla.pages.dev`), Netlify (`kimmawla.netlify.app`), Vercel (`kimmawla.vercel.app`).

## Optional: custom domain (~$10.50/yr)
1. Register `kimmawla.com` at Cloudflare Registrar (at-cost, free WHOIS privacy, same price on renewal).
2. Add `public/CNAME` containing `kimmawla.com`; set `site` in `astro.config.mjs` to `https://kimmawla.com`.
3. Repo → Settings → Pages → Custom domain → `kimmawla.com`, enable HTTPS.
4. In Cloudflare DNS, add the GitHub Pages A records for the apex and a CNAME `www` → `kimmawla.github.io`.

## MCP Registry namespace
- **Free:** publish as `io.github.kimmawla/<server>` (GitHub login via `mcp-publisher login github`).
- **With domain:** publish as `com.kimmawla/<server>`, verified by DNS TXT record (`mcp-publisher login dns`).
  Publish the Python package to PyPI first — the registry stores metadata, not code.
