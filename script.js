/* ===== Config — edit these ===== */
const CONTACT_EMAIL = "kenneth@elevateinsadvisors.com"; // form opens a pre-filled email to this address

/* ===== Spanish translations (English is read from the HTML itself) ===== */
const ES = {
  "nav.health":"Salud","nav.estimate":"Estimado rápido","nav.life":"Vida","nav.about":"Sobre mí","nav.cta":"Agenda una llamada","nav.tag":"Corredor de seguros de salud y vida",
  "hero.eyebrow":"Corredor de seguros de salud y vida con licencia",
  "hero.title":"Cobertura que por fin <em>tiene sentido</em>.",
  "hero.sub":"Los seguros no deberían sentirse como una tarea. Comparo planes de las mejores aseguradoras, te los explico en palabras sencillas y te ayudo a elegir lo que mejor se ajusta a tu familia y a tu presupuesto.",
  "hero.cta1":"Agenda una consulta gratis","hero.cta2":"Prueba el estimado rápido",
  "hero.b1":"Con licencia y autorizado","hero.b2":"Sin costo para ti","hero.b3":"Varias aseguradoras",
  "hero.lang.t":"Se habla español","hero.lang":"Te atiendo en inglés o español","hero.npn":"Con licencia · NPN 20674820",
  "carriers.label":"Planes de aseguradoras en las que puedes confiar <small>(confirma tus autorizaciones activas)</small>",
  "health.eyebrow":"Seguro de salud","health.title":"Tres formas de proteger tu salud — y tu bolsillo",
  "health.sub":"Cada hogar es diferente. Encontremos la combinación que funcione para el tuyo.",
  "health.flag":"Más popular",
  "health.c1.title":"Planes de salud privados","health.c1.text":"Planes individuales y familiares flexibles, incluidas opciones a corto plazo, cuando necesitas cobertura fuera del período de inscripción habitual.",
  "health.c1.t1":"Fechas de inicio flexibles","health.c1.t2":"Elige a tus médicos","health.c1.t3":"Económicos",
  "health.c1.note":"<strong>¿Superas el límite de ingresos para créditos fiscales?</strong> Vale la pena comparar un plan privado lado a lado.",
  "health.c2.title":"Mercado ACA","health.c2.text":"Planes completos con beneficios esenciales. Muchos hogares califican para ayudas que reducen la prima mensual — yo lo reviso por ti.",
  "health.c2.t1":"Subsidios en la prima","health.c2.t2":"Condiciones preexistentes cubiertas","health.c2.t3":"Cuidado preventivo",
  "health.c3.flag":"Beneficios en efectivo","health.c3.title":"Protección suplementaria","health.c3.text":"Beneficios en efectivo pagados directamente a ti para ayudar con gastos que tu plan principal no cubre.",
  "health.c3.t1":"Enfermedad crítica","health.c3.t2":"Cáncer","health.c3.t3":"Infarto","health.c3.t4":"Derrame cerebral","health.c3.t5":"Accidentes","health.c3.t6":"Dental y visión",
  "est.eyebrow":"Estimado rápido","est.title":"Un cálculo aproximado en 20 segundos",
  "est.sub":"Cuéntame un poco sobre tu hogar y mira un rango mensual ilustrativo. Luego hablamos de planes y precios reales.",
  "est.house":"Tu hogar","est.age1":"Tu edad","est.age2":"Edad de tu cónyuge / pareja","est.opt":"(opcional)","est.kids":"Hijos menores de 21","est.type":"Tipo de plan",
  "est.type.aca":"Mercado ACA","est.type.private":"Plan de salud privado","est.btn":"Ver mi estimado",
  "est.result":"Estimado mensual ilustrativo","est.empty":"Ingresa tus edades e ingresos para ver tu estimado.",
  "est.l1":"Crédito fiscal estimado según tus ingresos","est.l2":"Orientación sobre Medicaid y planes privados cuando aplique","est.l3":"Cotizaciones reales en inglés o español","est.after":"Mercado ACA, después del crédito fiscal",
  "est.income":"Ingreso anual del hogar","est.income.help":"Tu ingreso esperado para el año de cobertura (MAGI). Se usa para estimar los créditos fiscales del Mercado.","est.next":"Quiero mi cotización real",
  "est.disclaimer":"<strong>Estimado ilustrativo solamente — no es una cotización ni una oferta de cobertura.</strong> Las primas reales dependen de tu ubicación, ingresos, plan, aseguradora, uso de tabaco y elegibilidad para subsidios. Los subsidios reales dependen de tu ubicación, los planes disponibles para ti y tu ingreso final del año. El cálculo del crédito fiscal usa las pautas federales de pobreza de 2025 y la tabla de porcentajes aplicables del IRS para 2026 (los créditos ampliados vencieron después de 2025).",
  "how.title":"Sencillo de principio a fin",
  "how.s1.title":"Conversamos","how.s1.text":"Una llamada o mensaje sin prisas. Tú compartes tus necesidades, médicos y presupuesto — yo escucho.",
  "how.s2.title":"Encuentro tus opciones","how.s2.text":"Comparo planes de varias aseguradoras y te explico las mejores opciones, incluyendo sus pros y contras.",
  "how.s3.title":"Ya estás cubierto","how.s3.text":"Me encargo del papeleo y la inscripción, y sigo disponible para tus preguntas todo el año.",
  "life.eyebrow":"Seguro de vida","life.title":"Protege a quienes cuentan contigo","life.sub":"La tranquilidad de saber que tu familia estará cuidada, pase lo que pase.",
  "life.c1.title":"Vida a término","life.c1.text":"Protección accesible por un período definido — ideal para cubrir la hipoteca, tus ingresos o el futuro de tus hijos.",
  "life.c1.t1":"Menor costo por dólar de cobertura","life.c1.t2":"Opciones de 10, 20 o 30 años",
  "life.c2.title":"IUL y Vida Entera","life.c2.text":"Cobertura de por vida que además puede acumular valor en efectivo al que podrías acceder más adelante.",
  "life.c2.t1":"Protección permanente","life.c2.t2":"Potencial de crecimiento del valor en efectivo",
  "life.c3.title":"Gastos finales","life.c3.text":"Pólizas más pequeñas y sencillas que cubren los costos funerarios para que tus seres queridos no carguen con ello.",
  "life.c3.t1":"Aprobación simplificada","life.c3.t2":"Primas fijas",
  "about.eyebrow":"Sobre mí","about.title":"Hola, soy Kenneth","about.cta1":"Agenda una llamada","about.cta2":"Envíame un mensaje →",
  "about.p1":"Para mí, los seguros se tratan de confianza. Te explicaré tus opciones en palabras sencillas, te mostraré exactamente lo que estás pagando y solo te recomendaré un plan si de verdad es el adecuado para ti y tu familia.",
  "about.p2":"Conmigo tendrás respuestas honestas, cero presión y alguien de tu lado mucho después de inscribirte.",
  "about.f1":"Agencia con licencia en 29 estados","about.states":"Alabama, Arizona, Arkansas, California, Florida, Georgia, Indiana, Iowa, Kentucky, Luisiana, Maryland, Míchigan, Misisipi, Misuri, Nevada, Nueva Jersey, Nuevo México, Carolina del Norte, Ohio, Oklahoma, Pensilvania, Carolina del Sur, Tennessee, Texas, Utah, Virginia, Virginia Occidental, Wisconsin, Wyoming",
  "footer.lic":"NPN 20674820 · Agencia con licencia en AL, AZ, AR, CA, FL, GA, IN, IA, KY, LA, MD, MI, MS, MO, NV, NJ, NM, NC, OH, OK, PA, SC, TN, TX, UT, VA, WV, WI, WY","about.f3":"Idiomas",
  "contact.eyebrow":"Hablemos","contact.book":"Agenda una consulta","contact.title":"¿Listo para una cobertura que se sienta fácil?",
  "contact.sub":"Envíame unos datos y te contactaré en un día hábil. Es gratis y sin compromiso.",
  "form.name":"Nombre completo","form.phone":"Teléfono","form.email":"Correo electrónico","form.interest":"Me interesa",
  "form.i1":"Seguro de salud","form.i2":"Protección suplementaria","form.i3":"Seguro de vida","form.i4":"Aún no estoy seguro",
  "form.btn":"Solicitar mi consulta gratis",
  "form.note":"Al enviar, aceptas que te contacten sobre opciones de seguros. Por favor no incluyas datos médicos ni financieros sensibles.",
  "footer.legal":"Kenneth Espinosa es un agente/corredor de seguros con licencia. Este sitio web es solo informativo y no constituye una oferta de cobertura. Los planes, beneficios y la disponibilidad varían según el estado y la aseguradora. Los productos suplementarios no sustituyen un seguro de salud completo y no son cobertura calificada por la ACA. El seguro de vida está sujeto a evaluación y aprobación. Los estimados mostrados son solo ilustrativos. Los nombres de las aseguradoras son marcas registradas de sus respectivos dueños; confirma que tienes autorizaciones activas antes de mostrarlos. [Agrega las divulgaciones estatales/de aseguradoras, política de privacidad y lenguaje TCPA que correspondan — pide revisión de cumplimiento.]",
  "footer.role":"Corredor de seguros con licencia · Salud y vida",
  "footer.rights":"Todos los derechos reservados."
};
const MSG = {
  en:{people:(n)=>`Based on ${n} ${n===1?"person":"people"} · example logic only`,
      fplPct:(n,p)=>`Household of ${n} · about ${p}% of the federal poverty level`,
      mo:"/mo", credit:(c)=>`Est. tax credit: ${c}/mo`, noCredit:"No tax credit at this income",
      medicaid:"Below 100% of the poverty level, you may qualify for Medicaid depending on your state. Marketplace tax credits generally start at 100%.",
      medicaidMaybe:"In states that expanded Medicaid, adults up to 138% of the poverty level may qualify for Medicaid instead.",
      cliff:`Above 400% of the poverty level there's no Marketplace tax credit in 2026, so a <a href="#private-plans">private health plan</a> may be the better fit. Let's compare both.`,
      zero:"Your expected contribution is higher than this benchmark estimate, so no tax credit applies.",
      privLabel:"Private health plan estimate", privNote:"Tax credits apply only to Marketplace plans",
      ok:"Opening your email app… if nothing happens, email me directly.",
      missing:"Please fill in name, phone, and a valid email.",
      noaddr:"Demo mode: set CONTACT_EMAIL in script.js to enable sending.",
      subj:"Free consult request", body:["Name","Phone","Email","Interested in"]},
  es:{people:(n)=>`Basado en ${n} ${n===1?"persona":"personas"} · lógica de ejemplo`,
      fplPct:(n,p)=>`Hogar de ${n} · aprox. ${p}% del nivel federal de pobreza`,
      mo:"/mes", credit:(c)=>`Crédito fiscal est.: ${c}/mes`, noCredit:"Sin crédito fiscal con este ingreso",
      medicaid:"Por debajo del 100% del nivel de pobreza, podrías calificar para Medicaid según tu estado. Los créditos fiscales del Mercado generalmente comienzan en el 100%.",
      medicaidMaybe:"En los estados que ampliaron Medicaid, los adultos hasta el 138% del nivel de pobreza podrían calificar para Medicaid.",
      cliff:`Por encima del 400% del nivel de pobreza no hay crédito fiscal del Mercado en 2026, así que un <a href="#private-plans">plan de salud privado</a> podría ser mejor opción. Comparemos ambos.`,
      zero:"Tu aporte esperado es mayor que este estimado de referencia, así que no aplica crédito fiscal.",
      privLabel:"Estimado de plan de salud privado", privNote:"Los créditos fiscales solo aplican a planes del Mercado",
      ok:"Abriendo tu app de correo… si no pasa nada, escríbeme directamente.",
      missing:"Por favor completa nombre, teléfono y un correo válido.",
      noaddr:"Modo demo: define CONTACT_EMAIL en script.js para habilitar el envío.",
      subj:"Solicitud de consulta gratis", body:["Nombre","Teléfono","Correo","Interesado en"]}
};

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
let lang = "en";

