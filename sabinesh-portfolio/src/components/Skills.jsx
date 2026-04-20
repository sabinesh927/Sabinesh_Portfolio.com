import { motion } from 'framer-motion';

const skills = [
  { name: 'React JS', category: 'Frontend', level: 92 },
  { name: 'HTML & CSS', category: 'Frontend', level: 95 },
  { name: 'JavaScript', category: 'Frontend', level: 88 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'Bootstrap', category: 'Frontend', level: 85 },
  { name: 'Python', category: 'Backend', level: 90 },
  { name: 'Django', category: 'Backend', level: 85 },
  { name: 'FastAPI', category: 'Backend', level: 82 },
  { name: 'Node.js', category: 'Backend', level: 78 },
  { name: 'Java', category: 'Backend', level: 75 },
  { name: 'Generative AI', category: 'AI/ML', level: 88 },
  { name: 'LLM', category: 'AI/ML', level: 86 },
  { name: 'RAG', category: 'AI/ML', level: 84 },
  { name: 'Agentic AI', category: 'AI/ML', level: 82 },
  { name: 'LangChain', category: 'AI/ML', level: 85 },
  { name: 'LangGraph', category: 'AI/ML', level: 80 },
];

const categories = ['Frontend', 'Backend', 'AI/ML'];

const categoryColors = {
  'Frontend': 'border-white/20 text-white',
  'Backend': 'border-white/15 text-gray-300',
  'AI/ML': 'border-white/25 text-white',
};

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group glass-card border border-white/8 p-4 hover:border-white/20 transition-all duration-300 cursor-default"
    whileHover={{ y: -4, scale: 1.02 }}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="font-mono text-xs tracking-wider text-white">{skill.name}</span>
      <span className="font-mono text-[10px] text-gray-600">{skill.level}%</span>
    </div>
    <div className="h-px bg-white/8 relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
        className="absolute inset-y-0 left-0 bg-white"
      />
    </div>
    <div className="mt-2">
      <span className={`font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 border ${categoryColors[skill.category]}`}>
        {skill.category}
      </span>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-white/3 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">03 / Skills</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            TECH<br /><span className="text-gradient">ARSENAL.</span>
          </h2>
        </motion.div>

        {/* Category legend */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div className={`w-2 h-px border-t ${categoryColors[cat].split(' ')[0]}`} style={{width:'20px'}} />
              <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">{cat}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Big floating stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Technologies', value: '16+' },
            { label: 'Internships', value: '4' },
            { label: 'AI Frameworks', value: '6+' },
            { label: 'Experience', value: '2yr+' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card border border-white/8 p-6 text-center">
              <p className="font-display text-4xl text-white">{stat.value}</p>
              <p className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
