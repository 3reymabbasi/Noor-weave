# NoorWeave — SaaS Product Marketing Site
### Fashion Brand Pricing Tiers & Signup Flow (Week 3 — Professional Advanced Build)

**Brand:** NoorWeave Technologies Pvt. Ltd. — Lahore, Pakistan  
**Category:** Fashion Commerce SaaS for South Asian brands  
**Primary tools:** HTML5, CSS3, Vanilla JavaScript  

---

## What was built

A complete, production-style marketing website for **NoorWeave**, a fictional SaaS platform that helps Pakistani / South Asian fashion brands manage inventory, multi-channel sales (website + Instagram + WhatsApp), orders, and analytics.

### Pages & flows

| Page | Contents |
|------|----------|
| **Home** | Dark editorial hero, live stats, brand marquee (Customers), 6 feature cards, photo split, customer testimonials, final CTA |
| **Pricing** | Monthly/Yearly toggle, 3 tiered plans (Starter / Growth / Scale) in PKR, full comparison table, FAQ accordion |
| **Signup** | 4-step onboarding: Account → Brand → Plan selection → Welcome screen with validation |

### Key interactions (all working)

- **Navigation:** Features & Customers scroll smoothly to sections on the home page; Pricing opens the pricing page; logo returns home
- **Mobile menu:** Burger opens/closes drawer; links work
- **Header:** Transparent on hero → glass blur on scroll; text colour adapts
- **Pricing toggle:** Monthly ↔ Yearly updates prices and savings in real time
- **FAQ:** Accordion open/close
- **Signup form:** Client-side validation (required fields, email format, password length ≥ 8), password show/hide, strength meter, plan radio selection, step progress indicator

---

## How this differs from Week 1 & Week 2

- **Week 1** (Restaurant Ordering): Menu + cart fundamentals, single business type  
- **Week 2** (3D Energy Business): Visual/3D emphasis, different industry  
- **Week 3** (this project): Multi-page SaaS marketing site with **pricing tiers**, **multi-step signup/onboarding**, form validation, FAQ, and South Asian fashion commerce positioning — client-style scope and documentation standards

---

## Scope statement (written before build)

> Build a standalone SaaS-style marketing site for a fashion-commerce product aimed at South Asian brands. The site must include a polished home page, a transparent pricing page with three tiers and yearly discount, and a multi-step signup flow with validation. Delivery must be plain HTML/CSS/JS so it opens in any browser without a build step, suitable for portfolio or client handoff.

---

## Tools & techniques used

- Semantic HTML5 structure  
- CSS custom properties, Flexbox, CSS Grid, media queries  
- Keyframe animations (marquee, float, shimmer, fade-in)  
- Vanilla JS for SPA-style page switching, form state, FAQ, billing toggle  
- Google Fonts: DM Serif Display + Inter  
- Unsplash images (fashion photography)  
- No framework, no build tools — open `index.html` directly

---

## Testing performed

| Scenario | Result |
|----------|--------|
| Click Features / Customers from header | Scrolls to correct section (fixed: originally non-functional in TSX) |
| Click Pricing → plan CTA → Signup | Full flow works |
| Empty form submit | Shows field errors |
| Invalid email / short password | Validation messages appear |
| Password strength bars | Update as user types |
| Mobile viewport (< 768px) | Hero stacks, nav becomes burger, signup photo hides |
| Billing toggle | Prices and “Save ₨…” update correctly |
| FAQ open one, open another | Previous closes (accordion) |

---

## File structure

```
noorweave-html/
├── index.html      # Full site markup
├── styles.css      # All styles (design tokens, responsive)
├── script.js       # Navigation, pricing, FAQ, signup logic
└── README.md       # This documentation
```

Open `index.html` in any modern browser. No install required.

---

## What I would improve with more time

1. Persist signup form data in `sessionStorage` so refresh does not lose progress  
2. Add a simple “Login” modal or page  
3. Prefer WebP images and lazy-loading for faster first paint  
4. Add a short unit-test suite for form validators (Jest or plain Node)  
5. Deploy to GitHub Pages / Netlify and link the live URL in the README  

---

## How to run

1. Unzip the folder  
2. Open `index.html` in Chrome, Firefox, Edge, or Safari  
3. Or serve locally: `npx serve .` / `python -m http.server`

---

*Built as Week 3 individual deliverable — SDC internship, Advanced track.*
