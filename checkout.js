const checkoutTranslations = {
  ar:{
    badge:"طلب خدمة",title:"أكمل طلبك في خطوات بسيطة",intro:"أرسل بيانات الطلب من الموقع، وسيتم تأكيد السعر وموعد التسليم معك قبل بدء العمل.",
    step_details:"البيانات",step_review:"المراجعة",step_confirm:"التأكيد",details_title:"بيانات العميل والطلب",name:"الاسم بالكامل",phone:"رقم الهاتف / واتساب",email:"البريد الإلكتروني (اختياري)",service:"الخدمة المطلوبة",choose_service:"اختر الخدمة",details:"تفاصيل الطلب",continue:"متابعة",
    payment_title:"طريقة الدفع والمراجعة",pay_later:"الدفع عند استلام الخدمة",pay_later_desc:"لن يتم خصم أي مبلغ الآن. يتم تأكيد السعر أولًا ثم الدفع بعد الاتفاق وقبل أو عند تسليم الخدمة حسب نوع الطلب.",digital_note:"هذه خدمة رقمية وليست شحنة. طريقة «الدفع عند الاستلام» هنا تعني الدفع بعد تأكيد التفاصيل والسعر، وليس توصيل منتج للمنزل.",agree:"أوافق على الشروط وسياسة الاسترجاع، وأفهم أن إرسال الطلب لا يعني بدء التنفيذ قبل تأكيد السعر.",back:"رجوع",confirm_review:"تأكيد الطلب",
    ready_title:"طلبك جاهز للإرسال",ready_text:"اضغط الزر لإرسال الطلب عبر واتساب. سيظهر لك رقم طلب مرجعي للاحتفاظ به.",send_order:"إرسال الطلب عبر واتساب",summary_title:"ملخص الطلب",summary_empty:"اختر الخدمة وأدخل بياناتك لعرض الملخص.",safe_title:"طلب آمن وواضح",safe_text:"لا يتم تحصيل أي مبلغ من خلال هذه الصفحة. سيتم التواصل معك لتأكيد السعر وطريقة الدفع.",
    customer:"العميل",selected_service:"الخدمة",phone_summary:"الهاتف",payment:"الدفع",payment_value:"عند استلام الخدمة",details_summary:"التفاصيل",order_no:"رقم الطلب",required:"من فضلك أكمل البيانات المطلوبة أولًا.",terms_required:"يجب الموافقة على الشروط قبل المتابعة."
  },
  en:{
    badge:"Service order",title:"Complete your order in simple steps",intro:"Submit your request online. We will confirm the final price and delivery time before work begins.",
    step_details:"Details",step_review:"Review",step_confirm:"Confirm",details_title:"Customer and order details",name:"Full name",phone:"Phone / WhatsApp",email:"Email (optional)",service:"Required service",choose_service:"Choose a service",details:"Order details",continue:"Continue",
    payment_title:"Payment method and review",pay_later:"Pay when the service is delivered",pay_later_desc:"Nothing is charged now. The price is confirmed first, then payment is made as agreed before or upon delivery depending on the service.",digital_note:"This is a digital service, not a shipped product. “Pay on delivery” means payment after the scope and price are confirmed.",agree:"I agree to the terms and refund policy and understand that submitting the order does not start work before the price is confirmed.",back:"Back",confirm_review:"Confirm order",
    ready_title:"Your order is ready to send",ready_text:"Use the button to send your order through WhatsApp. A reference order number will be included.",send_order:"Send order on WhatsApp",summary_title:"Order summary",summary_empty:"Choose a service and enter your details to see the summary.",safe_title:"Clear and secure request",safe_text:"No money is collected on this page. We will contact you to confirm the price and payment method.",
    customer:"Customer",selected_service:"Service",phone_summary:"Phone",payment:"Payment",payment_value:"Upon service delivery",details_summary:"Details",order_no:"Order number",required:"Please complete the required fields first.",terms_required:"You must agree to the terms before continuing."
  }
};

const serviceNames={
  ar:{windows:"خدمات ويندوز",discord:"تجهيز سيرفر ديسكورد",logo:"تصميم الشعارات",graphic:"التصميم الجرافيكي",support:"الدعم الفني",brand:"الهوية البصرية"},
  en:{windows:"Windows Services",discord:"Discord Server Setup",logo:"Logo Design",graphic:"Graphic Design",support:"Technical Support",brand:"Brand Identity"}
};

