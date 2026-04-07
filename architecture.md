# KASPIT Security (MaximGutman) — Architecture

Client: **Maxim Gutman / KASPIT Security GmbH** — Austria's premium boutique
intelligence-led security firm. Part of the international KASPIT Group.
Branches: Vienna (HQ, Fischerstrand 4, 1220 Wien), Germany, Israel.

- Production domain: **www.kaspit.net** (currently a Wix site, this build replaces it)
- Repo: [weschnils-arch/kaspit](https://github.com/weschnils-arch/kaspit) on GitHub
- Phone: `+43 (0) 664 344 4616` · Email: `office@kaspit.net`
- VAT: `ATU79083849` · FN: `593406 g` (Handelsgericht Wien)
- LinkedIn: https://www.linkedin.com/company/kaspit-gmbh/

## Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | react-router-dom 7 (BrowserRouter) |
| Styling | Tailwind CSS v4 (`@theme` block + custom `@layer` utilities in `src/index.css`) |
| Animations | GSAP 3 (via `useScrollReveal` hook) |
| Smooth scroll | Lenis (initialised in `main.tsx`, exposed on `window.__lenis`) |
| Utilities | clsx |
| Dev server | `npm run dev` → http://localhost:5180/ (auto picks next free port) |
| Deploy | Vercel SPA via `vercel.json` rewrites |

## Directory Structure

```
MaximGutman/
├── content/                       ← source copy (NEVER EDIT, reference only)
│   ├── BIO.docx                   ← Maxim's founder bio
│   └── Content.docx               ← full site copy (all pages)
├── _project/                      ← design system / architecture docs (legacy)
├── _assets/                       ← raw client assets (legacy)
├── public/                        ← static files served as-is
│   ├── favicon.png
│   ├── og-image.jpg               ← 1200×630 OG card (KASPIT shield + tagline)
│   ├── robots.txt                 ← SEO, points to sitemap
│   ├── sitemap.xml                ← 13 routes for kaspit.net
│   └── images/
│       ├── kaspit-logo-full.webp  ← USED — navbar + footer + imprint
│       ├── kaspit-logo-white.webp ← USED — small contexts
│       ├── maxim-gutman.webp      ← USED — Home + About founder photo
│       ├── wko-logo.avif          ← Imprint membership
│       ├── ksv1870.avif           ← Imprint membership
│       ├── berufsdetektiv.webp    ← Imprint membership
│       ├── miliz-guetesiegel.webp ← Imprint membership
│       └── kaspit-bw*.webp / kaspit-logo*.webp / kaspit-logo-color.webp / kaspit-logo-new.webp
│                                  ← UNUSED legacy variants, safe to delete
├── src/
│   ├── App.tsx                    ← routes + ScrollToTop (Lenis-aware) + layout shell
│   ├── main.tsx                   ← entry; inits Lenis, exposes on window.__lenis
│   ├── index.css                  ← Tailwind v4 @theme + @layer components
│   ├── context/
│   │   └── ThemeContext.tsx       ← silver (default) / gold theme toggle
│   ├── hooks/
│   │   ├── useScrollReveal.ts     ← GSAP scroll-triggered reveals
│   │   ├── useLenis.ts            ← (legacy, not currently used)
│   │   └── usePageTitle.ts        ← sets `KASPIT · {title}` on route mount
│   ├── components/
│   │   ├── Navbar.tsx             ← top nav + theme toggle + mobile menu w/ toggle next to X
│   │   ├── Footer.tsx             ← logo, nav, services, LinkedIn icon, Imprint + Terms links
│   │   ├── LoadingScreen.tsx      ← initial loader (KASPIT brand reveal)
│   │   ├── ParticleNetwork.tsx    ← global background particles (every page)
│   │   ├── HeroNetwork.tsx        ← Home-only constellation, mouse-reactive, theme-aware palette
│   │   ├── Contact.tsx            ← contact form (UI ONLY — submission is a no-op)
│   │   ├── About.tsx | Advantage.tsx | Hero.tsx | Services.tsx | Training.tsx | Navigation.tsx
│   │   │                          ← LEGACY — not imported anywhere, safe to delete
│   │   └── ui/
│   │       ├── MetalCTA.tsx       ← canonical CTA button (theme-aware wrapper)
│   │       └── LiquidMetalButton.tsx ← shader button used in silver mode
│   └── pages/
│       ├── Home.tsx               ← hero w/ HeroNetwork, services teaser, about teaser, CTA
│       ├── About.tsx              ← Maxim bio (photo: lg:col-span-4 of 12, max-w-[340px])
│       ├── Advantage.tsx          ← "Why KASPIT Stands Alone" + 6 advantage cards
│       ├── Services.tsx           ← 6-card services grid landing
│       ├── Training.tsx           ← intro + 3 training programs + approach + CTA
│       ├── Contact.tsx            ← hero + Contact component (form + clickable phone/email)
│       ├── Imprint.tsx            ← Impressum: company facts, memberships, legal notices
│       ├── Terms.tsx              ← AGB w/ EN/DE language toggle
│       ├── NotFound.tsx           ← 404 page (catchall route)
│       └── services/              ← service detail pages (need ../../ imports)
│           ├── Investigations.tsx
│           ├── SecurityManagement.tsx
│           ├── SecurityAudits.tsx
│           ├── EmergencyAssistance.tsx
│           └── Intelligence.tsx
├── index.html                     ← title, meta, OG, Twitter cards, data-theme="silver"
├── vercel.json                    ← SPA rewrites: { source: "/(.*)", destination: "/" }
├── package.json
├── vite.config.ts
└── architecture.md                ← this file
```

## Routes

Defined in `src/App.tsx`. Order matters less in v6 (specificity-based) but listed for clarity.

| Path | Component | Title (browser tab) |
|---|---|---|
| `/` | `Home` | `KASPIT · Intelligence-Led Security Management` |
| `/about` | `About` | `KASPIT · About · Maxim Gutman & KASPIT` |
| `/services` | `Services` (grid) | `KASPIT · Strategic Security Services` |
| `/services/investigations` | `Investigations` | `KASPIT · Intelligence-Driven Investigations` |
| `/services/security-management` | `SecurityManagement` | `KASPIT · Strategic Security Management` |
| `/services/audits` | `SecurityAudits` | `KASPIT · Security Audits & Compliance` |
| `/services/emergency` | `EmergencyAssistance` | `KASPIT · Emergency Assistance & Duty of Care` |
| `/services/intelligence` | `Intelligence` | `KASPIT · Security Intelligence & Risk Consulting` |
| `/services/*` | `Services` | (catch-all fallback for unknown service paths) |
| `/training` | `Training` | `KASPIT · Elite Training & Capacity Building` |
| `/advantage` | `Advantage` | `KASPIT · The KASPIT Advantage` |
| `/contact` | `ContactPage` | `KASPIT · Contact · Confidential Conversation` |
| `/imprint` | `Imprint` | `KASPIT · Imprint` |
| `/terms` | `Terms` | `KASPIT · Terms & Conditions` |
| `*` | `NotFound` | `KASPIT · Page Not Found` |

## Theme System

`ThemeContext` provides two modes — **silver is the default**, gold is secondary:
- **silver** (default) — cool chrome accents, `LiquidMetalButton` shader for primary CTAs
- **gold** — warm `#C9A96E` accents, standard `btn-primary` for primary CTAs

CSS overrides live in `src/index.css` under `html[data-theme="silver"]`. The
default `data-theme="silver"` is set on `<html>` in `index.html` to avoid flash
on first paint.

`HeroNetwork` reads the theme via a ref and swaps its particle/line palette
live without restarting the canvas animation.

## Design System (`src/index.css`)

All page/component styles use these shared utility classes — **don't reinvent
them**, match existing patterns.

**Layout helpers**
- `section-padding` — horizontal padding + max-width container
- `divider` — horizontal rule between sections (silver/gold gradient)
- `glass-card` — frosted glass card with subtle border

**Typography**
- `heading-xl` / `heading-lg` / `heading-md` / `heading-sm` — display type
- `body-lg` / `body-md` — body text
- `label-text` — small uppercase label, used above headings
- `text-primary` — accent color (silver/gold based on theme)
- `text-text` / `text-text-muted` / `text-text-dim` — text hierarchy

**Buttons**
- `btn-primary` / `btn-outline` — responsive: smaller font/padding on mobile,
  `whitespace-nowrap`, full-width-ready
- `LiquidMetalButton` — shader version, `w-full sm:w-auto`, responsive font

**Backgrounds**
- `bg-dark-900` — alternate section background for contrast stripes

## Established Page Patterns

### 1. Page template
Every page imports + calls `usePageTitle()` first thing in the function body.
Service detail pages need `../../` import paths.

```tsx
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageTitle } from '../hooks/usePageTitle'
import MetalCTA from '../components/ui/MetalCTA'

export default function Page() {
  usePageTitle('Page Title')
  const heroRef = useScrollReveal<HTMLDivElement>()
  // ... one ref per section

  return (
    <>
      {/* Hero — left aligned full width */}
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

      {/* Editorial 2-col intro */}
      {/* Content sections (centered) */}
      {/* CTA section (centered) */}
    </>
  )
}
```

### 2. Editorial 2-col intro (used after every service page hero)
Fixes the jarring jump from left-aligned hero to centered content.

```tsx
<section ref={introRef} className="section-padding py-24 lg:py-36">
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start">
    <div data-reveal>
      <span className="label-text">Introduction</span>
      <h2 className="heading-lg mt-4">
        Title<br /><span className="text-primary">Accent</span>
      </h2>
    </div>
    <div data-reveal className="space-y-6 body-lg">
      <p>...</p>
    </div>
  </div>
</section>
```

### 3. Card grid hover treatment (consistent across the site)

```tsx
className="group glass-card rounded-sm p-8 lg:p-10 transition-all duration-500
  hover:border-primary/30 hover:bg-dark-800/80 hover:-translate-y-0.5
  hover:shadow-[0_8px_30px_rgba(176,190,197,0.06)]"
```

The number badge / heading inside use `group-hover:text-primary` for the
secondary tint shift.

### 4. Uneven 2-col card grids — last item full-width
Detect odd count and apply `md:col-span-2` to the trailing card so the layout
doesn't dangle. Examples: Intelligence Capabilities (5), Emergency
Capabilities (7), Security Audits Scope (8 — even, no fix needed).

```tsx
{items.map((item, i) => {
  const isLast = i === items.length - 1 && items.length % 2 === 1
  return (
    <div className={`group glass-card ... ${isLast ? 'md:col-span-2' : ''}`}>
      ...
    </div>
  )
})}
```

### 5. CTA wrappers — mobile-safe
Always stack vertically on mobile so each button gets full container width
(needed for long labels like "Request a Confidential Risk Assessment"):

```tsx
<div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:items-stretch">
  <MetalCTA to="/contact" label="..." />
  <MetalCTA to="/about" label="..." variant="outline" className="!py-[14px]" />
</div>
```

The outline button needs `!py-[14px]` to match `LiquidMetalButton` height.

### 6. Use `MetalCTA` for all CTAs
- Primary: `<MetalCTA to="/contact" label="..." icon={<svg.../>} />`
- Secondary: add `variant="outline"`
- `width` / `height` props are defined in the interface but currently unused;
  passing them is harmless but has no visual effect

## Reveal animation rule

Add `data-reveal` to any element inside a section whose ref uses
`useScrollReveal<HTMLDivElement>()`. The hook wires GSAP ScrollTrigger +
`fromTo()`.

**ALWAYS use `fromTo()` (never `from()` with `opacity: 0`)** — hard rule from
CLAUDE.md. Elements would stay invisible if ScrollTrigger doesn't fire.

## ScrollToTop / Lenis interaction

Lenis intercepts `window.scrollTo`, so the `ScrollToTop` component in
`App.tsx` reads `window.__lenis` (set in `main.tsx`) and calls
`lenis.scrollTo(0, { immediate: true })` on route change. Without this, link
clicks landed mid-page on the new route.

## Content Source

**All copy lives in `content/Content.docx` and `content/BIO.docx`.** Single
source of truth. When adding or editing text, check these files first — do
not invent copy.

```bash
# Extract docx text to stdout (no external deps)
python3 -c "
import re
with open('/tmp/c/word/document.xml') as f: c = f.read()
for p in re.split(r'</w:p>', c):
    t = re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p)
    if t: print(''.join(t))
" # after: unzip -o content/Content.docx -d /tmp/c
```

The full Imprint and Terms text were scraped via Playwright from
`kaspit.net/impressum`, `/agb` (English) and `/agb-1` (German) — Wix renders
client-side so plain curl doesn't work; need a headless browser.

## SEO

- `index.html` has full Open Graph + Twitter card meta pointing to `/og-image.jpg`
- `usePageTitle('...')` per route → `KASPIT · {title}`
- `public/robots.txt` allows all, references sitemap
- `public/sitemap.xml` lists all 13 routes with `https://www.kaspit.net/` canonical URLs
- After deploy: submit sitemap to Google Search Console

## Deployment

- `vercel.json` is in repo root with SPA rewrites — direct nav to `/services` etc. won't 404
- Vite app sits at repo root (not nested) per CLAUDE.md hard rule
- Push: `git push origin main` → GitHub → Vercel auto-deploy (if connected)
- Manual: `vercel deploy --prod --yes` from project root, scope `gymkarris-projects`
- Coolify pipeline (Gitea + Coolify) is the standard per CLAUDE.md but not yet set up here
- Production target: **kaspit.net** (currently Wix, replacing it)

## Current Status

### ✅ Complete
- All 14 routes built, content matches `Content.docx` source verbatim
- Imprint with real legal data scraped from kaspit.net/impressum
- Terms & Conditions (EN + DE) scraped from kaspit.net/agb-1 and /agb
- Hero constellation (mouse-reactive, theme-aware silver/gold)
- Editorial 2-col intro on all service pages
- Hover treatments on every card grid (subtle lift + glow + accent shift)
- Last-card-full-width fix for odd 2-col grids
- Mobile CTA fix (responsive font/padding, full-width stack)
- Per-page browser titles (`KASPIT · {page}`)
- 1200×630 OG image with KASPIT shield + tagline
- LinkedIn icon in footer
- Burger menu theme toggle next to X
- Lenis-aware scroll-to-top
- 404 page
- robots.txt + sitemap.xml
- vercel.json
- Pushed to GitHub `weschnils-arch/kaspit` main branch

### ⏳ Deferred
- **Contact form backend** — UI exists, `setSubmitted(true)` is the only handler.
  Maxim won't receive any messages. Wire up Formspree / Resend / Vercel function before launch.
- **Vercel/Coolify deployment** — repo is on GitHub, not yet connected to host
- **Cleanup of legacy files** — `src/components/{About,Advantage,Hero,Services,Training,Navigation}.tsx`
  are dead code. `public/images/kaspit-bw*.webp`, `kaspit-logo*.webp` (5 files) are unused. Safe to delete.
- **`content/` folder cleanup** — currently committed (BIO.docx, Content.docx). Reference material, fine to keep.

### Hard rules for this project (override CLAUDE.md defaults)
- **Dark mode is the design** — KASPIT is intentionally dark (security brand). Don't switch to light.
- **Silver is the default theme**, gold is secondary (flipped from CLAUDE.md gold-default).
- Phone number in Contact / Imprint (`+43 (0) 664 344 4616`) is real, don't replace.
- Never edit files in `content/` — those are client source material.
- Follow the GSAP `fromTo()` rule strictly.
- Any new card grid must use the established hover treatment (above).
- Any new long-label CTA must use the mobile stack pattern (above).

## Dev Commands

```bash
npm install                     # install deps
npm run dev                     # start dev server (usually :5180)
./node_modules/.bin/tsc -b      # type check (matches build)
npm run build                   # production build
git push origin main            # publish to GitHub
```
