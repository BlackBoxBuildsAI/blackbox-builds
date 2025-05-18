'use client';
import dynamic from 'next/dynamic';

const motion = dynamic(() => import('framer-motion').then(mod => mod.motion), { ssr: false });

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center py-32 px-6"
    >
      <img
        src="/logo-blackbox.png"
        alt="BlackBox Builds Logo"
        className="w-24 h-24 mb-6 drop-shadow-xl opacity-100"
      />
      <h1 className="text-5xl font-bold tracking-tight">BlackBox Builds</h1>
      <p className="text-xl mt-4 text-gray-400">Where vision meets innovation.</p>
    </motion.section>
  );
}
