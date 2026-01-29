
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import QuickAppointment from './components/QuickAppointment';
import Footer from './components/Footer';
import Quality from './components/Quality';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="inicio" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="nosotros" className="scroll-mt-20">
          <About />
        </section>

        <section id="calidad" className="bg-neutralBg">
          <Quality />
        </section>

        <section id="servicios" className="scroll-mt-20 py-20">
          <Services />
        </section>

        <section id="proceso" className="scroll-mt-20 py-24">
          <Process />
        </section>

        <section id="agendar" className="scroll-mt-20 bg-neutralBg">
          <QuickAppointment />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
