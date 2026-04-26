'use client'

import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'

function AnimatedOrb({
  className,
  delay = 0,
}: {
  className: string
  delay?: number
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift bg-size-300">
      {children}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,40,200,0.3),rgba(255,255,255,0))]" />

      {/* Animated orbs */}
      <AnimatedOrb
        className="w-[600px] h-[600px] bg-violet-600 -top-32 -left-32"
        delay={0}
      />
      <AnimatedOrb
        className="w-[500px] h-[500px] bg-purple-600 -bottom-64 -right-32"
        delay={2}
      />
      <AnimatedOrb
        className="w-[400px] h-[400px] bg-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        delay={4}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-300 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Now in public beta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6 text-white"
        >
          Work at the
          <br />
          <GradientText>speed of thought</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Flow eliminates the friction between your ideas and execution. One workspace
          for tasks, docs, and focus—built for teams who move fast and think clearly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-base shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow duration-300"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-7 py-4 rounded-full glass glass-hover text-white/80 hover:text-white font-semibold text-base transition-colors duration-200"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play className="w-3 h-3 fill-white ml-0.5" />
            </div>
            Watch demo
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <div className="flex -space-x-2">
            {['EK', 'MJ', 'AL', 'RP', 'ST'].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black/40 flex items-center justify-center text-[10px] font-bold text-white"
                style={{
                  background: `hsl(${260 + i * 20}, 70%, ${45 + i * 5}%)`,
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/40">
            <span className="text-white/70 font-semibold">12,000+</span> teams already in flow
          </p>
        </motion.div>
      </motion.div>

      {/* Floating product mockup */}
      <motion.div
        className="relative z-10 mt-20 max-w-5xl mx-auto px-6 w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative gradient-border rounded-2xl overflow-hidden glow-violet"
        >
          <div className="glass rounded-2xl p-6 md:p-8">
            {/* Mock UI header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                <span className="text-xs text-white/30">app.flowapp.io/workspace</span>
              </div>
            </div>

            {/* Mock dashboard */}
            <div className="grid grid-cols-12 gap-4 min-h-[280px]">
              {/* Sidebar */}
              <div className="col-span-2 space-y-2">
                {['Dashboard', 'Tasks', 'Docs', 'Focus', 'Team'].map((item, i) => (
                  <div
                    key={item}
                    className={`h-7 rounded-lg flex items-center px-2 text-xs ${
                      i === 0
                        ? 'bg-violet-500/20 text-violet-300'
                        : 'text-white/30 hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-7 space-y-3">
                <div className="h-8 w-1/3 rounded-lg bg-white/5" />
                <div className="grid grid-cols-3 gap-3">
                  {['In Progress', 'Review', 'Done'].map((col) => (
                    <div key={col} className="space-y-2">
                      <div className="text-xs text-white/30 font-medium">{col}</div>
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-16 rounded-xl bg-white/5 border border-white/5 p-2 space-y-1.5"
                        >
                          <div className="h-2 rounded bg-white/10 w-4/5" />
                          <div className="h-2 rounded bg-white/5 w-3/5" />
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-3 h-3 rounded-full bg-violet-500/40" />
                            <div className="h-1.5 rounded bg-white/10 w-8" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="col-span-3 space-y-3">
                <div className="h-8 w-full rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/20 flex items-center px-3">
                  <span className="text-xs text-violet-300">Focus mode active</span>
                </div>
                <div className="rounded-xl bg-white/5 p-3 space-y-2">
                  <div className="h-2 rounded bg-white/10 w-full" />
                  <div className="h-2 rounded bg-white/10 w-4/5" />
                  <div className="h-2 rounded bg-white/5 w-3/5" />
                  <div className="h-2 rounded bg-white/5 w-4/5" />
                </div>
                <div className="rounded-xl bg-white/5 p-3 space-y-2">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/10 flex items-center justify-center">
                    <div className="text-xs text-violet-400 font-medium">4h 23m deep work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08021a] to-transparent pointer-events-none" />
    </section>
  )
}
