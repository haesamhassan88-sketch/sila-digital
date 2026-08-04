const CONTACT_DETAILS = {
  email: "haesamhassan88@gmail.com",
  whatsappUrl: "https://wa.me/201111766792",
  phoneDisplay: "01111766792",
  locationAr: "القاهرة، مصر",
  locationEn: "Cairo, Egypt"
};

// Developer note:
// Replace each paymentUrl with the live secure checkout link for that package.
const CHECKOUT_PRODUCTS = {
  windows: {
    key: "windows",
    name: { ar: "خدمات ويندوز", en: "Windows Services" },
    description: {
      ar: "تثبيت وتحسين النظام والتعريفات والبرامج وحل المشاكل.",
      en: "Installation, optimization, drivers, software setup, and troubleshooting."
    },
    price: { ar: "1,500 جنيه", en: "EGP 1,500" },
    paymentUrl: ""
  },
  discord: {
    key: "discord",
    name: { ar: "تجهيز سيرفر ديسكورد", en: "Discord Server Setup" },
    description: {
      ar: "الرومات والرتب والصلاحيات والبوتات والتحقق والحماية.",
      en: "Channels, roles, permissions, bots, verification, and moderation."
    },
    price: { ar: "1,750 جنيه", en: "EGP 1,750" },
    paymentUrl: ""
  },
  logo: {
    key: "logo",
    name: { ar: "تصميم الشعارات", en: "Logo Design" },
    description: {
      ar: "تصميم شعار احترافي للمشاريع والعلامات التجارية والمجتمعات.",
      en: "Professional logo design for brands, projects, and communities."
    },
    price: { ar: "2,150 جنيه", en: "EGP 2,150" },
    paymentUrl: ""
  }
};

