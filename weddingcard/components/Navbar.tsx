"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-6 md:px-12 flex items-center justify-between",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <Link href="/" className="font-editorial text-2xl tracking-tight text-foreground">
        O & N
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {["Our Story", "The Event", "Destination", "RSVP"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity"
          >
            {item}
          </Link>
        ))}
      </div>
      
      <button className="md:hidden flex flex-col gap-1.5 z-50">
        <span className="w-6 h-0.5 bg-foreground block"></span>
        <span className="w-6 h-0.5 bg-foreground block"></span>
      </button>
    </nav>
  );
}
