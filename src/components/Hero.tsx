"use client"

import { siteConfig } from "../config/site"
import { useState } from "react"

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden gradient-sky">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating clouds */}
        <div className="absolute top-10 left-10 animate-float text-6xl opacity-60" style={{ animationDelay: "0s" }}>☁️</div>
        <div className="absolute top-20 right-20 animate-float text-4xl opacity-50" style={{ animationDelay: "1s" }}>☁️</div>
        <div className="absolute top-32 left-1/4 animate-float text-5xl opacity-40" style={{ animationDelay: "2s" }}>☁️</div>
        
        {/* Floating farm elements */}
        <div className="absolute top-40 right-1/4 animate-bounce-gentle text-3xl" style={{ animationDelay: "0.5s" }}>🌾</div>
        <div className="absolute top-60 left-1/3 animate-bounce-gentle text-2xl" style={{ animationDelay: "1.5s" }}>🌱</div>
        <div className="absolute top-80 right-1/3 animate-bounce-gentle text-2xl" style={{ animationDelay: "2.5s" }}>🌻</div>
      </div>

      {/* Navigation with branding */}
      <nav className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center">
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
            className="btn-pixel flex items-center gap-2 animate-pulse-glow"
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
            <div className="absolute right-0 mt-2 w-48 card-pixel overflow-hidden">
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

      {/* Enhanced Tech Tower with pixel art style */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg width="250" height="350" viewBox="0 0 250 350" className="drop-shadow-2xl">
          {/* Tower base */}
          <rect x="100" y="250" width="50" height="100" fill="#2d5016" stroke="#1a3a0a" strokeWidth="2"/>
          
          {/* Tower levels */}
          <rect x="90" y="220" width="70" height="30" fill="#4a90e2" stroke="#2d5016" strokeWidth="2"/>
          <rect x="95" y="190" width="60" height="30" fill="#7fb069" stroke="#2d5016" strokeWidth="2"/>
          <rect x="100" y="160" width="50" height="30" fill="#f4d03f" stroke="#2d5016" strokeWidth="2"/>
          <rect x="105" y="130" width="40" height="30" fill="#8e44ad" stroke="#2d5016" strokeWidth="2"/>
          <rect x="110" y="100" width="30" height="30" fill="#e91e63" stroke="#2d5016" strokeWidth="2"/>
          <rect x="115" y="70" width="20" height="30" fill="#ff6b35" stroke="#2d5016" strokeWidth="2"/>
          
          {/* Spire */}
          <rect x="120" y="50" width="10" height="20" fill="#f4d03f" stroke="#2d5016" strokeWidth="2"/>
          <circle cx="125" cy="45" r="8" fill="#ff6b35" stroke="#2d5016" strokeWidth="2"/>
          
          {/* Clock face */}
          <circle cx="125" cy="205" r="20" fill="#f7f3e9" stroke="#2d5016" strokeWidth="3"/>
          <circle cx="125" cy="205" r="15" fill="#8b4513" stroke="#2d5016" strokeWidth="2"/>
          {/* Clock hands */}
          <rect x="123" y="195" width="4" height="12" fill="#f7f3e9" stroke="#2d5016" strokeWidth="1"/>
          <rect x="120" y="203" width="10" height="3" fill="#f7f3e9" stroke="#2d5016" strokeWidth="1"/>
          
          {/* Windows */}
          <rect x="105" y="230" width="8" height="12" fill="#87ceeb" stroke="#2d5016" strokeWidth="1"/>
          <rect x="117" y="230" width="8" height="12" fill="#87ceeb" stroke="#2d5016" strokeWidth="1"/>
          <rect x="129" y="230" width="8" height="12" fill="#87ceeb" stroke="#2d5016" strokeWidth="1"/>
          
          <rect x="105" y="200" width="8" height="12" fill="#87ceeb" stroke="#2d5016" strokeWidth="1"/>
          <rect x="117" y="200" width="8" height="12" fill="#87ceeb" stroke="#2d5016" strokeWidth="1"/>
          <rect x="129" y="200" width="8" height="12" fill="#87ceeb" stroke="#2d5016" strokeWidth="1"/>
          
          {/* Ground/grass */}
          <rect x="0" y="340" width="250" height="10" fill="#7fb069" stroke="#2d5016" strokeWidth="2"/>
          
          {/* Decorative elements around tower */}
          <circle cx="80" cy="320" r="5" fill="#f4d03f" stroke="#2d5016" strokeWidth="1"/>
          <circle cx="170" cy="320" r="5" fill="#f4d03f" stroke="#2d5016" strokeWidth="1"/>
          <circle cx="90" cy="300" r="3" fill="#e91e63" stroke="#2d5016" strokeWidth="1"/>
          <circle cx="160" cy="300" r="3" fill="#e91e63" stroke="#2d5016" strokeWidth="1"/>
        </svg>
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

      {/* Floating farm and tech elements */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "1s" }}>
        <div className="text-4xl animate-bounce-gentle">🌾</div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "2s" }}>
        <div className="text-3xl animate-bounce-gentle">💻</div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="text-3xl animate-bounce-gentle">🚀</div>
      </div>
      <div className="absolute bottom-40 right-12 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="text-2xl animate-bounce-gentle">⭐</div>
      </div>
      
      {/* Additional farm-themed floating elements */}
      <div className="absolute top-60 left-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="text-2xl animate-bounce-gentle">🌱</div>
      </div>
      <div className="absolute top-80 right-20 animate-float" style={{ animationDelay: "2.5s" }}>
        <div className="text-2xl animate-bounce-gentle">🌻</div>
      </div>
      <div className="absolute bottom-60 right-1/4 animate-float" style={{ animationDelay: "1.8s" }}>
        <div className="text-2xl animate-bounce-gentle">🌿</div>
      </div>
      <div className="absolute bottom-80 left-1/4 animate-float" style={{ animationDelay: "2.8s" }}>
        <div className="text-2xl animate-bounce-gentle">🍃</div>
      </div>
      
      {/* Tech-themed floating elements */}
      <div className="absolute top-40 left-1/3 animate-float" style={{ animationDelay: "3.5s" }}>
        <div className="text-2xl animate-bounce-gentle">⚡</div>
      </div>
      <div className="absolute top-70 right-1/3 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="text-2xl animate-bounce-gentle">🔧</div>
      </div>
      <div className="absolute bottom-50 left-1/2 animate-float" style={{ animationDelay: "2.2s" }}>
        <div className="text-2xl animate-bounce-gentle">💡</div>
      </div>
    </section>
  )
}
