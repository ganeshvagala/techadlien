import React from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95"></div>
      </div>
      
      {/* Animated gradient circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          <span className="block">Your Creative Powerhouse for</span>
          <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
            Digital Marketing Excellence
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          From scroll-stopping creatives to performance-driven ad metrics, we bring brands 
          and stories to life with compelling narratives and measurable impact.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-400 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center">
            <PlayCircle size={20} className="mr-2" />
            Watch Showreel
          </button>
        </div>
        
        <button 
          onClick={scrollToServices}
          className="animate-bounce flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-1">Explore Our Services</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;