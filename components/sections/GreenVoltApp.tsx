'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Bell, MapPin, TrendingUp, Calendar, FileText, Wrench, Star } from 'lucide-react'

const features = [
  { icon: Calendar, label: 'Service Scheduling',  desc: 'Book cleaning, maintenance or AMC visits instantly.' },
  { icon: FileText,  label: 'Service Reports',     desc: 'View detailed PDF reports for every service visit.' },
  { icon: MapPin,    label: 'Staff Tracking',      desc: 'Track field engineer location in real-time.' },
  { icon: Wrench,    label: 'AMC Management',      desc: 'Log issues, track repairs, manage AMC history.' },
  { icon: Bell,      label: 'Smart Notifications', desc: 'Alerts for upcoming services and updates.' },
  { icon: Star,      label: 'Ratings & Feedback',  desc: 'Rate services and share your experience.' },
]

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function GreenVoltApp() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="greenvolt" className="page-section bg-[#0F1F1A]">
      <div ref={ref} className="content-wrap">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — phone mockup */}
          <motion.div
            variants={fade(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center"
          >
            <div
              className="w-60 h-[500px] rounded-[40px] border border-white/[0.1] shadow-2xl shadow-black/60 overflow-hidden relative animate-float"
              style={{ background: '#0A1A15' }}
            >
              {/* Status bar */}
              <div className="h-7 flex items-center justify-between px-5 pt-1" style={{ background: '#0A1A15' }}>
                <span className="text-[9px] text-slate-500">9:41</span>
                <div className="w-14 h-4 rounded-b-lg" style={{ background: '#0A1A15' }} />
                <div className="w-3 h-2 border border-slate-600 rounded-sm relative">
                  <div className="absolute inset-0.5 rounded-sm" style={{ background: '#10B981' }} />
                </div>
              </div>

              {/* App content */}
              <div className="px-4 pt-3 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[9px] text-slate-500">Good Morning ☀️</div>
                    <div className="text-sm font-bold font-poppins text-white">
                      Green<span style={{ color: '#10B981' }}>Volt</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <Bell className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

                {/* Energy card */}
                <div className="rounded-xl p-3 relative overflow-hidden" style={{ background: '#10B981' }}>
                  <div className="text-[9px] text-emerald-100 mb-0.5">Today&apos;s Generation</div>
                  <div className="text-2xl font-black text-white font-poppins">24.6 kWh</div>
                  <div className="text-[9px] text-emerald-100 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5" /> +12% vs yesterday
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-1.5">
                  {['Book Service', 'View Report', 'Track Staff', 'My AMC'].map((a) => (
                    <div key={a} className="rounded-lg p-2 text-center border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <div className="text-[9px] text-slate-400 font-medium">{a}</div>
                    </div>
                  ))}
                </div>

                {/* Next service */}
                <div className="rounded-lg p-2.5 border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="text-[8px] text-slate-500 uppercase tracking-wider mb-0.5">Next Service</div>
                  <div className="text-[11px] text-white font-semibold">Solar Panel Cleaning</div>
                  <div className="text-[9px] mt-0.5" style={{ color: '#34D399' }}>Jun 15, 2026 · 10:00 AM</div>
                </div>

                {/* Engineer */}
                <div className="rounded-lg p-2.5 flex items-center gap-2 border border-white/[0.07]" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <MapPin className="w-3 h-3 text-slate-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[10px] text-white font-medium">Engineer en route</div>
                    <div className="text-[8px] text-slate-500">Arriving in ~15 min</div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10B981' }} />
                </div>
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20" />
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="space-y-8">
            <motion.div variants={fade(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <p className="label-text mb-4">Mobile App</p>
              <h2 className="h2 mb-5">
                Manage Your Solar<br />with GreenVolt
              </h2>
              <p className="body-text">
                The GreenVolt app gives Sun House Solar customers complete control over their solar system.
                Book services, track engineers, view reports and manage AMC contracts — all from one app.
              </p>
            </motion.div>

            <motion.div
              variants={fade(0.2)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(16,185,129,0.1)' }}>
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} style={{ color: '#10B981' }} />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white">{f.label}</div>
                      <div className="text-[12px] text-slate-500 mt-0.5 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            <motion.div variants={fade(0.3)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <a href="#" className="btn-primary">
                <Download className="w-4 h-4" />
                Download Android APK
              </a>
              <p className="text-[12px] text-slate-600 mt-3">
                Available exclusively for Sun House Solar customers. iOS coming soon.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
