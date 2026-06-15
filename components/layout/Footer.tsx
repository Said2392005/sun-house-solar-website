import { Phone, MapPin, Clock, ArrowRight, Mail, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Return Policy',  href: '/return-policy' },
  { label: 'Refund Policy',  href: '/refund-policy' },
  { label: 'Disclaimer',     href: '/disclaimer' },
  { label: 'About Us',       href: '/about' },
  { label: 'Contact Us',     href: '/contact' },
]

const footerServices = [
  'Solar Installation',
  'Solar Maintenance',
  'Solar Cleaning',
  'AMC Services',
  'Commercial Solar',
  'Residential Solar',
]

const footerProducts = [
  'Solar Panels',
  'Solar Inverters',
  'Structure Materials',
  'DC / AC Cables',
  'ACDB / DCDB',
  'BOS Materials',
]

const quickLinks = [
  { label: 'About Us',       href: '/#about' },
  { label: 'Our Services',   href: '/#services' },
  { label: 'Products',       href: '/#products' },
  { label: 'Brands We Deal', href: '/#brands' },
  { label: 'Gallery',        href: '/#gallery' },
  { label: 'Our App',        href: '/#greenvolt' },
  { label: 'Contact Us',     href: '/#contact' },
]

const linkCls = 'text-sm text-slate-500 hover:text-slate-200 transition-colors flex items-center gap-1.5 group'
const arrowCls = 'w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all'

export default function Footer() {
  return (
    <footer style={{ background: '#0A1714', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                <Image src="/sun-house-logo.jpg" alt="Sun House Solar" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <span className="text-[14px] font-semibold font-poppins text-white block leading-tight">
                  Sun House <span style={{ color: '#34D399' }}>Solar</span>
                </span>
                <span className="text-[10px] text-slate-500">By Raje Power Trading</span>
              </div>
            </div>

            <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
              Trusted solar material supplier and installer in Solapur. Authorised dealer for Waaree, Adani Solar, Tata Power, Vikram Solar and more.
            </p>

            <div className="space-y-2.5">
              <a href="tel:9175084823" className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#10B981]">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" /> 9175084823
              </a>
              <a
                href="https://maps.app.goo.gl/ob7VPYBPbLzQBM3o7"
                target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>C 30/46, Padma Nagar, New Paccha Peth, Solapur – 413006</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                Mon–Sat: 9 AM – 7 PM
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkCls}>
                    <ArrowRight className={arrowCls} />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link href="/#services" className={linkCls}>
                    <ArrowRight className={arrowCls} />{s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> Legal &amp; Info
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkCls}>
                    <ArrowRight className={arrowCls} />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-2.5 mb-6">
              {footerProducts.map((p) => (
                <li key={p}>
                  <Link href="/#products" className={linkCls}>
                    <ArrowRight className={arrowCls} />{p}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-4 border"
              style={{ background: 'rgba(16,185,129,0.07)', borderColor: 'rgba(16,185,129,0.18)' }}>
              <div className="text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#34D399' }}>
                Sun House Solar App
              </div>
              <p className="text-[12px] text-slate-500 mb-3 leading-relaxed">
                Our customer app is coming soon — Android &amp; iOS.
              </p>
              <Link href="/#greenvolt" className="text-[12px] font-semibold transition-colors flex items-center gap-1"
                style={{ color: '#10B981' }}>
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-wrap gap-x-5 gap-y-1 justify-center mb-4">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-xs text-slate-600 text-center sm:text-left">
              © {new Date().getFullYear()} Sun House Solar — Raje Power Trading, Solapur. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://wa.me/919175084823" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-white/[0.07] hover:border-white/[0.14]"
                style={{ background: 'rgba(255,255,255,0.04)' }} aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sunhousesolar" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-white/[0.07] hover:border-white/[0.14]"
                style={{ background: 'rgba(255,255,255,0.04)' }} aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-500">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/sunhousesolar" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-white/[0.07] hover:border-white/[0.14]"
                style={{ background: 'rgba(255,255,255,0.04)' }} aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-500">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="tel:+919175084823"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-white/[0.07] hover:border-white/[0.14]"
                style={{ background: 'rgba(255,255,255,0.04)' }} aria-label="Phone">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a href="mailto:info@sunhousesolar.in"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-white/[0.07] hover:border-white/[0.14]"
                style={{ background: 'rgba(255,255,255,0.04)' }} aria-label="Email">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
