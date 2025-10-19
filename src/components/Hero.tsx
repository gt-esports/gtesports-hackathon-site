"use client"

import { Link } from "react-router-dom"
import { siteConfig } from "../config/site"

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-pixel-mountains">
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

      

      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <div className="animate-float">
          {/* Title with colorful gradient text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-pixel tracking-wider drop-shadow-2xl">
            <span className="bg-gradient-to-r from-valley-gold via-valley-orange to-valley-pink bg-clip-text text-transparent">
              TechHack
            </span>
            <br />
            <span className="bg-gradient-to-r from-valley-green via-valley-blue to-valley-purple bg-clip-text text-transparent">
              Valley
            </span>
          </h1>
          
          {/* Tagline with pixel art styling */}
          <div className="card-pixel max-w-3xl mx-auto mb-8 p-6">
            <p className="text-xl md:text-2xl text-valley-brown font-pixel leading-relaxed">
              {siteConfig.event.tagline}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-valley-cream mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Georgia Tech's coziest hackathon where ideas grow like crops. Join us for 36 hours of innovation,
            collaboration, and cozy coding vibes.
          </p>
        </div>

        {/* Action buttons with pixel art styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Link to="/signup">
          <button className="btn-pixel text-lg animate-pulse-glow">
            🌱 Register Now
          </button>
          </Link>
          <button className="btn-pixel btn-pixel-secondary text-lg">
            💬 Join Discord
          </button>
        </div>

        {/* Event details with pixel art card */}
        <div className="card-pixel max-w-md mx-auto p-4">
          <div className="text-valley-brown">
            <p className="text-sm font-pixel mb-2">Hosted by <span className="text-valley-gold font-semibold">GT Esports</span></p>
            <p className="text-sm font-pixel">{siteConfig.event.location}</p>
          </div>
        </div>
      </div>


    </section>
  )
}
