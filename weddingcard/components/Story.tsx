import Image from "next/image";

export default function Story() {
  return (
    <section id="our-story" className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <Image 
              src="/assets/8.jpg" 
              alt="Oliver and Nguyen" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div className="absolute -bottom-10 -right-4 lg:-right-12 w-48 h-56 hidden md:block z-10">
            <Image 
              src="/assets/5.jpg" 
              alt="Hands" 
              fill 
              sizes="200px"
              className="object-cover border-8 border-background" 
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 max-w-lg">
          <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50">Our Story</p>
          <h2 className="font-editorial text-5xl md:text-7xl mb-8 leading-[1.1]">
            A love born in <br /> the eternal city.
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-80 font-light">
            <p>
              It started with a chance encounter in a dimly lit cafe in Rome. 
              The espresso was bitter, but the conversation was intoxicating. 
              Oliver was sketching the architecture; Nguyen was lost in a novel. 
              A spilled drink led to an apology, which led to a walk around the 
              Colosseum, which somehow led to the rest of our lives.
            </p>
            <p>
              Over the next five years, we built a life together across three continents. 
              We chased sunsets in Santorini, survived winters in New York, and finally 
              decided that out of all the places in the world, the only place we truly 
              belong is beside each other.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
