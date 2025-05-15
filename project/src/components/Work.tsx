import React, { useState } from 'react';

const categories = ["All", "Ad Campaigns", "Video Production", "Social Media", "Film Promotion"];

const projects = [
  {
    id: 1,
    title: "Glimmer Skincare Launch",
    category: "Ad Campaigns",
    image: "https://images.pexels.com/photos/3321796/pexels-photo-3321796.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Multi-platform ad campaign that resulted in 3x ROI"
  },
  {
    id: 2,
    title: "UrbanWear Seasonal Collection",
    category: "Video Production",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Product showcase video with 2M+ views across platforms"
  },
  {
    id: 3,
    title: "Volt Wheels Social Strategy",
    category: "Social Media",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Comprehensive social media strategy that doubled engagement"
  },
  {
    id: 4,
    title: "Silver Frame Studios Film Launch",
    category: "Film Promotion",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Box office success with targeted digital marketing campaign"
  },
  {
    id: 5,
    title: "FreshBites Restaurant",
    category: "Video Production",
    image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Mouth-watering food videos that increased bookings by 45%"
  },
  {
    id: 6,
    title: "EcoTravel Influencer Campaign",
    category: "Social Media",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Collaboration with 20+ travel influencers driving brand awareness"
  }
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Creative Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our work across various industries and platforms, showcasing our 
            creative excellence and strategic approach to digital marketing.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white font-medium px-4 py-3">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="py-3 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;