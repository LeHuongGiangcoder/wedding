"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    // Only play the Hero animation after the custom 'intro-done' event is fired 
    // by the Intro component, or immediately if we bypassed the intro.
    const playHeroAnimation = () => {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from(["#title-1", "#title-2", "#title-3"], {
          y: 40,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.2
        }).from("#subtitle", {
          opacity: 0,
          y: 20,
          duration: 2,
          ease: "power2.out"
        }, "-=1");
      }, comp);
      
      return () => ctx.revert();
    };

    const handleIntroDone = () => {
      playHeroAnimation();
    };

    window.addEventListener("intro-done", handleIntroDone);

    return () => {
      window.removeEventListener("intro-done", handleIntroDone);
    };
  }, []);

  return (
    <section ref={comp} className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/1.jpg"
          alt="Oliver & Nguyen Wedding"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-[#faf8f1] px-4 pt-16 mt-16 max-w-5xl">
        <h1 className="font-editorial text-6xl md:text-8xl lg:text-[10rem] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 leading-none mb-12">
          <span id="title-1" className="block transform-gpu">Oliver</span> 
          <span id="title-2" className="italic font-light text-5xl md:text-7xl lg:text-9xl opacity-80 transform-gpu my-2 md:my-0">&</span> 
          <span id="title-3" className="block transform-gpu">Nguyen</span>
        </h1>
        <p id="subtitle" className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-90 mx-auto max-w-md transform-gpu">
          12 . 12 . 2026
          <br/><br/>
          Villa Balbiano, Lake Como
        </p>
      </div>
    </section>
  );
}
