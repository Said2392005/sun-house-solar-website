'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Kulkarni',
    location: 'Solapur',
    rating: 5,
    text: 'Got a 5 kW rooftop system installed. The team was professional, finished in 2 days, and handled all the MSEDCL paperwork. My electricity bill dropped from ₹3,200 to under ₹400.',
    system: '5 kW Rooftop',
  },
  {
    name: 'Sunita Patil',
    location: 'Akkalkot',
    rating: 5,
    text: 'Sun House Solar helped us get the PM Surya Ghar subsidy of ₹78,000. Very knowledgeable team. Their service tracking system makes it easy to stay on top of maintenance.',
    system: '3 kW Residential',
  },
  {
    name: 'Mahesh Jadhav',
    location: 'Pandharpur',
    rating: 5,
    text: 'Installed a 10 kW system for my factory. ROI is better than expected — we are saving ₹18,000 per month. AMC support is excellent, any issue is resolved same day.',
    system: '10 kW Commercial',
  },
  {
    name: 'Priya Sharma',
    location: 'Solapur',
    rating: 5,
    text: 'Best solar company in Solapur. They gave us a detailed site survey and honest pricing. No hidden costs. Waaree panels with 25-year warranty. Highly recommend.',
    system: '4 kW Residential',
  },
  {
    name: 'Vijay Mane',
    location: 'Barshi',
    rating: 5,
    text: 'Solar water pump installation for our 5-acre farm. Got the MNRE subsidy, installation was clean and quick. The pump works flawlessly even in partial sunlight.',
    system: '5 HP Solar Pump',
  },
  {
    name: 'Anita Deshpande',
    location: 'Solapur',
    rating: 5,
    text: 'Very impressed with after-sales service. The annual cleaning visit is thorough, and they proactively checked our inverter settings. Bill savings are consistent month after month.',
    system: '6 kW Rooftop',
  },
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="testimonials" className="page-section bg-[#0F1F1A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          variants={fade(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <p className="label-text mb-4">Customer Stories</p>
          <h2 className="h2 max-w-lg">What Our Customers Say</h2>
          <p className="body-text mt-4 max-w-xl">
            500+ projects completed across Solapur and neighbouring districts. Real results, real savings.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fade(0.08 + i * 0.06)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="card p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[13px] text-slate-400 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <div>
                  <div className="text-[13px] font-semibold text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.location}</div>
                </div>
                <div className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#34D399' }}>
                  {t.system}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fade(0.5)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-10"
        >
          <a
            href="https://g.page/r/sunhousesolar/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
