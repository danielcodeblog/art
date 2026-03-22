'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 max-w-[90rem] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-white border border-sky-950/5"
        >
          <Image
            src="https://picsum.photos/seed/israel/800/1000"
            alt="Israel Amedu"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none text-white drop-shadow-lg">
              ISRAEL <br /> AMEDU
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#3B82F6] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Auteur Philosophy</span>
          <h3 className="text-2xl md:text-5xl font-display font-bold tracking-tighter mb-6 md:mb-8 leading-tight text-sky-950">
            &quot;Editing is the second birth of a story. I don&apos;t just assemble clips; I <span className="font-display italic text-[#3B82F6]">curate the pulse</span> of the narrative through surgical precision.&quot;
          </h3>
          
          <div className="space-y-4 md:space-y-6 text-sky-950/60 text-base md:text-lg mb-8 md:mb-12">
            <p>
              Operating from Abuja, Nigeria, I collaborate with global visionaries to define their visual identity. As a graduate editor, I bring a fresh, academic rigor to the craft, specializing in the deep psychological resonance of timing and pacing.
            </p>
            <p>
              Whether it&apos;s high-fidelity commercial work or the raw grit of narrative cinema, my work is defined by a kinetic energy that demands attention. I bridge the gap between technical mastery and emotional intuition.
            </p>
          </div>

          <div className="flex gap-8">
            {['INSTAGRAM'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] font-bold tracking-widest text-[#3B82F6] hover:text-white transition-colors underline underline-offset-8"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
