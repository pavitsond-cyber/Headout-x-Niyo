# Headout × Niyo — Hop-on Hop-off Landing Page

A pixel-close replica of the Headout Hop-on Hop-off landing page, built as a co-branded experience for Niyo Global Card users.

**Original page:** https://www.headout.com/hop-on-hop-off-tours/

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |

---

## How data is fetched

All product data is pulled at build/request time from the **Headout public API v6**:

```
GET https://api.headout.com/api/v6/tour-groups/?currency=INR&ids[]=<tgid1>,<tgid2>,...
```

### Flow

1. A curated list of Tour Group IDs (TGIDs) is maintained in `src/data/cities.ts` — one global "all" list plus per-city lists for the destination filter tabs.
2. `src/lib/api.ts` unions all TGIDs, builds the request URL, and fetches from the API with **1-hour ISR revalidation** (`next: { revalidate: 3600 }`).
3. The API response (`tourGroups[]`) is mapped into a typed `Product` shape (title, city, image, rating, price, PDP URL) and passed down as props.
4. Filtering by city happens entirely **client-side** inside `TopDestinations` — no extra API calls on tab switch.

### Key fields consumed from the API

| API field | Used as |
|---|---|
| `id` | Internal key / TGID match |
| `name` | Product card title |
| `cityDisplayName` | City label on card |
| `imageUrl` | Card thumbnail |
| `averageRating` / `ratingCount` | Star rating display |
| `listingPrice.finalPrice` | Displayed price (INR) |
| `listingPrice.originalPrice` | Strikethrough price (if discounted) |
| `tourGroupUrl` | PDP deep-link (prefixed with `headout.com`) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global bg
│   ├── page.tsx            # Server component — fetches products, composes page
│   └── globals.css         # CSS variables, keyframe animations
├── components/
│   ├── Hero.tsx            # First fold: animated headline + cityscape + bus
│   ├── BusSvg.tsx          # Inline bus SVG (preserves mix-blend-mode)
│   ├── TopDestinations.tsx # Destination tabs + product grid section
│   ├── CityCarousel.tsx    # Horizontally scrollable city pill tabs
│   ├── ProductGrid.tsx     # Responsive 4-col product grid
│   ├── ProductCard.tsx     # Individual product card
│   ├── Reviews.tsx         # Testimonials / review cards section
│   ├── ReviewCard.tsx      # Single review card
│   ├── Faq.tsx             # Accordion FAQ section
│   └── Footer.tsx          # Full footer with nav, social, legal
├── data/
│   ├── cities.ts           # TGID lists and city metadata
│   ├── faqs.ts             # Static FAQ content
│   ├── footer.ts           # Footer nav columns and social links
│   └── reviews.ts          # Static review/testimonial data
├── lib/
│   ├── api.ts              # Headout API fetch + data mapping
│   └── constants.ts        # Shared brand colours and URLs
└── types.ts                # Shared TypeScript types (Product, etc.)
```

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
