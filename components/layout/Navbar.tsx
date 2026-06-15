'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'About',    href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Gallery',  href: '/#gallery' },
  { label: 'Contact',  href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0F1F1A]/95 backdrop-blur-lg border-b border-white/[0.06]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                <Image
                  src="/sun-house-logo.jpg"
                  alt="Sun House Solar"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[15px] font-semibold font-poppins text-white leading-none block">
                  Sun House Solar
                </span>
                <span className="text-[10px] text-slate-500 leading-none">By Raje Power Trading</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:9175084823" className="text-sm text-slate-400 hover:text-white transition-colors">
                9175084823
              </a>
              <a href="/#contact" className="btn-primary">
                Get Free Quote
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-[#0D2F2A] border-l border-white/[0.07] flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/[0.07]">
                <span className="text-sm font-semibold text-white">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-white/[0.07] space-y-2">
                <a href="tel:9175084823" className="block text-center py-2.5 text-sm text-slate-400">
                  9175084823
                </a>
                <a href="/#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
                  Get Free Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919175084823"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.788L0 32l8.418-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.747-1.833l-.484-.287-5.003 1.196 1.228-4.867-.317-.5A13.247 13.247 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.161-2.718-1.294-.364-.133-.629-.199-.894.199-.265.398-1.028 1.294-1.26 1.559-.232.265-.464.298-.862.1-.398-.199-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.894-2.155-1.226-2.95-.323-.774-.651-.669-.894-.681l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.284 6.797 6.009.95.41 1.692.655 2.27.839.954.304 1.822.261 2.508.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.725.232-1.891-.099-.166-.364-.265-.762-.464z"/>
        </svg>
      </a>
    </>
  )
}