/* Capture English from the HTML so the markup is the single source for EN */
const EN = {};
$$("[data-i18n]").forEach(el=>{ EN[el.dataset.i18n] = el.innerHTML; });

function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  const dict = l==="es" ? ES : EN;
  $$("[data-i18n]").forEach(el=>{
    const v = dict[el.dataset.i18n]; if(v!==undefined) el.innerHTML = v;
  });
  $$(".lang__btn").forEach(b=>{
    const on = b.dataset.lang===l;
    b.classList.toggle("is-active",on); b.setAttribute("aria-pressed",on);
  });
  try{ localStorage.setItem("lang",l); }catch(e){}
  if(!$("#result").hidden) renderEstimate();
}
$$(".lang__btn").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));

/* ===== Quick estimate =====
   EXAMPLE LOGIC ONLY — made-up numbers. Replace with real rating data
   (carrier rate tables / Marketplace API) before going live. */
function estimate({ages,kids,type}){
  const adultBase = a => 240 + Math.max(0,a-18)*8.5;      // example: rises with age
  let total = ages.reduce((s,a)=>s+adultBase(a),0);
  total += Math.min(kids,3)*130;                           // example: max 3 kids rated
  if(type==="private") total *= 0.82;                      // example: private plans cheaper, thinner benefits
  else total *= 1.0;
  return {total, low:Math.round(total*0.8/5)*5, high:Math.round(total*1.25/5)*5};
}

