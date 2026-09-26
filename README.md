# Twinkle’s Movie Night

A static React + TypeScript + Tailwind website, made for Twinkle. Includes 17 films, filters, a rotating shortlist, accessible confirmation dialog, saved choice, native sharing, copying, WhatsApp, and a movie roulette. No account or backend required.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run build
npm run lint
```

`dist/` is the complete static website. For browser checks, start the dev server, then run `npm test`. On a new machine, first run `npx playwright install chromium`.

## Publish on Vercel and send one URL

Vercel configuration is included. In this project folder:

```sh
vercel login
vercel --prod
```

Follow the prompts to create/link your Vercel project. Send Twinkle the production URL printed at the end. The existing Vercel token was invalid during development, so no public deployment has been made.

Alternatively, push this folder to a Git repository and import it at https://vercel.com/new. Vercel detects Vite; output is `dist` and build is `npm run build`.

The site is public when deployed. An obscure URL is not access control. No client-side entry code is included; use hosting-level access controls if privacy is needed.

## Official posters and movie edits

All movie metadata is in `src/movies.ts`. All 17 films now use their original promotional/theatrical poster artwork, saved locally in `public/posters/`. Source pages and original image URLs are recorded in `public/poster-sources.json`. The posters remain copyright of their respective rights holders; the source record does not confer a reuse license.

To replace artwork, update `posterUrl` or the corresponding local file. The component provides descriptive alt text, lazy loading, stable dimensions, and a title-panel fallback if an image fails. `scripts/fetch-posters.py` records and retrieves the documented source images.

Approximate runtimes are listed in minutes. Change the descriptions, tags, reasons, colors, and films in the same file.

## Sharing and persistence

WhatsApp is the only sharing option. On browsers supporting file sharing, the button opens the native share sheet with the actual selected poster file and choice message. The visitor chooses WhatsApp and the recipient; browsers cannot force the destination app or recipient for file sharing. WhatsApp/OS versions may handle accompanying text differently, so the interface asks the visitor to check before sending.

Otherwise the poster downloads and a WhatsApp link opens the configured recipient with the message. The visitor must attach the downloaded poster and tap Send. No message is sent automatically. Choices persist only in this browser’s localStorage.

## Social preview

`public/og.png` is the custom social card. Open Graph uses `/og.png`; for the most reliable link previews, replace it with the final absolute production URL in `index.html` after the first deployment (for example, your actual domain followed by `/og.png`), and redeploy. Do not substitute an unverified domain.

## Artwork

Built-in imagegen generated `public/lily-sticker.png` and the pink `public/og.png`. Exact generation briefs are recorded in `ASSETS.md`. Fonts are Barlow Condensed, Italiana, and DM Sans from Google Fonts, with local system fallbacks. The website never autoplays audio.

## Validation

Browser tests cover each of the 17 selection flows, all filters, full-detail expansion, modal Escape/focus containment, saved choice after refresh, clipboard content, native-share payload, WhatsApp URL, roulette, reduced motion, and overflow at 375, 430, 768, and 1440px. Native share uses a browser test stub; the actual OS share sheet depends on the visitor’s device.
