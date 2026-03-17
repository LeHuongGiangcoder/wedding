"use client";

export default function RSVP() {
  return (
    <section id="rsvp" className="py-32 md:py-48 px-6 md:px-12 bg-[#e6e2d6] text-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50">You're Invited</p>
        <h2 className="font-editorial text-5xl md:text-7xl mb-16">RSVP</h2>
        
        <form className="space-y-10 text-left max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="firstName" className="text-xs uppercase tracking-widest opacity-70">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="bg-transparent border-b border-foreground/30 py-2 outline-none focus:border-foreground transition-colors placeholder-transparent"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="lastName" className="text-xs uppercase tracking-widest opacity-70">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="bg-transparent border-b border-foreground/30 py-2 outline-none focus:border-foreground transition-colors placeholder-transparent"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-xs uppercase tracking-widest opacity-70">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="bg-transparent border-b border-foreground/30 py-2 outline-none focus:border-foreground transition-colors placeholder-transparent"
              required
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <label className="text-xs uppercase tracking-widest opacity-70 mb-2">Will you be attending?</label>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" value="yes" className="w-4 h-4 accent-foreground" />
                <span className="text-sm group-hover:opacity-70 transition-opacity">Joyfully Accept</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="attending" value="no" className="w-4 h-4 accent-foreground" />
                <span className="text-sm group-hover:opacity-70 transition-opacity">Regretfully Decline</span>
              </label>
            </div>
          </div>
          
          <div className="pt-12 text-center">
            <button 
              type="submit" 
              className="bg-foreground text-background px-14 py-5 text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
            >
              Send Reply
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
