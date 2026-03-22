import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Toolkit from '@/components/Toolkit';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-noise white-3d-bg">
      <Navbar />
      <Hero />
      <div className="relative bg-sky-50 text-sky-950">
        <Works />
        <Toolkit />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
