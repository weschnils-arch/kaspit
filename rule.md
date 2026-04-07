# Project Rules — KASPIT (MaximGutman)

## The Rule

> **Always maintain an `architecture.md` at the project root that explains
> what's up with each page and where we are at.**

This is the single source of truth that any future Claude session (or human)
can read in 90 seconds to understand:

- Who the client is and what the site is for
- The full stack and key design conventions
- Every route, what page handles it, and what the browser title is
- Established patterns to reuse (don't reinvent)
- What's complete vs. deferred vs. flagged
- Hard rules that override defaults

## What `architecture.md` must contain

1. **Client + repo + production URL** — one short header block
2. **Stack table** — framework, build, animations, deploy target
3. **Directory tree** with annotations (`USED` / `LEGACY` / `NEVER EDIT`)
4. **Route table** — path → component → page title
5. **Theme system** — what's default, what's secondary, where it's defined
6. **Design system tokens** — utility classes, button helpers, typography scale
7. **Page patterns** — code snippets for the canonical structure of new pages
8. **Special interactions** — Lenis, ScrollToTop, GSAP rules, anything non-obvious
9. **Content source** — where the source-of-truth copy lives, how to extract it
10. **SEO/deploy state** — sitemap, robots, OG, Vercel config
11. **Status block** — ✅ complete · ⏳ deferred · 🚨 hard rules
12. **Dev commands** — install, run, typecheck, build

## When to update

- **After any structural change** — new page, new component, new route, theme change, new pattern
- **After any deferred item is resolved** — move it from deferred to complete
- **After any new hard rule is established** — add it to the rules list
- **At the end of every session** — quick scan to make sure status reflects reality

Treat it like a living `README.md` for the building, not a journal of what
happened. Future-you doesn't care about the chronology — they care about the
current state.

## Why this matters

Without this doc, every new session starts by reading 30+ files to rebuild
the mental model. With it, the next session reads one file and is productive
in two minutes. The cost of writing it (~10 min once, ~1 min to update) is
trivial compared to the cost of re-deriving context.

## Companion files

- **`architecture.md`** — the living state doc (this rule's main artifact)
- **`content/`** — client source copy, never edit
- **`/Users/nilswesch/Desktop/claude_projects/CLAUDE.md`** — global Nils rules
- **`~/.claude/projects/.../memory/`** — persistent memory across sessions
