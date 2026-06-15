'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Rooftop Solar – 10 kW',
    location: 'Solapur',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Factory Solar Plant – 50 kW',
    location: 'MIDC, Solapur',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=75&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Home Solar System – 5 kW',
    location: 'Padma Nagar',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=75&auto=format&fit=crop',

  },
  {
    id: 4,
    title: 'Panel Cleaning Service',
    location: 'Solapur City',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Warehouse Solar – 30 kW',
    location: 'Osmanabad',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Ground Mount System – 25 kW',
    location: 'Akkalkot',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=75&auto=format&fit=crop',
  },
]

const SPEED = 0.7 // px per rAF frame

export default function Gallery() {
  const trackRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const autoRef     = useRef(true)
  const timerRef    = useRef<ReturnType<typeof setTimeout>>()
  const rafRef      = useRef<number>()

  const [selected, setSelected] = useState<number | null>(null)
  const currentIndex = galleryItems.findIndex((g) => g.id === selected)
  const selectedItem = galleryItems[currentIndex]

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

  const handleScroll = useCallback(() => {
    if (autoRef.current) return
    const el = trackRef.current
    if (!el || !progressRef.current) return
    const max = el.scrollWidth - el.clientWidth
    if (max > 0) progressRef.current.style.width = `${(el.scrollLeft / max) * 100}%`
  }, [])

  const scrollBy = (dir: 1 | -1) => {
    pause()
    trackRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' })
  }

  // Opening lightbox also pauses auto-scroll
  const openLightbox = (id: number) => {
    pause()
    setSelected(id)
  }

  const prev = () => { if (currentIndex > 0) setSelected(galleryItems[currentIndex - 1].id) }
  const next = () => { if (currentIndex < galleryItems.length - 1) setSelected(galleryItems[currentIndex + 1].id) }

  return (
    <section id="gallery" className="bg-[#0F1F1A] pt-24 pb-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-text mb-4">Our Work</p>
            <h2 className="h2">Project Gallery</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden sm:flex gap-2"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll strip — scrollSnapType controlled imperatively */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex gap-4 overflow-x-auto pl-6 sm:pl-8 lg:pl-12"
      >
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            onClick={() => openLightbox(item.id)}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
            style={{ width: '360px', height: '260px', scrollSnapAlign: 'start' }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="360px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(16,185,129,0.07)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-semibold font-poppins text-white leading-tight">{item.title}</p>
              <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" />{item.location}
              </p>
            </div>
            <div
              className="absolute top-3 right-3 text-[10px] text-slate-400 px-2 py-0.5 rounded-full font-mono"
              style={{ background: 'rgba(0,0,0,0.5)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
          </motion.div>
        ))}
        <div className="flex-shrink-0 w-4" aria-hidden="true" />
      </div>

      {/* Progress bar — updated directly via ref, no React state */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mt-8">
        <div className="flex items-center gap-4">
          <div
            className="flex-1 h-[2px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <div
              ref={progressRef}
              className="h-full rounded-full bg-[#10B981]"
              style={{ width: '0%' }}
            />
          </div>
          <span className="text-[11px] text-slate-700 font-mono whitespace-nowrap">
            {galleryItems.length} projects
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(15,31,26,0.97)', backdropFilter: 'blur(12px)' }}
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-white border border-white/[0.1]"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <X className="w-5 h-5" />
            </button>
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-white border border-white/[0.1]"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {currentIndex < galleryItems.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-white border border-white/[0.1]"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill sizes="1000px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold font-poppins text-white">{selectedItem.title}</h3>
                <p className="text-sm text-slate-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />{selectedItem.location}
                </p>
              </div>
              <div
                className="absolute top-4 right-4 text-xs text-slate-400 px-3 py-1 rounded-full"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                {currentIndex + 1} / {galleryItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
