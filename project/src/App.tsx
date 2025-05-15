import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add keyframes for animations
import './animations.css';

function App() {
  useEffect(() => {
    document.title = 'TechAdlien - Digital Marketing Excellence';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;