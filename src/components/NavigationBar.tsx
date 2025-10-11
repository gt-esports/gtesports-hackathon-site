import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 right-6 z-20 flex justify-between items-center px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
      {/* Logo/Brand */}
      <Link to="/" className="text-white font-pixel text-lg md:text-xl drop-shadow-lg">
        <div>
          <span className="text-valley-gold">TechHack</span> <span className="text-sky-blue">Valley</span>
        </div>
        <div className="text-xs text-white/60 font-pixel">
          by GT Esports
        </div>
      </Link>

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
            <Link
              to="/"
              className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
            >
              🏠 Home
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
            >
              👤 Dashboard
            </Link>
            <Link
              to="/schedule"
              className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
            >
              📅 Schedule
            </Link>
            <Link
              to="/sponsors"
              className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
            >
              🏢 Sponsors
            </Link>
            <Link 
              to="/teams" 
              className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
            >
              👥 Teams
            </Link>
            <Link 
              to="/submit" 
              className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
            >
              🚀 Submit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

