'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ISRAEL POSSESSES A RARE, INTUITIVE GRASP OF <span class='text-[#3B82F6]'>PACING</span>. HE DOESN'T JUST ASSEMBLE FOOTAGE; HE ELEVATES THE ENTIRE CINEMATIC LANGUAGE.",
    author: "CHIDI OKAFOR",
    role: "CREATIVE DIRECTOR, LAGOS FILMS"
  },
  {
    quote: "HIS KINETIC APPROACH TO THE <span class='text-[#3B82F6]'>EDIT</span> IS TRANSFORMATIVE. HE HAS A UNIQUE ABILITY TO FIND THE EMOTIONAL CORE IN EVERY SEQUENCE.",
    author: "ADEBISI ADEYEMI",
    role: "EXECUTIVE PRODUCER, MAVIN RECORDS"
  },
  {
    quote: "COLLABORATING WITH ISRAEL IS AKIN TO WORKING WITH A <span class='text-[#3B82F6]'>COMPOSER</span>. HIS SENSE OF RHYTHM IS SURGICAL AND ALWAYS PERFECT.",
    author: "IFEANYI NWOSU",
    role: "DIRECTOR, ABUJA CREATIVE HUB"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="text-sky-950/40 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Industry Voice</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-sky-950">Reputation <span className="text-[#3B82F6] font-display italic">&</span> Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col gap-6 md:gap-8 p-6 md:p-8 rounded-2xl bg-white/80 border border-sky-950/5 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-[#3B82F6] opacity-20" />
              <p 
                className="text-lg md:text-2xl font-bold tracking-tight leading-snug text-sky-950"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-[2px] bg-[#3B82F6]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-sky-950">{t.author}</span>
                </div>
                <span className="text-[8px] font-bold tracking-widest text-sky-950/40 uppercase">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