const translations = {
  en: {
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_checkout: "Checkout",
    nav_process: "How it works",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    lang_button: "العربية",
    hero_badge: "Digital services in Egypt",
    hero_title: 'Reliable digital services for <span>work and business.</span>',
    hero_text: "Windows support, Discord setup, logo design, branding, and remote technical help with clear pricing and direct checkout.",
    checkout_btn: "Start checkout",
    services_btn: "View services",
    trust1: "Clear pricing",
    trust2: "Secure checkout",
    trust3: "Remote delivery",
    services_badge: "Services",
    services_title: "What we can help you with",
    services_text: "Fixed-price services can be purchased directly from the checkout page. Custom work can still be requested separately.",
    s1: "Windows Services",
    s1d: "Installation, optimization, drivers, updates, software setup, and troubleshooting.",
    s2: "Discord Server Setup",
    s2d: "Channels, roles, permissions, bots, verification, moderation, and security.",
    s3: "Logo Design",
    s3d: "Professional logo concepts for brands, businesses, communities, and projects.",
    s4: "Graphic Design",
    s4d: "Social media posts, covers, promotional graphics, and visual content.",
    s5: "Technical Support",
    s5d: "Remote help with Windows, software, setup, and common computer problems.",
    s6: "Brand Identity",
    s6d: "Colors, typography, logo use, and a consistent visual direction.",
    order_now: "Buy now",
    order_quote: "Request custom quote",
    pricing_badge: "Pricing",
    pricing_title: "Packages you can buy directly",
    pricing_text: "Choose a package and continue to the website checkout page.",
    from: "Starting from",
    p1: "EGP 1,500",
    p2: "EGP 1,750",
    p3: "EGP 2,150",
    price_note: "Final scope is confirmed before delivery, but payment starts from the package listed here.",
    buy_now: "Proceed to checkout",
    ask_custom: "Custom scope",
    process_badge: "Process",
    process_title: "A clear checkout flow",
    step1: "Choose your service",
    step1d: "Select the package that fits your need from the website.",
    step2: "Review the order",
    step2d: "Check the service, the package price, and your contact details.",
    step3: "Pay securely",
    step3d: "Complete payment through the secure checkout link for the selected package.",
    step4: "Receive the service",
    step4d: "We start execution and follow up with you on delivery and support.",
    about_badge: "About us",
    about_title: "A simple business built on clarity",
    about_text: "Sila Digital is a Cairo-based digital services business offering remote technical and creative services.",
    business_name: "Business name",
    business_value: "Sila Digital",
    business_location: "Location",
    business_location_value: "Cairo, Egypt",
    business_phone: "WhatsApp",
    business_email: "Email",
    faq_badge: "FAQ",
    faq_title: "Frequently asked questions",
    q1: "How do I order?",
    a1: "Open the checkout page, choose the package, enter your details, and continue to the secure payment link.",
    q2: "When do I pay?",
    a2: "You pay during checkout after reviewing the package and your details.",
    q3: "Are services remote?",
    a3: "Yes. Most services are delivered remotely unless another arrangement is agreed.",
    q4: "Can I request a refund?",
    a4: "Refund eligibility depends on the work status. Please read the Refund Policy for full details.",
    contact_badge: "Contact",
    contact_title: "Tell us what you need",
    contact_text: "Use this page for custom requests that are not listed on the direct checkout page.",
    name_label: "Your name",
    email_label: "Your email",
    phone_label: "Phone number",
    service_label: "Service needed",
    message_label: "Describe your request",
    notes_label: "Additional notes",
    send_btn: "Prepare email request",
    c_name: "Business name",
    c_email: "Email",
    c_phone: "WhatsApp / Phone",
    c_location: "Location",
    cta_title: "Ready to buy a service?",
    cta_text: "Go to the checkout page to select a package and continue to payment.",
    cta_btn: "Go to checkout",
    cta_secondary: "Custom request",
    privacy: "Privacy Policy",
    refund: "Refund Policy",
    terms: "Terms & Conditions",
    contact_us: "Contact Us",
    rights: "All rights reserved.",
    checkout_badge: "Secure checkout",
    checkout_title: "Choose your service and pay from the website",
    checkout_text: "Select the package, enter your details, and continue to the secure payment gateway for that service.",
    checkout_packages_badge: "Packages",
    checkout_packages_title: "Choose the right package",
    checkout_packages_text: "These packages are ready for direct checkout once the payment link is connected.",
    summary_badge: "Order summary",
    summary_title: "Quick review before payment",
    summary_service: "Service",
    summary_price: "Price",
    summary_delivery: "Delivery",
    summary_delivery_value: "Remote digital delivery",
    checkout_submit: "Continue to secure payment",
    payment_note_title: "Important note",
    payment_note_text: "Payments are handled through the secure payment link for each service. This site does not store card data.",
    custom_help_text: "If your request is not one of the ready-made packages, use the contact page for a custom quote.",
    custom_help_btn: "Request custom service",
    checkout_page: "Checkout page",
    floating_checkout: "Pay",
    product_select: "Select package",
    product_selected: "Selected",
    checkout_missing_payment: "This package is ready on the site, but the live payment gateway link still needs to be connected in script.js by the developer.",
    checkout_redirecting: "Redirecting you to the secure payment page...",
    contact_notice_badge: "Custom requests",
    contact_notice_title: "Need a package with direct payment?",
    contact_notice_text: "Use the checkout page for the fixed-price packages. Use this page only for custom or special requests.",
    contact_notice_btn: "Open checkout",
    contact_status: "Your email draft is ready. Review it and send it to continue the request.",
    package_headline: "Choose and continue",
    package_price_label: "Package price"
  },
  ar: {
    nav_services: "الخدمات",
    nav_pricing: "الأسعار",
    nav_checkout: "الدفع",
    nav_process: "طريقة العمل",
    nav_about: "من نحن",
    nav_faq: "الأسئلة",
    nav_contact: "تواصل معنا",
    lang_button: "English",
    hero_badge: "خدمات رقمية داخل مصر",
    hero_title: 'خدمات رقمية موثوقة <span>للأفراد والأعمال.</span>',
    hero_text: "دعم ويندوز، تجهيز سيرفرات ديسكورد، تصميم شعارات، وهوية بصرية مع أسعار واضحة وتجربة شراء تبدأ من الموقع نفسه.",
    checkout_btn: "ابدأ الدفع",
    services_btn: "عرض الخدمات",
    trust1: "أسعار واضحة",
    trust2: "دفع آمن",
    trust3: "تنفيذ عن بعد",
    services_badge: "الخدمات",
    services_title: "كيف يمكننا مساعدتك؟",
    services_text: "الخدمات ذات الأسعار الواضحة يمكن شراؤها مباشرة من صفحة الدفع، أما الأعمال المخصصة فلها صفحة تواصل منفصلة.",
    s1: "خدمات ويندوز",
    s1d: "تثبيت وتحسين النظام والتعريفات والتحديثات والبرامج وحل المشكلات.",
    s2: "تجهيز سيرفر ديسكورد",
    s2d: "الرومات والرتب والصلاحيات والبوتات والتحقق والحماية والإدارة.",
    s3: "تصميم الشعارات",
    s3d: "تصميم شعارات احترافية للعلامات التجارية والمشروعات والمجتمعات.",
    s4: "التصميم الجرافيكي",
    s4d: "تصميم منشورات السوشيال والأغلفة والإعلانات والمحتوى البصري.",
    s5: "الدعم الفني",
    s5d: "مساعدة عن بعد في ويندوز والبرامج والإعدادات والمشكلات الشائعة.",
    s6: "الهوية البصرية",
    s6d: "الألوان والخطوط واستخدام الشعار واتجاه بصري موحد.",
    order_now: "اشتر الآن",
    order_quote: "اطلب عرض مخصص",
    pricing_badge: "الأسعار",
    pricing_title: "باقات يمكن شراؤها مباشرة",
    pricing_text: "اختر الباقة المناسبة ثم انتقل إلى صفحة الدفع داخل الموقع.",
    from: "يبدأ من",
    p1: "1,500 جنيه",
    p2: "1,750 جنيه",
    p3: "2,150 جنيه",
    price_note: "يتم تأكيد نطاق التنفيذ قبل التسليم، لكن الدفع يبدأ من الباقة الظاهرة هنا.",
    buy_now: "الانتقال إلى الدفع",
    ask_custom: "نطاق مخصص",
    process_badge: "طريقة العمل",
    process_title: "رحلة شراء واضحة",
    step1: "اختر الخدمة",
    step1d: "حدد الباقة المناسبة لك مباشرة من الموقع.",
    step2: "راجع الطلب",
    step2d: "تأكد من الخدمة والسعر وبياناتك قبل المتابعة.",
    step3: "ادفع بأمان",
    step3d: "أكمل الدفع عبر رابط الدفع الآمن الخاص بالباقة التي اخترتها.",
    step4: "استلم الخدمة",
    step4d: "نبدأ التنفيذ ونتابع معك حتى التسليم والدعم ضمن نطاق الخدمة.",
    about_badge: "من نحن",
    about_title: "نشاط بسيط قائم على الوضوح",
    about_text: "سيلا ديجيتال نشاط خدمات رقمية مقره القاهرة ويقدم خدمات تقنية وإبداعية عن بعد.",
    business_name: "اسم النشاط",
    business_value: "Sila Digital",
    business_location: "الموقع",
    business_location_value: "القاهرة، مصر",
    business_phone: "واتساب",
    business_email: "البريد الإلكتروني",
    faq_badge: "الأسئلة الشائعة",
    faq_title: "أسئلة متكررة",
    q1: "كيف أطلب الخدمة؟",
    a1: "افتح صفحة الدفع، اختر الباقة، اكتب بياناتك، ثم انتقل إلى رابط الدفع الآمن الخاص بالخدمة.",
    q2: "متى أدفع؟",
    a2: "يتم الدفع أثناء صفحة الشراء بعد مراجعة الباقة وبيانات الطلب.",
    q3: "هل الخدمات عن بعد؟",
    a3: "نعم، أغلب الخدمات تقدم عن بعد إلا إذا تم الاتفاق على غير ذلك.",
    q4: "هل يمكن طلب استرجاع؟",
    a4: "يعتمد الاسترجاع على حالة تنفيذ العمل. راجع سياسة الاسترجاع للتفاصيل الكاملة.",
    contact_badge: "تواصل معنا",
    contact_title: "اشرح لنا طلبك",
    contact_text: "هذه الصفحة مخصصة للطلبات الخاصة التي لا توجد ضمن الباقات الجاهزة في صفحة الدفع.",
    name_label: "الاسم",
    email_label: "البريد الإلكتروني",
    phone_label: "رقم الهاتف",
    service_label: "الخدمة المطلوبة",
    message_label: "اكتب تفاصيل طلبك",
    notes_label: "أي ملاحظات إضافية",
    send_btn: "تجهيز رسالة البريد",
    c_name: "اسم النشاط",
    c_email: "البريد الإلكتروني",
    c_phone: "واتساب / الهاتف",
    c_location: "الموقع",
    cta_title: "جاهز لشراء خدمة؟",
    cta_text: "انتقل إلى صفحة الدفع واختر الباقة المناسبة ثم أكمل عملية الشراء.",
    cta_btn: "الذهاب إلى الدفع",
    cta_secondary: "طلب مخصص",
    privacy: "سياسة الخصوصية",
    refund: "سياسة الاسترجاع",
    terms: "الشروط والأحكام",
    contact_us: "تواصل معنا",
    rights: "جميع الحقوق محفوظة.",
    checkout_badge: "الدفع الآمن",
    checkout_title: "اختر الخدمة وأكمل الدفع من الموقع",
    checkout_text: "اختر الباقة المناسبة، اكتب بياناتك، ثم انتقل إلى بوابة الدفع الآمنة الخاصة بالخدمة.",
    checkout_packages_badge: "الباقات",
    checkout_packages_title: "اختر الخدمة المناسبة",
    checkout_packages_text: "هذه الباقات جاهزة للشراء المباشر بمجرد ربط رابط الدفع الحقيقي لكل خدمة.",
    summary_badge: "ملخص الطلب",
    summary_title: "مراجعة سريعة قبل الدفع",
    summary_service: "الخدمة",
    summary_price: "السعر",
    summary_delivery: "التنفيذ",
    summary_delivery_value: "تنفيذ رقمي عن بعد",
    checkout_submit: "الانتقال إلى الدفع الآمن",
    payment_note_title: "معلومة مهمة",
    payment_note_text: "الدفع يتم عبر رابط الدفع الآمن الخاص بكل خدمة. الموقع لا يحفظ بيانات البطاقة البنكية.",
    custom_help_text: "إذا كانت خدمتك غير موجودة ضمن الباقات الجاهزة، استخدم صفحة التواصل لطلب عرض مخصص.",
    custom_help_btn: "طلب خدمة مخصصة",
    checkout_page: "صفحة الدفع",
    floating_checkout: "ادفع",
    product_select: "اختر الباقة",
    product_selected: "تم الاختيار",
    checkout_missing_payment: "هذه الباقة أصبحت مرتبطة بصفحة الدفع داخل الموقع، لكن رابط بوابة الدفع الحقيقية ما زال يحتاج أن يضيفه الـ developer داخل script.js.",
    checkout_redirecting: "يتم الآن تحويلك إلى صفحة الدفع الآمنة...",
    contact_notice_badge: "طلبات خاصة",
    contact_notice_title: "تريد باقة بدفع مباشر؟",
    contact_notice_text: "استخدم صفحة الدفع للباقات ذات الأسعار الثابتة، واستخدم هذه الصفحة فقط للطلبات الخاصة أو المختلفة.",
    contact_notice_btn: "افتح صفحة الدفع",
    contact_status: "تم تجهيز رسالة البريد لك. راجعها ثم أرسلها لاستكمال الطلب.",
    package_headline: "اختر وتابع",
    package_price_label: "سعر الباقة"
  }
};

