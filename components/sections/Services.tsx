'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sun, Wrench, ShieldCheck, Zap, ClipboardList, Droplets } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Solar Panel Supply',
    desc: 'Authorised dealer for Waaree, Adani Solar, Tata Power, Vikram Solar and more — genuine products at transparent pricing.',
  },
  {
    icon: Zap,
    title: 'System Installation',
    desc: 'End-to-end installation for residential, commercial and industrial rooftop solar systems with certified engineers.',
  },
  {
    icon: ClipboardList,
    title: 'Subsidy Assistance',
    desc: 'Full documentation and application support for PM Surya Ghar, MSEDCL and state subsidies — we handle the paperwork.',
  },
  {
    icon: Wrench,
    title: 'Annual Maintenance',
    desc: 'AMC plans with scheduled inspections, performance monitoring, inverter servicing and priority breakdown support.',
  },
  {
    icon: Droplets,
    title: 'Panel Cleaning',
    desc: 'Professional dry and wet cleaning service to restore panel efficiency and maximise energy output year-round.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Support',
    desc: 'Full manufacturer warranty on all panels and inverters. Local Solapur support team for fast resolution.',
  },
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="page-section bg-[#0F1F1A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          variants={fade(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <p className="label-text mb-4">What We Do</p>
          <h2 className="h2 max-w-md">Complete Solar Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                variants={fade(i * 0.07)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="bg-[#0F1F1A] p-8 hover:bg-[#163D36] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(16,185,129,0.1)' }}>
                  <Icon className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                </div>
                <h3 className="h3 mb-3">{s.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
