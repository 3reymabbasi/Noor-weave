// ─── State ──────────────────────────────────────────
let currentPage = 'home';
let billing = 'monthly';
let signupStep = 1;
let selectedPlan = 'growth';
let mobileOpen = false;

// ─── Data ───────────────────────────────────────────
const brands = [
  'Aura Atelier', 'Silk Route Studio', 'Threads & Threads', 'Nasreen & Co.',
  'The Loom House', 'Gul Couture', 'House of Saira', 'Crimson Collective'
];

const features = [
  {
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/><rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/><rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/></svg>',
    title: 'Smart Inventory',
    desc: 'Real-time SKU tracking across sizes, colours, and seasonal collections. Never oversell or miss a reorder.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="4.5" cy="11" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="17.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><line x1="7" y1="10" x2="15" y2="5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="12" x2="15" y2="16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'Multi-Channel Sales',
    desc: 'Website, Instagram Shop, and WhatsApp orders  unified in one live dashboard. Zero spreadsheets.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2C6 2 2 6 2 11c0 1.6.4 3.2 1.2 4.5L2 20l4.7-1.2A9 9 0 0011 20c5 0 9-4 9-9s-4-9-9-9z" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 8.5c.4.8 1.3 2.5 3 3.4 1.7.9 2.7.9 3.1.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'WhatsApp Commerce',
    desc: 'Turn DMs into confirmed orders. Auto-generated payment links, invoices, and courier updates  all in-chat.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 2L3 6v13a2 2 0 002 2h12a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 6h16M14.5 10a3.5 3.5 0 01-7 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'Order Management',
    desc: "Full order lifecycle from placement to door. Integrated with Pakistan's top couriers out of the box."
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><polyline points="2,16 6,10 10,13 14,6 18,9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="2" y1="19" x2="20" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    title: 'Revenue Analytics',
    desc: 'SKU-level profitability, top-selling categories, channel attribution, and seasonal trend reports.'
  },
  {
    icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="currentColor" stroke-width="1.5"/><ellipse cx="11" cy="11" rx="3.5" ry="8.5" stroke="currentColor" stroke-width="1.5"/><line x1="2.5" y1="11" x2="19.5" y2="11" stroke="currentColor" stroke-width="1.5"/></svg>',
    title: 'Multi-Currency Payments',
    desc: 'Accept PKR, AED, and USD. Stripe, JazzCash, Easypaisa, and bank transfer  all supported.'
  }
];

const testimonials = [
  {
    quote: 'NoorWeave reduced our order processing time by 70%. Managing three channels used to take a full team  now one person handles it all before noon.',
    name: 'Zara Siddiqui', role: 'Founder, Aura Atelier  Lahore', initials: 'ZS'
  },
  {
    quote: 'The WhatsApp integration is a game-changer for Pakistani fashion. Customers love paying and tracking orders directly in their chat.',
    name: 'Hamza Malik', role: 'Head of E-Commerce, Threads & Threads  Karachi', initials: 'HM'
  },
  {
    quote: 'Finally a platform built for South Asian fashion. The inventory module understands our fabric SKUs, seasonal collections, and sizing  our way.',
    name: 'Nadia Rahman', role: 'Creative Director, Silk Route Studio  Dubai', initials: 'NR'
  }
];

