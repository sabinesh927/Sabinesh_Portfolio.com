import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Minimize2, Bot, User, Loader } from 'lucide-react';

const CHATBOT_API_URL = import.meta.env.VITE_CHATBOT_API_URL || null;

const MOCK_RESPONSES = [
  "Hi! I'm SABINESH AGENT. I can tell you about Sabinesh's skills, projects, and experience!",
  "Sabinesh specializes in Full Stack Development and AI Engineering, with expertise in React, Django, Python, LangChain, LangGraph, and Generative AI.",
  "He's currently working at ACL Digital on a migration project, and previously interned at Taras System Solutions as an AI Intern for 6 months.",
  "Sabinesh is the Department VP of CSE and based in Nagercoil, Tamil Nadu. You can reach him at sabinesh14s@gmail.com!",
  "He's proficient in building RAG systems, Agentic AI pipelines, and full-stack web apps. Check out his GitHub at github.com/sabinesh927!",
  "Want to collaborate? You can WhatsApp Sabinesh at +91 84890 39175 or connect on LinkedIn!",
];

let mockIndex = 0;
const getMockResponse = () => {
  const resp = MOCK_RESPONSES[mockIndex % MOCK_RESPONSES.length];
  mockIndex++;
  return resp;
};

const fetchBotResponse = async (messages) => {
  if (!CHATBOT_API_URL) {
    await new Promise((r) => setTimeout(r, 900));
    return getMockResponse();
  }
  try {
    const res = await fetch(CHATBOT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    return data.response || data.message || data.content || 'I received your message!';
  } catch {
    return "Sorry, I'm having trouble connecting right now. Please try contacting Sabinesh directly!";
  }
};

const AgentIcon = () => (
  <div className="w-7 h-7 bg-white text-black flex items-center justify-center flex-shrink-0 rounded-sm font-display text-sm">
    S
  </div>
);

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm SABINESH AGENT 🤖\nAsk me anything about Sabinesh — his skills, projects, experience, or how to contact him!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    const response = await fetchBotResponse(newMessages);
    setMessages([...newMessages, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* Floating chat bubble */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white text-black flex flex-col items-center justify-center shadow-2xl shadow-white/10 hover:bg-gray-100 transition-colors"
        aria-label="Open SABINESH AGENT chatbot"
      >
        <span className="font-display text-xs leading-none">S·AI</span>
        {!open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-card border border-white/15 flex flex-col shadow-2xl shadow-black/50"
            style={{ height: '480px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display text-sm">S</div>
                <div>
                  <p className="font-mono text-xs tracking-wider text-white">SABINESH AGENT</p>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-[9px] text-gray-500 tracking-wider">ONLINE</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setOpen(false)}
                  className="w-7 h-7 glass-card border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <X size={12} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'assistant' ? <AgentIcon /> : (
                    <div className="w-7 h-7 glass-card border border-white/20 flex items-center justify-center flex-shrink-0 rounded-sm">
                      <User size={12} className="text-gray-400" />
                    </div>
                  )}
                  <div className={`max-w-[75%] px-3 py-2 text-xs font-body leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-white text-black'
                      : 'glass-card border border-white/10 text-gray-300'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2.5">
                  <AgentIcon />
                  <div className="glass-card border border-white/10 px-3 py-2 flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div key={i} className="w-1 h-1 rounded-full bg-gray-500"
                        animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-3 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about Sabinesh..."
                  className="flex-1 bg-white/5 border border-white/10 text-white text-xs font-body px-3 py-2.5 outline-none focus:border-white/30 transition-colors placeholder-gray-700"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={13} />
                </button>
              </div>
              <p className="font-mono text-[9px] text-gray-700 tracking-wider mt-1.5 text-center">
                {CHATBOT_API_URL ? 'AI-Powered' : 'DEMO MODE — Connect API in .env'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
