'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Sparkles } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals getting organized.',
    cta: 'Get started free',
    ctaStyle: 'glass glass-hover text-white border border-white/10',
    highlight: false,
    features: [
      'Up to 3 projects',
      '5 GB storage',
      'Basic task management',
      'Personal focus timer',
      'Mobile & desktop apps',
      '7-day activity history',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 18,
    yearlyPrice: 12,
    description: 'For power users who demand the best.',
    cta: 'Start Pro trial',
    ctaStyle:
      'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-xl shadow-violet-500/30',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'AI task prioritization',
      'Advanced focus analytics',
      'Team collaboration (up to 10)',
      'Integrations (Slack, Notion, GH)',
      'Priority support',
      'Unlimited activity history',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: 49,
    yearlyPrice: 36,
    description: 'For teams that operate at scale.',
    cta: 'Talk to sales',
    ctaStyle: 'glass glass-hover text-white border border-white/10',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited members',
      '1 TB storage',
      'Custom AI workflows',
      'SSO & SAML',
      'Advanced audit logs',
      'SLA guarantee',
      'Dedicated account manager',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="relative py-32 px-6" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(120,40,200,0.12),transparent)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Simple, transparent
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto mb-8">
            Start free. Scale as your team grows. No hidden fees, ever.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-2 py-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                !yearly ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                yearly ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'
              }`}
            >
              Yearly
              <span className="text-[10px] font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                SAVE 33%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Tier cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? 'bg-gradient-to-b from-violet-900/60 to-purple-950/60 border border-violet-500/30 shadow-2xl shadow-violet-500/20'
                  : 'glass gradient-border'
              }`}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/40">
                    <Sparkles className="w-3 h-3" />
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-1">
                  {tier.name}
                </h3>
                <div className="flex items-end gap-1.5 mb-2">
                  <motion.span
                    key={`${tier.name}-${yearly}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-black text-white"
                  >
                    ${yearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </motion.span>
                  {(tier.monthlyPrice > 0 || tier.yearlyPrice > 0) && (
                    <span className="text-white/40 text-sm mb-2">/mo</span>
                  )}
                </div>
                {yearly && tier.monthlyPrice > 0 && (
                  <p className="text-xs text-white/35">
                    Billed annually (${tier.yearlyPrice * 12}/yr)
                  </p>
                )}
                <p className="text-sm text-white/45 mt-2">{tier.description}</p>
              </div>

              {/* CTA */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200 mb-6 ${tier.ctaStyle}`}
              >
                {tier.cta}
              </motion.a>

              {/* Divider */}
              <div className="border-t border-white/8 mb-6" />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.highlight ? 'bg-violet-500/20' : 'bg-white/8'
                      }`}
                    >
                      <Check
                        className={`w-2.5 h-2.5 ${
                          tier.highlight ? 'text-violet-400' : 'text-white/50'
                        }`}
                      />
                    </div>
                    <span className="text-sm text-white/55">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-white/25 mt-10"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  )
}
