import { useEffect, useState, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { FloatingParticles } from "./ui/FloatingParticles";

// Custom typewriter hook to avoid dependency on external package
const useTypewriter = (texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorBlinking, setCursorBlinking] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // Complete text of current item
    const currentText = texts[currentIndex];
    
    // If we're deleting, remove a character, otherwise add a character
    if (isDeleting) {
      setCursorBlinking(false);
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      setCursorBlinking(false);
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    // If we've completed typing the current text
    if (!isDeleting && displayText === currentText) {
      setCursorBlinking(true);
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    }
    
    // If we've deleted the entire text
    if (isDeleting && displayText === "") {
      setCursorBlinking(true);
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [texts, currentIndex, displayText, isDeleting, typingSpeed, deletingSpeed, pauseTime]);

  return { text: displayText, cursorBlinking };
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const roles = ["Software Engineer", "AI Enthusiast", "Problem Solver", "Creative Developer"];
  const { text: typewriterText, cursorBlinking } = useTypewriter(roles, 100, 50, 1500);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move spotlight based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      spotlightRef.current.style.setProperty("--x", `${x * 100}%`);
      spotlightRef.current.style.setProperty("--y", `${y * 100}%`);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen pb-20 pt-24 md:pt-36">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams className="opacity-30" />
        <FloatingParticles quantity={100} className="opacity-40" />
      </div>
      
      {/* Improved Spotlights */}
      <div ref={spotlightRef} className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-70"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full opacity-60"
          fill="purple"
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw] opacity-60" 
          fill="blue" 
        />
        <Spotlight
          className="right-80 bottom-28 h-[60vh] w-[40vw] opacity-50"
          fill="cyan"
        />
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-black dark:bg-grid-white/[0.03] bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative z-10 h-[80vh] items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs uppercase tracking-widest flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
              <span>Blending innovation and empathy to make life simpler. 💖🚀</span>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <div className="text-center mb-6">
            <TextGenerateEffect
              words="Transforming Challenges into Innovative Solutions"
              className="text-center text-[40px] md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 font-bold"
            />
          </div>
          
          {/* Custom Typewriter Effect */}
          <div className="h-10 text-center mb-6 text-sm md:text-lg lg:text-2xl">
            <div className="flex justify-center items-center text-blue-300">
              <span className="mr-2">I'm a</span>
              <span className="inline-flex">
                {typewriterText}
                <span 
                  className={`ml-1 ${cursorBlinking ? 'animate-blink' : ''}`}
                  style={{ opacity: cursorBlinking ? 1 : 0 }}
                >|</span>
              </span>
            </div>
          </div>

          {/* Bio */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed text-gray-300"
          >
            Hi! I'm <b className="text-blue-700">Siddharth Diddi</b>, passionate about creating technology that makes a meaningful difference through elegant solutions and innovative approaches.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <a href="#about">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="px-6 py-3"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;