import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';
import logo from '../assets/f3a69a3d9c1caa53d0218732321738e09dc9445b.png';

export function Recruitment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleApply = () => {
    toast.success('지원서가 제출되었습니다!', {
      description: '담당자가 곧 연락드리겠습니다.',
      style: {
        background: '#ffffff',
        color: '#000000',
        border: '1px solid #e5e5e5',
      },
    });
  };

  const handleContact = () => {
    window.location.href = 'mailto:cuvic@cbnu.ac.kr';
  };

  return (
    <footer id="join" className="h-[982px] bg-white text-black py-24 px-6 relative flex items-center" ref={ref}>
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="uppercase tracking-[0.3em] font-bold mb-4 text-sm">Recruitment</div>
          <h2 className="text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            JOIN
            <br />
            CUVIC
          </h2>
          <div className="space-y-2 text-lg font-medium mb-8">
            <p>충북대학교 소프트웨어학과 재학생이라면 누구나.</p>
            <p>모집 기간: 매 학기 초 (3월, 9월)</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-row gap-4"
          >
            <button
              onClick={handleApply}
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={handleContact}
              className="border-2 border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-auto text-right"
        >
          <div className="mb-8">
            <h3 className="font-bold text-xl mb-2">Leadership</h3>
            <p>회장: 홍길동 (소프트웨어학과 22학번)</p>
            <p className="text-gray-500 italic mt-1">"CUVIC과 함께 성장하는 개발자가 됩시다."</p>
          </div>

          <div className="border-t border-black/10 pt-8 mt-8 text-sm text-gray-500">
            <p>충북대학교 소프트웨어학과 학술 동아리</p>
            <p className="mb-4">Email: cuvic@cbnu.ac.kr</p>
            <p>© 2025 CUVIC. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}