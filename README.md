# Glide ZIP Downloader

A Glide Custom Code Component that downloads a list of files (images or documents) as a ZIP, using JSZip + FileSaver and Alpine.js for UI.

## Features
- Accepts an array of URLs from Glide via `props.urls`
- Optional `props.zipName` to control output file name
- Optional `props.requestHeaders` (array of "Key: Value" strings) for authenticated fetches
- Concurrency for faster downloads, progress UI, basic error reporting
- Triggers `actions.downloadComplete()` when done, `actions.error(message)` on fatal error

## Files
- `index.html` — UI and ZIP logic (Alpine.js)
- `driver.js` — Defines props and actions interface for Glide
- `function.js` — Normalizes/validates incoming props
- `Glide.json` — Component manifest for Glide
- `LICENSE` — MIT license
- `README.md` — This file

## Usage in Glide
1. Host this folder (GitHub/Pages or your static host).
2. Add a **Custom Code Component** in Glide and point to the hosted `index.html`.
3. Bind:
   - **urls**: an array column of file URLs
   - **zipName** (optional): e.g. `"Project Files.zip"`
   - **requestHeaders** (optional): array of `"Authorization: Bearer …"` etc.
4. (Optional) Attach actions to:
   - `downloadComplete`
   - `error`

> **Note on CORS**: Files must be accessible from the browser; remote servers need to permit CORS for `GET` if they are on a different origin.

## Local Development
Open `index.html` via a simple static server (to avoid CORS/file URL issues):
```bash
npx http-server .
