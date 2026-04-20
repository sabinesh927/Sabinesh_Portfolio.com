import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl tracking-widest text-white hover:text-gray-300 transition-colors">
          S·S
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className="font-mono text-xs tracking-widest text-gray-400 hover:text-white transition-colors uppercase">
              {link}
            </button>
          ))}
          <a href="https://wa.me/918489039175" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
            HIRE ME
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden glass-card border-t border-white/10">
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="font-mono text-xs tracking-widest text-gray-400 hover:text-white text-left uppercase">
                  {link}
                </button>
              ))}
              <a href="https://wa.me/918489039175" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest px-4 py-2 border border-white text-white text-center hover:bg-white hover:text-black transition-all duration-300">
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
