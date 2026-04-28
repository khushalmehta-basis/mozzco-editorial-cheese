## Use the uploaded team photo in a modern, editorial way

The image is gold for the brand: five smiling cheesemakers in branded tees, in the actual Dallas factory, hands deep in fresh curd. It tells the "made by hand, by real people" story better than any stock shot. I'll use it as the centerpiece of a new module — not just dropped in as a decoration.

### 1. Save the asset

Copy `user-uploads://ChatGPT_Image_Apr_28_2026_08_11_05_PM.png` → `src/assets/team-curd-table.jpg`.

### 2. New component: `src/components/site/TeamModule.tsx`

A full-bleed editorial spread titled **"The hands behind every batch."** Layout:

```text
┌─────────────────────────────────────────────────────────┐
│  [ kicker: Plate III — The Curd Room ]                  │
│                                                         │
│  ┌──────────────────────────────┐   ── 01 / Maria       │
│  │                              │   Forty years at      │
│  │   FULL TEAM PHOTO            │   the curd table.     │
│  │   (large, ~7 cols)           │                       │
│  │   subtle warm duotone        │   ── 02 / Lucia       │
│  │   overlay to harmonize       │   Stretches every     │
│  │   with cream/olive palette   │   ball by hand.       │
│  │                              │                       │
│  └──────────────────────────────┘   ── 03 / Rosa, etc.  │
│                                                         │
│  Italic caption beneath photo, 5 cols                   │
└─────────────────────────────────────────────────────────┘
```

Details:
- Cream background section, ~py-28.
- Heading: `display-lg` — *"The hands behind every batch."*
- Lead paragraph (serif, drop-cap optional): "Five cheesemakers. One curd table. Most mornings, this is exactly what it looks like — Maria, Lucia, Rosa, Elena and Carmen, working a fresh batch before the city is awake."
- Image: aspect ~5/4, object-cover, with a very subtle warm cream overlay (`mix-blend-multiply` at low opacity) so the bright white tees and stainless steel sit gracefully inside the editorial palette without losing the joy.
- Right rail: numbered list (01–05) of named makers with one-line credits, separated by hairline rules — turns the photo into a "credits page" the way a magazine names its contributors.
- Italic serif caption under the photo: *"Plate III — Curd cutting, 6:42 a.m., Dallas factory floor."*
- Subtle hover: numbered names get a small olive rule extending on hover, echoing existing pattern in `StoryModule`.

### 3. Placement in `src/routes/index.tsx`

Insert **between `StoryModule` and `CheeseCompass`**:

```text
StoryModule (Paula's portrait — the founder)
TeamModule  (the team — "and these are the hands today")  ← NEW
CheeseCompass
```

This builds a natural narrative arc: founder → team → product discovery.

### 4. Small style touches

- No new fonts or palette tokens needed — uses existing `cream`, `butter`, `olive`, `kicker`, `rule-mark`, `caption`, `display-lg`, `hairline-rule`.
- Image rendered with `loading="lazy"` and explicit width/height to avoid CLS.
- Honors `prefers-reduced-motion` (no entrance animation beyond the existing `fade-up` utility).

### Out of scope
- No changes to nav, hero, or other modules.
- Not replacing the Paula portrait in `StoryModule` — the two photos serve different roles (founder vs. team).

Ready to implement on approval.