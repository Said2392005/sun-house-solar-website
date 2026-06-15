'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Sun, Zap, Battery, Layers, Cable, BarChart2, Droplets, Lightbulb } from 'lucide-react'

const products = [
  {
    Icon: Sun,
    title: 'Solar Panels',
    desc: 'Mono PERC & bifacial modules from Waaree, Adani, Tata, Vikram — 330W to 600W range.',
  },
  {
    Icon: Zap,
    title: 'Inverters',
    desc: 'On-grid, off-grid and hybrid inverters. Brands: Solis, Growatt, Goodwe, Havells.',
  },
  {
    Icon: Battery,
    title: 'Batteries',
    desc: 'Lithium-ion and lead-acid storage solutions for uninterrupted backup power.',
  },
  {
    Icon: Layers,
    title: 'Mounting Structures',
    desc: 'Galvanised and aluminium rooftop mounting frames — RCC, tin roof and ground mount.',
  },
  {
    Icon: Cable,
    title: 'BOS Components',
    desc: 'DC cables, MC4 connectors, junction boxes, earthing kits and AC switchgear.',
  },
  {
    Icon: BarChart2,
    title: 'Monitoring Systems',
    desc: 'Real-time generation and consumption monitoring with mobile app connectivity.',
  },
  {
    Icon: Droplets,
    title: 'Solar Water Pumps',
    desc: 'Agriculture solar pumps with MNRE subsidy. 1 HP to 10 HP range available.',
  },
  {
    Icon: Lightbulb,
    title: 'Solar Lights',
    desc: 'Street lights, garden lights and home lighting systems for off-grid locations.',
  },
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function Products() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="products" className="page-section bg-[#0D2F2A]">
      <div ref={ref} className="content-wrap">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.div variants={fade(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <p className="label-text mb-4">What We Supply</p>
            <h2 className="h2">Products We Carry</h2>
          </motion.div>
          <motion.a
            variants={fade(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            href="/#contact"
            className="btn-ghost self-start sm:self-auto"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => {
            const Icon = p.Icon
            return (
              <motion.div
                key={i}
                variants={fade(i * 0.05)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="card p-6 hover:border-white/[0.14] transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(16,185,129,0.1)' }}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: '#10B981' }} />
                </div>
                <h3 className="text-[15px] font-semibold font-poppins text-white mb-2">{p.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
