import Image from "next/image";

export default function Destination() {
  return (
    <section id="destination" className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-32">
        <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50">Destination</p>
        <h2 className="font-editorial text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8">Villa Balbiano, Lake Como</h2>
        <p className="max-w-2xl mx-auto opacity-70 text-sm md:text-base leading-relaxed">
          Situated on the western shore of Lake Como, Villa Balbiano is an awe-inspiring 
          historical palazzo that once belonged to the famous Cardinal Tolomeo Gallio.
          With its spectacular gardens, breathtaking lake views, and rich frescoes, 
          it presents a timeless European charm perfectly suited for our celebration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image 
            src="/assets/10.jpg" 
            alt="Villa Exterior" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover" 
          />
        </div>
        
        <div className="space-y-12 lg:space-y-24">
          <div className="relative aspect-[3/4] w-3/4 ml-auto lg:mr-0 z-10">
            <Image 
              src="/assets/9.jpg" 
              alt="Villa Interior" 
              fill 
              sizes="(max-width: 1024px) 75vw, 35vw"
              className="object-cover" 
            />
          </div>
          
          <div className="bg-foreground text-background p-8 md:p-16 relative z-20 -mt-12 mx-4 md:mx-0 md:mt-0 lg:-ml-32">
            <h3 className="font-editorial text-3xl md:text-4xl mb-6">Travel & Stay</h3>
            <p className="opacity-80 text-sm md:text-base leading-relaxed mb-8">
              Milan Malpensa (MXP) is the closest international airport. 
              From there, Lake Como is approximately a 1-hour drive. 
              We have arranged room blocks at several local boutique hotels 
              for your convenience.
            </p>
            <a href="#" className="inline-block border-b border-background/50 pb-1 text-sm uppercase tracking-widest hover:border-background transition-colors">
              View Accommodations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
