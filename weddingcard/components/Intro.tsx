"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll initially
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    // We scroll to top so the Hero is perfectly positioned underneath
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpen = () => {
    if (!container.current || isOpen) return;
    setIsOpen(true);

    // Play Audio (Need user interaction to bypass autoplay policies)
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }

    // GSAP Unlock Animation
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto"; // Unlock scroll
        // Dispatch event so Hero component knows it can start its animations
        window.dispatchEvent(new Event("intro-done"));
        
        // Optionally unmount or hide completely
        if (container.current) {
          container.current.style.display = "none";
        }
      }
    });

    tl.to(".envelope-flap", {
      rotateX: 180,
      transformOrigin: "top border",
      duration: 1.2,
      ease: "power3.inOut"
    })
    .to(".envelope-seal", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    }, "-=1.2")
    .to(".invitation-card", {
      y: -40,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .to(container.current, {
      opacity: 0,
      scale: 1.05,
      duration: 1.5,
      ease: "power3.inOut"
    }, "+=0.3");
  };

  return (
    <div 
      ref={container} 
      className="fixed inset-0 z-[100] bg-[#e6e2d6] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Audio Element - Placeholder URL to be replaced by actual asset later */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=smooth-waters-115977.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative w-full max-w-[90vw] md:max-w-[600px] h-[250px] md:h-[400px] perspective-1000 group">
        
        {/* Envelope Back / Inside */}
        <div className="absolute inset-0 bg-[#d8d3c5] shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Inner Invitation Card sliding up */}
          <div className="invitation-card bg-[#faf8f1] w-[95%] h-[95%] shadow-sm flex flex-col items-center justify-center p-6 text-center transform translate-y-12 opacity-0 z-10 border border-foreground/5">
            <h2 className="font-editorial text-4xl md:text-5xl text-foreground">Oliver & Nguyen</h2>
          </div>
        </div>

        {/* Left Flap */}
        <div className="absolute inset-0 bg-[#e3decf] z-20" style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}></div>

        {/* Right Flap */}
        <div className="absolute inset-0 bg-[#e3decf] z-20" style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)" }}></div>

        {/* Bottom Flap */}
        <div className="absolute inset-0 bg-[#eae5d8] z-30" style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }}></div>

        {/* Top Flap */}
        <div className="envelope-flap absolute inset-0 bg-[#f0ebd9] z-40 origin-top transform-gpu" style={{ clipPath: "polygon(0 0, 50% 50%, 100% 0)" }}></div>

        {/* Wax Seal & Button */}
        <div className="envelope-seal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 mt-6 md:mt-10">
          <button 
            onClick={handleOpen}
            className={cn(
              "w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#8b1c1c] shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#e6e2d6] font-editorial text-2xl md:text-3xl transition-transform hover:scale-105 active:scale-95",
              isOpen && "pointer-events-none"
            )}
            style={{
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.4), 0 8px 15px rgba(0,0,0,0.2)"
            }}
          >
            O&N
          </button>
          
          <p className="text-[#0c0c0c] uppercase tracking-widest text-xs animate-pulse opacity-70">
            Click to Open
          </p>
        </div>
      </div>
    </div>
  );
}
