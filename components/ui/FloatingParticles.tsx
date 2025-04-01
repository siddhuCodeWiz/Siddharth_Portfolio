"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";



// Define types for props and particle object
interface FloatingParticlesProps {
  className?: string;
  quantity?: number;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  color?: string;
  particleOpacity?: number;
}

interface ParticleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

interface Dimensions {
  width: number;
  height: number;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  className,
  quantity = 50,
  minSize = 1,
  maxSize = 5,
  minSpeed = 10,
  maxSpeed = 30,
  color = "white",
  particleOpacity = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      generateParticles();
    }
  }, [dimensions, quantity, minSize, maxSize, minSpeed, maxSpeed, particleOpacity]);

  const updateDimensions = () => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  };

  const generateParticles = () => {
    const newParticles: ParticleProps[] = [];
    for (let i = 0; i < quantity; i++) {
      const size = minSize + Math.random() * (maxSize - minSize);
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const opacity = (Math.random() * 0.5 + 0.5) * particleOpacity;
      
      newParticles.push({
        id: i,
        x,
        y,
        size,
        speed,
        direction,
        opacity,
        animationDuration: speed,
        animationDelay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  };

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden z-0", className)}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            animation: `float-${particle.direction > 0 ? 'up' : 'down'} ${
              particle.animationDuration
            }s infinite linear ${particle.animationDelay}s`,
            '--opacity': particle.opacity,
          } as React.CSSProperties}
        />
      ))}

      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }
        @keyframes float-down {
          0% {
            transform: translateY(-20px) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};