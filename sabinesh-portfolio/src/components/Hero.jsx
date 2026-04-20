import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Cpu, Zap } from 'lucide-react';

const FloatingOrb = ({ className, delay = 0, size = 'w-64 h-64' }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-10 ${size} ${className}`}
    animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const FloatingTag = ({ children, className, delay = 0 }) => (
  <motion.div
    className={`absolute glass-card px-3 py-1.5 rounded-sm font-mono text-xs tracking-wider text-gray-300 border border-white/10 ${className}`}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const roles = ['FULL STACK DEVELOPER', 'AI ENGINEER', 'AGENTIC AI SPECIALIST'];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <FloatingOrb className="bg-white top-20 -left-20" delay={0} />
      <FloatingOrb className="bg-gray-400 bottom-20 -right-20" delay={2} />
      <FloatingOrb className="bg-white w-40 h-40 top-1/2 left-1/4 blur-2xl" delay={4} size="w-40 h-40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating tags */}
      <FloatingTag className="top-32 left-8 md:left-24" delay={0.5}>
        <span className="flex items-center gap-1"><Terminal size={10} /> REACT · PYTHON · DJANGO</span>
      </FloatingTag>
      <FloatingTag className="top-40 right-8 md:right-24" delay={1.5}>
        <span className="flex items-center gap-1"><Cpu size={10} /> LLM · RAG · LANGCHAIN</span>
      </FloatingTag>
      <FloatingTag className="bottom-40 left-8 md:left-32" delay={2.5}>
        <span className="flex items-center gap-1"><Zap size={10} /> DEPT. VP · CSE</span>
      </FloatingTag>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-white/40" />
          <span className="font-mono text-xs tracking-[0.3em] text-gray-500 uppercase">Portfolio 2024</span>
          <div className="w-8 h-px bg-white/40" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(4rem,15vw,14rem)] leading-none tracking-wider text-white mb-2"
        >
          SABINESH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-white/40" />
          <span className="font-mono text-xs tracking-[0.5em] text-gray-500">·S·</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-white/40" />
        </motion.div>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase"
            >
              {i > 0 && <span className="text-white/20 mr-2 md:mr-4">·</span>}
              {role}
            </motion.span>
          ))}
        </div>

        {/* Bio line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed"
        >
          CSE Student · Department VP · Nagercoil, Tamil Nadu<br />
          Building intelligent systems that bridge the gap between code and cognition.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/918489039175"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Connect on WhatsApp</span>
          </a>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-white/30 text-white font-mono text-xs tracking-widest uppercase hover:border-white transition-all duration-300"
          >
            View Projects
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-gray-600">SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} className="text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
