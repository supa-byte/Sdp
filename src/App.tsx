import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';
import { SEOMeta } from './components/SEOMeta';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Services';
import { CaseStudies } from './pages/CaseStudies';
import { AITools } from './pages/AITools';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <SEOMeta
        title="Supan Desai | Futuristic AI Developer & Digital Marketer"
        description="Supan Desai is a multi-disciplinary digital professional specializing in AI development, automation systems, digital marketing, and web development."
        keywords="Supan Desai, Supan Desai digital marketer, Supan Desai portfolio, Supan Desai AI developer, Supan Desai automation developer, Supan Desai web developer, Supan Desai graphic designer"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Home />
          <About />
          <Portfolio />
          <Services />
          <CaseStudies />
          <AITools />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </HelmetProvider>
  );
}
