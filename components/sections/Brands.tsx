'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const TOKEN = 'pk_Kh2UC3mXRbeC9zfibDtV1Q'

const brands = [
  { name: 'Waaree',       domain: 'waaree.com',           tagline: 'India No.1' },
  { name: 'Adani Solar',  domain: 'adani.com',            tagline: 'Trusted' },
  { name: 'Tata Power',   domain: 'tatapower.com',        tagline: 'Premium' },
  { name: 'Vikram Solar', domain: 'vikramsolar.com',      tagline: 'Export Grade' },
  { name: 'Solis',        domain: 'solisinverters.com',   tagline: 'Inverters' },
  { name: 'Growatt',      domain: 'growatt.com',          tagline: 'Inverters' },
  { name: 'Goodwe',       domain: 'goodwe.com',           tagline: 'Hybrid' },
  { name: 'Havells',      domain: 'havells.com',          tagline: 'Indian' },
  { name: 'Luminous',     domain: 'luminousindia.com',    tagline: 'Batteries' },
  { name: 'Exide',        domain: 'exideindustries.com',  tagline: 'Storage' },
]

function logoUrl(domain: string) {
  return `https://img.logo.dev/${domain}?token=${TOKEN}&size=160&format=png`
}

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
                className="flex-shrink-0 mx-3 rounded-xl min-w-[160px] overflow-hidden border border-white/[0.07] hover:border-white/[0.18] transition-colors duration-200 group"
                style={{ background: 'var(--surface)' }}
              >
                {/* White logo area */}
                <div className="flex items-center justify-center bg-white px-5 py-4 h-[72px]">
                  <Image
                    src={logoUrl(b.domain)}
                    alt={b.name}
                    width={100}
                    height={40}
                    className="object-contain max-h-[40px] w-auto"
                    unoptimized
                  />
                </div>
                {/* Name strip */}
                <div className="px-4 py-2.5 text-center">
                  <p className="text-[12px] font-semibold text-slate-300 font-poppins leading-none">{b.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{b.tagline}</p>
                </div>
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
