import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="activities" className="h-[982px] px-6 py-24 bg-[#0a0a0a] flex items-center" ref={ref}>
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-row justify-between items-end mb-8"
        >
          <h2 className="text-5xl font-black tracking-tighter">What We Do</h2>
          <span className="text-gray-500 text-sm uppercase tracking-widest">(Activities)</span>
        </motion.div>

        <div className="grid grid-cols-4 gap-4" style={{ height: '450px' }}>
          {/* Card 1: Algorithm Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#1c1c1c] p-8 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500 col-span-2 row-span-2 cursor-default"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGdvcml0aG0lMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Algorithm Study"
                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
            <div className="absolute top-8 right-8 text-4xl group-hover:scale-110 transition-transform duration-300">🧩</div>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex gap-2">
                <span className="text-xs font-bold border border-gray-600 px-3 py-1 rounded-full uppercase">Study</span>
                <span className="text-xs font-bold border border-gray-600 px-3 py-1 rounded-full uppercase">C++</span>
              </div>
              <div>
                <h3 className="text-4xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  Algorithm Study
                </h3>
                <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  매주 진행되는 백준/프로그래머스 문제 풀이 및 코드 리뷰 세션.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
          </motion.div>

          {/* Card 2: Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-[#1c1c1c] p-8 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500 cursor-default col-span-2 row-span-1"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1732210038505-34a70d3b45a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29kaW5nJTIwZGV2ZWxvcGVyc3xlbnwxfHx8fDE3Njk1NDIyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Projects"
                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
            <div className="absolute top-8 right-8 text-4xl group-hover:scale-110 transition-transform duration-300">💻</div>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-xs font-bold border border-gray-600 px-3 py-1 rounded-full uppercase">Dev</span>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-3">Team Projects</h3>
                <p className="text-gray-400 text-sm">웹, 앱, AI 등 다양한 분야의 팀 프로젝트 수행 및 전시.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Mentoring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-[#1c1c1c] p-8 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500 cursor-default col-span-1 row-span-1"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758525862357-27fb39545240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JpbmclMjBjb2xsYWJvcmF0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY5NTQyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mentoring"
                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
            <div className="absolute top-8 right-8 text-4xl group-hover:scale-110 transition-transform duration-300">🤝</div>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-xs font-bold border border-gray-600 px-3 py-1 rounded-full uppercase">Network</span>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-3">Mentoring</h3>
                <p className="text-gray-400 text-sm">선배와 신입생이 함께하는 1:1 기술 멘토링 프로그램.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative bg-white/70 text-black p-8 rounded-2xl overflow-hidden hover:bg-white/80 transition-all duration-500 cursor-default col-span-1 row-span-1"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvbXBldGl0aW9uJTIwY29kaW5nJTIwY29udGVzdHxlbnwxfHx8fDE3Njk1NDIzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Awards & Hackathons"
                className="w-full h-full object-cover grayscale opacity-15 group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              />
            </div>
            <div className="absolute top-8 right-8 text-4xl group-hover:scale-110 transition-transform duration-300">🏆</div>
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-xs font-bold border border-black/30 px-3 py-1 rounded-full uppercase">Contest</span>
              </div>
              <div>
                <h3 className="text-4xl font-black mb-3">Awards & Hackathons</h3>
                <p className="text-base text-gray-800">교내외 프로그래밍 대회 및 해커톤 참가. 누적 12회 이상의 수상 경력.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}