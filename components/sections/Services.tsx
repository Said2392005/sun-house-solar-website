'use client'

import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Sun, Wrench, ShieldCheck, Zap, ClipboardList, Droplets } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Solar Panel Supply',
    desc: 'Authorised dealer for Waaree, Adani Solar, Tata Power, Vikram Solar — genuine products at transparent pricing.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80',
    stat: '10+ Brands',
    tag: 'Supply',
  },
  {
    icon: Zap,
    title: 'System Installation',
    desc: 'End-to-end installation for residential, commercial and industrial rooftop systems with certified engineers.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1000&q=80',
    stat: '500+ Projects',
    tag: 'Installation',
  },
  {
    icon: ClipboardList,
    title: 'Subsidy Assistance',
    desc: 'PM Surya Ghar and MSEDCL subsidy handled end-to-end. Maximum government savings, zero paperwork for you.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80',
    stat: '₹78,000 avg saving',
    tag: 'Subsidy',
  },
  {
    icon: Wrench,
    title: 'Annual Maintenance',
    desc: 'AMC plans with scheduled inspections, performance monitoring, inverter servicing and priority support.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80',
    stat: 'From ₹2,999/yr',
    tag: 'AMC',
  },
  {
    icon: Droplets,
    title: 'Panel Cleaning',
    desc: 'Professional dry and wet cleaning that restores panel efficiency and maximises yearly energy output.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1000&q=80',
    stat: '+18% Efficiency',
    tag: 'Cleaning',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Support',
    desc: 'Full manufacturer warranty on all products. Local Solapur team for fast on-site resolution.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1000&q=80',
    stat: '25yr Warranty',
    tag: 'Support',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(Math.floor(latest * services.length), services.length - 1)
    setActiveIndex(Math.max(0, idx))
  })

  const active = services[activeIndex]
  const Icon = active.icon

  return (
    <>
      <div id="services" />

      {/* ── Desktop: Sticky scroll ───────────────────────────────── */}
      <div
        ref={sectionRef}
        className="hidden lg:block bg-[#0F1F1A] relative"
        style={{ height: `${(services.length + 1.5) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex">
          {/* Scroll progress bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] z-30 origin-left bg-[#10B981]"
            style={{ scaleX: scrollYProgress }}
          />

          {/* Left: Image panel */}
          <div className="relative w-[56%] h-full flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="56vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F1F1A]/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F1A]/70 via-transparent to-[#0F1F1A]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Stat badge */}
            <div className="absolute bottom-10 left-10 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-emerald-300 mb-3"
                    style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(52,211,153,0.2)' }}
                  >
                    {active.tag}
                  </span>
                  <p className="text-[42px] font-bold font-poppins text-white tracking-tight leading-none">
                    {active.stat}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Content panel */}
          <div className="w-[44%] h-full flex flex-col justify-center px-14 flex-shrink-0">
            <div className="mb-8">
              <p className="label-text mb-4">What We Do</p>
              <h2 className="h2 leading-tight">Complete Solar<br />Services</h2>
            </div>

            <p className="font-mono text-[11px] text-slate-600 uppercase tracking-widest mb-7">
              {String(activeIndex + 1).padStart(2, '0')} — {String(services.length).padStart(2, '0')}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(16,185,129,0.12)' }}
                >
                  <Icon className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[26px] font-bold font-poppins text-white mb-3 leading-snug">
                  {active.title}
                </h3>
                <p className="text-[15px] text-slate-400 leading-relaxed max-w-sm">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 items-center mb-8">
              {services.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? '28px' : '6px',
                    height: '6px',
                    background: i === activeIndex ? '#10B981' : 'rgba(255,255,255,0.12)',
                  }}
                />
              ))}
            </div>

            <p className="text-[11px] text-slate-700 flex items-center gap-2">
              <span className="inline-block w-5 h-px bg-slate-700" />
              Scroll to explore all services
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile fallback grid ─────────────────────────────────── */}
      <section className="lg:hidden page-section bg-[#0F1F1A]">
        <div className="content-wrap">
          <div className="mb-12">
            <p className="label-text mb-4">What We Do</p>
            <h2 className="h2">Complete Solar Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {services.map((s, i) => {
              const SIcon = s.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-[#0F1F1A] p-7 hover:bg-[#163D36] transition-colors duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(16,185,129,0.1)' }}
                  >
                    <SIcon className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
                  </div>
                  <h3 className="h3 mb-2">{s.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
