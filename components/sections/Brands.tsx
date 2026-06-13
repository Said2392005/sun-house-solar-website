'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const brands = [
  { name: 'Waaree',       tagline: 'India No.1' },
  { name: 'Adani Solar',  tagline: 'Trusted' },
  { name: 'Tata Power',   tagline: 'Premium' },
  { name: 'Vikram Solar', tagline: 'Export Grade' },
  { name: 'Solis',        tagline: 'Inverters' },
  { name: 'Growatt',      tagline: 'Inverters' },
  { name: 'Goodwe',       tagline: 'Hybrid' },
  { name: 'Havells',      tagline: 'Indian' },
  { name: 'Luminous',     tagline: 'Batteries' },
  { name: 'Exide',        tagline: 'Storage' },
]

export default function Brands() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="page-section-sm bg-[#0F1F1A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="label-text mb-3">Authorised Dealer</p>
          <h2 className="text-2xl font-bold font-poppins text-white">Brands We Carry</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden"
        >
          <div className="marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-7 py-4 border border-white/[0.07] rounded-xl min-w-[140px] text-center"
                style={{ background: 'var(--surface)' }}
              >
                <p className="text-[13px] font-semibold text-slate-200 font-poppins">{b.name}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{b.tagline}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[13px] text-slate-600 mt-10"
        >
          All products are genuine with full manufacturer warranty
        </motion.p>
      </div>
    </section>
  )
}
