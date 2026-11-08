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

The download button is intentionally disabled until `DOWNLOAD_URL` is configured.

## Free hosting with Cloudflare Pages
1. Connect this public GitHub repository to a Cloudflare Pages project.
2. Use no build command and set the output directory to `/`.
3. Deploy and use the provided `*.pages.dev` address.

Keep the installer hosted separately and point `DOWNLOAD_URL` to it. Do not upload the ~40 MB installer into the Pages site itself.

## Design direction
Version 5 uses near-black charcoal, warm off-white typography, muted forest surfaces, and acid-lime accents.
