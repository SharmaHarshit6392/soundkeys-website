# SoundKeys website

A responsive editorial-style landing page for the SoundKeys Windows desktop app, now with a dark charcoal and acid-lime visual theme.

## Preview locally
Open `index.html` in a browser. No build tools or package installation are required.

## Current release

The website download button points to the official SoundKeys v1.1.0 GitHub Release asset:

`https://github.com/SharmaHarshit6392/sound_keys/releases/download/v1.1.0/SoundKeys-Setup-1.1.0.exe`

The release asset is hosted by GitHub Releases; the website does not host the installer itself.

## Publishing a future release
1. Publish the new installer as an asset on the SoundKeys GitHub Releases page.
2. Update `DOWNLOAD_URL` in `script.js` to the exact release asset URL.
3. Update the version and installer size in `index.html` and `script.js`.
4. Verify the download button, release notes, source links, and mobile navigation.
5. Push the website changes to `main`; Cloudflare Pages is configured to deploy from that branch.

## Free hosting with Cloudflare Pages
1. Connect this public GitHub repository to a Cloudflare Pages project.
2. Use no build command and set the output directory to `/`.
3. Deploy and use the provided `*.pages.dev` address.

Keep the installer hosted separately as a GitHub Release asset and point `DOWNLOAD_URL` to its direct download URL. Do not upload the ~40 MB installer into the Pages site itself.

## Design direction
Version 5 uses near-black charcoal, warm off-white typography, muted forest surfaces, and acid-lime accents.


## Deployment
This static site is deployed with Cloudflare Pages from the `main` branch. Commits to `main` should trigger production deployments automatically.
