import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Products from '@/components/sections/Products'
import Brands from '@/components/sections/Brands'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import GreenVoltApp from '@/components/sections/GreenVoltApp'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Brands />
        <WhyChooseUs />
        <GreenVoltApp />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
