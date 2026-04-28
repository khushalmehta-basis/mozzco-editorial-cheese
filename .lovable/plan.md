## Use the uploaded Mozzco logo across the site

Replace the current text wordmark ("Mozzco.") in the navigation and footer with the uploaded brand logo (the green/red MOZZCO mark with mozzarella photo and "Handmade Artisanal Cheeses & Creamery" tagline).

### 1. Save the asset

Copy `user-uploads://ChatGPT_Image_Apr_28_2026_08_24_02_PM.png` → `src/assets/mozzco-logo.png`.

Since the uploaded logo has a white card background with rounded corners and the site uses a cream background, I'll also generate a transparent-background variant via Nano Banana edit (`mozzco-logo-trim.png`) — just the mark + tagline on transparent — so it sits cleanly on the cream surface without a white rectangle floating in the layout.

### 2. New shared component: `src/components/site/Logo.tsx`

A single source of truth so the logo is consistent everywhere:

```tsx
<Link to="/" aria-label="Mozzco — Handmade Artisanal Cheeses & Creamery">
  <img src={logo} alt="Mozzco" className={sizeClass} />
</Link>
```

Props: `variant?: "nav" | "footer"` to control height (nav: ~h-9, footer: ~h-14).

### 3. Update `SiteNav.tsx`

Replace the text wordmark `Mozzco.` with `<Logo variant="nav" />`. The logo's green matches the existing `--olive-deep` ink, so it harmonises with the palette. On scroll the nav already swaps to a cream background, so the logo will read on both the transparent hero state and the scrolled state.

### 4. Update `SiteFooter.tsx`

Replace the large `Mozzco.` wordmark in the footer's left column with `<Logo variant="footer" />` at a larger size (~h-14 / ~150px wide). Keep the existing italic tagline beneath it ("Italian-style cheeses, made by hand in Dallas since 1982.") — the logo's own tagline is small and the footer benefits from the bigger statement.

### 5. Favicon + OG

- Replace `public/favicon.ico` reference and add `public/favicon.png` from a square crop of the mark (just the "MOZZCO" lettering, no tagline) so it reads at 32×32.
- Add the logo as default `og:image` in `__root.tsx` so social shares carry the brand mark.

### Out of scope

- No changes to typography, colors, or other modules.
- Hero, story, team, and product sections keep their existing imagery — the logo is brand identity, not editorial content.

### Files touched

- **created** `src/assets/mozzco-logo.png` (and `mozzco-logo-trim.png` transparent variant)
- **created** `public/favicon.png`
- **created** `src/components/site/Logo.tsx`
- **edited** `src/components/site/SiteNav.tsx`
- **edited** `src/components/site/SiteFooter.tsx`
- **edited** `src/routes/__root.tsx` (favicon + default og:image)

Ready to implement on approval.