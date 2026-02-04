import CountdownCarousel from '../CountdownCarousel';

export default function ScheduleTeaser() {
  return (
    <section id="schedule" className="relative flex flex-col items-center justify-center pt-16 pb-32 overflow-hidden gradient-valley-sky">
      {/* Decorative Cloud/Sky elements */}
      <div className="absolute top-10 left-10 opacity-60 text-6xl animate-float">☁️</div>
      <div className="absolute top-20 right-20 opacity-50 text-5xl animate-float" style={{ animationDelay: '2s' }}>☁️</div>
      <div className="absolute bottom-40 left-20 opacity-40 text-7xl animate-float" style={{ animationDelay: '1s' }}>☁️</div>

      <div className="max-w-4xl mx-auto w-full px-4 mb-16 relative z-10">

        {/* Calendar Board Container */}
        <div className="relative wood-panel p-4 transform rotate-1">
          {/* Top Hanging Hole */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3e2723] rounded-full border-2 border-[#8d6e63] shadow-inner"></div>
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-[#5d4037] -z-10 shadow-md"></div> {/* Nail/String */}

          {/* Inner Paper Area */}
          <div className="bg-valley-cream p-4 md:p-10 border-2 border-[#eec39a] relative shadow-inner h-full min-h-[500px] flex flex-col items-center">

            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#8d6e63 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Seasonal Header Image/Text */}
            <div className="w-full border-b-4 border-valley-brown/20 pb-4 mb-8 flex justify-between items-end relative z-10">
              <div className="flex flex-col">
                <span className="text-valley-green font-pixel text-xs mb-1">Current Season</span>
                <div className="text-valley-orange font-pixel text-lg md:text-xl tracking-widest flex items-center gap-2">
                  <span>🌸</span> SPRING
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-valley-green font-pixel text-xs mb-1">Year</span>
                <div className="text-valley-brown font-pixel text-lg md:text-xl">1</div>
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-5xl font-pixel text-valley-brown mb-10 text-center uppercase tracking-wide drop-shadow-sm">
              Schedule
            </h2>

            {/* Grid Placeholder for "Coming Soon" */}
            <div className="grid grid-cols-7 gap-1 md:gap-2 w-full max-w-2xl mb-8 relative">
              {/* Day Headers */}
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={`header-${i}`} className="text-center font-pixel text-valley-brown/60 text-xs mb-1">
                  {day}
                </div>
              ))}

              {/* Calendar Grid */}
              {[...Array(28)].map((_, i) => (
                <div key={i} className="aspect-square border-2 border-valley-brown/20 bg-white/40 flex items-start justify-start p-1 relative group hover:border-valley-orange/50 transition-colors">
                  <span className="font-pixel text-[8px] md:text-[10px] text-valley-brown/60">{i + 1}</span>
                  {/* Random cute icons scattered */}
                  {i === 2 && <span className="absolute bottom-1 right-1 text-xs opacity-50">🌱</span>}
                  {i === 15 && <span className="absolute bottom-1 right-1 text-xs opacity-50">💧</span>}
                  {i === 24 && <span className="absolute bottom-1 right-1 text-xs opacity-50">⭐</span>}
                </div>
              ))}

              {/* "Coming Soon" Stamp Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-valley-cream border-4 border-valley-orange transform -rotate-12 shadow-xl p-6 md:p-8 animate-pulse-glow">
                  <p className="font-pixel text-lg md:text-2xl text-valley-orange text-center whitespace-nowrap uppercase tracking-widest leading-relaxed">
                    Event Details<br />Coming Soon!
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="mt-auto pt-4 flex gap-4 opacity-70">
              <span>🍄</span>
              <span>🌻</span>
              <span>🌲</span>
            </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-8">
        <CountdownCarousel position="absolute" />
      </div>
    </section>
  )
}
