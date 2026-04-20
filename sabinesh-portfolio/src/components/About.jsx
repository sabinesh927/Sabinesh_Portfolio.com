import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Award } from 'lucide-react';

const Detail = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
    <div className="w-8 h-8 flex items-center justify-center glass-card rounded-sm">
      <Icon size={13} className="text-gray-400" />
    </div>
    <div>
      <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer"
          className="font-body text-sm text-gray-300 hover:text-white transition-colors">{value}</a>
      ) : (
        <p className="font-body text-sm text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">02 / About</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Photo + name card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>

            {/* Avatar placeholder */}
            <motion.div
              className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 glass-card border border-white/10 overflow-hidden"
              whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-28 h-28 rounded-full border-2 border-white/20 flex items-center justify-center mb-4"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(0,0,0,0.5))' }}>
                  <span className="font-display text-5xl text-white/60">S</span>
                </div>
                <span className="font-mono text-xs text-gray-600 tracking-widest"><img
  src="public\sabinesh_logo.svg"
  alt="Sabinesh S"
  className="w-full h-full object-cover object-top"
/></span>
                <p className="font-mono text-[10px] text-gray-700 mt-1">Replace avatar in About.jsx</p>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20" />
            </motion.div>

            {/* Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="mt-6 glass-card border border-white/10 p-4 flex items-center gap-3"
            >
              <Award size={18} className="text-white/70" />
              <div>
                <p className="font-mono text-xs text-white tracking-wider">DEPARTMENT VP</p>
                <p className="font-mono text-[10px] text-gray-500">CSE Department</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse-slow" />
            </motion.div>
          </motion.div>

          {/* Right — Bio + details */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>

            <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-none">
              HELLO,<br />
              <span className="text-gradient">WORLD.</span>
            </h2>

            <div className="font-body text-gray-400 leading-relaxed space-y-4 mb-8 text-sm md:text-base">
              <p>
                I'm <strong className="text-white">Sabinesh S</strong> — a Computer Science student,
                Full Stack Developer, and AI Engineer specializing in building intelligent, production-ready
                systems. I bridge the world of web engineering and artificial intelligence, crafting
                everything from scalable APIs to agentic LLM pipelines.
              </p>
              <p>
                As the <strong className="text-white">Department Vice President</strong> of CSE, I lead
                initiatives at the intersection of technology and leadership. My expertise spans React,
                Python, Django, FastAPI, LangChain, LangGraph, and the full Generative AI stack.
              </p>
              <p>
                I've completed internships at companies across Chennai, Nagercoil, and Coimbatore — and
                currently contributing to a live migration project at ACL Digital, Chennai.
              </p>
            </div>

            {/* Details */}
            <div className="glass-card border border-white/8 p-5 rounded-sm">
              <Detail icon={MapPin} label="Location" value="Nagercoil, Tamil Nadu" />
              <Detail icon={Mail} label="Email" value="sabinesh14s@gmail.com" href="mailto:sabinesh14s@gmail.com" />
              <Detail icon={Phone} label="Mobile" value="+91 84890 39175" href="tel:+918489039175" />
              <Detail icon={Github} label="GitHub" value="github.com/sabinesh927" href="https://github.com/sabinesh927" />
              <Detail icon={Linkedin} label="LinkedIn" value="linkedin.com/in/sabinesh-s" href="https://www.linkedin.com/in/sabinesh-s-736118294" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
