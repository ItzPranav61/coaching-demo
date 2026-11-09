# Aarambh Academy — The Report Card

Static Next.js App Router + TypeScript + Tailwind demo for a fictional coaching academy. Seven sections, four enquiry fields, no backend or integrations.

## Run

```powershell
cd "C:\Users\PRANAV\OneDrive\Documents\ChatGPT\Project 01\coaching-demo"
npm run dev
```

Open http://localhost:3000. For a fresh checkout, run `npm ci` first.

```powershell
npm run lint
npm run build
npm start
```

## Rebrand

All copy, fees, seat counts, report data, fictional people, form options and metadata live in `src/data/site.ts`. The `// DEMO CONTENT` notice identifies all sample claims. Replace dummy contact numbers before expecting contact links to work.

The five Tailwind palette tokens are in `src/app/globals.css`. Fraunces headlines and DM Sans body text are self-hosted with `next/font` from `src/app/layout.tsx`. Fonts are downloaded at build time; visitors do not contact a font service.

## Interactions

- Class-group buttons filter batches. Selecting a group or a batch CTA prefills the form’s class group and weekday/weekend fields.
- The native validated form has exactly four fields. Submit shows an accessible three-step sample follow-up panel. Nothing is sent or stored.
- Native FAQ accordions, responsive navigation and the mobile Call / WhatsApp / Enquire strip remain.
- Fees, seat availability, timings, responses and outcomes are fictional; no actual booking or confirmation occurs.

## Verification and screenshots

See `DESIGN.md` for the audit, decisions, changed files and validation. Production screenshots and the current Lighthouse accessibility report are in `design-review/`.

## Local storage

On this computer the C: workspace folder is a directory junction to `D:\CodexBuilds\coaching-demo-20261109`, because C: ran out of space during TASK 01. Both paths open the same files. The small `scripts/next.mjs` launcher resolves the real directory before running Next.js. Keep the D: target available. A normal checkout on another computer needs no junction.

Vercel deployment uses this folder as the project root with the standard Next.js build and no environment variables. No deployment was made.
