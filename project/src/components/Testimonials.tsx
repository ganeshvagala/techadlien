import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "TechAdlien transformed our digital presence. The creatives were next-level, and the ad performance blew past our KPIs. Highly recommend their team!",
    author: "Aarav Mehta",
    position: "Marketing Head, Glimmer Skincare",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    quote: "From concept to final edit, their video team nailed the brief. Our campaign saw record engagement. True professionals.",
    author: "Sarah Thomas",
    position: "Founder, UrbanWear",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    quote: "They don't just deliver work, they deliver results. Our ROAS doubled and the analytics reports were crystal clear.",
    author: "Rohit K.",
    position: "CMO, Volt Wheels",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 4,
    quote: "For our film launch, TechAdlien created an electrifying promo campaign that drove massive buzz and ticket sales across platforms.",
    author: "Neha R.",
    position: "Producer, Silver Frame Studios",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our success is measured by the success of our clients. Here's what they 
            have to say about their experience working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800 rounded-2xl p-8 md:p-10 relative">
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-500/20" />
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500/30">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <p className="text-gray-300 text-lg mb-6 relative z-10">
                          "{testimonial.quote}"
                        </p>
                        <h4 className="text-white font-bold text-xl">{testimonial.author}</h4>
                        <p className="text-blue-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;