'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '500+',  label: 'Projects' },
  { value: '1,000+',label: 'Customers' },
  { value: '5 MW+', label: 'Installed' },
  { value: '10+',   label: 'Districts' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0F1F1A]">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80&auto=format&fit=crop"
          alt="Solar farm"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      {/* Base dark tint across entire image */}
      <div className="absolute inset-0 bg-[#0F1F1A]/75" />
      {/* Extra darkness on left where all text lives */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F1A]/90 via-[#0F1F1A]/60 to-transparent" />
      {/* Bottom fade so stats row reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F1A] via-transparent to-[#0F1F1A]/40" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-20"
      >
        <div className="max-w-2xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-text mb-6"
          >
            Solapur&apos;s Trusted Solar Partner
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h1 mb-6"
          >
            Power Your Future<br />
            with{' '}
            <span className="text-[#34D399]">
              Clean Solar
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="body-text text-[16px] leading-relaxed mb-10 max-w-lg"
          >
            Your trusted solar material supplier and installer in Solapur.
            Authorised dealer for Waaree, Adani Solar, Tata Power and more — by Raje Power Trading.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <a href="/#contact" className="btn-primary">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:9175084823" className="btn-ghost">
              <Phone className="w-4 h-4" /> 9175084823
            </a>
          </motion.div>

          {/* Stats — inline text, no cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8 border-t border-white/[0.08] pt-8"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold font-poppins text-white leading-none mb-1">{s.value}</div>
                <div className="text-[12px] text-slate-500 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