const checkoutForm=document.querySelector('#checkoutForm');
if(checkoutForm){
  const fields={
    name:document.querySelector('#customerName'),phone:document.querySelector('#customerPhone'),email:document.querySelector('#customerEmail'),service:document.querySelector('#orderService'),details:document.querySelector('#orderDetails')
  };
  let currentStep=1;
  let orderNumber='';

  const language=()=>document.body.dataset.lang||localStorage.getItem('sila-lang')||'ar';
  const t=key=>checkoutTranslations[language()][key]||key;

  function applyCheckoutLang(lang){
    document.body.dataset.lang=lang;
    document.body.dir=lang==='ar'?'rtl':'ltr';
    document.documentElement.lang=lang;
    localStorage.setItem('sila-lang',lang);
    document.querySelectorAll('[data-checkout-i18n]').forEach(el=>{
      const key=el.dataset.checkoutI18n;
      if(checkoutTranslations[lang][key]) el.textContent=checkoutTranslations[lang][key];
    });
    document.querySelector('#checkoutLang').textContent=lang==='ar'?'English':'العربية';
    [...fields.service.options].forEach(opt=>{
      if(opt.value) opt.textContent=serviceNames[lang][opt.value];
    });
    fields.details.placeholder=lang==='ar'?'اكتب ما تحتاجه بالتفصيل':'Describe what you need in detail';
    renderSummary();
  }

  function data(){
    return {name:fields.name.value.trim(),phone:fields.phone.value.trim(),email:fields.email.value.trim(),service:fields.service.value,details:fields.details.value.trim()};
  }
  function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function summaryHtml(includeOrder=false){
    const d=data();
    if(!d.service&&!d.name&&!d.phone) return `<p class="muted">${t('summary_empty')}</p>`;
    const rows=[];
    if(includeOrder&&orderNumber) rows.push([t('order_no'),orderNumber]);
    if(d.name) rows.push([t('customer'),d.name]);
    if(d.phone) rows.push([t('phone_summary'),d.phone]);
    if(d.service) rows.push([t('selected_service'),serviceNames[language()][d.service]]);
    rows.push([t('payment'),t('payment_value')]);
    if(d.details) rows.push([t('details_summary'),d.details]);
    return rows.map(([a,b])=>`<div class="review-row"><span>${escapeHtml(a)}</span><b>${escapeHtml(b)}</b></div>`).join('');
  }
  function renderSummary(){
    document.querySelector('#sideSummary').innerHTML=summaryHtml(false);
    document.querySelector('#reviewBox').innerHTML=summaryHtml(false);
    document.querySelector('#finalSummary').innerHTML=summaryHtml(true);
  }
  function validateStepOne(){
    for(const el of [fields.name,fields.phone,fields.service,fields.details]){
      if(!el.checkValidity()){el.reportValidity();return false;}
    }
    return true;
  }
  function showStep(step){
    currentStep=step;
    document.querySelectorAll('.checkout-pane').forEach(p=>p.classList.toggle('active',Number(p.dataset.step)===step));
    document.querySelectorAll('[data-step-dot]').forEach(dot=>{
      const n=Number(dot.dataset.stepDot);
      dot.classList.toggle('active',n===step);
      dot.classList.toggle('done',n<step);
    });
    if(step===3&&!orderNumber){
      orderNumber='SILA-'+Date.now().toString().slice(-7);
    }
    renderSummary();
    window.scrollTo({top:document.querySelector('.checkout-main').offsetTop-95,behavior:'smooth'});
  }
  document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>{
    const next=Number(btn.dataset.next);
    if(currentStep===1&&!validateStepOne()) return;
    if(currentStep===2&&!document.querySelector('#agreeTerms').checked){alert(t('terms_required'));return;}
    showStep(next);
  }));
  document.querySelectorAll('[data-back]').forEach(btn=>btn.addEventListener('click',()=>showStep(Number(btn.dataset.back))));
  Object.values(fields).forEach(el=>el.addEventListener('input',renderSummary));
  fields.service.addEventListener('change',renderSummary);

  const requested=new URLSearchParams(location.search).get('service');
  if(requested&&serviceNames.ar[requested]) fields.service.value=requested;

  checkoutForm.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validateStepOne()) return showStep(1);
    if(!document.querySelector('#agreeTerms').checked){showStep(2);alert(t('terms_required'));return;}
    if(!orderNumber) orderNumber='SILA-'+Date.now().toString().slice(-7);
    const d=data();
    const ar=language()==='ar';
    const lines=ar?[
      'طلب جديد من موقع Sila Digital',`رقم الطلب: ${orderNumber}`,`الاسم: ${d.name}`,`الهاتف: ${d.phone}`,`البريد: ${d.email||'غير مضاف'}`,`الخدمة: ${serviceNames.ar[d.service]}`,`طريقة الدفع: الدفع عند استلام الخدمة`,`تفاصيل الطلب: ${d.details}`
    ]:[
      'New order from Sila Digital website',`Order: ${orderNumber}`,`Name: ${d.name}`,`Phone: ${d.phone}`,`Email: ${d.email||'Not provided'}`,`Service: ${serviceNames.en[d.service]}`,`Payment: Upon service delivery`,`Details: ${d.details}`
    ];
    window.open(`https://wa.me/201111766792?text=${encodeURIComponent(lines.join('\n'))}`,'_blank','noopener');
  });

  document.querySelector('#checkoutLang').addEventListener('click',()=>applyCheckoutLang(language()==='ar'?'en':'ar'));
  applyCheckoutLang(localStorage.getItem('sila-lang')||'ar');
  renderSummary();
}
