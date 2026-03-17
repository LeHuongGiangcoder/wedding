import Image from "next/image";

export default function DressCode() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-foreground/10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="w-full lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50">Dress Code</p>
          <h2 className="font-editorial text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight">
            Cinematic Noir & <br/> Old World Glamour
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-80 mb-10">
            <p>
              We request our guests to dress in formal black-tie attire with a 
              cinematic, vintage flair. Think 1950s Italian cinema, dramatic silhouettes, 
              and timeless elegance. 
            </p>
            <p>
              <strong>Men:</strong> Classic black tuxedos, crisp white shirts, and black bowties.
              <br/>
              <strong>Women:</strong> Floor-length gowns in deep, rich tones (black, emerald, ruby, or midnight blue). 
              Vintage-inspired accessories are highly encouraged.
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-8">
          <div className="relative aspect-[3/4] w-full mt-12 md:mt-24">
            <Image 
              src="/assets/6.jpg" 
              alt="Moodboard Inspiration" 
              fill 
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover grayscale" 
            />
          </div>
          <div className="relative aspect-[3/4] w-full">
            <Image 
              src="/assets/7.jpg" 
              alt="Moodboard Inspiration" 
              fill 
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover grayscale" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
