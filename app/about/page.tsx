import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Brands from '@/components/sections/Brands'
import Link from 'next/link'
import { Home, ChevronRight, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Sun House Solar – Raje Power Trading, Solapur',
  description:
    'Learn about Sun House Solar, the solar energy division of Raje Power Trading. Authorised dealer for Waaree, Adani, Tata Power Solar and more in Solapur.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Banner */}
        <section className="pt-24 pb-12 bg-solar-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-green w-[400px] h-[400px] -top-40 right-0 opacity-10" />
          <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-green-400 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-300">About Us</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🏢 Our Company
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins text-white mb-3 leading-tight">
              About Sun House Solar
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Solapur&apos;s trusted solar material supplier and installer — operating under
              <strong className="text-white"> Raje Power Trading</strong>, delivering clean energy
              solutions since day one.
            </p>
          </div>
        </section>

        {/* Reuse existing about section */}
        <About />
        <WhyChooseUs />
        <Brands />

        {/* Company details card */}
        <section className="section-pad bg-solar-dark">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card p-6 border-green-500/20">
                <div className="text-2xl mb-3">🏢</div>
                <h3 className="font-bold font-poppins text-white mb-1">Registered Name</h3>
                <p className="text-slate-400 text-sm">Raje Power Trading</p>
                <p className="text-green-400 text-xs mt-1 font-medium">Solar Brand: Sun House Solar</p>
              </div>
              <div className="glass-card p-6 border-blue-500/20">
                <div className="text-2xl mb-3">📍</div>
                <h3 className="font-bold font-poppins text-white mb-1">Office Address</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  C 30/46, Near Yallaling Maharaj Math,<br />
                  Padma Nagar, New Paccha Peth,<br />
                  Solapur – 413006
                </p>
              </div>
              <div className="glass-card p-6 border-yellow-500/20">
                <div className="text-2xl mb-3">📞</div>
                <h3 className="font-bold font-poppins text-white mb-1">Contact</h3>
                <a href="tel:9175084823" className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors block">
                  9175084823
                </a>
                <p className="text-slate-400 text-xs mt-1">Mon–Sat: 9 AM – 7 PM</p>
              </div>
            </div>

            <div className="mt-8 glass-card p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 text-center">
              <h3 className="text-2xl font-bold font-poppins text-white mb-3">
                Ready to Switch to Solar?
              </h3>
              <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                Contact Sun House Solar today for a free site survey and customised solar proposal for
                your home or business.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/contact" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </a>
                <a href="tel:9175084823" className="btn-outline">
                  Call 9175084823
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
