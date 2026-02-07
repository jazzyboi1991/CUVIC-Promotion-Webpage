export function MarqueeText() {
  const text = "Let's Grow Together • CUVIC • Algorithm • Big Data • AI • Networking • ";
  
  return (
    <div className="w-full overflow-hidden bg-white text-black py-12 border-y border-gray-800">
      <div 
        className="flex whitespace-nowrap animate-text-marquee"
        style={{ width: 'max-content' }}
      >
        {/* 2세트로 무한 스크롤 */}
        <span className="text-3xl md:text-6xl font-black mx-4 uppercase">{text}</span>
        <span className="text-3xl md:text-6xl font-black mx-4 uppercase">{text}</span>
        <span className="text-3xl md:text-6xl font-black mx-4 uppercase">{text}</span>
        <span className="text-3xl md:text-6xl font-black mx-4 uppercase">{text}</span>
      </div>
    </div>
  );
}