"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconAward,
  IconEye,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import AchievementsTitle from "./AcheivementTitle";

type Achievement = {
  title: string;
  organization: string;
  description: string;
  src: string;
  images?: string[];
};

export const AchievementsShowcase = () => {
  const achievements: Achievement[] = [
    {
      title: "SPECATHON 2024",
      organization: "St. Peter's College - National Level Hackathon",
      description:
        "Won 2nd place in SPECATHON 2024, a 36-hour national-level hackathon, for developing an AI-powered visual assistance app designed to aid visually impaired individuals. The application featured real-time object detection and intelligent image captioning, enhancing accessibility through optimized AI-driven solutions.",
      src: "/spec2024/two.jpg", // Replace with your image path
      images: [
        "/spec2024/one.jpg",
        "/spec2024/two.jpg",
        "/spec2024/three.jpg",
        "/spec2024/four.jpg",
      ], // Replace with your image paths
    },
    {
      title: "UI/UX WIZ",
      organization: "Prototype Design Competition (2023)",
      description:
        "Secured 2nd prize for designing a prototype in Figma focused on enhancing peer-to-peer learning within the company.",
      src: "/uxwiz2024/one.jpg", // Replace with your image path
      images: ["/uxwiz2024/one.jpg"], // Replace with your image paths
    },
    {
      title: "Project School Certificates",
      organization: "Keshav Memorial Institute of Technology",
      description:
        "Issued by Keshav Memorial Institute of Technology for exemplary project work.",
      src: "/ps/three.png", // Replace with your image path
      images: ["/ps/one.png", "/ps/two.png", "/ps/three.png"], // Replace with your image paths
    },
  ];

  const [active, setActive] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % achievements.length);
    setShowGallery(false);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + achievements.length) % achievements.length);
    setShowGallery(false);
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const openGallery = (index: number) => {
    setGalleryImageIndex(index);
    setShowGallery(true);
  };

  const nextGalleryImage = () => {
    setGalleryImageIndex(
      (prev) => (prev + 1) % (achievements[active].images?.length || 1)
    );
  };

  const prevGalleryImage = () => {
    setGalleryImageIndex(
      (prev) =>
        (prev - 1 + (achievements[active].images?.length || 1)) %
        (achievements[active].images?.length || 1)
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 mt-5" id="acheivements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <AchievementsTitle/>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Recognition for innovation, design, and technical excellence
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div className="relative h-80 md:h-96 w-full">
            <AnimatePresence>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: index === active ? 1 : 0.7,
                    scale: index === active ? 1 : 0.95,
                    z: index === active ? 0 : -100,
                    rotate: index === active ? 0 : randomRotateY(),
                    zIndex:
                      index === active ? 40 : achievements.length + 2 - index,
                    y: index === active ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={achievement.src}
                      alt={achievement.title}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <IconAward className="h-5 w-5 text-yellow-400" />
                      <span className="text-white font-semibold text-lg">
                        Acheived
                      </span>
                    </div>

                    {achievement.images &&
                      achievement.images.length > 0 &&
                      index === active && (
                        <button
                          onClick={() => openGallery(0)}
                          className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <IconEye className="h-5 w-5 text-white" />
                        </button>
                      )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-indigo-700 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
                Award
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {achievements[active].title}
              </h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {achievements[active].organization}
              </p>
              <motion.p className="text-gray-600 dark:text-gray-300">
                {achievements[active].description
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(5px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.01 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.p>
            </motion.div>

            <div className="flex justify-between items-center pt-6">
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors"
                >
                  <IconArrowLeft className="h-5 w-5 text-indigo-600 dark:text-indigo-300 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
                <button
                  onClick={handleNext}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors"
                >
                  <IconArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-300 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <div className="flex gap-2">
                {achievements.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === active
                        ? "bg-indigo-600 dark:bg-indigo-400 w-6"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Modal */}
        {showGallery && achievements[active].images && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
              <div className="relative h-96 md:h-[32rem]">
                <Image
                  src={achievements[active].images[galleryImageIndex]}
                  alt={`Gallery image ${galleryImageIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>

              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowGallery(false)}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={prevGalleryImage}
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-black/30 transition-colors"
                >
                  <IconArrowLeft className="h-5 w-5 text-black" />
                </button>
                <span className="flex items-center justify-center bg-black/20 backdrop-blur-sm px-4 rounded-full text-white">
                  {galleryImageIndex + 1} / {achievements[active].images.length}
                </span>
                <button
                  onClick={nextGalleryImage}
                  className="bg-black/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <IconArrowRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsShowcase;
