export default function Footer() {
  return (
    <footer className="w-full py-24 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        
        <div className="space-y-4">
          <h2 className="font-editorial text-4xl md:text-6xl text-background">Oliver & Nguyen</h2>
          <p className="text-sm tracking-widest uppercase opacity-70">
            December 12, 2026 • The Grand Villa, Como
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-shrink-0">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Navigation</p>
          {["Our Story", "The Event", "Destination", "RSVP"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm hover:opacity-100 transition-opacity opacity-70"
            >
              {item}
            </a>
          ))}
        </div>
        
      </div>
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-background/20 text-center text-xs tracking-widest opacity-50">
        &copy; {new Date().getFullYear()} Oliver & Nguyen. All rights reserved.
      </div>
    </footer>
  );
}
