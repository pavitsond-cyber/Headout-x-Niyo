# Project To-Do List

---

## Completed

### Page Structure & Sections

- Set up Next.js 16 + React 19 + Tailwind CSS v4 project
- Root layout with global background colour (`#F8F6FF`) and custom fonts
- Page composition: Hero → Top Destinations → Reviews → FAQ → Footer

### Hero Section

- Animated city name ticker (slide-up / slide-out keyframe animation cycling through destinations)
- Hopping bus SVG animation (`busHop` keyframe)
- Co-branded Headout × Niyo logo
- Headline copy with 15% Niyo Global Card offer subtitle

### Top Destinations Section

- Horizontally scrollable city carousel with circular city images and labels
- Active tab selection state — clicking a city filters the product grid
- Toggle behaviour — clicking the active city deselects it (shows all products)
- Product grid: responsive 4-column layout with live data from Headout API
- Background colour scoped to the tabs area only — product grid has a plain white background
- Product card border radius changed to 4px

### Product Cards

- City label + star rating + review count
- Product title (clamped to 3 lines)
- Price in INR with strikethrough original price when discounted
- Hover scale effect on card image
- Deep-link to Headout PDP in a new tab

### Reviews / Testimonials

- Review cards with static testimonial data
- Horizontal scrollable layout

### FAQ Section

- Accordion with expand/collapse per question
- Static FAQ content

### Footer

- Navigation columns (Get Help, Cities, Headout, Partners)
- Social media icon links (LinkedIn, Instagram, YouTube, Facebook, X/Twitter)
- Headout wordmark logo (inline SVG)
- Legal copy and copyright line

### Data & API

- Headout API v6 integration (`/api/v6/tour-groups/`) with INR currency
- 1-hour ISR revalidation on the API fetch
- Per-city TGID lists in `src/data/cities.ts` for client-side filtering
- `Product` type mapping from raw API response

---

## Pending

- **Hero — Building SVG animation:** The cityscape scroll uses a static `buildings.svg`; the original page has a more elaborate animated building illustration. This animation is still pending.
- **Top Destinations — text selection style:** Custom text-selection colour / highlight style for the destination section is not yet applied.
- **Testimonials — typography & spacing:** Font size, line height, spacing, and overall visual polish of the Reviews / Testimonial section needs a full pass to match the reference design.
- **Footer — visa & payment service images:** Placeholder or missing images for accepted visa types and payment service logos in the footer.

