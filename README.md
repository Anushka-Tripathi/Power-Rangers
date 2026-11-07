# Vidyashree Charitable Trust – Website

React + Vite + React Router + plain CSS + Lucide icons. No backend. Hosted on Netlify.

## Install, run, build
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # test the production build locally
```
Requires Node.js 18 or newer.

## Project structure
```
public/
  images/logo.jpeg            official logo (unmodified)
  images/donation-qr.png      official donation QR (from the donation document)
  images/gallery/             43 individual photos (full size)
  images/gallery/thumbs/      640px previews used in the grid
  documents/trust-deed.pdf    Trust Deed (PDF)
  _redirects                  Netlify single-page-app fallback
src/
  data/site.js                ALL contact, bank, team and registration details
  data/gallery.js             gallery file list (add `alt` text here)
  components/                 Layout (navbar/footer), shared UI, blocks
  pages/                      one file per page
  styles.css                  all styling
netlify.toml                  build + SPA redirect config
```

## Things to update
* **Contact / bank / team details:** edit `src/data/site.js`.
* **Tax-deduction (80G/12A) wording:** hidden by default. Set `TAX_CLAIMS_VERIFIED = true` in `src/data/site.js` only after the Trust checks the current certificates.
* **Gallery photos:** replace/add files in `public/images/gallery/` (and a 640px copy in `thumbs/`), then update `src/data/gallery.js`.
* **Trust Deed:** replace `public/documents/trust-deed.pdf` (keep the same file name).
* **Higher-resolution QR:** replace `public/images/donation-qr.png`.

## Deploy to Netlify
1. Push to GitHub. 2. Netlify → Add new site → Import from GitHub. 3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`). 4. Deploy.
Custom domain: Site configuration → Domain management → Add `vidyashree.org` and `www.vidyashree.org`, then follow Netlify's DNS instructions. Do this only after the Trust approves.
