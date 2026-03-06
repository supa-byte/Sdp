import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'Portfolio', path: 'portfolio' },
  { name: 'Services', path: 'services' },
  { name: 'Case Studies', path: 'case-studies' },
  { name: 'AI Tools', path: 'ai-tools' },
  { name: 'Blog', path: 'blog' },
  { name: 'Contact', path: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.path);
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="flex items-center gap-3 group">
            <img src="/favicon.svg" alt="SD Logo" className="w-12 h-12 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(188,19,254,0.7)] transition-all duration-300" referrerPolicy="no-referrer" />
            <span className="font-display font-bold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#b122e5] uppercase">
              SUPAN DESAI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path;
              return (
                <a
                  key={link.name}
                  href={`#${link.path}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.path); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-panel border-t border-white/5 absolute top-20 left-0 right-0"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.path}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.path); }}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  activeSection === link.path
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
