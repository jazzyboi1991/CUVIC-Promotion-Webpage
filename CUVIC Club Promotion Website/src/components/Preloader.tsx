import { useEffect, useState, ReactElement } from 'react';
import { motion, useAnimation } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

interface CodeSegment {
  text: string;
  className: string;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [codeLines, setCodeLines] = useState<ReactElement[]>([]);
  const [percentage, setPercentage] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const controls = useAnimation();

  const codeData: CodeSegment[][] = [
    [
      { text: "toDo", className: "text-gray-100" },
      { text: " = ", className: "text-gray-500" },
      { text: "doAssignment", className: "text-blue-400" },
      { text: "()", className: "text-gray-500" }
    ],
    [
      { text: "if ", className: "text-pink-400" },
      { text: "toDo ", className: "text-gray-100" },
      { text: "!= ", className: "text-gray-500" },
      { text: "whatIwant", className: "text-gray-100" }
    ],
    [
      { text: "     sol", className: "text-gray-100" }, 
      { text: " = ", className: "text-gray-500" },
      { text: "goCuvic", className: "text-blue-400" },
      { text: "(toDo)", className: "text-gray-500" }
    ],
    [
      { text: "     return ", className: "text-pink-400" },
      { text: "sol", className: "text-gray-100" }
    ]
  ];

  useEffect(() => {
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // 전체 글자 수 계산
    const totalChars = codeData.flat().reduce((acc, segment) => acc + segment.text.length, 0);
    let currentChars = 0;

    async function typeCode() {
      const lines: ReactElement[] = [];

      for (let i = 0; i < codeData.length; i++) {
        const lineData = codeData[i];
        const segments: ReactElement[] = [];
        let segmentKey = 0;

        for (let segment of lineData) {
          let currentText = '';
          
          for (let char of segment.text) {
            currentText += char;
            currentChars++;
            
            // 퍼센트 업데이트
            const newPercentage = Math.min(Math.floor((currentChars / totalChars) * 100), 100);
            setPercentage(newPercentage);

            // 현재까지의 세그먼트 생성
            const tempSegments = [...segments];
            tempSegments.push(
              <span key={segmentKey} className={segment.className}>
                {currentText}
              </span>
            );

            // 커서 추가
            const lineElement = (
              <div key={i} className="leading-relaxed">
                {tempSegments}
                <span className="inline-block w-[3px] h-[1.1em] bg-blue-400 ml-1 align-sub"></span>
              </div>
            );

            setCodeLines([...lines, lineElement]);

            // 타이핑 속도
            await wait(Math.random() * 50 + 30);
          }

          // 세그먼트 완성 후 segments 배열에 추가
          segments.push(
            <span key={segmentKey} className={segment.className}>
              {currentText}
            </span>
          );
          segmentKey++;
        }

        // 줄 완성 - 커서 제거
        const completedLine = (
          <div key={i} className="leading-relaxed">
            {segments}
            {i === codeData.length - 1 && (
              <span className="inline-block w-[3px] h-[1.1em] bg-blue-400 ml-1 align-sub animate-pulse"></span>
            )}
          </div>
        );

        lines.push(completedLine);
        setCodeLines([...lines]);

        // 줄바꿈 딜레이
        if (i < codeData.length - 1) {
          await wait(250);
        }
      }

      finishLoading();
    }

    function finishLoading() {
      // 타이핑 끝남 -> 100% 확정
      setPercentage(100);
      setShowLogo(true);

      setTimeout(() => {
        controls.start({
          y: '-100%',
          transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
        }).then(() => {
          onComplete();
        });
      }, 1500);
    }

    setTimeout(() => {
      typeCode();
    }, 500);
  }, [controls, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={controls}
      className="fixed inset-0 z-[100] bg-[#151515] flex flex-col items-center justify-center"
    >
      <div className="relative">
        <div className="font-medium tracking-wider text-xl md:text-4xl text-left whitespace-pre">
          {codeLines}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={showLogo ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <h1 className="text-sm font-bold tracking-[0.4em] text-gray-500 uppercase">cuvic;</h1>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-gray-600 text-lg">
        {percentage}%
      </div>
    </motion.div>
  );
}
