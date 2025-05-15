import React from 'react';
import { LayoutGrid, Video, Camera, Film, Megaphone, Users, BarChart3, Mail, Palette, LineChart, FileTerminal as FileAnalytics, Layers } from 'lucide-react';

const services = [
  {
    title: "Ad Campaign Strategy",
    description: "Strategic planning and execution of multi-channel advertising campaigns",
    icon: <LayoutGrid className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Creative Designing",
    description: "Eye-catching static, carousel, and motion graphics for maximum engagement",
    icon: <Palette className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Video Production",
    description: "Professional video creation from concept to final edit",
    icon: <Video className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Ad Shoots",
    description: "High-quality photography and videography for commercial use",
    icon: <Camera className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Film Promotions",
    description: "Strategic marketing for film launches and trailer promotion",
    icon: <Film className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Social Media Management",
    description: "Comprehensive management of brand presence across platforms",
    icon: <Megaphone className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Influencer Marketing",
    description: "Strategic collaborations with relevant influencers for your brand",
    icon: <Users className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns across Meta, Google, TikTok, and LinkedIn",
    icon: <BarChart3 className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Email Marketing",
    description: "Strategic email campaigns with CRM integration",
    icon: <Mail className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Landing Page Design",
    description: "Conversion-focused landing pages that drive results",
    icon: <Layers className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive insights using GA4, Meta Insights, and more",
    icon: <FileAnalytics className="w-10 h-10 text-blue-500" />
  },
  {
    title: "Branding & Identity",
    description: "Cohesive brand identity development and management",
    icon: <LineChart className="w-10 h-10 text-blue-500" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From concept to conversion, we provide end-to-end digital marketing solutions 
            with all services handled in-house for seamless execution and faster turnarounds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <span className="inline-block py-3 px-6 text-blue-600 font-medium border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer">
            Download Service Brochure
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;