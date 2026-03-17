export default function Schedule() {
  const events = [
    {
      time: "2:00 PM",
      title: "Welcome Reception",
      desc: "Begin the celebration with champagne and light hors d'oeuvres by the serene waters of Lake Como. Enjoy the classical string quartet as guests arrive."
    },
    {
      time: "4:00 PM",
      title: "The Ceremony",
      desc: "Join us in the fragrant gardens of the Villa as we exchange our vows and commit to forever under the Italian sun."
    },
    {
      time: "6:00 PM",
      title: "Aperitivo Hour",
      desc: "Signature cocktails, Negroni stations, and a selection of local Italian delicacies while the sun begins to set over the mountains."
    },
    {
      time: "8:00 PM",
      title: "Dinner & Dancing",
      desc: "A four-course Italian feast illuminated by candlelight, followed by an evening of dancing under the stars."
    }
  ];

  return (
    <section id="the-event" className="py-24 md:py-40 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50">The Event</p>
          <h2 className="font-editorial text-5xl md:text-7xl">Schedule of Events</h2>
        </div>
        
        <div className="relative border-l border-background/20 pl-8 md:pl-0 md:border-l-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-background/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-24">
            {events.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-background transform -translate-x-1/2 rounded-full"></div>
                
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                  <p className="font-editorial text-4xl md:text-5xl mb-3">{item.time}</p>
                </div>
                
                <div className={`w-full md:w-1/2 mt-4 md:mt-0 ${i % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16"}`}>
                  <h3 className="text-lg font-medium mb-3 uppercase tracking-widest">{item.title}</h3>
                  <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
