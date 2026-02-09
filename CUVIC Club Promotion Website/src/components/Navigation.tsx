import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface NavigationProps {
  isLoaded?: boolean;
}

export function Navigation({ isLoaded = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className={`fixed top-0 w-full z-50 text-white ${isMenuOpen ? '' : 'mix-blend-difference'}`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-5 flex justify-between items-center relative z-[60]">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-extrabold tracking-tighter hover:opacity-70 transition-opacity"
          >
            CUVIC.
          </button>

          {/* 데스크톱/태블릿 네비게이션 - CSS 미디어 쿼리로 표시/숨김 */}
          <div className="nav-desktop items-center gap-4 md:gap-8 text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
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

          {/* 모바일 햄버거 버튼 - CSS 미디어 쿼리로 표시/숨김 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-mobile"
            aria-label="메뉴 열기"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '24px', height: '2px', backgroundColor: 'white', display: 'block', transformOrigin: 'center' }}
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ width: '24px', height: '2px', backgroundColor: 'white', display: 'block' }}
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: '24px', height: '2px', backgroundColor: 'white', display: 'block', transformOrigin: 'center' }}
            />
          </button>
        </div>

        {/* 모바일 메뉴 오버레이 - nav 요소 내부로 이동 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex flex-col items-center justify-center"
              style={{ zIndex: 55, backgroundColor: 'black' }}
            >
              <nav className="flex flex-col items-center gap-8">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={() => scrollToSection('home')}
                  className="text-2xl font-bold uppercase tracking-[0.15em] text-white"
                >
                  About
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={() => scrollToSection('activities')}
                  className="text-2xl font-bold uppercase tracking-[0.15em] text-white"
                >
                  Activities
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  onClick={() => scrollToSection('history')}
                  className="text-2xl font-bold uppercase tracking-[0.15em] text-white"
                >
                  History
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => scrollToSection('join')}
                  className="text-xl font-bold uppercase tracking-[0.15em] text-black bg-white px-8 py-4 rounded-full mt-4"
                >
                  Join Us
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}