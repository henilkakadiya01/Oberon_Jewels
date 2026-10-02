# Oberon Jewels — Fine & Modern Luxury Jewellery Platform

A complete, production-ready, ultra-luxurious e-commerce platform built for **Oberon Jewels**. Designed with an editorial luxury aesthetic, minimal and sophisticated layouts, warm ivory backgrounds, champagne gold accents, charcoal typography, and fast responsive interactions.

---

## 💎 Brand Identity & Visual Language

- **Brand Name:** Oberon Jewels
- **Brand Positioning:** Premium, elegant, modern jewellery for women and gifting.
- **Palette:** 
  - Warm Ivory (`#FAF8F5`)
  - Charcoal / Onyx (`#141414`, `#1A1815`)
  - Champagne Gold (`#C5A880`, `#D4AF37`, `#A8875E`)
  - Subtle Beige & Muted Stone (`#F3EFE9`, `#E8E2D8`)
- **Typography:**
  - Headings: `Cormorant Garamond` & `Playfair Display`
  - Body & UI: `Plus Jakarta Sans`

---

## 🗂️ Complete 38+ Website Pages & Routes

| # | Page Name | Route | Description |
|---|---|---|---|
| 1 | **Home** | `/` | Cinematic hero, trust badges, category cards, new arrivals, promotional banner, best sellers, editorial story, occasion cards, testimonials, Instagram gallery, newsletter |
| 2 | **Shop / All Jewellery** | `/shop` | Multi-faceted sidebar filters (Category, Price, Material, Color, Occasion, In-Stock, Rating), sorting, search-in-catalog, grid view toggle |
| 3 | **New Arrivals** | `/collections/new-arrivals` | Season's freshest creations from Mumbai & Jaipur ateliers |
| 4 | **Best Sellers** | `/collections/best-sellers` | Most cherished icons of Oberon |
| 5 | **Rings** | `/collections/rings` | Solitaire bands, eternity rings, Parisian croissant dome rings |
| 6 | **Earrings** | `/collections/earrings` | Baroque pearl drops, chunky featherweight hoops, huggies, climbers |
| 7 | **Necklaces** | `/collections/necklaces` | Royal emerald chokers, graduated pearl collars, medallion chains |
| 8 | **Bracelets** | `/collections/bracelets` | Luminary tennis bracelets, twisted cuffs, floating diamond bezels |
| 9 | **Pendants** | `/collections/pendants` | Hand-carved mother of pearl crescents, bespoke diamond monograms |
| 10 | **Chains** | `/collections/chains` | Waterproof liquid herringbone, rectangular paperclip links |
| 11 | **Jewellery Sets** | `/collections/sets` | Heirloom bridal ensembles, gift trio boxes |
| 12 | **Gifts** | `/collections/gifts` | Ribboned velvet keepsake casket curations |
| 13 | **Sale** | `/collections/sale` | End-of-season selections up to 35% off |
| 14 | **Product Details** | `/product/:slug` | High-res gallery zoom, thumbnail strip, variant finish selector, size selector, pincode delivery checker, spec accordions, customer reviews, cross-sells |
| 15 | **Search Results** | `/search` | Dedicated search results page with filter recovery |
| 16 | **Wishlist** | `/wishlist` | Saved jewels grid, price tracking, quick move-to-bag |
| 17 | **Shopping Cart** | `/cart` | Bag items, quantity controls, save for later, coupon voucher, free shipping progress meter |
| 18 | **Checkout** | `/checkout` | 5-step checkout: Customer Info → Shipping Address → Delivery Method → Payment Gateway → Final Order Review |
| 19 | **Order Confirmation** | `/order-confirmation/:orderId` | Confetti celebration, order summary, estimated delivery, printable invoice generator |
| 20 | **My Account** | `/account` | Patron portal: profile edit, saved addresses CRUD, password security |
| 21 | **Order History** | `/account/orders` | Lifetime order archive with status tags, invoice printing, Buy Again buttons |
| 22 | **Order Tracking** | `/track-order` | Consignment lookup by Order ID or phone with 7-stage visual timeline |
| 23 | **About Us** | `/about` | Brand philosophy, Jaipur gemological heritage, quality pillars |
| 24 | **Contact Us** | `/contact` | Concierge message form, concierge direct helpline, showroom address |
| 25 | **FAQ** | `/faq` | Categorized searchable accordion covering orders, shipping, hallmarking |
| 26 | **Shipping & Delivery** | `/shipping-delivery` | Free shipping threshold (₹1,999), metro transit timelines |
| 27 | **Returns & Refund Policy** | `/returns-policy` | 15-day return window, eligibility guidelines, doorstep reverse pickup |
| 28 | **Privacy Policy** | `/privacy-policy` | 256-bit encryption compliance and data protection |
| 29 | **Terms & Conditions** | `/terms` | Statutory GST disclosures and terms of sale |
| 30 | **Jewellery Care Guide** | `/care-guide` | At-home cleaning recipe, storage tips, tarnish prevention |
| 31 | **Size Guide** | `/size-guide` | Interactive millimeter finger calculator slider, international charts |
| 32 | **Offers & Coupons** | `/offers` | Active coupon codes with 1-click clipboard copy (`WELCOME10`, `FIRSTORDER`, `FREESHIP`, `FESTIVE20`, `LUXE500`) |
| 33 | **Blog / Journal** | `/blog` | The Oberon Gazette editorial magazine |
| 34 | **Individual Article** | `/blog/:slug` | In-depth story, shop-the-look products, social sharing |
| 35 | **Login** | `/login` | Customer sign-in with prefilled demo access |
| 36 | **Register** | `/register` | New patron registration |
| 37 | **Forgot Password** | `/forgot-password` | Password reset dispatch simulation |
| 38 | **404 Not Found** | `*` | Luxury recovery screen |
| 39 | **Admin Dashboard** | `/admin` | Comprehensive atelier back-office console |

---

## 🛠️ Key Architectural Highlights

1. **Cart Drawer:** Instant slide-out on desktop and bottom drawer on mobile with live free shipping meter (`Add ₹XXX more for Free Shipping`).
2. **Quick View Modal:** Fast preview from any product card with size & metal finish selector, instant carting, and buy-now flow.
3. **Live Search Overlay:** Autocomplete instant search with trending keywords, recent searches, and thumbnail previews.
4. **Pincode Delivery Checker:** Live delivery calculator estimating realistic delivery dates and COD eligibility.
5. **Interactive Sizing Tool:** Live slider calculating US, UK, and Indian ring sizes based on measured finger circumference in millimeters.
6. **Atelier Admin Portal (`/admin`):**
   - Live revenue and orders KPI counters.
   - Products CRUD modal (Add jewel, edit pricing, adjust images, delete).
   - Real-time inventory manager with low-stock alerts.
   - Live order status update tool (updates customer tracking timeline instantly).
   - Coupon voucher manager.
7. **Business Configuration (`src/data/storeConfig.js`):**
   - Easily configure business legal name, GSTIN, CIN, address, support email, phone numbers, and free shipping thresholds without modifying codebase logic.

---

## 🚀 Running the Project

```bash
# 1. Navigate to directory
cd oberon-jewels

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

- **Local Server:** `http://127.0.0.1:3000/`
- **Atelier Admin Credentials:** `admin@oberonjewels.com` / `admin123` (or click enter)
