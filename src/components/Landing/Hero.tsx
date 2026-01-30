"use client"

import { siteConfig } from "../../data/site"

export default function Hero() {

  return (
    <section id="hero" className="relative mt-0 pt-24 min-h-screen w-full flex items-center justify-center overflow-hidden hero-pixel-mountains">

      {/* Starry background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-valley-gold rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Add some larger "stars" */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-2 h-2 bg-valley-cream rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>



      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <div className="animate-float">

          {/* Main Title - Pixel Art Style */}
          <div className="mb-8 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="TechHack Valley Logo"
              className="w-80 md:w-[32rem] mb-2 object-contain drop-shadow-md"
            />
            <p className="font-pixel text-xs md:text-sm text-valley-cream uppercase tracking-widest bg-valley-brown/60 inline-block px-4 py-2 rounded">
              Spring 2026 Season
            </p>

            <div className="mt-8 wood-panel px-8 py-6 transform -rotate-2 animate-float mx-auto inline-block max-w-full" style={{ animationDelay: '1s' }}>
              <div className="flex flex-col items-center justify-center">
                <span className="font-pixel text-[0.6rem] md:text-xs text-[#5d4037] mb-2 uppercase tracking-widest opacity-90">
                  Mark your calendars
                </span>
                <p className="font-pixel text-base sm:text-lg md:text-2xl text-[#5d4037] font-bold tracking-wider leading-relaxed text-center">
                  {siteConfig.event.date}
                </p>
              </div>
              {/* Decorative corner nails */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#4a332a] rounded-full opacity-60"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#4a332a] rounded-full opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#4a332a] rounded-full opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#4a332a] rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Dialogue Box for Tagline/Description */}
          <div className="dialogue-box mb-12 mx-auto max-w-3xl text-left">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Optional: Add a character portrait here later if wanted */}
              {/* <div className="w-20 h-20 bg-valley-brown shrink-0 border-2 border-valley-gold"></div> */}

              <div className="w-full">
                <p className="font-pixel text-valley-brown text-sm md:text-base mb-4 leading-loose">
                  Welcome, farmer! 👩‍🌾 <br />
                  <span className="text-valley-blue">Georgia Tech's</span> coziest hackathon is open for business.
                  Ideas grow like crops here! Join us for 36 hours of coding, collaboration, and relaxation.
                </p>

                {/* Typing cursor effect placeholder or simple animated arrow could go here */}
                <div className="flex justify-end animate-bounce-gentle">
                  <span className="text-valley-orange font-bold text-xl">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="/signup"
            className="btn-pixel text-sm md:text-base animate-pulse-glow flex items-center justify-center gap-2 group"
          >
            <span>📜</span>
            <span>Apply Now</span>
          </a>
          <a
            href="https://discord.gg/CbaXUEfpgW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pixel btn-pixel-discord text-sm md:text-base flex items-center justify-center gap-2"
          >
            <span>💬</span>
            <span>Join Discord</span>
          </a>
        </div>

        {/* Hosted By Pill */}
        <a
          href="http://gatechesports.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform transition duration-200 hover:scale-105"
        >
          <div className="bg-valley-brown/80 border-2 border-valley-gold px-6 py-3 rounded-full backdrop-blur-sm">
            <p className="text-white font-pixel text-xs">
              Hosted by <span className="text-valley-gold">Georgia Tech Esports</span>
            </p>
          </div>
        </a>

      </div>
    </section >
  )
}