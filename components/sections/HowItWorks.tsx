'use client'

import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, PenTool, Zap, BarChart2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Site Survey',
    desc: 'Our engineer visits your location — free of charge — to assess roof structure, shading, orientation and your exact energy requirements.',
    tag: 'Free & No-Obligation',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Custom Design',
    desc: 'We create a tailored system design with precise panel layout, cable routing, inverter sizing and a full financial projection with payback timeline.',
    tag: 'Detailed Proposal',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Expert Installation',
    desc: 'Certified installers complete your system in 1–2 days. All DC/AC wiring, net metering connection, safety commissioning and inspection handled.',
    tag: 'Done in 1–2 Days',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=80',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Live Monitoring',
    desc: 'Track real-time generation and savings via the GreenVolt app. We handle DISCOM approval, subsidy filing, and net metering paperwork end-to-end.',
    tag: 'Mobile App Included',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(Math.floor(latest * steps.length), steps.length - 1)
    setActiveIndex(Math.max(0, idx))
  })

  const active = steps[activeIndex]
  const StepIcon = active.icon

  return (
    <>
      <div id="how-it-works" />

      {/* ── Desktop: Sticky scroll ───────────────────────────────── */}
      <div
        ref={sectionRef}
        className="hidden lg:block bg-[#0A1C17] relative"
        style={{ height: `${(steps.length + 1.5) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex">
          {/* Progress bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] z-30 origin-left"
            style={{
              scaleX: scrollYProgress,
              background: 'linear-gradient(90deg, #34D399, #10B981)',
            }}
          />

          {/* Left: Step content (48%) */}
          <div className="w-[48%] h-full flex flex-col justify-center pl-16 pr-12 flex-shrink-0">
            <div className="mb-10">
              <p className="label-text mb-4">Our Process</p>
              <h2 className="h2">How We Work</h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Large editorial step number */}
                <div
                  className="text-[96px] font-bold font-poppins leading-none mb-4 select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(52,211,153,0.2)',
                  }}
                >
                  {active.number}
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(52,211,153,0.12)' }}
                  >
                    <StepIcon className="w-4 h-4 text-[#34D399]" strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-[11px] font-semibold text-emerald-300 px-3 py-1 rounded-full"
                    style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
                  >
                    {active.tag}
                  </span>
                </div>

                <h3 className="text-[28px] font-bold font-poppins text-white mb-4 leading-snug">
                  {active.title}
                </h3>
                <p className="text-[15px] text-slate-400 leading-relaxed max-w-sm">
                  {active.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Step progress indicators */}
            <div className="flex gap-3 mt-10 items-end">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-full transition-all duration-400"
                    style={{
                      width: i === activeIndex ? '32px' : '8px',
                      height: '8px',
                      background: i === activeIndex
                        ? '#34D399'
                        : i < activeIndex
                          ? 'rgba(52,211,153,0.4)'
                          : 'rgba(255,255,255,0.1)',
                    }}
                  />
                  {i === activeIndex && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[10px] text-emerald-400 font-mono"
                    >
                      {s.number}
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image panel (52%) */}
          <div className="relative w-[52%] h-full flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="52vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0A1C17]/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C17]/60 via-transparent to-[#0A1C17]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Ghost step number watermark */}
            <div className="absolute bottom-6 right-8 z-10 pointer-events-none select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[160px] font-bold font-poppins leading-none"
                  style={{ color: 'rgba(52,211,153,0.06)' }}
                >
                  {active.number}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile fallback ──────────────────────────────────────── */}
      <section className="lg:hidden page-section bg-[#0A1C17]">
        <div className="content-wrap">
          <div className="mb-12">
            <p className="label-text mb-4">Our Process</p>
            <h2 className="h2">How We Work</h2>
          </div>
          <div className="space-y-5">
            {steps.map((step, i) => {
              const SIcon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 items-start p-6 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="text-[28px] font-bold font-poppins flex-shrink-0 leading-none mt-0.5 w-12"
                    style={{ color: 'transparent', WebkitTextStroke: '1px rgba(52,211,153,0.35)' }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <SIcon className="w-4 h-4 text-[#34D399]" strokeWidth={1.5} />
                      <span
                        className="text-[10px] font-semibold text-emerald-300 px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(52,211,153,0.1)' }}
                      >
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="h3 mb-2">{step.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
