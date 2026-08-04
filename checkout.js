const PRODUCTS = {
  windows:{name:"باقة خدمات ويندوز",price:1500,image:"assets/service-windows.svg",description:"تثبيت وتحسين ويندوز والتعريفات والبرامج الأساسية لجهاز واحد."},
  discord:{name:"باقة سيرفر ديسكورد",price:1750,image:"assets/service-discord.svg",description:"إعداد القنوات والرتب والصلاحيات والبوتات والحماية الأساسية."},
  logo:{name:"باقة تصميم شعار",price:2150,image:"assets/service-logo.svg",description:"تصميم شعار احترافي مع تعديلين وتسليم ملفات PNG وJPG."},
  graphic:{name:"باقة تصميم جرافيكي",price:1250,image:"assets/service-graphic.svg",description:"تصميم 5 منشورات سوشيال ميديا بمقاسات مناسبة للنشر."},
  support:{name:"جلسة دعم فني",price:850,image:"assets/service-support.svg",description:"جلسة دعم فني عن بُعد لمدة تصل إلى 60 دقيقة."},
  brand:{name:"باقة هوية بصرية",price:2750,image:"assets/service-brand.svg",description:"ألوان وخطوط وإرشادات استخدام الشعار واتجاه بصري موحد."}
};
const params=new URLSearchParams(location.search);
const key=PRODUCTS[params.get("product")]?params.get("product"):"windows";
const product=PRODUCTS[key];
const money=n=>new Intl.NumberFormat("ar-EG").format(n)+" جنيه";
document.querySelector("#productImage").src=product.image;
document.querySelector("#productImage").alt=product.name;
document.querySelector("#productName").textContent=product.name;
document.querySelector("#productDescription").textContent=product.description;
document.querySelector("#productPrice").textContent=money(product.price);
document.querySelector("#productTotal").textContent=money(product.price);
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

const form=document.querySelector("#checkoutForm");
const errorBox=document.querySelector("#formError");
form.addEventListener("submit",e=>{
  e.preventDefault();
  errorBox.hidden=true;
  const name=document.querySelector("#customerName").value.trim();
  const phone=document.querySelector("#customerPhone").value.trim().replace(/\s+/g,"");
  const email=document.querySelector("#customerEmail").value.trim();
  const agreed=document.querySelector("#agreeTerms").checked;
  const phoneOk=/^(?:\+?20|0)?1[0125]\d{8}$/.test(phone);
  if(name.length<3){return showError("من فضلك اكتب الاسم بالكامل.");}
  if(!phoneOk){return showError("من فضلك اكتب رقم هاتف مصري صحيح.");}
  if(!/^\S+@\S+\.\S+$/.test(email)){return showError("من فضلك اكتب بريدًا إلكترونيًا صحيحًا.");}
  if(!agreed){return showError("يجب الموافقة على الشروط وسياسة الاسترجاع قبل الدفع.");}
  const link=(window.SILA_PAYMENT_LINKS||{})[key];
  if(!link){return showError("رابط الدفع لهذه الخدمة لم تتم إضافته بعد. أضف رابط Paymob داخل ملف payment-config.js ثم ارفع الملف من جديد.");}
  sessionStorage.setItem("silaOrder",JSON.stringify({product:key,name,phone,email,notes:document.querySelector("#customerNotes").value.trim(),amount:product.price,createdAt:new Date().toISOString()}));
  location.href=link;
});
function showError(message){errorBox.textContent=message;errorBox.hidden=false;errorBox.scrollIntoView({behavior:"smooth",block:"center"});}