/* ===== Premium tax credit (ACA Marketplace), 2026 coverage =====
   FPL: 2025 HHS poverty guidelines, 48 contiguous states + DC (used for 2026 coverage):
        $15,650 for 1 person + $5,500 per additional person (HHS, Federal Register, Jan 17 2025).
   Applicable %: IRS Rev. Proc. 2025-25 (taxable years beginning in 2026). Enhanced ARPA/IRA credits
        expired 12/31/2025 and were not extended, so the 100%-400% FPL eligibility range (the "cliff") applies.
   For 2027 coverage swap in the 2026 HHS guidelines and Rev. Proc. 2026-26. */
const FPL_BASE = 15650, FPL_ADD = 5500;
const AP_TABLE = [ // [fromFPL%, toFPL%, initial%, final%]
  [100,133,2.10,2.10],[133,150,3.14,4.19],[150,200,4.19,6.60],
  [200,250,6.60,8.44],[250,300,8.44,9.96],[300,400.0001,9.96,9.96]];
const fplFor = n => FPL_BASE + FPL_ADD*Math.max(0,n-1);
function applicablePct(fpl){ // linear interpolation within each band, per 26 CFR 1.36B-3(g)
  for(const [a,b,i,f] of AP_TABLE) if(fpl>=a && fpl<b) return i + (f-i)*(fpl-a)/(b-a);
  return null; // outside 100%-400%: no credit
}
function taxCredit({income,size,benchmark}){
  const fpl = income/fplFor(size)*100;
  const pct = applicablePct(fpl);
  const contribution = pct===null ? null : income*pct/100/12;
  const credit = pct===null ? 0 : Math.max(0, benchmark - contribution);
  return {fpl, pct, contribution, credit};
}
const parseMoney = v => { const n = parseInt(String(v).replace(/[^0-9]/g,""),10); return isNaN(n)?null:n; };
const incomeEl = $("#income");
incomeEl.addEventListener("input",()=>{ const n=parseMoney(incomeEl.value); incomeEl.value = n===null ? "" : n.toLocaleString("en-US"); });

