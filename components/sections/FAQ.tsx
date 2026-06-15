'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Does solar work well during monsoon in Solapur?',
    a: 'Yes. Modern solar panels generate power even in diffuse/cloudy light — typically 30–50% of peak output. Solapur has ~300+ sunny days per year, so monsoon months (June–September) are a minor part of annual generation. Your system is designed to account for seasonal variation.',
  },
  {
    q: 'What is the PM Surya Ghar subsidy and how much can I get?',
    a: 'PM Surya Ghar Muft Bijli Yojana is a central government scheme for rooftop solar. Current 2026 subsidy amounts: up to 1 kW — ₹30,000; 1–2 kW — ₹60,000; 2–3 kW — ₹78,000. Maximum ₹78,000 for residential systems. Sun House Solar handles the entire subsidy application process for you.',
  },
  {
    q: 'Do I need MSEDCL permission to install solar?',
    a: 'Yes, grid-connected solar systems require MSEDCL net-metering approval. We manage the complete documentation and approval process — from application to final net-meter installation. This typically takes 30–60 days. Off-grid systems (with battery backup) do not require MSEDCL permission.',
  },
  {
    q: 'How long does installation take?',
    a: 'A typical 3–5 kW residential installation takes 2–3 days. Larger commercial systems (10–50 kW) take 3–7 days. This includes structure installation, panel mounting, inverter wiring and basic commissioning. Net-meter approval from MSEDCL takes additional time.',
  },
  {
    q: 'What warranty do I get on solar panels?',
    a: 'All panels we supply (Waaree, Adani, Tata, Vikram) come with 25-year linear performance warranty (minimum 80% output at year 25) and 10–12 year product warranty. Inverters carry 5–10 year warranties depending on brand. We provide installation warranty separately.',
  },
  {
    q: 'Can I install solar on a tin/asbestos roof?',
    a: 'Yes. We install on all roof types — RCC slab, tin sheet, asbestos, and ground-mounted structures. Our aluminium mounting structures are specifically designed for each roof type. We do a free site survey to assess the best mounting solution for your property.',
  },
  {
    q: 'What is an AMC and do I need it?',
    a: 'AMC (Annual Maintenance Contract) covers periodic cleaning, health check, inverter inspection and rapid breakdown response. Solar panels collect dust and bird droppings which can reduce generation by 20–30%. We recommend at least 2 professional cleanings per year for optimal output.',
  },
  {
    q: 'Is there a Sun House Solar mobile app?',
    a: 'Yes — we are developing a dedicated Sun House Solar app for customers. It will let you book service visits, track field engineers in real-time, view service reports, and manage your AMC history. Launching soon for Android and iOS. Register your interest via our contact form to be notified on launch.',
  },
]

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [open, setOpen] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faq" className="page-section bg-[#0F1F1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div ref={ref} className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="label-text mb-4">Common Questions</p>
          <h2 className="h2">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-[14px] font-semibold text-white leading-snug">{faq.q}</span>
                <ChevronDown
                  className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-5 text-[13px] text-slate-400 leading-relaxed border-t border-white/[0.05] pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
