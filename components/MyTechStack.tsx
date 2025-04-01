import React, { useState } from 'react';
import { Cover } from './ui/Cover';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiPytorch, SiDocker, SiGit, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython, SiFlask } from "react-icons/si";

const techStack = [
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="text-green-500" />,
    category: "Database",
    description: "NoSQL document database" 
  },
  { 
    name: "Express.js", 
    icon: <SiExpress className="text-gray-500" />,
    category: "Backend",
    description: "Web application framework for Node.js" 
  },
  { 
    name: "React.js", 
    icon: <SiReact className="text-blue-400" />,
    category: "Frontend",
    description: "JavaScript library for building user interfaces" 
  },
  { 
    name: "Node.js", 
    icon: <SiNodedotjs className="text-green-600" />,
    category: "Backend",
    description: "JavaScript runtime environment" 
  },
  { 
    name: "Java", 
    icon: <FaJava className="text-red-600" />,
    category: "Language",
    description: "Object-oriented programming language" 
  },
  { 
    name: "JavaScript", 
    icon: <SiJavascript className="text-yellow-500" />,
    category: "Language",
    description: "High-level programming language" 
  },
  { 
    name: "PyTorch", 
    icon: <SiPytorch className="text-red-500" />,
    category: "AI/ML",
    description: "Machine learning framework" 
  },
  { 
    name: "Docker", 
    icon: <SiDocker className="text-blue-500" />,
    category: "DevOps",
    description: "Containerization platform" 
  },
  { 
    name: "Git", 
    icon: <SiGit className="text-orange-500" />,
    category: "Version Control",
    description: "Distributed version control system" 
  },
  { 
    name: "MySQL", 
    icon: <SiMysql className="text-blue-600" />,
    category: "Database",
    description: "Relational database management system" 
  },
  { 
    name: "Python", 
    icon: <SiPython className="text-blue-500" />, 
    category: "Language", 
    description: "High-level programming language" 
  },
  { 
    name: "Flask", 
    icon: <SiFlask className="text-gray-500" />, 
    category: "Backend", 
    description: "Lightweight web framework for Python" 
  },
];

const categories = [...new Set(techStack.map(tech => tech.category))];

function MyTechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  const filteredTech = activeCategory === "All" 
    ? techStack 
    : techStack.filter(tech => tech.category === activeCategory);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center relative z-10 mb-12">
          My <Cover className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Tech Stack</Cover>
        </h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "All"
                ? "bg-blue-600 text-white shadow-lg" 
                : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Tech Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredTech.map((tech, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="relative group"
            >
              <div className={`flex flex-col items-center p-6 mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 ${
                hoveredTech === tech.name ? "transform -translate-y-2 shadow-xl" : "hover:shadow-lg"
              }`}>
                <div className={`text-5xl mb-4 transform transition-transform duration-300 ${
                  hoveredTech === tech.name ? "scale-110" : "group-hover:scale-105"
                }`}>
                  {tech.icon}
                </div>
                <p className="text-lg font-medium text-gray-800 dark:text-white text-center">{tech.name}</p>
                <span className="mt-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                  {tech.category}
                </span>
                
                {/* Info tooltip on hover */}
                {hoveredTech === tech.name && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-40 w-48 p-3 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-xl">
                    <p>{tech.description}</p>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTechStack;