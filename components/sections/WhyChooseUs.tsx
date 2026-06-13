'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: '500+',   label: 'Projects Completed' },
  { value: '1,000+', label: 'Happy Customers' },
  { value: '5 MW+',  label: 'Total Capacity Installed' },
  { value: '10+',    label: 'Districts Served' },
]

const reasons = [
  { title: 'Authorised Multi-Brand Dealer',  desc: 'We stock products from all major Indian solar manufacturers under one roof — no middlemen.' },
  { title: 'End-to-End Execution',           desc: 'Site survey, design, supply, installation, commissioning and documentation — all handled by us.' },
  { title: 'Subsidy Expertise',              desc: 'Deep experience with PM Surya Ghar, MSEDCL and state subsidy applications. We manage the paperwork.' },
  { title: 'Post-Installation Support',      desc: 'AMC contracts, panel cleaning, inverter servicing and rapid breakdown response in Solapur.' },
  { title: 'Transparent Pricing',            desc: 'Detailed quotations with no hidden costs. You know exactly what you are paying for.' },
  { title: 'Experienced Local Team',         desc: 'Our engineers are Solapur-based, trained, certified and know the local grid conditions.' },
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="why-us" className="page-section bg-[#0D2F2A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          variants={fade(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <p className="label-text mb-4">Why Sun House Solar</p>
          <h2 className="h2 max-w-lg">Solapur&apos;s Most Trusted Solar Partner</h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fade(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-14"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="px-8 py-7" style={{ background: '#0D2F2A' }}>
              <div className="text-3xl font-bold font-poppins text-white leading-none mb-1.5">{s.value}</div>
              <div className="text-[12px] text-slate-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fade(0.15 + i * 0.06)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 bg-[#10B981]" />
                <div>
                  <h3 className="text-[15px] font-semibold text-white font-poppins mb-1.5">{r.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
