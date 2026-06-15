import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import Brands from '@/components/sections/Brands'
import About from '@/components/sections/About'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import ROICalculator from '@/components/sections/ROICalculator'
import Gallery from '@/components/sections/Gallery'
import GreenVoltApp from '@/components/sections/GreenVoltApp'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Products />
        <Brands />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <ROICalculator />
        <Gallery />
        <GreenVoltApp />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
