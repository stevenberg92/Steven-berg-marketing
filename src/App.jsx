import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── animation presets ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function Nav() {
  return (
    <motion.nav className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a href="#" className="brand">
          <span className="brand__mark" />
          <span>Steven Berg</span>
          <span className="brand__tag">Webdesign</span>
        </a>
        <div className="nav__links">
          <a href="#pakete">Pakete</a>
          <a href="#warum">Über mich</a>
          <a href="#referenzen">Referenzen</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <motion.a href="#kontakt" className="nav__cta"
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          Kostenlos beraten lassen →
        </motion.a>
      </div>
    </motion.nav>
  );
}

/* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
function Hero() {
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="hero">
      {/* animated blobs */}
      <motion.div className="hero__blobs" style={{ y: blobY }}
        animate={{ backgroundPosition: ["20% 40%, 75% 30%", "45% 65%, 50% 20%", "20% 40%, 75% 30%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container hero__grid">
        {/* ── text ── */}
        <motion.div className="hero__text"
          initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="eyebrow" variants={fadeUp}>
            <span className="dot" /> Webdesign der Premiumklasse
          </motion.div>
          <motion.h1 className="hero__title" variants={fadeUp}>
            Websites, die<br />
            <em className="grad-text">verkaufen.</em>
          </motion.h1>
          <motion.p className="hero__sub" variants={fadeUp}>
            Ich entwerfe und entwickle Websites für Unternehmen, die online
            wachsen wollen – schnell, individuell und auf höchstem Niveau.
            Vom einfachen Onepager bis zur 3D-Premium-Experience.
          </motion.p>
          <motion.div className="hero__btns" variants={fadeUp}>
            <motion.a href="#kontakt" className="btn btn--grad"
              whileHover={{ scale: 1.04, boxShadow: "0 20px 50px -10px rgba(155,92,246,0.55)" }}
              whileTap={{ scale: 0.97 }}>
              Kostenloses Erstgespräch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </motion.a>
            <motion.a href="#pakete" className="btn btn--ghost"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Pakete ansehen
            </motion.a>
          </motion.div>

          <motion.div className="hero__stats" variants={stagger}>
            {[["50+", "Projekte"], ["4,9★", "Bewertung"], ["48h", "Erste Entwürfe"]].map(([v, l], i) => (
              <motion.div className="stat" key={l} variants={fadeUp} custom={i}>
                <strong>{v}</strong>
                <span>{l}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── video on right (desktop) / background (mobile) ── */}
        <motion.div className="hero__video-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero__video-glow" />
          <div className="hero__video-frame">
            <video
              className="hero__video"
              src="/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/steven.jpg"
            />
            <div className="hero__video-overlay" />
          </div>
          <div className="hero__video-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            Persönlicher Ansprechpartner
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PAKETE
══════════════════════════════════════════════ */
const pakete = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    color: "#4B8EF5",
    name: "Landingpage & Onepager",
    pitch: "Maximale Wirkung. Fokussiert. Konversionsstark.",
    desc: "Eine durchdachte, conversion-optimierte Seite für dein Produkt oder deine Dienstleistung. Kein Ablenkungsrauschen – nur ein klarer Weg zur Anfrage.",
    ideal: "Produkt-Launches, Dienstleistungen, Kampagnen, Events",
    features: [
      "Individuelles One-Page-Design",
      "CTA-Optimierung & Funnel-Struktur",
      "Mobile-First & blitzschnell",
      "Formular-Integration",
      "Basic SEO-Setup",
    ],
    ref: '„Unsere Anfragen haben sich durch die neue Landingpage verdoppelt.“',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: "#9B5CF6",
    name: "Unternehmenswebseite",
    pitch: "Dein kompletter digitaler Auftritt.",
    desc: "Die professionelle Webpräsenz für dein Unternehmen. Mehrere Unterseiten, klare Struktur und integrierte Funnels, die Besucher automatisch zu Anfragen machen.",
    ideal: "KMU, Agenturen, Dienstleister, B2B-Unternehmen",
    features: [
      "Mehrere individuelle Unterseiten",
      "Funnel-Integration & Lead-Capture",
      "Dienstleistungs- & Über-Uns-Seiten",
      "Google Analytics & Tracking",
      "30 Tage Support inklusive",
    ],
    ref: '„Kunden sprechen uns jetzt aktiv auf unsere Webseite an."',
    featured: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "#EC4899",
    name: "High-Premium Experience",
    pitch: "Apple-Niveau. Kein Kompromiss.",
    desc: "Die Königsdisziplin. 3D-Elemente, individuelle Scroll-Animationen, jedes Detail auf höchstem Niveau gestaltet. Für Marken, die unverwechselbar sein wollen.",
    ideal: "Premium-Brands, Scale-Ups, Marken die führen wollen",
    features: [
      "100% individuelles Design",
      "3D-Elemente & Scroll-Animationen",
      "Custom Interaktionen & Storytelling",
      "Performance auf höchstem Niveau",
      "Langfristige Betreuung & Pflege",
    ],
    ref: '„Das Ergebnis hat selbst unsere Erwartungen übertroffen."',
  },
];

function Pakete() {
  return (
    <section className="section" id="pakete">
      <div className="container">
        <motion.div className="section__head"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
          <motion.span className="section__eyebrow" variants={fadeUp}>Leistungen</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Das richtige Paket für <em className="grad-text">dein Ziel.</em>
          </motion.h2>
          <motion.p className="section__sub" variants={fadeUp}>
            Drei klare Lösungen – von der fokussierten Landingpage bis zur individuellen Premium-Experience.
          </motion.p>
        </motion.div>

        <motion.div className="pakete-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          {pakete.map((p, i) => (
            <motion.div
              key={p.name}
              className={`paket ${p.featured ? "paket--featured" : ""}`}
              variants={fadeUp} custom={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ "--accent": p.color }}
            >
              {p.featured && <span className="paket__badge">Beliebteste Wahl</span>}
              <div className="paket__icon" style={{ color: p.color, borderColor: `${p.color}33`, background: `${p.color}11` }}>
                {p.icon}
              </div>
              <h3 className="paket__name">{p.name}</h3>
              <p className="paket__pitch" style={{ color: p.color }}>{p.pitch}</p>
              <p className="paket__desc">{p.desc}</p>
              <div className="paket__ideal">
                <span>Ideal für:</span> {p.ideal}
              </div>
              <ul className="paket__list">
                {p.features.map(f => (
                  <li key={f}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: p.color }}><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="paket__ref">{p.ref}</p>
              <motion.a href="#kontakt" className="btn btn--paket"
                style={{ background: `${p.color}18`, color: p.color, borderColor: `${p.color}44` }}
                whileHover={{ background: p.color, color: "#fff" }}
                transition={{ duration: 0.2 }}>
                Paket anfragen →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WARUM ICH
══════════════════════════════════════════════ */
const gruende = [
  { icon: "👤", title: "Persönlicher Ansprechpartner", desc: "Kein Call-Center, kein Ticket-System. Du arbeitest direkt mit mir – ohne Umwege." },
  { icon: "⚡", title: "Erste Entwürfe in 48h", desc: "Schnelle Umsetzung ist mein Versprechen. Du wartest nicht wochenlang auf erste Ergebnisse." },
  { icon: "🎯", title: "Ergebnisorientiertes Design", desc: "Jede Seite ist darauf ausgelegt, Besucher in Kunden zu verwandeln – nicht nur schön auszusehen." },
  { icon: "💬", title: "Direkter Austausch", desc: "Transparente Kommunikation, klare Timelines, keine Überraschungen – von Anfang bis zum Launch." },
  { icon: "🚀", title: "Modernste Technologien", desc: "Zukunftssichere, wartbare Lösungen mit Top-Performance und schnellen Ladezeiten." },
  { icon: "✨", title: "100% individuell", desc: "Keine Templates. Jede Webseite ist ein Unikat, das perfekt zu deiner Marke passt." },
];

function WarumIch() {
  return (
    <section className="section section--alt" id="warum">
      <div className="container">
        <motion.div className="section__head"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
          <motion.span className="section__eyebrow" variants={fadeUp}>Warum ich?</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Was dich mit mir <em className="grad-text">nach vorne bringt.</em>
          </motion.h2>
          <motion.p className="section__sub" variants={fadeUp}>
            Als freier Webdesigner kombiniere ich Agentur-Qualität mit dem direkten,
            persönlichen Service eines Einzelunternehmers.
          </motion.p>
        </motion.div>

        <motion.div className="gruende-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          {gruende.map((g, i) => (
            <motion.div className="grund" key={g.title}
              variants={fadeUp} custom={i}
              whileHover={{ y: -5, borderColor: "rgba(155,92,246,0.4)" }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}>
              <span className="grund__icon">{g.icon}</span>
              <h4 className="grund__title">{g.title}</h4>
              <p className="grund__desc">{g.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   REFERENZEN
══════════════════════════════════════════════ */
const referenzen = [
  {
    text: "Steven hat unsere neue Landingpage in weniger als zwei Wochen umgesetzt. Das Design ist genau das, was wir uns vorgestellt haben – und die Anfragen haben sich seither verdoppelt.",
    name: "Julia Braun",
    role: "Inhaberin, FitCoach Studio München",
    paket: "Landingpage",
    color: "#4B8EF5",
    initials: "JB",
  },
  {
    text: "Endlich eine Webseite, auf die ich stolz bin. Kunden und Partner sprechen mich aktiv darauf an. Steven war immer erreichbar und hat wirklich mitgedacht.",
    name: "Markus Steiner",
    role: "Geschäftsführer, Steiner Immobilien",
    paket: "Unternehmenswebseite",
    color: "#9B5CF6",
    initials: "MS",
  },
  {
    text: "Wir wollten eine Webseite die uns von der Konkurrenz abhebt – Apple-Level. Das Ergebnis hat selbst unsere hohen Erwartungen noch übertroffen. Absolute Empfehlung.",
    name: "Sophie Klar",
    role: "CMO, Luxe Interiors GmbH",
    paket: "High-Premium",
    color: "#EC4899",
    initials: "SK",
  },
];

function Referenzen() {
  return (
    <section className="section" id="referenzen">
      <div className="container">
        <motion.div className="section__head"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
          <motion.span className="section__eyebrow" variants={fadeUp}>Kundenstimmen</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Was meine Kunden <em className="grad-text">sagen.</em>
          </motion.h2>
        </motion.div>

        <motion.div className="ref-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          {referenzen.map((r, i) => (
            <motion.div className="ref-card" key={r.name}
              variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              style={{ "--rc": r.color }}>
              <div className="ref-card__top">
                <div className="ref-stars">{"★★★★★"}</div>
                <span className="ref-badge" style={{ color: r.color, background: `${r.color}15`, border: `1px solid ${r.color}30` }}>
                  {r.paket}
                </span>
              </div>
              <p className="ref-text">„{r.text}"</p>
              <div className="ref-author">
                <div className="ref-avatar" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}88)` }}>
                  {r.initials}
                </div>
                <div>
                  <div className="ref-name">{r.name}</div>
                  <div className="ref-role">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   KONTAKT
══════════════════════════════════════════════ */
function Kontakt() {
  const [form, setForm] = useState({ name: "", phone: "", website: "", message: "", agb: false });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.agb) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/steven.berg92@googlemail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Telefon: form.phone,
          "Aktuelle Website": form.website || "–",
          "Vorhaben / Anliegen": form.message || "–",
          _subject: "Neue Anfrage – Kostenloses Beratungsgespräch",
          _captcha: "false",
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section section--alt" id="kontakt">
      <div className="container">
        <motion.div className="section__head"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
          <motion.span className="section__eyebrow" variants={fadeUp}>Kontakt</motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Bereit für deine <em className="grad-text">neue Website?</em>
          </motion.h2>
          <motion.p className="section__sub" variants={fadeUp}>
            Trag dich ein – ich melde mich persönlich für ein kostenloses,
            10–15-minütiges Erstgespräch bei dir.
          </motion.p>
        </motion.div>

        <motion.div className="kontakt-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          {status === "done" ? (
            <motion.div className="kontakt-success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <div className="success-icon">✓</div>
              <h3>Vielen Dank für deine Anfrage!</h3>
              <p>Ich werde mich binnen 48 Stunden persönlich bei dir melden.</p>
            </motion.div>
          ) : (
            <form className="kontakt-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Name <span className="req">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Dein vollständiger Name"
                    value={form.name} onChange={handle} required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">
                    Telefonnummer <span className="req">*</span>
                  </label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+49 ..."
                    value={form.phone} onChange={handle} required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="website">Aktuelle Website <span className="opt">(optional)</span></label>
                <input
                  id="website" name="website" type="url"
                  placeholder="https://deine-website.de"
                  value={form.website} onChange={handle}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Dein Vorhaben / Besondere Anliegen</label>
                <textarea
                  id="message" name="message" rows={4}
                  placeholder="Was hast du vor? Was ist dir besonders wichtig?"
                  value={form.message} onChange={handle}
                />
              </div>
              <label className="form-check">
                <input type="checkbox" name="agb" checked={form.agb} onChange={handle} required />
                <span>
                  Ich bin mit der Verarbeitung meiner Daten zur Kontaktaufnahme einverstanden
                  und akzeptiere die <a href="#">AGB & Datenschutzhinweise</a>. <span className="req">*</span>
                </span>
              </label>
              {status === "error" && (
                <p className="form-error">
                  Fehler beim Senden. Bitte schreib mir direkt an{" "}
                  <a href="mailto:steven.berg92@googlemail.com">steven.berg92@googlemail.com</a>.
                </p>
              )}
              <motion.button type="submit" className="btn btn--grad btn--submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 50px -10px rgba(155,92,246,0.55)" }}
                whileTap={{ scale: 0.98 }}>
                {status === "sending" ? "Wird gesendet …" : "Kostenloses Erstgespräch anfragen →"}
              </motion.button>
              <p className="form-hint">Pflichtfelder mit <span className="req">*</span> · Keine Kosten, keine Verpflichtungen</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand">
          <span className="brand__mark" />
          <span>Steven Berg Webdesign</span>
        </div>
        <div className="footer__links">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="mailto:steven.berg92@googlemail.com">steven.berg92@googlemail.com</a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Steven Berg</p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pakete />
        <WarumIch />
        <Referenzen />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
