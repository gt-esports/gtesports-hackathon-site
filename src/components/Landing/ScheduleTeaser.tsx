import CountdownCarousel from '../CountdownCarousel';

export default function ScheduleTeaser() {
  return (
    <section id="schedule" className="min-h-screen relative flex flex-col items-center justify-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #58a3f7 0%, #76b07b 40%, #66a05b 100%)'
      }}
    >
      {/* Decorative Cloud/Sky elements if needed, or just let the gradient do the work */}
      <div className="absolute top-10 left-10 opacity-40 text-white text-6xl animate-pulse">☁️</div>
      <div className="absolute top-20 right-20 opacity-30 text-white text-5xl">☁️</div>

      <div className="max-w-4xl mx-auto w-full px-4 mb-16 relative z-10">

        {/* Calendar Board Container */}
        <div className="relative bg-[#d4c5a9] p-2 rounded-lg shadow-2xl border-[6px] border-[#8d6e63] transform rotate-1">
          {/* Top Hanging Hole */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3e2723] rounded-full border-2 border-[#8d6e63]"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 -mt-4 w-1 h-8 bg-[#5d4037] -z-10"></div> {/* Nail/String */}

          {/* Inner Paper Area */}
          <div className="bg-[#fffdf0] p-8 border-2 border-[#eec39a] rounded-sm relative shadow-inner h-full min-h-[400px] flex flex-col items-center">

            {/* Seasonal Header Image/Text */}
            <div className="w-full border-b-2 border-[#8d6e63]/30 pb-4 mb-6 flex justify-between items-end">
              <div className="text-[#5d4037] font-bold text-xl uppercase tracking-widest font-serif">Spring</div>
              <div className="text-[#8d6e63] font-bold text-lg font-mono">Year 1</div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#5d3a22] mb-8 font-serif uppercase tracking-wider drop-shadow-sm text-center">
              Schedule
            </h2>

            {/* Grid Placeholder for "Coming Soon" */}
            <div className="grid grid-cols-7 gap-2 w-full max-w-lg opacity-50 mb-8 pointer-events-none select-none">
              {[...Array(28)].map((_, i) => (
                <div key={i} className="aspect-square border border-[#8d6e63]/20 flex items-start justify-start p-1 text-[10px] text-[#8d6e63]">
                  {i + 1}
                </div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="bg-[#fffdf0] px-6 py-2 text-2xl md:text-3xl text-[#d84315] font-bold rotate-[-10deg] border-4 border-[#d84315] rounded-lg shadow-lg opacity-100 transform scale-110">
                  Coming Soon!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-8">
        <CountdownCarousel />
      </div>
    </section>
  )
}
