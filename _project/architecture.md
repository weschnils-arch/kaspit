# MaximGutman / KASPIT Security — Architecture

## Client
**Maxim Gutman** — Founder & Managing Director of KASPIT Security
Premium boutique security firm (investigations, security management, emergency response, intelligence, training).
Branches across Europe and Middle East. Austrian-based.

## Project Status
**Phase 3 — Build (in progress)**
- Dark mode design (security/executive niche)
- Gold accent color (#C9A96E / `primary`)
- Multi-page React SPA with router

## Stack
- React + TypeScript + Vite
- Tailwind CSS 4 (custom dark theme)
- GSAP + ScrollTrigger (animations)
- Lenis (smooth scroll)
- React Router (multi-page)
- Custom MetalCTA button component (silver/gold metallic effect)

## Pages & Components

### Pages (src/pages/)
| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Built — hero, stats, services list, about teaser, CTA |
| About | `/about` | Built |
| Services | `/services`, `/services/*` | Built |
| Training | `/training` | Built |
| Advantage | `/advantage` | Built |
| Contact | `/contact` | Built |

### Components (src/components/)
| Component | Purpose |
|-----------|---------|
| Navbar | Main navigation |
| Navigation | (secondary nav?) |
| Hero | Hero section |
| About | About section |
| Advantage | Advantage section |
| Services | Services section |
| Training | Training section |
| Contact | Contact section |
| Footer | Site footer |
| LoadingScreen | Initial loading animation |
| ParticleNetwork | Background particle effect (full-page) |
| ui/MetalCTA | Metallic-styled CTA button (primary/outline variants) |
| ui/LiquidMetalButton | Alternative liquid metal button |

### Hooks
- `useLenis` — smooth scroll setup
- `useScrollReveal` — GSAP scroll-triggered reveal animations

### Context
- `ThemeContext` — theme provider

## Design System
- **Background**: Dark (#0A0A0A range)
- **Primary/Accent**: Gold (#C9A96E)
- **Text**: Light on dark, muted variants
- **Typography**: Display headings (oversized), tight letter-spacing
- **Visual effects**: Particle network background, gradient glows, grid patterns
- **Buttons**: MetalCTA with silver/gold gradient borders
- **Layout**: Full-bleed sections, generous padding, grid-based

## Known Issues (from last session)
- MetalCTA silver gradient only covers half the button — needs to extend fully
- Dev server dies on session rotation (not persistent via PM2)

## Assets
- `_project/MG_Profil.jpg`, `MG_profile.jpg` — Maxim headshots
- `_project/kaspit-logo.png`, `kaspit-security-logo.webp` — logos
- `_project/BIO.docx`, `Content.docx`, `maxim-gutman.pdf` — client materials
- `_assets/` — additional assets folder
- `public/images/maxim-gutman.webp` — hero image (converted)

## Deploy
- Dev server: port 5200
- Production: TBD (likely Vercel or Coolify)

## File Structure
```
MaximGutman/
  _project/           # Internal docs + client materials
    architecture.md   # This file
    BIO.docx, Content.docx, maxim-gutman.pdf
    MG_Profil.jpg, MG_profile.jpg
    kaspit-logo.png, kaspit-security-logo.webp
  _assets/            # Raw assets
  public/images/      # Optimized WebP images
  src/
    components/       # Reusable components
      ui/             # UI primitives (MetalCTA, LiquidMetalButton)
    context/          # ThemeContext
    hooks/            # useLenis, useScrollReveal
    pages/            # Route pages
    App.tsx           # Router + layout
    main.tsx          # Entry point
    index.css         # Global styles + Tailwind
  dist/               # Build output
```

---
*Last updated: 2026-04-05*
