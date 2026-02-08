import { useEffect, useRef } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: -100, y: -100 });
    const targetRef = useRef({ x: -100, y: -100 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        // 마우스 위치 업데이트
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX - 8, y: e.clientY - 8 };
        };

        // requestAnimationFrame을 사용한 부드러운 보간
        const animate = () => {
            const lerp = (start: number, end: number, factor: number) => {
                return start + (end - start) * factor;
            };

            // 현재 위치를 목표 위치로 부드럽게 보간 (0.5 = 50% 씩 이동)
            positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.5);
            positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.5);

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="hidden md:block fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                left: 0,
                top: 0,
                willChange: "transform",
            }}
        />
    );
}
