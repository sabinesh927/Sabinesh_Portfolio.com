import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl text-white tracking-widest">SABINESH S</p>
            <p className="font-mono text-[10px] text-gray-600 tracking-widest mt-1">
              FULL STACK DEVELOPER · AI ENGINEER · NAGERCOIL
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/sabinesh927', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sabinesh-s-736118294', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sabinesh14s@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+918489039175', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                className="w-9 h-9 glass-card border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Icon size={13} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-gray-700 tracking-wider">
            © {year} SABINESH S — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] text-gray-700 tracking-wider">
            BUILT WITH REACT · TAILWIND · FRAMER MOTION
          </p>
        </div>
      </div>
    </footer>
  );
}
