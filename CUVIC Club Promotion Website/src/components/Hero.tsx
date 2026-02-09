import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// 로컬 이미지 import
import img001 from "../assets/KakaoTalk_Image_2026-02-09-06-24-33_001.jpeg";
import img002 from "../assets/KakaoTalk_Image_2026-02-09-06-24-33_002.jpeg";
import img003 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_003.jpeg";
import img004 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_004.jpeg";
import img005 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_005.jpeg";
import img006 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_006.jpeg";
import img007 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_007.jpeg";
import img008 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_008.jpeg";
import img009 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_009.jpeg";
import img010 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_010.jpeg";
import img011 from "../assets/KakaoTalk_Image_2026-02-09-06-24-34_011.jpeg";
import img012 from "../assets/KakaoTalk_Image_2026-02-09-06-25-23_001.jpeg";
import img013 from "../assets/KakaoTalk_Image_2026-02-09-06-25-23_002.jpeg";
import img014 from "../assets/KakaoTalk_Image_2026-02-09-06-25-23_003.jpeg";
import img015 from "../assets/KakaoTalk_Image_2026-02-09-06-25-23_004.jpeg";

interface HeroProps {
    isLoaded?: boolean;
}

export function Hero({ isLoaded = false }: HeroProps) {
    // 15개의 이미지를 무작위 순서로 배치 (고정된 무작위 순서)
    const shuffledImages = [
        { src: img007, alt: "CUVIC Activity 7" },
        { src: img003, alt: "CUVIC Activity 3" },
        { src: img012, alt: "CUVIC Activity 12" },
        { src: img001, alt: "CUVIC Activity 1" },
        { src: img009, alt: "CUVIC Activity 9" },
        { src: img015, alt: "CUVIC Activity 15" },
        { src: img005, alt: "CUVIC Activity 5" },
        { src: img011, alt: "CUVIC Activity 11" },
        { src: img002, alt: "CUVIC Activity 2" },
        { src: img014, alt: "CUVIC Activity 14" },
        { src: img008, alt: "CUVIC Activity 8" },
        { src: img004, alt: "CUVIC Activity 4" },
        { src: img010, alt: "CUVIC Activity 10" },
        { src: img006, alt: "CUVIC Activity 6" },
        { src: img013, alt: "CUVIC Activity 13" },
    ];

    // 3줄로 분할 (각 5개씩)
    const imagesRow1 = shuffledImages.slice(0, 5);
    const imagesRow2 = shuffledImages.slice(5, 10);
    const imagesRow3 = shuffledImages.slice(10, 15);

    return (
        <section
            id="home"
            className="min-h-[100dvh] h-[100dvh] flex flex-col justify-center px-6 py-24 relative overflow-hidden bg-black"
        >
            <div className="absolute inset-0 z-0 select-none flex flex-col justify-start" style={{ gap: '24px', paddingTop: '70px', paddingBottom: '0' }}>
                {[
                    { row: imagesRow1, direction: "left", speed: 30 },
                    { row: imagesRow2, direction: "right", speed: 26 },
                    { row: imagesRow3, direction: "left", speed: 34 },
                ].map((config, rowIndex) => (
                    <div 
                        key={rowIndex} 
                        className="overflow-hidden shrink-0"
                        style={{ height: '180px' }}
                    >
                        <div 
                            className={`flex ${config.direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                            style={{ 
                                width: 'max-content',
                                animationDuration: `${config.speed}s`,
                                gap: '10px',
                            }}
                        >
                            {/* 첫 번째 세트 */}
                            {config.row.map((image, index) => (
                                <div
                                    key={`row-${rowIndex}-1-${index}`}
                                    className="shrink-0"
                                    style={{ width: '270px', height: '180px' }}
                                >
                                    <div className="w-full h-full rounded-lg overflow-hidden">
                                        <ImageWithFallback
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover grayscale opacity-60"
                                            draggable="false"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* 두 번째 세트 (복제) */}
                            {config.row.map((image, index) => (
                                <div
                                    key={`row-${rowIndex}-2-${index}`}
                                    className="shrink-0"
                                    style={{ width: '270px', height: '180px' }}
                                >
                                    <div className="w-full h-full rounded-lg overflow-hidden">
                                        <ImageWithFallback
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover grayscale opacity-60"
                                            draggable="false"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* 세 번째 세트 (복제) */}
                            {config.row.map((image, index) => (
                                <div
                                    key={`row-${rowIndex}-3-${index}`}
                                    className="shrink-0"
                                    style={{ width: '270px', height: '180px' }}
                                >
                                    <div className="w-full h-full rounded-lg overflow-hidden">
                                        <ImageWithFallback
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover grayscale opacity-60"
                                            draggable="false"
                                        />
                                    </div>
                                </div>
                            ))}
                            {/* 네 번째 세트 (복제) */}
                            {config.row.map((image, index) => (
                                <div
                                    key={`row-${rowIndex}-4-${index}`}
                                    className="shrink-0"
                                    style={{ width: '270px', height: '180px' }}
                                >
                                    <div className="w-full h-full rounded-lg overflow-hidden">
                                        <ImageWithFallback
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover grayscale opacity-60"
                                            draggable="false"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 z-10 pointer-events-none" />

            {/* Content */}
            <div className="max-w-[1280px] w-full mx-auto px-4 md:px-12 relative z-20">
                <div className="nav-logo-padding">
                    <div className="overflow-hidden mb-5">
                        <motion.h2
                            initial={{ y: "120%" }}
                            animate={isLoaded ? { y: 0 } : { y: "120%" }}
                            transition={{
                                duration: 1.5,
                                delay: 0.4,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-sm md:text-lg text-gray-400 uppercase tracking-[0.3em]"
                        >
                            <span>
                                <span className="font-black text-white">C</span>
                                hungbuk{" "}
                                <span className="font-black text-white">U</span>niv.{" "}
                                <span className="font-black text-white">Vi</span>
                                sual{" "}
                                <span className="font-black text-white">C</span>++
                                Club
                            </span>
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "120%" }}
                            animate={isLoaded ? { y: 0 } : { y: "120%" }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-5xl md:text-[100px] leading-[1.1] font-black tracking-tighter"
                        >
                            <span>NON-STRUCT</span>
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-5">
                        <motion.h1
                            initial={{ y: "120%" }}
                            animate={isLoaded ? { y: 0 } : { y: "120%" }}
                            transition={{
                                duration: 1.5,
                                delay: 0.6,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-5xl md:text-[100px] leading-[1.1] font-black tracking-tighter"
                        >
                            <span
                                className="text-outline"
                                style={{
                                    WebkitTextFillColor: "rgba(156, 163, 175, 0.5)",
                                    color: "rgba(156, 163, 175, 0.5)",
                                }}
                            >
                                DATA LAB.
                            </span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-12"
                    >
                        <div className="h-[1px] w-full bg-gradient-to-r from-gray-600 via-white to-gray-600 mb-8" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <p className="text-lg font-medium leading-relaxed text-gray-300">
                                    데이터 분석, 알고리즘, 그리고 프로그래밍의
                                    경계를 넘어
                                    <br />
                                    함께 성장하는 개발자 커뮤니티
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-5 text-sm text-gray-400 uppercase tracking-[0.2em]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={
                                        isLoaded
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0.8 }
                                    }
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                >
                                    <span className="block text-white text-2xl font-bold mb-1">
                                        50+
                                    </span>
                                    Members
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={
                                        isLoaded
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0.8 }
                                    }
                                    transition={{ duration: 0.6, delay: 1.3 }}
                                >
                                    <span className="block text-white text-2xl font-bold mb-1">
                                        12
                                    </span>
                                    Awards
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={
                                        isLoaded
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0.8 }
                                    }
                                    transition={{ duration: 0.6, delay: 1.4 }}
                                >
                                    <span className="block text-white text-2xl font-bold mb-1">
                                        30+
                                    </span>
                                    Projects
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={
                                        isLoaded
                                            ? { opacity: 1, scale: 1 }
                                            : { opacity: 0, scale: 0.8 }
                                    }
                                    transition={{ duration: 0.6, delay: 1.5 }}
                                >
                                    <span className="block text-white text-2xl font-bold mb-1">
                                        1995
                                    </span>
                                    Est.
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
