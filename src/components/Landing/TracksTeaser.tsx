import { useState } from "react";
import { tracks, type Track } from "../../data/tracks";
import TrackModal from "./TrackModal";

export default function TracksTeaser() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <section id="tracks" className="relative py-24 overflow-hidden bg-[#8fb6d3] flex flex-col items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "32px 32px"
        }}>
      </div>
      
      {/* Floating Elements (Clouds/Birds) */}
      <div className="absolute top-20 left-[10%] text-6xl opacity-40 animate-float pointer-events-none">☁️</div>
      <div className="absolute top-40 right-[15%] text-5xl opacity-30 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}>☁️</div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-pixel text-white drop-shadow-md mb-4 tracking-wide uppercase stroke-valley-brown stroke-2">
            Quest Board
          </h2>
          <p className="font-pixel text-white/90 text-sm md:text-base tracking-widest bg-valley-brown/20 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
            Choose Your Adventure Path
          </p>
        </div>

        {/* The Quest Board */}
        <div className="relative w-full max-w-5xl bg-[#8d6e63] p-4 md:p-6 rounded-lg shadow-2xl border-b-8 border-r-8 border-[#5d4037] transform rotate-1">
          {/* Wood Texture */}
          <div className="absolute inset-0 rounded-lg opacity-30 pointer-events-none"
             style={{ 
               backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 53px), repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(0,0,0,0.05) 100px, rgba(0,0,0,0.05) 103px)",
               backgroundColor: "#a1887f"
             }}>
          </div>

          {/* Board Header "NOTICES" */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#d7ccc8] px-8 py-2 border-2 border-[#8d6e63] shadow-md rotate-[-2deg] z-20">
            <span className="font-pixel text-[#5d4037] text-xl tracking-widest uppercase">Select A Quest</span>
          </div>
          
          {/* Nails at corners */}
          <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>
          <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>

          {/* Quest Papers Grid */}
          <div className="flex flex-col gap-8 relative z-10 mt-8 mb-4 px-2 md:px-8">
            
            {/* Top Row: Best in Show (Centered) */}
            <div className="flex justify-center">
              {[tracks[0]].map((track) => (
                <div 
                  key={track.id}
                  onClick={() => setSelectedTrack(track)}
                  className="relative cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:z-20 rotate-[-1deg] hover:rotate-0 w-full max-w-md"
                >
                  {/* Pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-valley-gold shadow-md border border-yellow-700"></div>
                  
                  {/* Paper */}
                  <div className={`bg-[#fdfbf7] p-8 pt-10 shadow-lg border-2 ${track.color && track.color.replace('bg-', 'border-').replace('100', '200')} h-full flex flex-col items-center text-center relative overflow-hidden ring-4 ring-black/5`}>
                     {/* Gold Glow for Grand Prize */}
                     <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none"></div>

                    {/* Folded corner effect */}
                    <div className="absolute top-0 right-0 border-t-[24px] border-r-[24px] border-t-[#fdfbf7] border-r-[#e0e0e0] shadow-sm transform rotate-90"></div>

                    {/* Icon */}
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                      {track.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-pixel text-2xl text-valley-brown mb-3 leading-tight uppercase tracking-wide">
                      {track.title}
                    </h3>

                    <div className="w-1/2 h-px bg-valley-brown/20 mb-4"></div>
                    
                    {/* Description */}
                    <p className="font-serif text-valley-brown/80 text-base leading-relaxed mb-6">
                      {track.shortDescription}
                    </p>

                    <span className="font-pixel text-xs text-valley-gold bg-valley-brown/80 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                       Grand Prize Available
                    </span>
                    
                    {/* "Read Scroll" Button */}
                     <div className="mt-2">
                        <span className="inline-block px-4 py-1.5 bg-valley-orange/10 text-valley-orange font-pixel text-xs rounded hover:bg-valley-orange/20 transition-colors uppercase tracking-wider border border-valley-orange/20">
                          View Details
                        </span>
                     </div>

                    {/* Texture */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: Category Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {tracks.slice(1).map((track, index) => (
                <div 
                  key={track.id}
                  onClick={() => setSelectedTrack(track)}
                  className={`
                    relative cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:z-20
                    ${index % 2 === 0 ? 'rotate-[2deg]' : 'rotate-[-2deg]'}
                    hover:rotate-0
                  `}
                >
                  {/* Pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-red-500 shadow-md border border-red-700"></div>
                  
                  {/* Paper */}
                  <div className="bg-[#fdfbf7] p-6 pt-8 pb-8 shadow-md border border-gray-200 h-full flex flex-col items-center text-center relative overflow-hidden">
                    
                    {/* Folded corner effect */}
                    <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-t-[#fdfbf7] border-r-[#e0e0e0] shadow-sm transform rotate-90"></div>

                    {/* Icon */}
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {track.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-pixel text-lg md:text-xl text-valley-brown mb-3 leading-tight uppercase">
                      {track.title}
                    </h3>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-valley-brown/20 mb-3"></div>
                    
                    {/* Description */}
                    <p className="font-serif text-valley-brown/80 text-sm leading-relaxed mb-4 flex-grow">
                      {track.shortDescription}
                    </p>
                    
                    {/* "Read Quest" */}
                    <div className="w-full mt-auto">
                      <span className="inline-block px-3 py-1 bg-valley-orange/10 text-valley-orange font-pixel text-[10px] rounded hover:bg-valley-orange/20 transition-colors uppercase tracking-wider">
                        Read Quest
                      </span>
                    </div>

                    {/* Texture */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Modal */}
      <TrackModal 
        track={selectedTrack!} 
        isOpen={!!selectedTrack} 
        onClose={() => setSelectedTrack(null)} 
      />
    </section>
  );
}
