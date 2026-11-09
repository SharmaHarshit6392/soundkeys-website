# SoundKeys website

A responsive editorial-style landing page for the SoundKeys Windows desktop app, now with a dark charcoal and acid-lime visual theme.

## Preview locally
Open `index.html` in a browser. No build tools or package installation are required.

## Before publishing
1. Confirm the public release is ready.
2. In `script.js`, set `DOWNLOAD_URL` to the exact installer URL.
3. Update version and installer size in `index.html` if they change.
4. Replace the abstract keyboard artwork with real SoundKeys screenshots when available.
5. Review privacy, licensing, support, and download statements before launch.

The Windows download button points to the official SoundKeys 1.0.0 GitHub Release asset. Update `DOWNLOAD_URL` in `script.js` whenever a new installer release is published.

## Free hosting with Cloudflare Pages
1. Connect this public GitHub repository to a Cloudflare Pages project.
2. Use no build command and set the output directory to `/`.
3. Deploy and use the provided `*.pages.dev` address.

Keep the installer hosted separately as a GitHub Release asset and point `DOWNLOAD_URL` to its direct download URL. Do not upload the ~40 MB installer into the Pages site itself.

## Design direction
Version 5 uses near-black charcoal, warm off-white typography, muted forest surfaces, and acid-lime accents.


## Deployment
This static site is deployed with Cloudflare Pages from the `main` branch. Commits to `main` should trigger production deployments automatically.
