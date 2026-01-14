import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import NavbarDropdownMenu from './NavbarDropdownMenu';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down and not at the very top (buffer of 10px)
      // Show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`!fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-3 border-b-4 border-valley-brown wood-panel shadow-lg rounded-none transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo/Brand */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="TechHack Valley Logo"
            className="h-10 w-auto md:h-12 object-contain"
          />
          {/* Logo Text */}
          <div className="hidden sm:flex text-valley-brown font-pixel text-lg md:text-xl drop-shadow-sm flex-col justify-center h-full">
            <div className="text-[10px] text-valley-brown/80 font-pixel uppercase tracking-widest">
              Spring 2026
            </div>
          </div>
        </Link>



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
