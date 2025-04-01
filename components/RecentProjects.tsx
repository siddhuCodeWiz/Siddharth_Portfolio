import React, { useState } from 'react';

const projects = [
  {
    title: "Feedback Analysis using Gen-AI",
    period: "Oct 2024–Jan 2025",
    tech: "MERN stack, GenAI, Deep Learning",
    githubLink: "https://github.com/kmitofficial/FeedbackAnalysisUsingGenAI-G206-PS24",
    liveLinks: "",
    category: "Deep Learning",
    description: [
      "Developed a custom generative AI model to analyze and summarize customer feedback, incorporating advanced features like text preprocessing, sentiment analysis, key phrase extraction, and summary generation for actionable insights.",
      "Built using the MERN stack and GenAI techniques, enabling seamless user interaction through an intuitive interface for input and clear result display.",
      "Implemented asynchronous processing using Node.js and Python multiprocessing, ensuring high efficiency in handling large volumes of feedback data.",
      "Optimized data pipeline for real-time analysis and insight delivery, enabling faster feedback loop processing and decision-making."
    ],
    color: "#6366F1" // Indigo
  },
  {
    title: "Assistive Mobile App for Visually Impaired Users",
    period: "Apr 2024–July 2024",
    tech: "Python, Flask, Dart, Huggingface",
    githubLink: "https://github.com/siddhuCodeWiz/VisualAidForVisuallyImpaired",
    liveLinks: "",
    category: "Deep Learning Project",
    description: [
      "Developed a mobile application for visually impaired users, featuring real-time image and video processing and an interactable chatbot.",
      "Built using Flutter with Dart and integrated Vision-Language Models (VLM) to convert images/videos to text, describing surroundings and raising hazard detection alarms.",
      "Designed and optimized scalable Flask APIs to handle real-time image/video captioning for assistive use.",
      "Integrated AI-based interaction for enhanced accessibility, using low-latency API structures to ensure a seamless user experience."
    ],
    color: "#EC4899" // Pink
  },
  {
    title: "Web-Based Tool for Mapping of Water Supply Network",
    period: "Oct 2023–Feb 2024",
    tech: "MERN, Python, Leaflet",
    githubLink: "https://github.com/siddhuCodeWiz/Water-Supply-Management-System",
    liveLinks: "",
    category: "Geographic Information System",
    description: [
      "Developed a cost-effective web-based tool for mapping rural water supply networks, improving resource management and infrastructure planning.",
      "Integrated OpenStreetMap (OSM) and GeoServer layers to visualize and analyze water distribution patterns, enhancing geospatial insights.",
      "Collaborated with a team of 4 to design, test, and deploy the system, leading to a 30% improvement in operational efficiency by streamlining network analysis and monitoring.",
      "Implemented an interactive GIS dashboard for real-time tracking of water supply points, enabling better decision-making and predictive maintenance."
    ],
    color: "#10B981" // Emerald
  }
];

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8" id='myprojects'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white dark:to-gray-400">
          Featured Projects
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Project Selector */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setActiveProject(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    activeProject === index 
                      ? "bg-white dark:bg-gray-800 shadow-xl transform -translate-y-1"
                      : "bg-gray-100 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800/80"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: project.color }}
                    ></div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className={`font-bold text-xl mb-2 transition-colors duration-300 ${
                    activeProject === index 
                      ? "text-gray-900 dark:text-white" 
                      : "text-gray-700 dark:text-gray-300"
                  }`}>
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{project.period}</span>
                    <span className="mx-2">•</span>
                    <span className="truncate">{project.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project Details */}
          <div className="lg:w-2/3">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl opacity-10"
                style={{ 
                  background: `radial-gradient(circle at 50% 50%, ${projects[activeProject].color}, transparent 70%)`,
                  filter: "blur(40px)"
                }}
              ></div>
              
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">{projects[activeProject].title}</h2>
                  <a 
                    href={projects[activeProject].githubLink}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeProject].tech.split(',').map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {projects[activeProject].description.map((paragraph, i) => (
                    <div key={i} className="flex">
                      <div 
                        className="mt-1.5 mr-4 h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: projects[activeProject].color }}
                      ></div>
                      <p className="text-gray-700 dark:text-gray-300">{paragraph}</p>
                    </div>
                  ))}
                </div>
                
                <div 
                  className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center"
                >
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                    <div className="font-medium">{projects[activeProject].period}</div>
                  </div>
                  
                  <div 
                    className="px-4 py-2 rounded-lg text-white transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: projects[activeProject].color }}
                  >
                    View Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;