function renderEstimate(){
  const a1 = parseInt($("#age1").value,10), a2 = parseInt($("#age2").value,10);
  const kids = parseInt($("#kids").value,10), type = $("#type").value;
  const valid = a => a>=18 && a<=64;
  if(!valid(a1)){ $("#age1").classList.add("invalid"); $("#age1").focus(); return; }
  $("#age1").classList.remove("invalid");
  const ages = [a1]; if(valid(a2)) ages.push(a2);
  const m = MSG[lang], size = ages.length+kids;
  const fmt = n => "$"+Math.round(n).toLocaleString("en-US");
  const r5 = n => Math.max(0, Math.round(n/5)*5);
  const income = parseMoney(incomeEl.value), note = $("#note");
  if(income===null){ incomeEl.classList.add("invalid"); incomeEl.focus(); $("#result").hidden = true; $("#resultEmpty").hidden = false; return; }   // income needed for the after-credit estimate
  incomeEl.classList.remove("invalid");
  const aca = estimate({ages,kids,type:"aca"});            // stand-in for the benchmark silver premium
  const rng = (lo,hi) => `<span class="nw">${fmt(lo)} – ${fmt(hi)}</span><small>${m.mo}</small>`;
  const t = taxCredit({income,size,benchmark:aca.total});
  $("#who").textContent = `${m.fplPct(size,Math.round(t.fpl))} · ${lang==="es"?"lógica de ejemplo":"example logic only"}`;
  let after, credit, noteHtml = "", label = (lang==="es" ? ES : EN)["est.after"];
  if(type==="private"){                                    // private plans: no premium tax credit
    const p = estimate({ages,kids,type});
    label = m.privLabel; after = rng(p.low,p.high); credit = m.privNote;
  } else if(t.fpl < 100){                                  // below 100% FPL: no credit, Medicaid note
    after = rng(aca.low,aca.high); credit = m.noCredit; noteHtml = m.medicaid;
  } else if(t.pct===null){                                 // over 400% FPL: no credit in 2026 (cliff)
    after = rng(aca.low,aca.high); credit = m.noCredit; noteHtml = m.cliff;
  } else {
    after = rng(r5(aca.low - t.credit), r5(aca.high - t.credit));
    credit = t.credit>0 ? m.credit(fmt(t.credit)) : m.noCredit;
    if(t.credit<=0) noteHtml = m.zero;
    else if(t.fpl < 138) noteHtml = m.medicaidMaybe;
  }
  $("#afterLabel").innerHTML = label;
  $("#after").innerHTML = after;
  $("#credit").textContent = credit;
  note.innerHTML = noteHtml; note.hidden = !noteHtml;
  $("#resultEmpty").hidden = true;
  $("#result").hidden = false;
}
$("#calc").addEventListener("submit",e=>{e.preventDefault();renderEstimate();});

