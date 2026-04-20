import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'sabinesh14s@gmail.com', href: 'mailto:sabinesh14s@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 84890 39175', href: 'tel:+918489039175' },
  { icon: Github, label: 'GitHub', value: 'github.com/sabinesh927', href: 'https://github.com/sabinesh927' },
  { icon: Linkedin, label: 'LinkedIn', value: 'sabinesh-s-736118294', href: 'https://www.linkedin.com/in/sabinesh-s-736118294' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission — wire to your backend/formspree/etc.
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.4em] text-gray-600 uppercase">06 / Contact</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-none">
            LET'S<br /><span className="text-gradient">CONNECT.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Links */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-8">
              Whether you have a project in mind, want to discuss AI engineering, or just want to say hello —
              I'm always open to meaningful conversations. Reach out through any channel below.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 glass-card border border-white/8 p-4 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 glass-card border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">{link.label}</p>
                      <p className="font-body text-sm text-gray-300 group-hover:text-white transition-colors">{link.value}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-card border border-white/10 p-8">
              <h3 className="font-mono text-xs tracking-widest text-gray-400 mb-6 uppercase">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label className="font-mono text-[10px] tracking-widest text-gray-600 uppercase block mb-1.5">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      placeholder={field === 'email' ? 'you@example.com' : 'Your Name'}
                      className="w-full bg-white/3 border border-white/10 text-white text-sm font-body px-4 py-3 outline-none focus:border-white/30 transition-colors placeholder-gray-700"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[10px] tracking-widest text-gray-600 uppercase block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-white/3 border border-white/10 text-white text-sm font-body px-4 py-3 outline-none focus:border-white/30 transition-colors placeholder-gray-700 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400/80 font-mono text-xs">
                    <CheckCircle size={14} />
                    <span>Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400/80 font-mono text-xs">
                    <AlertCircle size={14} />
                    <span>Something went wrong. Try again or email directly.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <><span className="animate-spin">⊙</span> SENDING...</>
                  ) : (
                    <><Send size={12} /> SEND MESSAGE</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
