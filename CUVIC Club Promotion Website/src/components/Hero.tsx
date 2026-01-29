import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  isLoaded?: boolean;
}

export function Hero({ isLoaded = false }: HeroProps) {
  const imagesRow1 = [
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600', alt: 'Teamwork' },
    { url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600', alt: 'Coding' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600', alt: 'Team Meeting' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600', alt: 'Workshop' },
    { url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600', alt: 'Developer' },
    { url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600', alt: 'Collaboration' },
  ];

  const imagesRow2 = [
    { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600', alt: 'Workspace' },
    { url: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=600', alt: 'Discussion' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600', alt: 'Brainstorming' },
    { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600', alt: 'Tech Team' },
    { url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600', alt: 'Laptop Work' },
    { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600', alt: 'Code Review' },
  ];

  const imagesRow3 = [
    { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600', alt: 'Planning' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', alt: 'Group Study' },
    { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600', alt: 'Team Building' },
    { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600', alt: 'Conference' },
    { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600', alt: 'Office Work' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600', alt: 'Seminar' },
  ];

  return (
    <section id="home" className="h-[982px] flex flex-col justify-center px-6 py-24 relative overflow-hidden bg-black">
      {/* Background Gallery - Infinite Scroll */}
      <div className="absolute inset-0 z-0 select-none flex flex-col justify-center gap-[100px]">
        <div className="w-full">
          <div className="flex space-x-4 animate-marquee-reverse">
            {[...imagesRow1, ...imagesRow1, ...imagesRow1, ...imagesRow1].map((image, index) => (
              <div
                key={index}
                className="w-[300px] h-[200px] rounded-lg overflow-hidden shrink-0"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale opacity-60"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full">
          <div className="flex space-x-4 animate-marquee">
            {[...imagesRow2, ...imagesRow2, ...imagesRow2, ...imagesRow2].map((image, index) => (
              <div
                key={`second-${index}`}
                className="w-[300px] h-[200px] rounded-lg overflow-hidden shrink-0"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale opacity-60"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full">
          <div className="flex space-x-4 animate-marquee-reverse">
            {[...imagesRow3, ...imagesRow3, ...imagesRow3, ...imagesRow3].map((image, index) => (
              <div
                key={`third-${index}`}
                className="w-[300px] h-[200px] rounded-lg overflow-hidden shrink-0"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale opacity-60"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="max-w-[1280px] w-full mx-auto relative z-20">
        <div className="overflow-hidden mb-5">
          <motion.h2
            initial={{ y: '120%' }}
            animate={isLoaded ? { y: 0 } : { y: '120%' }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-lg text-gray-400 uppercase tracking-[0.3em]"
          >
            <span>
              <span className="font-black text-white">C</span>hungbuk{' '}
              <span className="font-black text-white">U</span>niv.{' '}
              <span className="font-black text-white">Vi</span>sual{' '}
              <span className="font-black text-white">C</span>++ Club
            </span>
          </motion.h2>
        </div>
        
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '120%' }}
            animate={isLoaded ? { y: 0 } : { y: '120%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-[100px] leading-[1.1] font-black tracking-tighter"
          >
            <span>NON-STRUCT</span>
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: '120%' }}
            animate={isLoaded ? { y: 0 } : { y: '120%' }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="text-[100px] leading-[1.1] font-black tracking-tighter"
          >
            <span 
              className="text-outline"
              style={{ 
                WebkitTextFillColor: 'rgba(156, 163, 175, 0.5)',
                color: 'rgba(156, 163, 175, 0.5)'
              }}
            >
              DATA LAB.
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-gray-600 via-white to-gray-600 mb-8" />
          
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-lg font-light leading-relaxed text-gray-300">
                데이터 분석, 알고리즘, 그리고 프로그래밍의 경계를 넘어 함께<br />성장하는 개발자 커뮤니티
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-5 text-sm text-gray-400 uppercase tracking-[0.2em]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <span className="block text-white text-2xl font-bold mb-1">50+</span>
                Members
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <span className="block text-white text-2xl font-bold mb-1">12</span>
                Awards
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <span className="block text-white text-2xl font-bold mb-1">30+</span>
                Projects
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <span className="block text-white text-2xl font-bold mb-1">1995</span>
                Est.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}