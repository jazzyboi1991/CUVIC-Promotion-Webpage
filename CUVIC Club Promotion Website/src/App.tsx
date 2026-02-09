import { useState } from 'react';
import { Hero } from './components/Hero';
import { MarqueeText } from './components/MarqueeText';
import { Activities } from './components/Activities';
import { Timeline } from './components/Timeline';
import { Recruitment } from './components/Recruitment';
import { Navigation } from './components/Navigation';
import { Toaster } from './components/ui/sonner';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <CustomCursor />
      <Navigation isLoaded={isLoaded} />
      <SmoothScroll>
        <div className="bg-[#050505] text-white antialiased selection:bg-white selection:text-black">
          <Hero isLoaded={isLoaded} />
          <MarqueeText />
          <Activities />
          <Timeline />
          <Recruitment />
          <Toaster 
            toastOptions={{
              style: {
                background: '#ffffff',
                color: '#000000',
                border: '1px solid #e5e5e5',
              },
              classNames: {
                description: 'text-gray-700',
              },
            }}
          />
        </div>
      </SmoothScroll>
    </>
  );
}