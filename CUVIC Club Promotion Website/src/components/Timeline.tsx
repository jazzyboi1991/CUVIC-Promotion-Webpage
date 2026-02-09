import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    { year: '2024', event: 'New Website Launch', tag: 'Web / Branding' },
    { year: '2020', event: 'Online Study Groups', tag: 'Pandemic Response' },
    { year: '2015', event: '20th Anniversary Hackathon', tag: 'Event' },
    { year: '2010', event: 'Rebrand: Unstructured Data Lab', tag: 'Identity' },
    { year: '2000', event: 'First Programming Contest Award', tag: 'Achievement' },
    { year: '1995', event: 'CUVIC Founded', tag: 'Origin' },
  ];

  return (
    <section id="history" className="min-h-screen lg:h-[982px] px-6 py-24 bg-[#0a0a0a] flex items-center" ref={ref}>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-12">
        <div className="nav-logo-padding">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black mb-12 tracking-tighter"
          >
            History <span className="text-gray-600">(Timeline)</span>
          </motion.h2>

          <div className="border-t border-gray-800">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center py-6 border-b border-gray-800 hover:bg-white hover:text-black transition-all duration-300 cursor-default px-4 -mx-4"
              >
                <div className="w-full md:w-32 text-xl font-mono text-gray-500 group-hover:text-black transition-colors duration-300 mb-2 md:mb-0">
                  {item.year}
                </div>
                <div className="w-full md:flex-1 text-2xl md:text-3xl font-black group-hover:translate-x-2 transition-transform duration-300">
                  {item.event}
                </div>
                <div className="text-sm uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {item.tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}