const plans = [
  {
    id: 'starter', name: 'Starter', tagline: 'For new and small brands',
    monthly: 4900, yearly: 3700, dark: false, cta: 'Start Free Trial',
    features: ['Up to 500 SKUs', '1 sales channel', 'Basic order management', 'WhatsApp order intake', 'Email support', 'Standard reports', '1 team member', '5 GB storage'],
    missing: ['Multi-channel sync', 'Advanced analytics', 'API access', 'Dedicated manager']
  },
  {
    id: 'growth', name: 'Growth', tagline: 'For brands scaling fast',
    monthly: 12900, yearly: 9900, dark: true, cta: 'Start Free Trial',
    features: ['Unlimited SKUs', '3 sales channels', 'Advanced order management', 'WhatsApp Commerce automation', 'Priority chat support', 'Full analytics suite', '5 team members', '50 GB storage', 'Multi-channel sync', 'Custom reports'],
    missing: ['API access', 'Dedicated manager']
  },
  {
    id: 'scale', name: 'Scale', tagline: 'For established brands',
    monthly: 28900, yearly: 22900, dark: false, cta: 'Contact Sales',
    features: ['Unlimited SKUs', 'Unlimited channels', 'Enterprise order management', 'WhatsApp Commerce + automations', 'Dedicated account manager', 'Custom analytics', 'Unlimited team members', '500 GB storage', 'API & webhooks', 'SLA guarantee', 'Multi-brand support', 'Custom integrations'],
    missing: []
  }
];

const compareRows = [
  { f: 'SKU Limit', s: '500', g: 'Unlimited', sc: 'Unlimited' },
  { f: 'Sales Channels', s: '1', g: '3', sc: 'Unlimited' },
  { f: 'Team Members', s: '1', g: '5', sc: 'Unlimited' },
  { f: 'Storage', s: '5 GB', g: '50 GB', sc: '500 GB' },
  { f: 'WhatsApp Commerce', s: true, g: true, sc: true },
  { f: 'Multi-channel Sync', s: false, g: true, sc: true },
  { f: 'Advanced Analytics', s: false, g: true, sc: true },
  { f: 'Custom Reports', s: false, g: true, sc: true },
  { f: 'API Access & Webhooks', s: false, g: false, sc: true },
  { f: 'Dedicated Account Mgr.', s: false, g: false, sc: true },
  { f: 'SLA Guarantee', s: false, g: false, sc: true }
];

const faqs = [
  { q: 'Is there a free trial? Do I need a credit card?', a: "Yes all plans include a 14-day free trial with full feature access. No credit card is required to get started. Enter payment details only when you're ready to upgrade." },
  { q: 'Can I switch plans later?', a: 'Absolutely. Upgrade instantly from your account settings; downgrades apply at the next billing cycle. No penalties for switching.' },
  { q: 'Are prices in Pakistani Rupees?', a: 'Yes, default pricing is in PKR. We also support AED for UAE-based brands and USD for international customers, set at account creation.' },
  { q: 'What payment methods do you accept?', a: 'All major credit/debit cards, JazzCash, Easypaisa, bank transfer (annual plans), and Stripe for international billing.' },
  { q: 'What happens to my data if I cancel?', a: 'Your data is yours. On cancellation you get 30 days to export everything  inventory, orders, customers, analytics  as CSV or JSON. After 30 days, data is securely deleted.' },
  { q: 'Are there discounts for NGOs or educational institutions?', a: 'Yes  40% off for registered NGOs and fashion education bodies. Contact our team with your organisation details to apply.' }
];

const signupPlanOptions = [
  { id: 'starter', name: 'Starter', price: '₨ 4,900/mo', features: 'Up to 500 SKUs · 1 channel · 1 member' },
  { id: 'growth', name: 'Growth', price: '₨ 12,900/mo', features: 'Unlimited SKUs · 3 channels · 5 members', popular: true },
  { id: 'scale', name: 'Scale', price: '₨ 28,900/mo', features: 'Unlimited · API access · SLA' }
];

const checkSvg = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7.5l3.5 3.5 6.5-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const xSvg = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3L3 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
const starSvg = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1l1.6 3.6 3.9.4-2.8 2.7.7 3.9L7 9.6l-3.4 2-.3-.3.7-3.6L1.5 5l3.9-.4z"/></svg>';
const chevDown = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 5l4.5 5L12 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ─── Init ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMarquee();
  renderFeatures();
  renderTestimonials();
  renderPlans();
  renderCompare();
  renderFaqs();
  renderSignupPlans();
  updateNavColors();
  window.addEventListener('scroll', onScroll);
});

