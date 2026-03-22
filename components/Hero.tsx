'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GLSLHills } from "@/components/ui/glsl-hills";

const roles = ["Video Editor", "Social Media Manager", "Content Strategist", "Visual Storyteller"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* GLSL Hills Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <GLSLHills speed={0.3} cameraZ={140} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="space-y-6 pointer-events-none">
          <div className="h-6 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[10px] uppercase tracking-[0.3em] text-sky-400 font-medium"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -20, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="font-sans font-black text-5xl md:text-[7rem] tracking-tighter uppercase leading-[0.85] text-white drop-shadow-2xl"
          >
            <span className="block mb-2 text-3xl md:text-5xl font-bold opacity-90">Cinematic Vision, <br className="md:hidden" /> </span>
            Strategic Impact.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}


