import { type FC } from "react";
import "../../cssFiles/sponsor.css";



const SponsorsTeaser: FC = () => {


  return (
    <div id="sponsors" className="relative flex flex-col items-center justify-center min-h-screen bg-[#66a05b] py-20 overflow-hidden">
      {/* Background Texture (Grass/Nature) */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#88c07b 2px, transparent 2px)",
          backgroundSize: "32px 32px"
        }}>
      </div>

      {/* Floating Leaves Animation Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-green-200 opacity-20 text-6xl transform -rotate-12">🍃</div>
        <div className="absolute bottom-20 right-20 text-green-300 opacity-20 text-5xl transform rotate-45">🌿</div>
        <div className="absolute top-1/2 left-5 text-yellow-100 opacity-20 text-4xl">✨</div>
      </div>

      {/* Wooden Board Container */}
      <div className="relative w-full max-w-6xl mx-auto p-8 bg-[#cc8d58] rounded-xl shadow-2xl border-[12px] border-[#8d5e3c]">
        {/* Board Inner Border/Detail */}
        <div className="absolute inset-2 border-2 border-[#eec39a] opacity-50 rounded-lg pointer-events-none"></div>

        {/* Board Header */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#ffddaa] px-16 py-4 rounded-sm shadow-lg border-4 border-[#b57d4f] rotate-[-1deg] flex flex-col items-center">
          {/* Nails/Pins for the header */}
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#8d5e3c] shadow-inner"></div>
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#8d5e3c] shadow-inner"></div>

          <h1 className="text-4xl font-bold text-[#5d3a22] tracking-wider uppercase font-serif drop-shadow-sm">
            Our Sponsors
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#5d3a22]">🌾</span>
            <p className="text-center text-[#795548] text-sm font-bold tracking-widest uppercase">
              Community Support
            </p>
            <span className="text-[#5d3a22]">🌾</span>
          </div>
        </div>

        {/* Vine Decorations on Board */}
        <div className="absolute -top-6 -left-6 text-6xl transform -rotate-45 z-20 drop-shadow-md">🌿</div>
        <div className="absolute -bottom-6 -right-6 text-6xl transform rotate-135 z-20 drop-shadow-md">🌿</div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 p-6">
          {/* {cards.map((card, index) => (
            <CardComponent key={index} card={card} shellHovered={false} />
          ))} */}
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#5d3a22] uppercase tracking-widest drop-shadow-md transform -rotate-2">
              Coming Soon
            </h2>
            <p className="mt-4 text-[#795548] font-bold text-xl tracking-wide">
              We are gathering our village allies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsTeaser;
