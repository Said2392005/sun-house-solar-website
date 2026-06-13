import Navbar from './Navbar'
import Footer from './Footer'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface PolicyLayoutProps {
  title: string
  badge: string
  icon: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PolicyLayout({
  title,
  badge,
  icon,
  lastUpdated,
  children,
}: PolicyLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="pt-24 pb-12 bg-solar-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="orb orb-green w-[400px] h-[400px] -top-40 -right-20 opacity-10" />
          <div className="orb orb-blue w-[300px] h-[300px] bottom-0 -left-20 opacity-10" />

          <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-green-400 transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-300">{title}</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <span>{icon}</span>
              {badge}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black font-poppins text-white mb-3">
              {title}
            </h1>
            <p className="text-slate-400 text-sm">
              Last updated:{' '}
              <span className="text-slate-300 font-medium">{lastUpdated}</span>
              &nbsp;·&nbsp; Sun House Solar — Raje Power Trading, Solapur
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-pad bg-solar-dark-2">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 sm:p-10 border-white/10 prose-policy">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
