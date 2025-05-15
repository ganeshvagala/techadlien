import React from 'react';
import { Monitor, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 pt-16 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <div className="flex items-center mb-6">
              <Monitor className="h-6 w-6 text-blue-500" />
              <Zap className="h-6 w-6 -ml-2 text-indigo-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                TechAdlien
              </span>
            </div>
            <p className="mb-6">
              Your creative powerhouse for digital marketing excellence. We bring brands and stories 
              to life with compelling narratives and measurable impact.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Ad Campaign Strategy",
                "Creative Designing",
                "Video Production",
                "Social Media Management",
                "Performance Marketing",
                "Analytics & Reporting"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", link: "#" },
                { label: "Services", link: "#services" },
                { label: "Portfolio", link: "#work" },
                { label: "Testimonials", link: "#testimonials" },
                { label: "Contact", link: "#contact" },
                { label: "Privacy Policy", link: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>123 Creative Avenue, San Francisco, CA 94103</li>
              <li>Email: info@techadlien.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
            <button className="mt-6 px-5 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-sm">
          <p>© {currentYear} TechAdlien. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;