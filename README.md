# UVOLV website

The final website uses Next.js App Router, TypeScript, Tailwind CSS, and Motion.

## Local preview

Run `npm install` to install the dependencies.
Run `npm run dev` to open the development server at http://127.0.0.1:4101/.

For a production preview, run `npm run build`, then run `npm start`.

## Content and structure

- `content/site.ts` contains the services, packages, process, and contact details.
- `components/client-work.tsx` contains the selected client projects.
- `app/` contains the pages, metadata, sitemap, and contact API.
- `app/globals.css` contains the visual system and responsive styles.
- `public/` contains the local images and brand assets.
- `lib/contact.mjs` contains inquiry validation and rate limits.

The website includes four service pages, two client project pages, and three clearly identified demonstrations.
Historical preview files remain in the local archive and are excluded from this repository.

## Contact

The confirmed email address is `info@uvolv.com`.
The confirmed WhatsApp number is `+923332153959`.
No booking link is configured.

The form prepares an email brief by default. The visitor must send that brief through their email application.
The website does not report successful delivery when no delivery service is configured.

Copy `.env.example` to `.env.local` to configure environment values.
Set `CONTACT_WEBHOOK_URL` to an HTTPS endpoint to enable server delivery.
Set `CONTACT_WEBHOOK_TOKEN` if that endpoint requires a bearer token.
Test the receiving endpoint before enabling delivery in production.
Public environment values require a new build.

## Checks

- `npm test` checks inquiry validation and rate limits.
- `npm run check` checks TypeScript.
- `npm run build` creates the production build.
- `npm run verify` checks the local production preview, routes, and unconfigured contact API.

The preview verification expects automatic contact delivery to remain unconfigured.

## Design sources

Cutthecode.com is the main visual reference. The preserved 4102 prototype supplies the UVOLV interpretation.
The original 4101 build supplies the typeface direction and business messaging.
Maxun exports supply page structure and business content references. They do not supply measured CSS or animation settings.

The original 4101 build is preserved in `D:\WorkBaby\UVOLV\archive\pre-final-build\4101`.
The original 4102 prototype remains separate from this production project.
