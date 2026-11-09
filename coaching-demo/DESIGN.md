# TASK 02 — The Report Card

## Audit before changes

Reviewed the original homepage at 360px and 1280px before editing.

| Checklist | Finding and resolution |
| --- | --- |
| Default Tailwind palette | Blue accent and alternating slate-50 sections. Replaced by the five paper/ink/vermilion/rule/status tokens. |
| Default font stack | Arial throughout, with no headline/body distinction. Replaced by Fraunces and DM Sans through next/font. |
| Identical section grids | Repeated rounded card treatment across courses, faculty and testimonials. Replaced by batch slips, faculty rows, a marks table and unboxed quotations. Headings were already left-aligned and remain so. |
| Icon-in-circle feature tiles | Why-us used repeated border/title/body tiles; faculty used circular initials. Why-us now has a method list and parent-report preview; initials are square identity labels. No icon circles added. |
| Decorative emoji/generic icons | None found. No decorative icon set added; plus/minus marks communicate menu/accordion state. |
| Generic copy | Broad benefits such as personal attention, support beyond lessons, and fees on enquiry. Replaced with subject names, monthly fees, batch times, test frequency and a Friday parent update. |
| Uniform spacing/background rhythm | All desktop sections used 80px padding with white/slate alternation. Replaced by deliberate 40–88px spacing, largely continuous paper and one navy results band. |
| Glass/glows/shadows | None found. Kept absent. Use 1px rules and square-ish corners. |
| Extra defect | Menu button was visible on desktop because .button overrode its display utility. Navigation now uses explicit responsive classes. |

## Design plan and review

The school progress report provides the structure, not decorative school clip art. The single stamp belongs to the hero. Data rules are used where they separate marks, seats or fields; other sections remain open and readable. Paper is a requested direction, paired with a deep vermilion rather than a soft clay accent. Initials identify fictional people without stock portraits.

Exactly two loaded font families: Fraunces 400/500/600 for headlines, with DM Sans for body and controls. Headline sizes range from 44–76px for h1 and 32–52px for h2; body is 16px at 1.65 line-height. Smaller captions identify sample data rather than carry primary actions.

| Token | Hex | Purpose |
| --- | --- | --- |
| paper | #F8F5ED | Page and slips |
| ink | #172B3A | Text and the results band |
| accent | #B53622 | Main action, stamp and marks |
| rule | #AAA99E | Rules and borders; not body text |
| success | #286044 | Post-submit status only |

Layout sequence:

1. Home: split editorial headline and sample progress card; compact factual footer.
2. Courses: horizontal group selector and four batch slips; one column on mobile.
3. Why us: asymmetric method list and an unboxed weekly parent preview.
4. Faculty: four horizontal directory rows; no profile card grid.
5. Results: full-width ink band, paper marks-sheet table and three open quotations.
6. FAQs: one full-width list of native details, rather than another two-column section.
7. Contact: named coordinator beside the admission slip and its post-submit process.

On mobile each composition stacks for reading, while retaining the distinct table, list and slip structures. No adjacent sections repeat the same desktop grid. The report-card thread is explicit in the hero, batch slips, results table and admission slip. The parent preview uses a separate margin-note treatment instead of a fifth boxed card.

## Content and state

All editable content remains in typed `src/data/site.ts`, including report rows, prices, timing, seat counts, form choices and the three next steps. `Course` explicitly types batch records; TypeScript infers the full site object shape. Every promise and claim is fictional and covered by `// DEMO CONTENT`, with visible sample labels at the relevant sections.

The page owns only the selected course and the form’s class/batch selections. Course filters and CTAs populate those two fields. Name and phone remain ordinary browser fields. The four-field form uses native validation, does not POST, and renders the process in an aria-live status region. The two-hour response timing is explicitly an illustrative process, not a real confirmation.

## Files changed

- src/data/site.ts
- src/app/layout.tsx
- src/app/page.tsx
- src/app/globals.css
- src/components/Navbar.tsx
- src/components/Footer.tsx
- src/components/MobileContactBar.tsx
- src/components/sections/Hero.tsx
- src/components/sections/Courses.tsx
- src/components/sections/WhyChooseUs.tsx
- src/components/sections/Faculty.tsx
- src/components/sections/Results.tsx
- src/components/sections/Faqs.tsx
- src/components/sections/Contact.tsx
- README.md
- DESIGN.md
- accessibility-report.json (updated audit)
- design-review/ (production screenshots and accessibility audit)

No packages, pages, sections or integrations were added. The existing Next.js wrapper and configuration remain unchanged in this pass.

## Validation

- npm run build: passes; homepage statically prerendered.
- npm run lint: passes.
- Production browser checks at 360px, 768px and 1280px: no horizontal overflow, seven sections in order, all anchor targets resolve, exactly four form fields.
- Mobile contact strip: visible below 768px, 48px contact targets; footer remains above the strip at the bottom of the page.
- Course filters: Foundation and Std 8–10 each show one matching card and prefill the class and corresponding weekday/weekend choice.
- Form: native validation, three post-submit steps, and no POST request verified.
- Mobile menu and native FAQ open/close verified.
- Lighthouse accessibility: 100/100 on the production build. Automated text contrast audit passed; manual checks remain useful beyond the scope of the automated audit.
- Production screenshots: after-360.png and after-1280.png show the full page. hero-360.png and hero-1280.png show the initial viewport. next-steps-360.png shows the submitted state.
