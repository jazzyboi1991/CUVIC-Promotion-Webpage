import { motion } from 'motion/react';

interface NavigationProps {
  isLoaded?: boolean;
}

export function Navigation({ isLoaded = false }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0; // 모든 섹션이 화면 상단과 정확히 일치하도록 오프셋 제거
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="fixed top-0 w-full z-50 mix-blend-difference"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-extrabold tracking-tighter hover:opacity-70 transition-opacity"
        >
          CUVIC.
        </button>
        <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium uppercase tracking-[0.2em] overflow-x-auto scrollbar-hide">
          <button onClick={() => scrollToSection('home')} className="hover:underline underline-offset-4 px-3 py-1 hover:bg-white hover:text-black transition-all rounded">
            About
          </button>
          <button onClick={() => scrollToSection('activities')} className="hover:underline underline-offset-4 px-3 py-1 hover:bg-white hover:text-black transition-all rounded">
            Activities
          </button>
          <button onClick={() => scrollToSection('history')} className="hover:underline underline-offset-4 px-3 py-1 hover:bg-white hover:text-black transition-all rounded">
            History
          </button>
          <button 
            onClick={() => scrollToSection('join')}
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Join Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
}