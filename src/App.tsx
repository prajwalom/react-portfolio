import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { BackgroundElements } from './components/BackgroundElement';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setMounted(true);
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={handleLoadingComplete} />
        ) : (
          <div key="main">
            <BackgroundElements />
            <Navigation />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            
            {/* Footer */}
            <footer className="bg-black/90 backdrop-blur-sm border-t border-gray-800/50 py-12 relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p className="text-gray-400 text-lg mb-2">
                    © 2025 Prajwal Padole. Built with React, TypeScript, and Tailwind CSS.
                  </p>
                  <p className="text-gray-500 text-base">
                    Designed with ❤️ and lots of coffee
                  </p>
                </div>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;