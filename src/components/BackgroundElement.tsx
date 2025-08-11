import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundElements: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Predefined positions for consistent rendering
  const particles = [
    { id: 1, x: 10, y: 20, delay: 0, duration: 4 },
    { id: 2, x: 80, y: 10, delay: 1, duration: 5 },
    { id: 3, x: 20, y: 70, delay: 2, duration: 3 },
    { id: 4, x: 90, y: 60, delay: 0.5, duration: 4.5 },
    { id: 5, x: 50, y: 30, delay: 1.5, duration: 3.5 },
    { id: 6, x: 70, y: 80, delay: 2.5, duration: 4 },
    { id: 7, x: 30, y: 50, delay: 0.8, duration: 5.5 },
    { id: 8, x: 60, y: 15, delay: 1.8, duration: 3.8 },
  ];

  const floatingElements = [
    { id: 1, x: 15, y: 25, size: 'w-2 h-2', color: 'bg-blue-500/20' },
    { id: 2, x: 85, y: 15, size: 'w-1 h-1', color: 'bg-purple-500/30' },
    { id: 3, x: 25, y: 75, size: 'w-3 h-3', color: 'bg-cyan-500/15' },
    { id: 4, x: 75, y: 65, size: 'w-1.5 h-1.5', color: 'bg-pink-500/25' },
    { id: 5, x: 45, y: 35, size: 'w-2.5 h-2.5', color: 'bg-indigo-500/20' },
    { id: 6, x: 65, y: 85, size: 'w-1 h-1', color: 'bg-violet-500/30' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + element.id,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.id * 0.5,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Subtle Lines */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};