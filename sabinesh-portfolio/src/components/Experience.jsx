import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

const internships = [
  {
    company: 'Capnis Infotech',
    location: 'Chennai',
    role: 'Web Development Intern',
    duration: '1 Month',
    period: '2023',
    type: 'Web Development',
    description: 'Worked on front-end development tasks, building responsive web interfaces using HTML, CSS, and JavaScript. Collaborated with the development team to deliver client projects.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    status: 'Completed',
  },
  {
    company: 'AK Infopark',
    location: 'Nagercoil',
    role: 'Web Development Intern',
    duration: 'Short-term',
    period: '2023',
    type: 'Web Development',
    description: 'Developed and maintained web applications for local clients. Gained hands-on experience with full-stack web development in a professional environment close to home.',
    tags: ['Web Development', 'Frontend', 'Backend'],
    status: 'Completed',
  },
  {
    company: 'Taras System Solutions',
    location: 'Coimbatore',
    role: 'AI Intern',
    duration: '6 Months',
    period: '2023–2024',
    type: 'AI Engineering',
    description: 'Deep-dived into Artificial Intelligence and Machine Learning. Worked on projects involving LLMs, Generative AI pipelines, RAG systems, and intelligent automation using LangChain.',
    tags: ['Python', 'LangChain', 'RAG', 'LLM', 'Generative AI', 'FastAPI'],
    status: 'Completed',
  },
  {
    company: 'ACL Digital',
    location: 'Chennai',
    role: 'Developer — Migration Project',
    duration: 'Ongoing',
    period: '2024–Present',
    type: 'Full Stack',
    description: 'Currently contributing to a large-scale software migration project. Working with cross-functional teams to migrate legacy systems to modern architecture, ensuring data integrity and system performance.',
    tags: ['Migration', 'Full Stack', 'System Architecture', 'Collaboration'],
    status: 'Active',
  },
];

const TimelineCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="relative"
  >
    {/* Connector line */}
    {index < internships.length - 1 && (
      <div className="absolute left-5 top-16 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
    )}

    <div className="flex gap-6">
      {/* Dot */}
      <div className="flex flex-col items-center">
        <motion.div
          animate={item.status === 'Active' ? { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-10 h-10 rounded-sm glass-card border flex items-center justify-center flex-shrink-0 z-10 ${
            item.status === 'Active' ? 'border-white/40 bg-white/10' : 'border-white/15'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${item.status === 'Active' ? 'bg-white' : 'bg-white/40'}`} />
        </motion.div>
      </div>

      {/* Card */}
      <div className="flex-1 mb-8">
        <motion.div
          className="glass-card border border-white/8 p-6 hover:border-white/20 transition-all duration-300 group"
          whileHover={{ y: -4 }}
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="font-display text-2xl text-white tracking-wider">{item.company}</h3>
              <p className="font-mono text-xs text-gray-400 tracking-wider mt-1">{item.role}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className={`font-mono text-[10px] tracking-widest px-2 py-1 border ${
                item.status === 'Active'
                  ? 'border-white text-white bg-white/10'
                  : 'border-white/20 text-gray-500'
              }`}>
                {item.status.toUpperCase()}
              </span>
              <span className="font-mono text-[10px] text-gray-600">{item.period}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-gray-500">
              <MapPin size={11} />
              <span className="font-mono text-[10px] tracking-wider">{item.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <Clock size={11} />
              <span className="font-mono text-[10px] tracking-wider">{item.duration}</span>
            </div>
          </div>

          <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag}
                className="font-mono text-[10px] tracking-wider text-gray-500 px-2 py-1 border border-white/8 hover:border-white/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">04 / Experience</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            CAREER<br /><span className="text-gradient">JOURNEY.</span>
          </h2>
        </motion.div>

        <div>
          {internships.map((item, i) => (
            <TimelineCard key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