// ─── Navigation ─────────────────────────────────────
function goTo(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  const header = document.getElementById('siteHeader');
  const footer = document.getElementById('siteFooter');
  if (page === 'signup') {
    header.style.display = 'none';
    footer.style.display = 'none';
    resetSignup();
  } else {
    header.style.display = '';
    footer.style.display = '';
  }

  closeMobile();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateNavColors();
}

function scrollToSection(id) {
  if (currentPage !== 'home') {
    goTo('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  closeMobile();
}

function toggleMobile() {
  mobileOpen = !mobileOpen;
  document.getElementById('mobileDrawer').classList.toggle('open', mobileOpen);
  document.getElementById('burgerIcon').classList.toggle('hidden', mobileOpen);
  document.getElementById('closeIcon').classList.toggle('hidden', !mobileOpen);
}

function closeMobile() {
  mobileOpen = false;
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('burgerIcon').classList.remove('hidden');
  document.getElementById('closeIcon').classList.add('hidden');
}

function onScroll() {
  const scrolled = window.scrollY > 30;
  document.getElementById('siteHeader').classList.toggle('scrolled', scrolled || currentPage !== 'home');
  updateNavColors();
}

function updateNavColors() {
  const scrolled = window.scrollY > 30;
  const isHome = currentPage === 'home';
  const color = (scrolled || !isHome) ? '#111111' : '#F8F5F1';
  const logoText = document.getElementById('logoText');
  if (logoText) {
    logoText.className = 'logo-text ' + ((scrolled || !isHome) ? 'light' : 'dark');
  }
  document.querySelectorAll('[data-nav-color]').forEach(el => {
    el.style.color = color;
  });
  const burger = document.getElementById('burgerBtn');
  if (burger) burger.style.color = color;
}

// ─── Render helpers ─────────────────────────────────
function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  const items = [...brands, ...brands];
  track.innerHTML = items.map(b =>
    `<div class="brand-chip"><span class="brand-dot"></span>${b}</div>`
  ).join('');
}

function renderFeatures() {
  const grid = document.getElementById('featuresGrid');
  grid.innerHTML = features.map(f => `
    <div class="feature-card">
      <div class="feature-icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const list = document.getElementById('testimonialsList');
  list.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="stars">${starSvg.repeat(5)}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.initials}</div>
        <div>
          <p class="author-name">${t.name}</p>
          <p class="author-role">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPlans() {
  const grid = document.getElementById('plansGrid');
  grid.innerHTML = plans.map(plan => {
    const price = billing === 'yearly' ? plan.yearly : plan.monthly;
    const save = billing === 'yearly'
      ? `<p class="plan-save">Billed annually · Save ₨${((plan.monthly - plan.yearly) * 12).toLocaleString()}</p>`
      : '';
    const popular = plan.id === 'growth' ? '<div class="popular-badge">MOST POPULAR</div>' : '';
    const glow = plan.dark ? '<div class="plan-glow"></div>' : '';
    return `
      <div class="plan-card ${plan.dark ? 'dark' : ''}">
        ${glow}${popular}
        <div style="position:relative">
          <h3 class="plan-name">${plan.name}</h3>
          <p class="plan-tagline">${plan.tagline}</p>
          <div style="margin-bottom:28px">
            <div class="plan-price-row">
              <span class="plan-currency">₨</span>
              <span class="plan-amount font-display">${price.toLocaleString()}</span>
              <span class="plan-period">/mo</span>
            </div>
            ${save}
          </div>
          <button class="plan-cta" onclick="goTo('signup')">${plan.cta}</button>
          <ul class="plan-features">
            ${plan.features.map(f => `<li><span class="check">${checkSvg}</span><span>${f}</span></li>`).join('')}
            ${plan.missing.map(f => `<li class="missing"><span class="cross">${xSvg}</span><span>${f}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');
}

function setBilling(b) {
  billing = b;
  document.getElementById('btnMonthly').classList.toggle('active', b === 'monthly');
  document.getElementById('btnYearly').classList.toggle('active', b === 'yearly');
  renderPlans();
}

function renderCompare() {
  const body = document.getElementById('compareBody');
  body.innerHTML = compareRows.map(row => {
    const cells = [row.s, row.g, row.sc].map(val => {
      if (typeof val === 'boolean') {
        return val
          ? `<td class="center"><span class="check-icon">${checkSvg.replace('15', '16')}</span></td>`
          : `<td class="center"><span class="cross-icon">${xSvg}</span></td>`;
      }
      return `<td class="center"><span style="font-size:13px;color:#111;font-weight:500">${val}</span></td>`;
    }).join('');
    return `<tr><td>${row.f}</td>${cells}</tr>`;
  }).join('');
}

function renderFaqs() {
  const list = document.getElementById('faqList');
  list.innerHTML = faqs.map((item, i) => `
    <div class="faq-item" id="faq${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        <span>${item.q}</span>
        <span class="faq-chevron">${chevDown}</span>
      </button>
      <div class="faq-a"><p>${item.a}</p></div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const item = document.getElementById('faq' + i);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ─── Signup ─────────────────────────────────────────
function resetSignup() {
  signupStep = 1;
  selectedPlan = 'growth';
  showSignupStep(1);
  ['fName', 'fEmail', 'fPassword', 'fBrand', 'fWebsite'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('err', 'ok'); }
  });
  const cat = document.getElementById('fCategory');
  if (cat) { cat.value = ''; cat.classList.remove('err', 'ok'); }
  document.querySelectorAll('.form-error, .form-ok').forEach(el => el.classList.add('hidden'));
  updatePwStrength('');
  document.getElementById('fPassword').type = 'password';
  document.getElementById('eyeIcon').classList.remove('hidden');
  document.getElementById('eyeOffIcon').classList.add('hidden');
  renderSignupPlans();
}

function showSignupStep(step) {
  signupStep = step;
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('signupStep' + i);
    if (el) el.classList.toggle('hidden', i !== step);
  }
  const indicator = document.getElementById('stepIndicator');
  if (indicator) indicator.classList.toggle('hidden', step === 4);

  for (let i = 1; i <= 3; i++) {
    const circle = document.getElementById('sc' + i);
    const label = document.getElementById('sl' + i);
    if (!circle) continue;
    circle.classList.remove('active', 'done');
    label.classList.remove('active');
    if (i < step) {
      circle.classList.add('done');
      circle.innerHTML = checkSvg.replace('15', '13');
    } else if (i === step) {
      circle.classList.add('active');
      circle.textContent = i;
      label.classList.add('active');
    } else {
      circle.textContent = i;
    }
  }
  for (let i = 1; i <= 2; i++) {
    const line = document.getElementById('line' + i);
    if (line) line.classList.toggle('done', i < step);
  }
}

function signupNext() {
  if (signupStep === 1) {
    if (!validateStep1()) return;
  }
  if (signupStep === 2) {
    if (!validateStep2()) return;
  }
  if (signupStep === 3) {
    const brand = document.getElementById('fBrand').value.trim();
    document.getElementById('welcomeTitle').textContent =
      brand ? `Welcome, ${brand}!` : 'Welcome to NoorWeave!';
  }
  if (signupStep < 4) showSignupStep(signupStep + 1);
}

function signupBack() {
  if (signupStep > 1) showSignupStep(signupStep - 1);
}

function validateStep1() {
  let ok = true;
  const name = document.getElementById('fName');
  const email = document.getElementById('fEmail');
  const pw = document.getElementById('fPassword');

  // Name
  if (!name.value.trim()) {
    setFieldError('Name', 'Full name is required');
    ok = false;
  } else {
    setFieldOk('Name');
  }

  // Email
  if (!email.value.trim()) {
    setFieldError('Email', 'Email address is required');
    ok = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setFieldError('Email', 'Enter a valid email');
    ok = false;
  } else {
    setFieldOk('Email');
  }

  // Password
  if (!pw.value) {
    setFieldError('Password', 'Password is required');
    ok = false;
  } else if (pw.value.length < 8) {
    setFieldError('Password', 'Must be at least 8 characters');
    ok = false;
  } else {
    clearFieldError('Password');
    pw.classList.remove('err');
    pw.classList.add('ok');
  }

  return ok;
}

function validateStep2() {
  let ok = true;
  const brand = document.getElementById('fBrand');
  const cat = document.getElementById('fCategory');

  if (!brand.value.trim()) {
    setFieldError('Brand', 'Brand name is required');
    ok = false;
  } else {
    clearFieldError('Brand');
    brand.classList.remove('err');
    brand.classList.add('ok');
  }

  if (!cat.value) {
    setFieldError('Category', 'Please select a category');
    ok = false;
  } else {
    clearFieldError('Category');
    cat.classList.remove('err');
    cat.classList.add('ok');
  }

  return ok;
}

function setFieldError(key, msg) {
  const input = document.getElementById('f' + key);
  const err = document.getElementById('err' + key);
  const okEl = document.getElementById('ok' + key);
  if (input) { input.classList.add('err'); input.classList.remove('ok'); }
  if (err) { err.textContent = msg; err.classList.remove('hidden'); }
  if (okEl) okEl.classList.add('hidden');
}

function setFieldOk(key) {
  const input = document.getElementById('f' + key);
  const err = document.getElementById('err' + key);
  const okEl = document.getElementById('ok' + key);
  if (input) { input.classList.remove('err'); input.classList.add('ok'); }
  if (err) err.classList.add('hidden');
  if (okEl) okEl.classList.remove('hidden');
}

function clearFieldError(key) {
  const err = document.getElementById('err' + key);
  if (err) err.classList.add('hidden');
}

function togglePw() {
  const input = document.getElementById('fPassword');
  const eye = document.getElementById('eyeIcon');
  const eyeOff = document.getElementById('eyeOffIcon');
  if (input.type === 'password') {
    input.type = 'text';
    eye.classList.add('hidden');
    eyeOff.classList.remove('hidden');
  } else {
    input.type = 'password';
    eye.classList.remove('hidden');
    eyeOff.classList.add('hidden');
  }
}

function updatePwStrength(val) {
  const len = val.length;
  const color = len === 0 ? 'rgba(183,110,121,0.12)'
    : len < 6 ? '#E57373'
    : len < 10 ? '#FFB74D'
    : '#81C784';
  const thresholds = [0, 2, 5, 9];
  thresholds.forEach((t, i) => {
    const bar = document.getElementById('pb' + i);
    if (bar) bar.style.background = len > t ? color : 'rgba(183,110,121,0.12)';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const pw = document.getElementById('fPassword');
  if (pw) pw.addEventListener('input', e => updatePwStrength(e.target.value));
});

function renderSignupPlans() {
  const container = document.getElementById('signupPlans');
  if (!container) return;
  container.innerHTML = signupPlanOptions.map(pl => `
    <button class="plan-option ${selectedPlan === pl.id ? 'selected' : ''}" onclick="selectPlan('${pl.id}')">
      ${pl.popular ? '<span class="pop">POPULAR</span>' : ''}
      <div class="plan-option-inner">
        <div class="radio-circle"><div class="radio-dot"></div></div>
        <div>
          <div style="display:flex;align-items:baseline;gap:8px">
            <span class="plan-option-name">${pl.name}</span>
            <span class="plan-option-price">${pl.price}</span>
          </div>
          <p class="plan-option-feat">${pl.features}</p>
        </div>
      </div>
    </button>
  `).join('');
}

function selectPlan(id) {
  selectedPlan = id;
  renderSignupPlans();
}
