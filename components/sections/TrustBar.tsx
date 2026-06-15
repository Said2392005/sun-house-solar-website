'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, BadgeCheck, Award } from 'lucide-react'

const trustItems = [
  { icon: ShieldCheck, label: 'Govt Registered', sub: 'Raje Power Trading' },
  { icon: BadgeCheck,  label: 'Authorised Dealer', sub: 'Waaree · Adani · Tata' },
  { icon: Award,       label: '100% Genuine', sub: 'Full manufacturer warranty' },
]

export default function TrustBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-5 px-6 sm:px-8 lg:px-12 border-b"
      style={{ background: '#0A1714', borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {trustItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#10B981' }} />
                <div>
                  <span className="text-[13px] font-semibold text-white">{item.label}</span>
                  <span className="text-[11px] text-slate-500 ml-1.5">{item.sub}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
