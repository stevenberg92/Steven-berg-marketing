'use client'

import { motion, useInView, useAnimationFrame } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Elena Kowalski',
    role: 'Head of Product',
    company: 'Arcadia Labs',
    avatar: 'EK',
    color: 'hsl(265,70%,58%)',
    rating: 5,
    quote:
      "Flow replaced four tools in our stack overnight. The AI prioritization alone saved us 2 hours a day. I don't know how we shipped without it.",
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Lead',
    company: 'Vertex AI',
    avatar: 'MC',
    color: 'hsl(220,70%,58%)',
    rating: 5,
    quote:
      "The focus mode is genuinely magical. I blocked off mornings for deep work and my output tripled. The team presence features keep us aligned without any overhead.",
  },
  {
    name: 'Aria Patel',
    role: 'Founder & CEO',
    company: 'Nimbus Co.',
    avatar: 'AP',
    color: 'hsl(340,70%,58%)',
    rating: 5,
    quote:
      "As a solo founder, Flow is my co-pilot. It surfaces what I should work on next and keeps my runway visible. Pure clarity in a noisy world.",
  },
  {
    name: 'James Okafor',
    role: 'Design Director',
    company: 'Prism Studio',
    avatar: 'JO',
    color: 'hsl(160,60%,48%)',
    rating: 5,
    quote:
      "My whole creative team switched in one week. The linked docs and tasks feature is exactly how our brains work—everything connected, nothing lost.",
  },
  {
    name: 'Sofia Reyes',
    role: 'Operations Manager',
    company: 'Halcyon',
    avatar: 'SR',
    color: 'hsl(30,70%,55%)',
    rating: 5,
    quote:
      "We onboarded 40 people in a day. The async video updates replaced 80% of our status meetings. ROI was visible in week one.",
  },
  {
    name: 'Tom Lindström',
    role: 'CTO',
    company: 'Flare Systems',
    avatar: 'TL',
    color: 'hsl(195,70%,52%)',
    rating: 5,
    quote:
      "I've tried every productivity tool out there. Flow is the only one that actually reduced cognitive load instead of adding to it. Remarkable.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass glass-hover gradient-border rounded-2xl p-6 min-w-[320px] max-w-[380px] flex flex-col gap-4 flex-shrink-0">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-white/65 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/6">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ background: testimonial.color }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-white/35">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}

function ScrollingRow({
  items,
  direction = 1,
  speed = 30,
}: {
  items: typeof testimonials
  direction?: 1 | -1
  speed?: number
}) {
  const x = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useAnimationFrame((_, delta) => {
    if (paused || !containerRef.current) return
    const totalWidth = containerRef.current.scrollWidth / 2
    x.current = ((x.current + (direction * speed * delta) / 1000) % totalWidth + totalWidth) % totalWidth
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${-x.current}px)`
    }
  })

  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={containerRef} className="flex gap-5 will-change-transform" style={{ width: 'max-content' }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const row1 = testimonials.slice(0, 3)
  const row2 = testimonials.slice(3)

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Fades on sides */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#08021a] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#08021a] to-transparent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <span className="inline-block text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Loved by teams
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            who ship fast
          </span>
        </h2>
        <p className="text-white/40 text-lg max-w-lg mx-auto">
          From solo founders to 200-person teams—Flow adapts to every way of working.
        </p>
      </motion.div>

      {/* Scrolling rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-5"
      >
        <ScrollingRow items={row1} direction={1} speed={28} />
        <ScrollingRow items={row2} direction={-1} speed={22} />
      </motion.div>
    </section>
  )
}
