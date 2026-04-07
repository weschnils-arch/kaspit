# KASPIT Security (MaximGutman) — Architecture

Client: **Maxim Gutman / KASPIT Security** — Austria's premium boutique
intelligence-led security firm. Part of the international KASPIT Group.
Branches: Vienna (HQ), Germany, Israel.

## Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | react-router-dom (BrowserRouter) |
| Styling | Tailwind CSS v4 (with custom `@layer` utilities in `src/index.css`) |
| Animations | GSAP 3 (via `useScrollReveal` hook) |
| Smooth scroll | Lenis (`useLenis` hook) |
| Utilities | clsx |
| Dev server | `npm run dev` → http://localhost:5180/ (auto picks next free port) |

## Directory Structure

```
MaximGutman/
├── content/                     ← source copy (never edit, use as reference)
│   ├── BIO.docx                 ← Maxim's founder bio
│   └── Content.docx             ← full site copy (all pages)
├── _project/                    ← design system / architecture docs
├── _assets/                     ← raw client assets
├── public/                      ← static files served as-is
├── src/
│   ├── App.tsx                  ← route definitions + layout shell
│   ├── main.tsx                 ← entry point
│   ├── index.css                ← Tailwind + custom utility classes
│   ├── context/
│   │   └── ThemeContext.tsx     ← gold/silver theme toggle
│   ├── hooks/
│   │   ├── useScrollReveal.ts   ← GSAP scroll-triggered reveals
│   │   └── useLenis.ts          ← smooth scroll init
│   ├── components/
│   │   ├── Navbar.tsx           ← top nav + theme toggle + mobile menu
│   │   ├── Footer.tsx           ← site footer
│   │   ├── Hero.tsx             ← home hero section
│   │   ├── LoadingScreen.tsx    ← initial loader
│   │   ├── ParticleNetwork.tsx  ← background particles
│   │   ├── Contact.tsx          ← contact form (UI only — no backend wired)
│   │   └── ui/
│   │       ├── MetalCTA.tsx     ← canonical CTA button (theme-aware)
│   │       └── LiquidMetalButton.tsx ← shader button for silver mode
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx            ← includes full Maxim Gutman bio
│       ├── Advantage.tsx        ← "Why KASPIT Stands Alone"
│       ├── Services.tsx         ← 6-card services grid
│       ├── Training.tsx         ← 3 training programs
│       ├── Contact.tsx
│       └── services/            ← service detail pages
│           ├── Investigations.tsx
│           ├── SecurityManagement.tsx
│           ├── SecurityAudits.tsx
│           ├── EmergencyAssistance.tsx
│           └── Intelligence.tsx
├── index.html
├── package.json
├── vite.config.ts
└── architecture.md              ← this file
```

## Routes

Defined in `src/App.tsx`:

| Path | Component |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/services` | `Services` (grid) |
| `/services/investigations` | `Investigations` |
| `/services/security-management` | `SecurityManagement` |
| `/services/audits` | `SecurityAudits` |
| `/services/emergency` | `EmergencyAssistance` |
| `/services/intelligence` | `Intelligence` |
| `/services/*` | `Services` (catch-all fallback) |
| `/training` | `Training` |
| `/advantage` | `Advantage` |
| `/contact` | `ContactPage` |

## Design System (from `src/index.css`)

All page/component styles use these shared utility classes — **don't
reinvent them**, match existing patterns:

**Layout helpers**
- `section-padding` — horizontal padding + max-width container
- `divider` — horizontal rule between sections
- `glass-card` — frosted glass card with subtle border

**Typography**
- `heading-xl` / `heading-lg` / `heading-md` / `heading-sm` — display type
- `body-lg` / `body-md` — body text
- `label-text` — small uppercase label (used above headings)
- `text-primary` — accent color (gold)
- `text-text` / `text-text-muted` / `text-text-dim` — text hierarchy

**Backgrounds**
- `bg-dark-900` — alternate section background for contrast stripes
- `bg-primary/[0.02]` — subtle hero glow

**Reveal animation**
- Add `data-reveal` attribute to any element inside a section whose ref
  uses `useScrollReveal<HTMLDivElement>()`. The hook wires GSAP
  ScrollTrigger + `fromTo()` so elements fade/translate in on scroll.
- **ALWAYS** use `fromTo()` (never `from()` with `opacity: 0`) — this is
  a hard rule from CLAUDE.md to prevent invisible elements.

**CTAs**
- Use `<MetalCTA to="/contact" label="..." icon={<svg.../>} />` for all
  primary buttons — it's theme-aware (gold → btn-primary, silver → shader).
- For secondary buttons, add `variant="outline"`.
- `width` / `height` props in the MetalCTA interface are defined but
  currently unused; passing them is harmless but has no effect.

## Theme System

`ThemeContext` provides two modes:
- **gold** (default) — dark background + gold accents
- **silver** — dark background + liquid-metal shader buttons

Toggled from the navbar. `MetalCTA` and `LiquidMetalButton` read the
theme; other components mostly use CSS variables that switch in
`index.css`.

## Page Pattern (for new pages)

Every page follows this template (see `Training.tsx` or any file in
`src/pages/services/` for the canonical example):

```tsx
import { useScrollReveal } from '../hooks/useScrollReveal'
import MetalCTA from '../components/ui/MetalCTA'

export default function Page() {
  const heroRef = useScrollReveal<HTMLDivElement>()
  // ...one ref per section

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-padding pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <span data-reveal className="label-text">Label</span>
          <h1 data-reveal className="heading-xl mt-4 mb-6">
            Title <span className="text-primary">Accent</span>
          </h1>
          <p data-reveal className="body-lg max-w-2xl">Subline</p>
        </div>
      </section>

      <div className="section-padding"><div className="divider" /></div>

      {/* Body sections — alternate bg-dark-900 for contrast */}

      {/* CTA */}
      <section className="section-padding py-24 lg:py-36 text-center">
        <MetalCTA to="/contact" label="..." />
      </section>
    </>
  )
}
```

Service detail pages in `src/pages/services/` need `../../` import paths
(one level deeper).

## Content Source

**All copy lives in `content/Content.docx` and `content/BIO.docx`.** These
are the single source of truth. When adding or editing text, check these
files first — do not invent copy. Extract with:

```bash
python3 -c "from docx import Document; d = Document('content/Content.docx'); print('\n'.join(p.text for p in d.paragraphs))"
```

## Current Status (2026-04-07)

### ✅ Complete
- Home, About (with full Maxim bio), Services grid, Advantage, Training,
  Contact UI, Footer, Navbar
- All 5 service detail pages (Investigations, Security Management,
  Security Audits, Emergency Assistance, Intelligence)
- All copy matches source .docx files — no lorem ipsum / placeholders

### ⏳ Deferred (later phase)
- Contact form backend wiring (form UI exists, no submission handler)
- Deployment (no Gitea / Vercel / Coolify set up yet)

### Hard rules for this project
- Light mode is NOT used here — KASPIT is dark-mode by design (security
  brand). Override CLAUDE.md's light-mode default.
- Phone number in Contact page (+43 664 3444616) is real, don't replace.
- Never edit files in `content/` — those are client source material.
- Follow the GSAP `fromTo()` rule strictly (see CLAUDE.md).

## Dev Commands

```bash
npm install              # install deps
npm run dev              # start dev server (usually :5180)
npx tsc --noEmit         # type check
npm run build            # production build
```
