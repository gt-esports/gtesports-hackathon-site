import { type FC } from "react";
import { sponsors } from "../../data/sponsors";

const SponsorsTeaser: FC = () => {
  return (
    <div
      id="sponsors"
      className="relative flex flex-col items-center justify-center gradient-valley-earth py-20 overflow-hidden"
    >
      {/* Background Texture (Grass/Nature) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2d5016 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating Leaves Animation Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-green-200 opacity-20 text-6xl animate-float">
          🍃
        </div>
        <div
          className="absolute bottom-20 right-20 text-green-300 opacity-20 text-5xl animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          🌿
        </div>
        <div className="absolute top-1/2 left-5 text-yellow-100 opacity-30 text-4xl animate-twinkle">
          ✨
        </div>
        <div
          className="absolute top-1/3 right-10 text-yellow-100 opacity-20 text-3xl animate-twinkle"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
      </div>

      {/* Wooden Board Container */}
      <div className="relative w-full max-w-6xl mx-auto p-4 md:p-8 wood-panel rounded-lg transform rotate-[-0.5deg]">
        {/* Board Header */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-valley-cream px-10 md:px-16 py-4 border-4 border-valley-brown rotate-[-1deg] flex flex-col items-center shadow-lg z-10">
          {/* Nails/Pins for the header */}
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-valley-brown shadow-inner" />
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-valley-brown shadow-inner" />

          <h2 className="text-3xl md:text-4xl font-pixel text-valley-brown tracking-wider uppercase drop-shadow-sm text-center">
            Our Sponsors
          </h2>
        </div>

        {/* Vine Decorations on Board */}
        <div className="absolute -top-6 -left-6 text-6xl transform -rotate-45 z-20 drop-shadow-md pointer-events-none">
          🌿
        </div>
        <div className="absolute -bottom-6 -right-6 text-6xl transform rotate-135 z-20 drop-shadow-md pointer-events-none">
          🌿
        </div>

        {/* Content Area - Paper style */}
        <div className="bg-valley-cream/90 border-2 border-valley-brown/20 p-6 md:p-10 mt-8 relative shadow-inner">
          {/* Inner paper texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#8d6e63 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Flavor text */}
          <p className="text-center font-pixel text-xs text-valley-brown/70 mb-8 relative z-10 tracking-wide">
            These generous allies help make our quest possible!
          </p>

          {/* Sponsors Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto w-full px-2 md:px-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`group relative flex w-full flex-col items-center border-[3px] border-[#8b4513] bg-[linear-gradient(145deg,#fffbf0,#f0e6d2)] p-2 pt-4 md:p-4 md:pt-6 shadow-[3px_3px_0_rgba(93,64,55,0.3)] transition-all duration-300 ease-out hover:z-[5] hover:-translate-y-2 hover:scale-[1.05] hover:rotate-0 hover:shadow-[8px_12px_0_rgba(93,64,55,0.3)] rounded-sm ${getCardRotationClass(
                  index,
                )} before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(#5d4037_1px,transparent_1px)] before:bg-[length:16px_16px] before:opacity-[0.02] before:content-['']`}
                style={{
                  animation: "fadeInUp 0.6s ease-out both",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Pin / Thumbtack */}
                <div className="absolute -top-[6px] md:-top-[8px] left-1/2 z-10 -translate-x-1/2 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">
                  <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-[#5d4037] shadow-inner relative">
                    {/* Metallic specular highlight */}
                    <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white/60 rounded-full" />
                  </div>
                </div>

                {/* Logo Area */}
                <div className="relative mb-2 flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-sm border-2 border-[#8b4513]/40 bg-valley-brown/80 p-1 md:mb-3 md:p-2 shadow-[inset_0_3px_12px_rgba(0,0,0,0.4)] group-hover:border-[#8b4513]/60 transition-colors">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    onError={(e) => {
                      // Hide broken image and show fallback
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = "flex";
                    }}
                  />
                  {/* Fallback when no logo image exists */}
                  <div className="hidden items-center justify-center w-full h-full text-valley-brown/40">
                    <span className="text-3xl md:text-5xl drop-shadow-sm transform transition-transform duration-300 group-hover:scale-110">
                      {sponsor.emoji}
                    </span>
                  </div>
                </div>

                {/* Sponsor Name Plate */}
                <div className="flex min-h-10 w-full items-center justify-center border-2 border-[#8b4513] bg-[linear-gradient(to_bottom,#f0dfc8,#dcb48c)] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),2px_2px_0_rgba(93,64,55,0.2)] md:min-h-12 md:px-2 md:py-2 group-hover:bg-[linear-gradient(to_bottom,#f5e6d3,#e4c19c)] transition-colors">
                  <span className="text-center font-pixel text-[8px] leading-snug tracking-normal text-[#4a332a] md:text-[10px] drop-shadow-[0_1px_0_rgba(255,255,255,0.5)] [overflow-wrap:anywhere]">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8 relative z-10 opacity-60">
            <span className="text-lg animate-bounce-gentle">🌻</span>
            <div className="h-px w-16 bg-valley-brown/30" />
            <span
              className="text-lg animate-bounce-gentle"
              style={{ animationDelay: "0.3s" }}
            >
              🌾
            </span>
            <div className="h-px w-16 bg-valley-brown/30" />
            <span
              className="text-lg animate-bounce-gentle"
              style={{ animationDelay: "0.6s" }}
            >
              🌻
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function getCardRotationClass(index: number): string {
  const cardNumber = index + 1;

  if (cardNumber % 3 === 0) {
    return "rotate-[-0.5deg]";
  }

  if (cardNumber % 2 === 0) {
    return "rotate-[0.8deg]";
  }

  return "rotate-[-1deg]";
}

export default SponsorsTeaser;
