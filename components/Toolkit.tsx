'use client';

import { motion } from 'motion/react';
import { 
  Video, 
  Cpu, 
  Layers, 
  Film, 
  Image as ImageIcon, 
  Box, 
  Terminal
} from 'lucide-react';

const tools = [
  { name: 'PREMIERE PRO', icon: Video, category: 'EDITING', level: '95%' },
  { name: 'DAVINCI RESOLVE', icon: Cpu, category: 'COLOR', level: '90%' },
  { name: 'AFTER EFFECTS', icon: Layers, category: 'MOTION', level: '85%' },
  { name: 'AVID COMPOSER', icon: Film, category: 'EDITING', level: '80%' },
  { name: 'PHOTOSHOP', icon: ImageIcon, category: 'DESIGN', level: '90%' },
  { name: 'CINEMA 4D', icon: Box, category: '3D', level: '70%' },
];

export default function Toolkit() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-[90rem] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-blue-600">System.Diagnostics</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-10 uppercase text-sky-950 leading-[0.85]">
              Technical <br/> Toolkit
            </h2>
            <p className="text-sky-950/60 text-xl font-medium leading-relaxed max-w-lg mb-12">
              My workflow is built on a foundation of industry-leading software and hardware acceleration. I leverage industry-standard architecture to ensure a seamless transition from raw proxy to the final cinematic master.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 md:p-8 rounded-3xl bg-sky-50/30 border border-sky-950/5 hover:bg-white hover:shadow-2xl hover:shadow-blue-600/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12 md:mb-16">
                  <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-sky-950/20 block mb-1">SKILL_LEVEL</span>
                    <span className="text-sm font-mono font-bold text-blue-600">{tool.level}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-blue-600 mb-2 block uppercase">{tool.category}</span>
                  <h3 className="text-2xl font-display font-bold text-sky-950 uppercase tracking-tight">{tool.name}</h3>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Terminal className="w-4 h-4 text-blue-600/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
