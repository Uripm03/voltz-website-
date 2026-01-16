import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Projects from '@/components/Projects';
import Brands from '@/components/Brands';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Map from '@/components/Map';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Projects />
      <Brands />
      <About />
      <Testimonials />
      <FAQ />
      <Map />
      <Contact />
      <Footer />
    </main>
  );
}
