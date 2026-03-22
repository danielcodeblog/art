'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="text-sm font-bold tracking-tighter flex flex-col leading-none group">
          <span className="text-[#3B82F6] group-hover:text-sky-950 transition-colors">ISRAEL</span>
          <span className="text-sky-950 group-hover:text-[#3B82F6] transition-colors">AMEDU</span>
        </Link>

        <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
          © 2026 ISRAEL AMEDU. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
