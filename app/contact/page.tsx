import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Sun House Solar – Solapur',
  description:
    'Get in touch with Sun House Solar for solar installation, maintenance, AMC services or product enquiries. Call 9175084823 or visit us in Solapur.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Banner */}
        <section className="pt-24 pb-12 bg-solar-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-blue w-[400px] h-[400px] -top-40 right-0 opacity-10" />
          <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-green-400 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-300">Contact Us</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              💬 Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins text-white mb-3">
              Contact Us
            </h1>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              Have a question or need a quote? Reach out to our team — we respond within a few hours
              during business hours.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
