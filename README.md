# V Pilot Enterprise Website,

Premium React + Vite website for GitHub Pages.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## GitHub Pages
1. Create a GitHub repository and push this project to `main`.
2. Open **Settings → Pages → Source** and select **GitHub Actions**.
3. The included workflow publishes `dist`.
4. The `CNAME` file configures `vpilot.org`. Confirm the domain in GitHub Pages and configure DNS with your domain provider.

## Content governance
- Replace enquiry email or office address in `src/App.jsx` when needed.
- Treat the “up to 80%” GoldenVault figure as an aspirational, customer-specific upper bound, never a universal guarantee.
- Review “patent-pending” language with legal counsel before public release.
