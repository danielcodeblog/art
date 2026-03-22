'use client';

import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 max-w-[90rem] mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-sky-950/40 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Next Chapter</span>
        <h2 className="text-4xl md:text-8xl font-display font-bold tracking-tighter uppercase text-sky-950">Start the Conversation</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-4 space-y-8 md:space-y-12">
          <div>
            <span className="text-[#3B82F6] text-[10px] font-bold tracking-[0.4em] uppercase mb-2 md:mb-4 block">Direct Communication</span>
            <a href="mailto:ameduisrael673@gmail.com" className="text-xl md:text-2xl break-all font-bold text-sky-950 hover:text-[#3B82F6] transition-colors">
              ameduisrael673@gmail.com
            </a>
          </div>

          <div>
            <span className="text-[#3B82F6] text-[10px] font-bold tracking-[0.4em] uppercase mb-2 md:mb-4 block">Current Location</span>
            <p className="text-xl md:text-2xl font-bold text-sky-950">Abuja, Nigeria / Remote</p>
          </div>

          <div>
            <span className="text-[#3B82F6] text-[10px] font-bold tracking-[0.4em] uppercase mb-2 md:mb-4 block">Office Hours</span>
            <p className="text-xl md:text-2xl font-bold text-sky-950">24 / 7 Availability</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:space-y-12 p-6 md:p-12 rounded-3xl shadow-xl bg-white border border-sky-950/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="relative">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full bg-transparent border-b border-sky-950/10 py-4 text-sm font-bold tracking-widest text-sky-950 focus:border-[#3B82F6] outline-none transition-colors placeholder:text-sky-950/20"
                />
                {errors.name && <span className="text-[10px] text-red-500 absolute -bottom-6 left-0">REQUIRED</span>}
              </div>
              <div className="relative">
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full bg-transparent border-b border-sky-950/10 py-4 text-sm font-bold tracking-widest text-sky-950 focus:border-[#3B82F6] outline-none transition-colors placeholder:text-sky-950/20"
                />
                {errors.email && <span className="text-[10px] text-red-500 absolute -bottom-6 left-0">INVALID EMAIL</span>}
              </div>
            </div>

            <div className="relative">
              <textarea
                {...register('message', { required: true })}
                placeholder="DESCRIBE YOUR PROJECT VISION"
                rows={4}
                className="w-full bg-transparent border-b border-sky-950/10 py-4 text-sm font-bold tracking-widest text-sky-950 focus:border-[#3B82F6] outline-none transition-colors placeholder:text-sky-950/20 resize-none"
              />
              {errors.message && <span className="text-[10px] text-red-500 absolute -bottom-6 left-0">REQUIRED</span>}
            </div>

            <button
              type="submit"
              className="bg-sky-600 text-white text-[10px] font-bold px-12 py-4 rounded-full hover:bg-sky-700 transition-all tracking-[0.3em] uppercase shadow-lg hover:shadow-xl"
            >
              Send Brief
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
