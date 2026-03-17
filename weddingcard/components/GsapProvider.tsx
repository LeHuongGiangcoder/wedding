"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Global ScrollTrigger animations
    
    // Animating all section headings
    const headings = gsap.utils.toArray("h2.font-editorial, h3.font-editorial") as HTMLElement[];
    headings.forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    // Fade up generic text content
    const paragraphs = gsap.utils.toArray("p:not(#subtitle)") as HTMLElement[];
    paragraphs.forEach((p) => {
      gsap.from(p, {
        scrollTrigger: {
          trigger: p,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Parallax images
    const images = gsap.utils.toArray("img") as HTMLElement[];
    images.forEach((img) => {
      // Don't parallax the hero image as it is handled or static
      if (!img.closest("section#hero") && !img.closest(".hero-ignore")) {
        gsap.fromTo(img, 
          { scale: 1.1 },
          {
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
