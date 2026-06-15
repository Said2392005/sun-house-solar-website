'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Rooftop Solar – 10 kW',
    location: 'Solapur',
    image: '/gallery-rooftop-10kw.png',
  },
  {
    id: 2,
    title: 'Factory Solar Plant – 50 kW',
    location: 'MIDC, Solapur',
    image: '/gallery-factory-50kw.png',
  },
  {
    id: 3,
    title: 'Home Solar System – 5 kW',
    location: 'Padma Nagar',
    image: '/gallery-home-5kw.png',
  },
  {
    id: 4,
    title: 'Panel Cleaning Service',
    location: 'Solapur City',
    image: '/gallery-panel-cleaning.png',
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

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selected, setSelected] = useState<number | null>(null)
  const currentIndex = galleryItems.findIndex((g) => g.id === selected)
  const selectedItem = galleryItems[currentIndex]

  const prev = () => { if (currentIndex > 0) setSelected(galleryItems[currentIndex - 1].id) }
  const next = () => { if (currentIndex < galleryItems.length - 1) setSelected(galleryItems[currentIndex + 1].id) }

  return (
    <section id="gallery" className="page-section bg-[#0D2F2A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="label-text mb-4">Our Work</p>
          <h2 className="h2">Project Gallery</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelected(item.id)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold text-white leading-tight">{item.title}</p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />{item.location}
                </p>
              </div>
            </motion.div>
          ))}
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
              className="absolute top-4 right-4 p-2 rounded-full text-white transition-colors border border-white/[0.1]"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <X className="w-5 h-5" />
            </button>
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-white transition-colors border border-white/[0.1]"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {currentIndex < galleryItems.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-white transition-colors border border-white/[0.1]"
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
              <div className="absolute top-4 right-4 text-xs text-slate-400 px-3 py-1 rounded-full"
                style={{ background: 'rgba(0,0,0,0.5)' }}>
                {currentIndex + 1} / {galleryItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
