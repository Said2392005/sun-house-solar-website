'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'

const serviceOptions = [
  'Solar Panel Installation',
  'Solar Panel Maintenance',
  'Solar Panel Cleaning',
  'Annual Maintenance Contract (AMC)',
  'Commercial Solar Project',
  'Residential Solar System',
  'Product Enquiry',
  'App Early Access (Notify Me)',
  'Other',
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

const inputCls = 'w-full border border-white/[0.07] text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[#10B981]/50'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/xvznlpjw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please call us directly at 9175084823.')
      }
    } catch {
      alert('Network error. Please call us directly at 9175084823.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="page-section bg-[#0F1F1A]">
      <div ref={ref} className="content-wrap">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <p className="label-text mb-4">Get In Touch</p>
          <h2 className="h2">Contact Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-4"
          >
            {/* Phone */}
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.07]"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Phone</div>
                  <a href="tel:9175084823" className="text-xl font-bold text-white font-poppins block transition-colors hover:text-[#10B981]">
                    9175084823
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Sun House Solar – Raje Power Trading</div>
                </div>
              </div>
            </div>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/ob7VPYBPbLzQBM3o7"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 hover:border-white/[0.12] transition-colors block"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.07]"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Address</div>
                  <address className="not-italic text-sm text-slate-300 leading-relaxed">
                    C 30/46, Near Yallaling Maharaj Math,<br />
                    Padma Nagar, New Paccha Peth,<br />
                    <span style={{ color: '#34D399' }}>Solapur – 413006</span>
                  </address>
                  <span className="text-[11px] text-slate-500 mt-1.5 block">Get Directions →</span>
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="card p-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/[0.07]"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1">Business Hours</div>
                  <div className="text-sm text-white font-medium">Mon – Sat: 9:00 AM – 7:00 PM</div>
                  <div className="text-xs text-slate-500 mt-0.5">Sunday: By Appointment</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <a href="tel:9175084823" className="btn-primary flex-1 justify-center">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/919175084823?text=${encodeURIComponent('Hello! I am interested in Sun House Solar services. Please share details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#22c35e] text-white text-sm font-semibold py-3 px-4 rounded-full transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="card overflow-hidden rounded-2xl">
              <iframe
                src="https://maps.google.com/maps?q=C+30%2F46+Near+Yallaling+Maharaj+Math+Padma+Nagar+New+Paccha+Peth+Solapur+413006&output=embed&z=17"
                width="100%" height="200" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sun House Solar Location"
              />
              <a
                href="https://maps.app.goo.gl/ob7VPYBPbLzQBM3o7"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border border-white/[0.1]"
                    style={{ background: 'rgba(16,185,129,0.1)' }}>
                    <CheckCircle2 className="w-7 h-7" style={{ color: '#10B981' }} />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-white mb-2">Message Received</h3>
                  <p className="text-slate-400 mb-6 max-w-sm text-sm">
                    Thank you for contacting Sun House Solar. Our team will reach out within a few hours.
                  </p>
                  <a href="tel:9175084823" className="btn-primary">
                    <Phone className="w-4 h-4" /> Call for Instant Response
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="h3 mb-6">Get a Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Full Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={inputCls}
                          style={{ background: 'rgba(255,255,255,0.04)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Phone Number *</label>
                        <input
                          type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder="Your mobile number"
                          className={inputCls}
                          style={{ background: 'rgba(255,255,255,0.04)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com (optional)"
                        className={inputCls}
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Service Required *</label>
                      <select
                        name="service" required value={form.service} onChange={handleChange}
                        className={inputCls}
                        style={{ background: '#163D36', colorScheme: 'dark' }}
                      >
                        <option value="" disabled>Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} style={{ background: '#0D2F2A' }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Message</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="Tell us about your requirements (property type, capacity needed, location, etc.)"
                        className={`${inputCls} resize-none`}
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message &amp; Get Free Quote</>
                      )}
                    </button>

                    <p className="text-xs text-slate-600 text-center">
                      We typically respond within a few hours during business hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
