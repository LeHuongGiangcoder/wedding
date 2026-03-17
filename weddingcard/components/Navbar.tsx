"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["Our Story", "The Event", "Destination", "RSVP"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out px-6 md:px-12 flex items-center justify-between",
          scrolled || menuOpen
            ? "bg-background/90 backdrop-blur-md border-b border-foreground/10 py-4"
            : "bg-transparent py-6"
        )}
      >
        <Link href="/" className="font-editorial text-2xl tracking-tight text-foreground" onClick={() => setMenuOpen(false)}>
          O & N
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity"
            >
              {item}
            </Link>
          ))}
        </div>
        
        <button 
          className="md:hidden flex flex-col justify-center gap-1.5 z-50 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("w-6 h-[1.5px] bg-foreground block transition-all duration-300 ease-out", menuOpen ? "rotate-45 translate-y-[7px]" : "")}></span>
          <span className={cn("w-6 h-[1.5px] bg-foreground block transition-all duration-300 ease-out", menuOpen ? "opacity-0" : "opacity-100")}></span>
          <span className={cn("w-6 h-[1.5px] bg-foreground block transition-all duration-300 ease-out", menuOpen ? "-rotate-45 -translate-y-[7px]" : "")}></span>
        </button>
      </nav>

      <div 
        className={cn(
          "fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-opacity duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-2xl font-editorial tracking-wider text-foreground hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
