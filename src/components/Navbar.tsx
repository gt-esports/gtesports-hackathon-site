import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarDropdownMenu from './NavbarDropdownMenu';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  return (
      <div>
        <nav className="fixed top-6 left-6 right-6 z-20 flex justify-between items-center px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
        {/* Logo/Brand */}
          <div className="text-white font-pixel text-lg md:text-xl drop-shadow-lg">
            <div>
              <span className="text-valley-gold">TechHack</span> <span className="text-sky-blue">Valley</span>
            </div>
            <div className="text-xs text-white/60 font-pixel">
              by <span className="text-valley-gold font-semibold">GT Esports</span>
            </div>
          </div>
          
          {/* Navigation Elements */}
          <div className="flex items-center gap-3">
            {/* Sign In Button (NEW) */}
            <Link
              to="/login"
              className="btn-pixel-secondary px-3 py-2 flex items-center gap-2"
              aria-label="Go to login"
            >
              <span className="text-sm">👤</span>
              <span className="hidden sm:inline font-pixel text-sm">Sign In</span>
            </Link>

            {/* Menu Button and Dropdown */}
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

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <NavbarDropdownMenu />
              )}
            </div>
          </div>
        </nav>
        {/* Click outside to close */}
        {isDropdownOpen && (
          <button
            aria-hidden="true"
            onClick={() => setIsDropdownOpen(false)}
            className="fixed inset-0 z-10 cursor-default"
            tabIndex={-1}
          />
        )}
      </div>
  )
}