const serviceAliases = {
  windows: "windows",
  discord: "discord",
  logo: "logo"
};

let currentCheckoutSelection = "windows";

function getCurrentLang() {
  return localStorage.getItem("sila-lang") || "ar";
}

function getText(key, lang = getCurrentLang()) {
  return translations[lang]?.[key] ?? translations.ar[key] ?? key;
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name) || "";
}

function normalizeServiceKey(rawValue) {
  const value = String(rawValue || "").trim().toLowerCase();
  return serviceAliases[value] || "windows";
}

function buildCheckoutUrl(serviceKey) {
  return `checkout.html?service=${encodeURIComponent(serviceKey)}`;
}

function buildContactUrl(serviceName) {
  return `contact.html?service=${encodeURIComponent(serviceName)}`;
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = lang;
  localStorage.setItem("sila-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    const key = element.dataset.placeholder;
    const value = translations[lang][key];
    if (value !== undefined) {
      element.placeholder = value;
    }
  });

  if (document.body.dataset.page === "checkout") {
    renderCheckoutProducts(currentCheckoutSelection);
    updateCheckoutSummary(currentCheckoutSelection);
  }
}

function setupLanguageToggle() {
  const langBtn = document.querySelector("#langToggle");
  if (!langBtn) {
    return;
  }

  langBtn.addEventListener("click", () => {
    applyLang(document.body.dataset.lang === "ar" ? "en" : "ar");
  });
}

function setupMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (!menuBtn || !navLinks) {
    return;
  }

  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

function setupDynamicLinks() {
  document.querySelectorAll("[data-order-service]").forEach((anchor) => {
    const serviceKey = anchor.dataset.orderService;
    anchor.setAttribute("href", buildCheckoutUrl(serviceKey));
  });
}

function setStatusMessage(element, message, show) {
  if (!element) {
    return;
  }

  element.hidden = !show;
  element.textContent = show ? message : "";
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) {
    return;
  }

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const serviceInput = document.querySelector("#service");
  const messageInput = document.querySelector("#message");
  const status = document.querySelector("#contactStatus");

  const requestedService = getQueryParam("service");
  if (requestedService && serviceInput) {
    serviceInput.value = requestedService;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const service = serviceInput?.value.trim() || "";
    const message = messageInput?.value.trim() || "";

    const subject = `Service request - ${service || "Sila Digital"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      "Request details:",
      message
    ].join("\n");

    setStatusMessage(status, getText("contact_status"), true);
    window.location.href = `mailto:${CONTACT_DETAILS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function getProductCardHtml(product, lang, isActive) {
  return `
    <article class="card product-card ${isActive ? "active" : ""}" data-product-card="${product.key}">
      <div class="product-meta">
        <span class="chip">${getText("package_headline", lang)}</span>
        <span class="service-no">${product.key.toUpperCase()}</span>
      </div>
      <h3>${product.name[lang]}</h3>
      <p>${product.description[lang]}</p>
      <div class="price">${product.price[lang]}</div>
      <small>${getText("package_price_label", lang)}</small>
      <div class="product-actions">
        <button class="btn ${isActive ? "btn-primary" : "btn-secondary"} select-plan-btn" type="button" data-select-product="${product.key}">
          ${isActive ? getText("product_selected", lang) : getText("product_select", lang)}
        </button>
      </div>
    </article>
  `;
}

function renderCheckoutProducts(selectedKey) {
  const container = document.querySelector("#checkoutOptions");
  if (!container) {
    return;
  }

  const lang = getCurrentLang();
  container.innerHTML = Object.values(CHECKOUT_PRODUCTS)
    .map((product) => getProductCardHtml(product, lang, product.key === selectedKey))
    .join("");

  container.querySelectorAll("[data-select-product]").forEach((button) => {
    button.addEventListener("click", () => {
      currentCheckoutSelection = button.dataset.selectProduct;
      renderCheckoutProducts(currentCheckoutSelection);
      updateCheckoutSummary(currentCheckoutSelection);
    });
  });
}

function updateCheckoutSummary(selectedKey) {
  const product = CHECKOUT_PRODUCTS[selectedKey];
  if (!product) {
    return;
  }

  const lang = getCurrentLang();
  const summaryName = document.querySelector("#summaryName");
  const summaryPrice = document.querySelector("#summaryPrice");

  if (summaryName) {
    summaryName.textContent = product.name[lang];
  }

  if (summaryPrice) {
    summaryPrice.textContent = product.price[lang];
  }
}

function setupCheckoutForm() {
  const form = document.querySelector("#checkoutForm");
  if (!form) {
    return;
  }

  const requestedService = normalizeServiceKey(getQueryParam("service"));
  currentCheckoutSelection = requestedService;
  renderCheckoutProducts(currentCheckoutSelection);
  updateCheckoutSummary(currentCheckoutSelection);

  const status = document.querySelector("#checkoutStatus");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const product = CHECKOUT_PRODUCTS[currentCheckoutSelection];
    if (!product) {
      return;
    }

    if (!product.paymentUrl) {
      setStatusMessage(status, getText("checkout_missing_payment"), true);
      return;
    }

    const checkoutLead = {
      serviceKey: product.key,
      serviceName: product.name[getCurrentLang()],
      price: product.price[getCurrentLang()],
      name: document.querySelector("#checkoutName")?.value.trim() || "",
      email: document.querySelector("#checkoutEmail")?.value.trim() || "",
      phone: document.querySelector("#checkoutPhone")?.value.trim() || "",
      notes: document.querySelector("#checkoutNotes")?.value.trim() || ""
    };

    sessionStorage.setItem("silaCheckoutLead", JSON.stringify(checkoutLead));
    setStatusMessage(status, getText("checkout_redirecting"), true);
    window.location.href = product.paymentUrl;
  });
}

function setCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

setupLanguageToggle();
setupMobileMenu();
setupDynamicLinks();
applyLang(getCurrentLang());
setupContactForm();
setupCheckoutForm();
setCurrentYear();
