'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const highlights = [
  'Authorised dealer for Waaree, Adani Solar, Tata Power, Vikram Solar and more',
  'End-to-end project execution — site survey, design, supply, install, commission',
  'Serving residential and commercial clients across Solapur district',
  'Annual Maintenance Contracts with priority support',
  'Genuine products backed by full manufacturer warranty',
  'Subsidy and documentation assistance included',
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="page-section bg-[#0D2F2A]">
      <div ref={ref} className="content-wrap">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — single image */}
          <motion.div
            variants={fade(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=800&q=80&auto=format&fit=crop"
                alt="Sun House Solar team"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2F2A]/70 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#0F1F1A]/90 backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-0.5">Established</p>
                <p className="text-sm font-semibold text-white">Sun House Solar · Raje Power Trading</p>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="space-y-8">
            <motion.div variants={fade(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <p className="label-text mb-4">About Us</p>
              <h2 className="h2 mb-5">
                Solapur&apos;s Solar<br />Energy Partner
              </h2>
              <p className="body-text mb-4">
                Sun House Solar is the solar energy division of{' '}
                <strong className="text-slate-200 font-medium">Raje Power Trading</strong> —
                a trusted name in Solapur for solar material supply and installation.
              </p>
              <p className="body-text">
                We are authorised distributors for India&apos;s leading solar brands, giving
                our customers access to the best products at transparent, competitive prices.
              </p>
            </motion.div>

            <motion.div variants={fade(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <ul className="space-y-3">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#10B981]" />
                    <span className="text-[14px] text-slate-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fade(0.3)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <a href="/#contact" className="btn-primary">
                Talk to Us <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
