import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Brain, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Agentic RAG System',
    subtitle: 'AI / LangGraph',
    description: 'A multi-agent retrieval-augmented generation pipeline built with LangGraph and LangChain. Features autonomous tool use, vector store integration, and streaming LLM responses with memory persistence.',
    tags: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'RAG', 'ChromaDB'],
    icon: Brain,
    github: 'https://github.com/sabinesh927',
    demo: null,
    featured: true,
  },
  {
    title: 'Full Stack Task Manager',
    subtitle: 'Web Application',
    description: 'A production-ready task management application with real-time collaboration, role-based access control, and an AI-powered smart scheduling feature using OpenAI API.',
    tags: ['React', 'Django', 'PostgreSQL', 'REST API', 'Tailwind'],
    icon: Code2,
    github: 'https://github.com/sabinesh927',
    demo: null,
    featured: true,
  },
  {
    title: 'Portfolio AI Chatbot',
    subtitle: 'Conversational AI',
    description: 'An intelligent conversational agent that answers questions about Sabinesh\'s portfolio, skills, and projects. Built with custom prompt engineering and deployed as a FastAPI microservice.',
    tags: ['Python', 'FastAPI', 'LLM', 'React', 'LangChain'],
    icon: Brain,
    github: 'https://github.com/sabinesh927',
    demo: null,
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Web Development',
    description: 'A feature-rich e-commerce platform with product management, payment gateway integration, real-time inventory tracking, and an admin dashboard built with Django and React.',
    tags: ['React', 'Django', 'Python', 'Bootstrap', 'REST API'],
    icon: Globe,
    github: 'https://github.com/sabinesh927',
    demo: null,
    featured: false,
  },
  {
    title: 'LangGraph Workflow Engine',
    subtitle: 'Agentic AI',
    description: 'A visual workflow engine for constructing and executing LangGraph-powered agent pipelines. Supports dynamic node creation, conditional routing, and real-time state visualization.',
    tags: ['LangGraph', 'Python', 'React', 'FastAPI', 'WebSocket'],
    icon: Brain,
    github: 'https://github.com/sabinesh927',
    demo: null,
    featured: false,
  },
  {
    title: 'Legacy System Migration Tool',
    subtitle: 'ACL Digital Project',
    description: 'Enterprise-grade migration tooling for moving legacy data and services to modern cloud-native architecture. Includes automated validation, rollback, and comprehensive reporting.',
    tags: ['Python', 'Java', 'System Design', 'Data Migration', 'DevOps'],
    icon: Code2,
    github: 'https://github.com/sabinesh927',
    demo: null,
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={`glass-card border border-white/8 p-6 hover:border-white/20 transition-all duration-400 group relative overflow-hidden ${
        project.featured ? 'col-span-1 md:col-span-1' : ''
      }`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[9px] tracking-widest text-white/60 border border-white/20 px-1.5 py-0.5">
            FEATURED
          </span>
        </div>
      )}

      {/* Ambient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 glass-card border border-white/15 flex items-center justify-center flex-shrink-0">
            <Icon size={16} className="text-white/70" />
          </div>
          <div>
            <h3 className="font-display text-xl text-white tracking-wider leading-tight">{project.title}</h3>
            <p className="font-mono text-[10px] text-gray-500 tracking-wider mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[9px] tracking-wider text-gray-600 border border-white/8 px-1.5 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-gray-500 hover:text-white transition-colors group/btn">
            <Github size={12} />
            <span>Source</span>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-gray-500 hover:text-white transition-colors">
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-white/2 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">05 / Projects</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            FEATURED<br /><span className="text-gradient">BUILDS.</span>
          </h2>
          <p className="font-body text-gray-500 text-sm mt-4 max-w-lg">
            A selection of projects spanning full-stack web apps, AI systems, and agentic pipelines.
            All work is available on GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a href="https://github.com/sabinesh927" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-gray-500 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 transition-all duration-300">
            <Github size={14} />
            VIEW ALL ON GITHUB
          </a>
        </motion.div>
      </div>
    </section>
  );
}
