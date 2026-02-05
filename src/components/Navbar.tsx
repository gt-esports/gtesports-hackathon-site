import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site';
import NavbarDropdownMenu from './NavbarDropdownMenu';
import { PixelHome, PixelCalendar, PixelHeart, PixelUsers, PixelMenu, PixelSignIn } from './PixelIcons';

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
        </Link>



        {/* Navigation Elements */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2">
            <a
              href="/"
              className="px-3 py-2 text-valley-brown hover:bg-valley-gold/20 rounded-md transition-colors font-pixel text-xs uppercase tracking-wide flex items-center gap-2"
            >
              <PixelHome className="mb-1" /> Home
            </a>
            <a
              href="/#schedule"
              className="px-3 py-2 text-valley-brown hover:bg-valley-gold/20 rounded-md transition-colors font-pixel text-xs uppercase tracking-wide flex items-center gap-2"
            >
              <PixelCalendar className="mb-0.5" /> Schedule
            </a>
            <a
              href="/#sponsors"
              className="px-3 py-2 text-valley-brown hover:bg-valley-gold/20 rounded-md transition-colors font-pixel text-xs uppercase tracking-wide flex items-center gap-2"
            >
              <PixelHeart className="mb-0.5" /> Sponsors
            </a>
            <a
              href={siteConfig.links.ourTeam}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-valley-brown hover:bg-valley-gold/20 rounded-md transition-colors font-pixel text-xs uppercase tracking-wide flex items-center gap-2"
            >
              <PixelUsers className="mb-0.5" /> Meet the Team
            </a>
          </div>

          {/* Sign In Button */}
          <Link
            to="/login"
            className="hidden sm:flex btn-pixel btn-pixel-primary items-center justify-center gap-2 !pt-[10px] !pb-[6px] !px-2 md:!px-3"
            aria-label="Go to login"
          >
            <PixelSignIn size={16} className="mb-0.5" />
            <span className="font-pixel text-xs">Sign In</span>
          </Link>

          {/* Menu Button and Dropdown - Only visible on small screens */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn-pixel btn-pixel-icon !p-2"
              aria-label="Toggle menu"
            >
              <PixelMenu />
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
