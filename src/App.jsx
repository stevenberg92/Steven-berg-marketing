import React from "react";
import { motion } from "framer-motion";
import { Hero } from "./components/Hero";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a href="#" className="brand">
          <span
            className="brand__mark"
            style={{
              background:
                "linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)",
              boxShadow: "0 6px 20px -6px rgba(201,103,232,0.7)",
            }}
          />
          <span>Steven Berg</span>
        </a>
        <div className="nav__links">
          <a href="#leistungen">Leistungen</a>
          <a href="#preise">Preise</a>
          <a href="#stimmen">Stimmen</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <a href="#kontakt" className="nav__cta">
          Projekt starten →
        </a>
      </div>
    </motion.nav>
  );
}

const featureIcons = {
  design: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l9 9-9 9-9-9 9-9z" />
      <path d="M12 3v18M3 12h18" />
    </svg>
  ),
  speed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z" />
    </svg>
  ),
  growth: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
};

function Feature({ icon, title, desc, items, i }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      className="feature"
      onMouseMove={onMove}
      variants={fadeUp}
      custom={i}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="feature__icon">{icon}</div>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__desc">{desc}</p>
      <ul className="feature__list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function Features() {
  return (
    <section className="section" id="leistungen">
      <div className="container">
        <motion.div
          className="section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.span className="section__eyebrow" variants={fadeUp}>
            Was wir liefern
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Drei Säulen für deinen digitalen Auftritt.
          </motion.h2>
          <motion.p className="section__sub" variants={fadeUp}>
            Strategisches Design, technische Exzellenz und messbares Wachstum —
            in jedem Projekt.
          </motion.p>
        </motion.div>

        <motion.div
          className="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <Feature
            i={0}
            icon={featureIcons.design}
            title="Maßgeschneidertes Design"
            desc="Individuelle Entwürfe, die deine Markenidentität präzise transportieren — kein Template, kein Kompromiss."
            items={["Branding & Visual Identity", "UX/UI bis ins Detail", "Animations & Interaktionen"]}
          />
          <Feature
            i={1}
            icon={featureIcons.speed}
            title="Performance ohne Kompromiss"
            desc="Top Core-Web-Vitals, schnelle Ladezeiten und optimierter Code. Deine Website fühlt sich an wie eine native App."
            items={["100/100 Lighthouse-Score möglich", "Edge Hosting & CDN", "Saubere, wartbare Codebasis"]}
          />
          <Feature
            i={2}
            icon={featureIcons.growth}
            title="Conversion & SEO"
            desc="Wir bauen Websites, die Besucher zu Kunden machen — mit klarer Struktur und technischem SEO ab Tag eins."
            items={["A/B-getestete Strukturen", "Technisches SEO on-page", "Analytics & Tracking-Setup"]}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

const plans = [
  {
    name: "Starter",
    tag: "Für Solo-Unternehmer & Freiberufler",
    price: "1.890",
    cadence: "einmalig",
    cta: "Starter wählen",
    featured: false,
    features: [
      "One-Pager bis 5 Sektionen",
      "Individuelles Design",
      "Mobile-optimiert",
      "Basic SEO Setup",
      "Hosting-Setup",
      "2 Wochen Launch-Zeit",
    ],
  },
  {
    name: "Professional",
    tag: "Für wachsende KMU & Studios",
    price: "3.890",
    cadence: "einmalig",
    cta: "Professional wählen",
    featured: true,
    features: [
      "Bis zu 8 Unterseiten",
      "Custom Animationen",
      "CMS-Anbindung",
      "Erweitertes SEO & Analytics",
      "Conversion-Optimierung",
      "30 Tage Support inklusive",
    ],
  },
  {
    name: "Premium",
    tag: "Für Marken mit Anspruch",
    price: "ab 7.500",
    cadence: "Projektpreis",
    cta: "Beratung anfragen",
    featured: false,
    features: [
      "Komplexe Architekturen",
      "Maßgefertigte Interaktionen",
      "Headless CMS / Shop",
      "Performance-Audit",
      "A/B-Testing Setup",
      "12 Monate Pflege & Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="section" id="preise">
      <div className="container">
        <motion.div
          className="section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.span className="section__eyebrow" variants={fadeUp}>
            Pakete & Preise
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Klare Preise. Keine Überraschungen.
          </motion.h2>
          <motion.p className="section__sub" variants={fadeUp}>
            Wähle das Paket, das zu dir passt. Alle Preise verstehen sich zzgl. MwSt.
          </motion.p>
        </motion.div>

        <motion.div
          className="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`plan ${p.featured ? "plan--featured" : ""}`}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: p.featured ? -16 : -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              {p.featured && <span className="plan__badge">Beliebt</span>}
              <div className="plan__name">{p.name}</div>
              <div className="plan__tag">{p.tag}</div>
              <div className="plan__price">
                <strong>€ {p.price}</strong>
                <span>{p.cadence}</span>
              </div>
              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#kontakt"
                className={`btn plan__cta ${p.featured ? "btn--primary" : "plan__cta--soft"}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {p.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text: "Steven Berg hat unsere Marke nicht nur visuell, sondern strategisch auf ein neues Niveau gehoben. Unser Lead-Volumen hat sich mehr als verdoppelt.",
    name: "Lena Hofmann",
    role: "CMO, Helix Industries",
    initials: "LH",
  },
  {
    text: "Der gesamte Prozess war strukturiert, schnell und überraschend angenehm. Das Ergebnis: eine Website, die uns ernsthafte Aufträge bringt.",
    name: "Marcus Weber",
    role: "Gründer, Weber & Co.",
    initials: "MW",
  },
  {
    text: "Premium-Qualität ohne Agentur-Overhead. Animationen, Performance, Liebe zum Detail — absolut erstklassig.",
    name: "Sophia Becker",
    role: "Head of Design, Norra",
    initials: "SB",
  },
];

function Stars() {
  return (
    <div className="quote__stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section" id="stimmen">
      <div className="container">
        <motion.div
          className="section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.span className="section__eyebrow" variants={fadeUp}>
            Stimmen unserer Kunden
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Marken, die uns vertrauen.
          </motion.h2>
        </motion.div>

        <motion.div
          className="testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {testimonials.map((t, i) => (
            <motion.div
              className="quote"
              key={t.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <Stars />
              <p className="quote__text">„{t.text}"</p>
              <div className="quote__author">
                <div
                  className="quote__avatar"
                  style={{
                    background:
                      "linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="quote__name">{t.name}</div>
                  <div className="quote__role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta" id="kontakt">
      <div className="container">
        <motion.div
          className="cta__card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="cta__glow"
            animate={{
              backgroundPosition: [
                "25% 30%, 75% 50%",
                "55% 60%, 35% 30%",
                "25% 30%, 75% 50%",
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="cta__content">
            <motion.h2
              className="cta__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Bereit für eine Website,{" "}
              <br />
              die{" "}
              <em
                style={{
                  background:
                    "linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontStyle: "italic",
                }}
              >
                wirklich verkauft
              </em>
              ?
            </motion.h2>
            <motion.p
              className="cta__sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Buche ein 15-minütiges Erstgespräch — kostenlos und unverbindlich.
              Wir besprechen dein Projekt und zeigen, wie wir dich nach vorne
              bringen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.a
                href="mailto:hallo@steven-berg-marketing.de"
                className="btn btn--primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                15-min Call buchen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>© {new Date().getFullYear()} Steven Berg Marketing — Professionelles Webdesign</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
