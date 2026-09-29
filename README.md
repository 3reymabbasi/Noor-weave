# NoorWeave  SaaS Product Marketing Site
### Fashion Brand Pricing Tiers & Signup Flow 

**Brand:** NoorWeave Technologies Pvt. Ltd.  Lahore, Pakistan  
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

## How to run

1. Unzip the folder  
2. Open `index.html` in Chrome, Firefox, Edge, or Safari  
3. Or serve locally: `npx serve .` / `python -m http.server`

