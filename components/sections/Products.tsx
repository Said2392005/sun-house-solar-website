'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useCallback } from 'react'
import {
  ArrowRight, Sun, Zap, Battery, Layers,
  Cable, BarChart2, Droplets, Lightbulb,
  ChevronLeft, ChevronRight,
} from 'lucide-react'

const products = [
  {
    Icon: Sun,
    title: 'Solar Panels',
    desc: 'Mono PERC & bifacial modules from Waaree, Adani, Tata, Vikram — 330W to 600W range.',
    spec: '330W – 600W',
    brands: 'Waaree · Adani · Tata',
  },
  {
    Icon: Zap,
    title: 'Inverters',
    desc: 'On-grid, off-grid and hybrid inverters for all system sizes.',
    spec: '1 kW – 100 kW',
    brands: 'Solis · Growatt · Goodwe',
  },
  {
    Icon: Battery,
    title: 'Batteries',
    desc: 'Lithium-ion and lead-acid storage solutions for uninterrupted backup power.',
    spec: '2.4 kWh – 20 kWh',
    brands: 'Luminous · Exide',
  },
  {
    Icon: Layers,
    title: 'Mounting Structures',
    desc: 'Galvanised and aluminium rooftop frames for RCC, tin roof and ground mount systems.',
    spec: 'RCC · Tin · Ground',
    brands: 'Custom fabrication',
  },
  {
    Icon: Cable,
    title: 'BOS Components',
    desc: 'DC cables, MC4 connectors, junction boxes, earthing kits and AC switchgear.',
    spec: 'Full BOS kits',
    brands: 'Polycab · Havells',
  },
  {
    Icon: BarChart2,
    title: 'Monitoring Systems',
    desc: 'Real-time generation and consumption monitoring with mobile app connectivity.',
    spec: 'Wi-Fi + GPRS',
    brands: 'Solis · Goodwe',
  },
  {
    Icon: Droplets,
    title: 'Solar Water Pumps',
    desc: 'Agriculture solar pumps with MNRE subsidy eligibility.',
    spec: '1 HP – 10 HP',
    brands: 'Kirloskar · CRI',
  },
  {
    Icon: Lightbulb,
    title: 'Solar Lights',
    desc: 'Street lights, garden lights and home lighting for off-grid locations.',
    spec: '10W – 100W',
    brands: 'Tata · Luminous',
  },
]

const SPEED = 0.7 // px per rAF frame — matches Brands marquee speed

export default function Products() {
  const trackRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const autoRef     = useRef(true)
  const timerRef    = useRef<ReturnType<typeof setTimeout>>()
  const rafRef      = useRef<number>()

  // Pause auto-scroll; resume after 3 s of inactivity
  const pause = useCallback(() => {
    autoRef.current = false
    const el = trackRef.current
    if (el) el.style.scrollSnapType = 'x mandatory'
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      autoRef.current = true
      if (trackRef.current) trackRef.current.style.scrollSnapType = 'none'
    }, 3000)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    // Auto-scroll mode: disable snap so rAF can move freely
    el.style.scrollSnapType = 'none'

    const tick = () => {
      if (autoRef.current) {
        const max = el.scrollWidth - el.clientWidth
        if (max > 0) {
          el.scrollLeft += SPEED
          if (el.scrollLeft >= max) el.scrollLeft = 0
          if (progressRef.current) {
            progressRef.current.style.width = `${(el.scrollLeft / max) * 100}%`
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    // Any user interaction pauses auto-scroll
    const onInteract = () => pause()
    el.addEventListener('touchstart', onInteract, { passive: true })
    el.addEventListener('mousedown',  onInteract)
    el.addEventListener('wheel',      onInteract, { passive: true })

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearTimeout(timerRef.current)
      el.removeEventListener('touchstart', onInteract)
      el.removeEventListener('mousedown',  onInteract)
      el.removeEventListener('wheel',      onInteract)
    }
  }, [pause])

  // Update progress bar during manual scroll
  const handleScroll = useCallback(() => {
    if (autoRef.current) return // handled inside rAF tick
    const el = trackRef.current
    if (!el || !progressRef.current) return
    const max = el.scrollWidth - el.clientWidth
    if (max > 0) progressRef.current.style.width = `${(el.scrollLeft / max) * 100}%`
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    pause()
    trackRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section id="products" className="bg-[#0D2F2A] pt-24 pb-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-text mb-4">What We Supply</p>
            <h2 className="h2">Products We Carry</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 text-slate-500 hover:text-emerald-400"
                style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 text-slate-500 hover:text-emerald-400"
                style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <a href="/#contact" className="btn-ghost self-start sm:self-auto">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll track — scrollSnapType controlled imperatively */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex gap-4 overflow-x-auto pl-6 sm:pl-8 lg:pl-12 pr-6"
      >
        {products.map((product, i) => {
          const PIcon = product.Icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.25) }}
              className="flex-shrink-0 flex flex-col rounded-2xl p-6"
              style={{
                width: '268px',
                scrollSnapAlign: 'start',
                background: 'rgba(22,61,54,0.7)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(16,185,129,0.12)' }}
              >
                <PIcon className="w-5 h-5 text-[#10B981]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-bold font-poppins text-white mb-2">{product.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed flex-1 mb-5 line-clamp-3">{product.desc}</p>
              <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">Spec</p>
                    <p className="text-[12px] font-semibold text-emerald-400">{product.spec}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">Brands</p>
                    <p className="text-[11px] text-slate-400 leading-snug">{product.brands}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
        <div className="flex-shrink-0 w-2" aria-hidden="true" />
      </div>

      {/* Progress bar — updated directly via ref, no React state */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mt-8">
        <div className="flex items-center gap-4">
          <div
            className="flex-1 h-[3px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            <div
              ref={progressRef}
              className="h-full rounded-full bg-[#10B981]"
              style={{ width: '0%' }}
            />
          </div>
          <span className="text-[11px] text-slate-700 font-mono whitespace-nowrap">
            {products.length} products
          </span>
        </div>
      </div>
    </section>
  )
}
