import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarDropdownMenu from './NavbarDropdownMenu';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-3 border-b-4 border-valley-brown wood-panel shadow-lg rounded-none">
        {/* Logo/Brand */}
        <div className="flex items-center gap-4">
          {/* Logo Text */}
          <div className="text-valley-brown font-pixel text-lg md:text-xl drop-shadow-sm flex flex-col">
            <div>
              <span className="text-valley-brown font-bold">TechHack</span> <span className="text-valley-blue">Valley</span>
            </div>
            <div className="text-[10px] text-valley-brown/80 font-pixel uppercase tracking-widest -mt-1">
              Spring 2026
            </div>
          </div>
        </div>



        {/* Navigation Elements */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Sign In Button */}
          <Link
            to="/login"
            className="btn-pixel flex items-center gap-2 !py-2 !px-2 md:!px-3"
            aria-label="Go to login"
          >
            <span className="text-sm">👤</span>
            <span className="hidden sm:inline font-pixel text-xs">Sign In</span>
          </Link>

          {/* Menu Button and Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn-pixel flex items-center gap-2 !py-2 !px-2 md:!px-3"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="block w-4 h-[2px] bg-valley-brown"></span>
                <span className="block w-4 h-[2px] bg-valley-brown"></span>
                <span className="block w-4 h-[2px] bg-valley-brown"></span>
              </div>
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
    </>
  )
}
