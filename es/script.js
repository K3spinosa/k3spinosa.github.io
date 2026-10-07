/* ===== Config — edit these ===== */
const CONTACT_EMAIL = "kenneth@elevateinsadvisors.com"; // form opens a pre-filled email to this address

/* ===== Spanish-first site =====
   Spanish lives in the HTML itself (captured below as ES).
   English translations are defined here (EN). */
const EN = {
  "nav.health":"Health","nav.estimate":"Quick estimate","nav.life":"Life","nav.about":"About us","nav.cta":"Book a call","nav.tag":"Health &amp; life insurance",
  "hero.eyebrow":"Licensed agents · Health &amp; life insurance",
  "hero.title":"Coverage that finally <em>makes sense</em>.",
  "hero.sub":"Insurance shouldn't feel like homework. We compare plans from top carriers, explain them in plain language, and help you pick what fits your family and your budget.",
  "hero.cta1":"Book a free consult","hero.cta2":"Try the quick estimate",
  "hero.b1":"Licensed &amp; appointed","hero.b2":"No cost to you","hero.b3":"Multiple carriers",
  "hero.lang.t":"Se habla español","hero.lang":"Help in Spanish or English","hero.badge":"Licensed in 29 states",
  "promise.kicker":"Our promise","promise.title":"Your coverage, made simple",
  "promise.t1":"We compare multiple carriers for you","promise.t2":"We check whether you qualify for premium help",
  "promise.t3":"We handle the paperwork and enrollment","promise.t4":"We're here for you all year",
  "promise.s1":"states","promise.s2":"languages","promise.s3":"to you",
  "carriers.label":"Plans from carriers you can trust <small>(confirm your active appointments)</small>",
  "health.eyebrow":"Health insurance","health.title":"Three ways to protect your health — and your wallet",
  "health.sub":"Every household is different. Let's find the mix that works for yours.",
  "health.flag":"Most popular",
  "health.c1.title":"Private Health Plans","health.c1.text":"Flexible individual and family plans, including short-term options, when you need coverage outside the usual enrollment window.",
  "health.c1.t1":"Flexible start dates","health.c1.t2":"Choose your doctors","health.c1.t3":"Budget-friendly",
  "health.c1.note":"<strong>Over the income limit for tax credits?</strong> A private plan is worth comparing side by side.",
  "health.c2.title":"ACA Marketplace","health.c2.text":"Comprehensive plans with essential benefits. Many households qualify for savings that lower the monthly premium — we'll check for you.",
  "health.c2.t1":"Premium subsidies","health.c2.t2":"Pre-existing conditions OK","health.c2.t3":"Preventive care",
  "health.c3.flag":"Cash benefits","health.c3.title":"Supplemental Protection","health.c3.text":"Cash benefits paid directly to you to help with bills your main plan doesn't cover.",
  "health.c3.t1":"Critical illness","health.c3.t2":"Cancer","health.c3.t3":"Heart attack","health.c3.t4":"Stroke","health.c3.t5":"Accident","health.c3.t6":"Dental &amp; vision",
  "est.eyebrow":"Quick estimate","est.title":"Get a ballpark in 20 seconds",
  "est.sub":"Tell us a little about your household and see an illustrative monthly range. Then we'll talk about real plans and real prices.",
  "est.house":"Your household","est.age1":"Your age","est.age2":"Spouse / partner age","est.opt":"(optional)","est.kids":"Children under 21","est.type":"Plan type",
  "est.type.aca":"ACA Marketplace","est.type.private":"Private health plan","est.btn":"Show my estimate",
  "est.result":"Illustrative monthly estimate","est.empty":"Enter your ages and income to see your estimate.",
  "est.l1":"Tax credit estimated from your income","est.l2":"Medicaid and private-plan guidance when it fits","est.l3":"Real quotes in Spanish or English","est.after":"ACA Marketplace, after tax credit",
  "est.income":"Annual household income","est.income.help":"Your expected income for the coverage year (MAGI). Used to estimate Marketplace tax credits.","est.next":"Get my real quote",
  "est.disclaimer":"<strong>Illustrative estimate only — not a quote or offer of coverage.</strong> Actual premiums depend on your location, income, plan, carrier, tobacco use, and eligibility for subsidies. Actual subsidies depend on your location, the plans available to you, and your final income for the year. Tax-credit math uses the 2025 federal poverty guidelines and the IRS 2026 applicable-percentage table (the enhanced credits expired after 2025).",
  "how.title":"Simple from start to finish",
  "how.s1.title":"We chat","how.s1.text":"A relaxed call or message. You share your needs, doctors, and budget — we listen.",
  "how.s2.title":"We find your options","how.s2.text":"We compare plans across carriers and walk you through the best matches, trade-offs included.",
  "how.s3.title":"You're covered","how.s3.text":"We handle the paperwork and enrollment, then stay available for questions all year.",
  "life.eyebrow":"Life insurance","life.title":"Protect the people who count on you","life.sub":"Peace of mind that your family is taken care of, whatever life brings.",
  "life.c1.title":"Term Life","life.c1.text":"Affordable protection for a set period — ideal for covering a mortgage, income, or kids' future.",
  "life.c1.t1":"Lowest cost per dollar of coverage","life.c1.t2":"10, 20, or 30-year options",
  "life.c2.title":"IUL &amp; Whole Life","life.c2.text":"Lifetime coverage that can also build cash value you may access later.",
  "life.c2.t1":"Permanent protection","life.c2.t2":"Cash value growth potential",
  "life.c3.title":"Final Expense","life.c3.text":"Smaller, simple policies that cover funeral costs so your loved ones aren't burdened.",
  "life.c3.t1":"Simplified approval","life.c3.t2":"Fixed premiums",
  "values.v1":"Transparency","values.v2":"You come first","values.v3":"No pressure","values.v4":"All year long",
  "about.eyebrow":"About us","about.title":"Transparency, and you always come first","about.cta1":"Book a call","about.cta2":"Send us a message →",
  "about.p1":"For us, insurance is about trust. We walk you through your options in plain language, show you exactly what you're paying for, and only recommend a plan if it's truly the right fit for you and your family.",
  "about.p2":"When you work with us, you get honest answers, no pressure, and a team in your corner long after you enroll.",
  "about.f1":"Agency licensed in 29 states","about.states":"Alabama, Arizona, Arkansas, California, Florida, Georgia, Indiana, Iowa, Kentucky, Louisiana, Maryland, Michigan, Mississippi, Missouri, Nevada, New Jersey, New Mexico, North Carolina, Ohio, Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas, Utah, Virginia, West Virginia, Wisconsin, Wyoming",
  "about.f3":"Languages",
  "contact.eyebrow":"Let's talk","contact.book":"Book a consultation","contact.title":"Ready for coverage that feels easy?",
  "contact.sub":"Send a few details and we'll reach out within one business day. It's free, and there's no obligation.",
  "contact.where":"Serving you by phone or Zoom in 29 states",
  "form.name":"Full name","form.phone":"Phone","form.email":"Email","form.interest":"I'm interested in",
  "form.i1":"Health insurance","form.i2":"Supplemental protection","form.i3":"Life insurance","form.i4":"Not sure yet",
  "form.btn":"Request my free consult",
  "form.note":"By submitting, you agree to be contacted about insurance options. Please don't include sensitive health or financial details.",
  "footer.role":"Licensed insurance agency · Health &amp; life",
  "footer.lic":"Agency licensed in AL, AZ, AR, CA, FL, GA, IN, IA, KY, LA, MD, MI, MS, MO, NV, NJ, NM, NC, OH, OK, PA, SC, TN, TX, UT, VA, WV, WI, WY",
  "footer.legal":"Elevate Insurance Advisors is a licensed insurance agency. This website is for informational purposes only and is not an offer of coverage. Plans, benefits, and availability vary by state and carrier. Supplemental products are not a substitute for comprehensive health insurance and are not ACA-qualified coverage. Life insurance is subject to underwriting and approval. Estimates shown are illustrative only. Carrier names are trademarks of their respective owners; confirm that you hold active appointments before displaying them. [Add required state/carrier disclosures, privacy policy, and TCPA language as applicable — have compliance review.]",
  "footer.rights":"All rights reserved."
};
const META = {
  es:{title:"Elevate Insurance Advisors — Seguros de salud y vida en español",
      desc:"Agentes de seguros de salud y vida con licencia. Te ayudamos a comparar planes del Mercado ACA, planes privados y seguros de vida, en español y sin costo para ti."},
  en:{title:"Elevate Insurance Advisors — Health & Life Insurance",
      desc:"Licensed health and life insurance agents. Clear options, honest guidance, in Spanish and English, at no cost to you."}
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
      ok:"Opening your email app… if nothing happens, email us directly.",
      missing:"Please fill in name, phone, and a valid email.",
      noaddr:"Demo mode: set CONTACT_EMAIL in script.js to enable sending.",
      subj:"Free consult request", body:["Name","Phone","Email","Interested in"]},
  es:{people:(n)=>`Basado en ${n} ${n===1?"persona":"personas"} · lógica de ejemplo`,
      fplPct:(n,p)=>`Hogar de ${n} · aprox. ${p}% del nivel federal de pobreza`,
      mo:"/mes", credit:(c)=>`Crédito fiscal est.: ${c}/mes`, noCredit:"Sin crédito fiscal con este ingreso",
      medicaid:"Si ganas menos del 100% del nivel de pobreza, podrías calificar para Medicaid según tu estado. Los créditos fiscales del Mercado generalmente empiezan en el 100%.",
      medicaidMaybe:"En los estados que ampliaron Medicaid, los adultos con ingresos de hasta el 138% del nivel de pobreza podrían calificar para Medicaid.",
      cliff:`Por encima del 400% del nivel de pobreza no hay crédito fiscal del Mercado en 2026, así que un <a href="#private-plans">plan de salud privado</a> podría convenirte más. Comparemos ambos.`,
      zero:"Tu aporte esperado es mayor que este estimado de referencia, así que no aplica crédito fiscal.",
      privLabel:"Estimado de plan de salud privado", privNote:"Los créditos fiscales solo aplican a planes del Mercado",
      ok:"Abriendo tu app de correo… si no pasa nada, escríbenos directamente.",
      missing:"Por favor completa tu nombre, teléfono y un correo válido.",
      noaddr:"Modo demo: define CONTACT_EMAIL en script.js para habilitar el envío.",
      subj:"Solicitud de consulta gratis", body:["Nombre","Teléfono","Correo","Interesado en"]}
};

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
let lang = "es";

