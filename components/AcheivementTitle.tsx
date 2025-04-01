import React, { useState, useEffect } from "react";

const colors = [
  "#FF5733", "#33FF57", "#5733FF", "#FF33A1", "#A133FF", "#33FFF5", "#FFD700", "#FF4500",
  "#FF1493", "#32CD32", "#8A2BE2", "#00CED1", "#DC143C", "#20B2AA", "#FFA07A", "#9932CC"
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const AchievementsTitle = () => {
  const [hoverColors, setHoverColors] = useState(
    Array.from({ length: 12 }, () => getRandomColor()) // 12 letters → 12 colors
  );
  const [isClient, setIsClient] = useState(false);

  // Ensure we only update colors on the client side after the first render
  useEffect(() => {
    setIsClient(true); // This ensures that the state change only happens on the client
  }, []);

  const changeColors = () => {
    setHoverColors(Array.from({ length: 12 }, () => getRandomColor()));
  };

  if (!isClient) {
    return <span className="inline-block relative font-bold text-5xl">Achievements</span>; // Render static text until client-side rendering
  }

  return (
    <span className="inline-block relative font-bold text-5xl" onMouseEnter={changeColors}>
      {["A", "c", "h", "i", "e", "v", "e", "m", "e", "n", "t", "s"].map((char, index) => (
        <span key={index} style={{ color: hoverColors[index], transition: "color 0.3s ease-in-out" }}>
          {char}
        </span>
      ))}
      <div className="h-1 w-full bg-indigo-500 mt-2 rounded-full transition-all duration-300"></div>
    </span>
  );
};

export default AchievementsTitle;
