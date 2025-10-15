"use client"

import { siteConfig } from "../config/site"
import { useState } from "react"

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden hero-pixel-mountains">

      {/* Navigation with branding */}
      <nav className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
        {/* Logo/Brand */}
        <div className="text-white font-pixel text-lg md:text-xl drop-shadow-lg">
          <div>
            <span className="text-valley-gold">TechHack</span> <span className="text-sky-blue">Valley</span>
          </div>
          <div className="text-xs text-white/60 font-pixel">
            by GT Esports
          </div>
        </div>
        
        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn-pixel flex items-center gap-2"
          >
            Menu
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 card-pixel overflow-hidden z-30 shadow-2xl">
              <a
                href="/schedule"
                className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
              >
                📅 Schedule
              </a>
              <a
                href="/sponsors"
                className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
              >
                🏢 Sponsors
              </a>
              <a href="/teams" className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm">
                👥 Teams
              </a>
              <a href="/submit" className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm">
                🚀 Submit
              </a>
            </div>
          )}
        </div>
      </nav>

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
          <button className="btn-pixel text-lg animate-pulse-glow">
            🌱 Register Now
          </button>
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