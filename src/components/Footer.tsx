export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-space-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="flex items-center gap-3 mb-6 group">
              <img src="/favicon.svg" alt="SD Logo" className="w-10 h-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(188,19,254,0.6)] transition-all duration-300" referrerPolicy="no-referrer" />
              <span className="font-display font-bold text-lg tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#b122e5] uppercase">
                SUPAN DESAI
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Futuristic digital experiences, advanced AI development, and data-driven marketing strategies. Building the next generation of the web.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="hover:text-neon-blue transition-colors">About</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo('portfolio'); }} className="hover:text-neon-blue transition-colors">Portfolio</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className="hover:text-neon-blue transition-colors">Services</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="https://www.fiverr.com/s/8z32qPE" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">Fiverr</a></li>
              <li><a href="https://share.google/UthaSzpJMn2OHl9eC" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">Facebook</a></li>
              <li><a href="mailto:desaisupan07@gmail.com" className="hover:text-neon-blue transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Supan Desai. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
