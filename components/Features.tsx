'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BrainCircuit, Layers, Users } from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    badge: 'AI-Powered',
    title: 'Think it. Done.',
    description:
      "Flow's AI engine learns your work patterns and surfaces what matters next—before you know you need it. No setup, no manual sorting. Pure clarity.",
    highlights: [
      'Smart task prioritization',
      'Context-aware suggestions',
      'Auto-documentation from meetings',
    ],
    visual: (
      <div className="mt-6 rounded-xl bg-black/30 border border-white/5 p-4 space-y-2.5">
        {[
          { text: 'Finish Q3 report', priority: 'High', color: 'bg-red-400' },
          { text: 'Review Figma mockups', priority: 'Med', color: 'bg-yellow-400' },
          { text: 'Update team standup', priority: 'Low', color: 'bg-green-400' },
        ].map((task) => (
          <div key={task.text} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-xs text-white/60">{task.text}</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${task.color} text-black`}>
              {task.priority}
            </span>
          </div>
        ))}
        <div className="pt-2 border-t border-white/5 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center">
            <BrainCircuit className="w-2.5 h-2.5 text-violet-400" />
          </div>
          <span className="text-[10px] text-violet-400">AI suggests: Start with report first</span>
        </div>
      </div>
    ),
  },
  {
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
    badge: 'Unified Workspace',
    title: 'Everything in one place.',
    description:
      'Stop app-switching. Flow unifies tasks, documents, wikis, and goals into a single coherent workspace that feels like an extension of your mind.',
    highlights: [
      'Real-time collaborative docs',
      'Linked knowledge graph',
      'Cross-project dependencies',
    ],
    visual: (
      <div className="mt-6 rounded-xl bg-black/30 border border-white/5 p-4">
        <div className="grid grid-cols-2 gap-2">
          {['Tasks', 'Docs', 'Goals', 'Wiki'].map((item, i) => (
            <div
              key={item}
              className="rounded-lg bg-white/5 border border-white/5 p-3 flex items-center gap-2"
            >
              <div
                className="w-2 h-2 rounded-sm"
                style={{
                  background: `hsl(${200 + i * 30}, 70%, 60%)`,
                }}
              />
              <span className="text-xs text-white/50">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-2 text-center">
          <span className="text-[10px] text-blue-300 font-medium">12 connections found</span>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    glow: 'shadow-pink-500/20',
    badge: 'Team Flow',
    title: 'Teams in sync.',
    description:
      "Flow keeps everyone aligned without the meeting overhead. Async-first collaboration with live presence when it counts—built for distributed teams.",
    highlights: [
      'Async video updates',
      'Live cursor presence',
      'Automatic status syncing',
    ],
    visual: (
      <div className="mt-6 rounded-xl bg-black/30 border border-white/5 p-4 space-y-2">
        {[
          { name: 'Alex', status: 'In focus mode', color: 'hsl(260,70%,60%)' },
          { name: 'Maya', status: 'Reviewing PR #47', color: 'hsl(330,70%,65%)' },
          { name: 'Sam', status: 'Available', color: 'hsl(140,60%,50%)' },
        ].map((member) => (
          <div key={member.name} className="flex items-center gap-2.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
              style={{ background: member.color }}
            >
              {member.name[0]}
            </div>
            <div className="flex-1">
              <div className="text-xs text-white/70 font-medium">{member.name}</div>
              <div className="text-[10px] text-white/30">{member.status}</div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
        ))}
      </div>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-32 px-6" ref={ref}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
          Features
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Built for how
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            great work happens
          </span>
        </h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          Three pillars. One seamless experience. Zero compromise.
        </p>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative glass glass-hover gradient-border rounded-2xl p-7 flex flex-col shadow-2xl ${feature.glow}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Badge */}
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
              >
                {feature.badge}
              </span>

              {/* Title & description */}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-4">{feature.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-2">
                {feature.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-white/55">
                    <svg className="w-3 h-3 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Visual */}
              {feature.visual}
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