/* Capture Spanish from the HTML so the markup is the single source for ES */
const ES = {};
$$("[data-i18n]").forEach(el=>{ ES[el.dataset.i18n] = el.innerHTML; });

function setLang(l){
  lang = l==="en" ? "en" : "es";
  document.documentElement.lang = lang;
  const dict = lang==="en" ? EN : ES;
  $$("[data-i18n]").forEach(el=>{
    const v = dict[el.dataset.i18n]; if(v!==undefined) el.innerHTML = v;
  });
  $$(".lang__btn").forEach(b=>{
    const on = b.dataset.lang===lang;
    b.classList.toggle("is-active",on); b.setAttribute("aria-pressed",on);
  });
  document.title = META[lang].title;
  const md = $('meta[name="description"]'); if(md) md.setAttribute("content",META[lang].desc);
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

/* ===== Booking links: main CTAs open the Zoom scheduler in a new tab ===== */
const BOOKING_URL = "https://scheduler.zoom.us/kenneth-espinosa-y20qz6/1-hour-call";
$$("a[data-book]").forEach(a=>{a.href=BOOKING_URL;a.target="_blank";a.rel="noopener";});

$("#year").textContent = new Date().getFullYear();

/* Spanish is the default on every load (this /es version does not read the
   root site's saved "lang" preference, so it always opens in Spanish). */
setLang("es");
