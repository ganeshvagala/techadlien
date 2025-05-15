import React from 'react';

const toolCategories = [
  {
    name: "Creative & Editing",
    tools: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Canva"]
  },
  {
    name: "Ad Management",
    tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "LinkedIn Campaign Manager"]
  },
  {
    name: "Analytics",
    tools: ["Google Analytics", "Meta Business Suite", "HubSpot", "Tableau"]
  },
  {
    name: "Collaboration",
    tools: ["Notion", "Figma", "Trello", "Slack"]
  }
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We leverage cutting-edge tools and technologies to craft, analyze, and optimize 
            every campaign for maximum impact and results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                {category.name}
              </h3>
              
              <ul className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <li 
                    key={toolIndex}
                    className="flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                    <span className="text-slate-700">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to elevate your digital marketing?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss how our tools and expertise can help you achieve your business goals.
            </p>
            <button className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;