/* ===== Contact form (front-end only: opens a mailto draft) ===== */
$("#contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f = e.target, st = $("#formStatus"), m = MSG[lang];
  const name=f.name.value.trim(), phone=f.phone.value.trim(), email=f.email.value.trim();
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  [f.name,f.phone,f.email].forEach(i=>i.classList.remove("invalid"));
  if(!name||!phone||!okEmail){
    if(!name)f.name.classList.add("invalid"); if(!phone)f.phone.classList.add("invalid"); if(!okEmail)f.email.classList.add("invalid");
    st.className="form__status err"; st.textContent=m.missing; return;
  }
  if(CONTACT_EMAIL.includes("[")){ st.className="form__status err"; st.textContent=m.noaddr; return; }
  const interest = f.interest.options[f.interest.selectedIndex].text;
  const b = m.body;
  const body = `${b[0]}: ${name}\n${b[1]}: ${phone}\n${b[2]}: ${email}\n${b[3]}: ${interest}`;
  st.className="form__status"; st.textContent=m.ok;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(m.subj)}&body=${encodeURIComponent(body)}`;
});

/* ===== Booking links: main CTAs open Kenneth's Zoom scheduler in a new tab ===== */
const BOOKING_URL = "https://scheduler.zoom.us/kenneth-espinosa-y20qz6/1-hour-call";
$$("a[data-book]").forEach(a=>{a.href=BOOKING_URL;a.target="_blank";a.rel="noopener";});

$("#year").textContent = new Date().getFullYear();
let saved=null; try{saved=localStorage.getItem("lang");}catch(e){}
if(saved==="es") setLang("es");
