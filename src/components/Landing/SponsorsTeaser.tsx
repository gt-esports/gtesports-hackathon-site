import { type FC } from "react";
import "../../cssFiles/sponsor.css";

const SponsorsTeaser: FC = () => {
  return (
    <div id="sponsors" className="relative flex flex-col items-center justify-center min-h-screen gradient-valley-earth py-20 overflow-hidden">
      {/* Background Texture (Grass/Nature) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2d5016 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}>
      </div>

      {/* Floating Leaves Animation Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-green-200 opacity-20 text-6xl animate-float">🍃</div>
        <div className="absolute bottom-20 right-20 text-green-300 opacity-20 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>🌿</div>
        <div className="absolute top-1/2 left-5 text-yellow-100 opacity-30 text-4xl animate-twinkle">✨</div>
      </div>

      {/* Wooden Board Container */}
      <div className="relative w-full max-w-6xl mx-auto p-8 wood-panel rounded-lg transform rotate-[-0.5deg]">

        {/* Board Header */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-valley-cream px-10 md:px-16 py-4 border-4 border-valley-brown rotate-[-1deg] flex flex-col items-center shadow-lg z-10">
          {/* Nails/Pins for the header */}
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-valley-brown shadow-inner"></div>
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-valley-brown shadow-inner"></div>

          <h1 className="text-3xl md:text-4xl font-pixel text-valley-brown tracking-wider uppercase drop-shadow-sm text-center">
            Our Sponsors
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-valley-green animate-bounce-gentle">🌾</span>
            <p className="text-center text-valley-green text-xs font-pixel tracking-widest uppercase">
              Community Support
            </p>
            <span className="text-valley-green animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>🌾</span>
          </div>
        </div>

        {/* Vine Decorations on Board */}
        <div className="absolute -top-6 -left-6 text-6xl transform -rotate-45 z-20 drop-shadow-md pointer-events-none">🌿</div>
        <div className="absolute -bottom-6 -right-6 text-6xl transform rotate-135 z-20 drop-shadow-md pointer-events-none">🌿</div>

        {/* Content Area - Paper style */}
        <div className="bg-valley-cream/90 min-h-[400px] border-2 border-valley-brown/20 p-6 md:p-12 mt-8 relative shadow-inner flex items-center justify-center">

          {/* Inner paper texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#8d6e63 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="flex flex-col items-center justify-center text-center z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-pixel text-valley-brown uppercase tracking-widest drop-shadow-md mb-6 transform -rotate-2">
              Coming Soon
            </h2>
            <p className="text-valley-brown/80 font-pixel text-sm md:text-base tracking-wide leading-loose">
              We are currently gathering our village allies!<br />
              Check back later for updates from the town.
            </p>

            <div className="mt-8 flex gap-4 opacity-80">
              <span className="text-2xl animate-bounce-gentle" style={{ animationDelay: '0s' }}>🥕</span>
              <span className="text-2xl animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>🥔</span>
              <span className="text-2xl animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>🌽</span>
            </div>

            <div className="mt-10 p-4 border-2 border-dashed border-valley-brown/30 rounded-lg bg-white/20">
              <span className="font-pixel text-[10px] text-valley-brown/60 uppercase">Space Available for Rent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsTeaser;
