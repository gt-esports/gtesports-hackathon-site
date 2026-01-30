import { siteConfig } from '../data/site';

export default function NavbarDropdownMenu() {
  return (
    <div className="!absolute top-full right-0 mt-2 w-56 card-pixel z-30 animate-fadeInUp">
      <div className="flex flex-col py-2">
        <a
          href="/"
          className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-xs uppercase tracking-wide border-b border-valley-brown/10 last:border-0"
        >
          <span className="mr-2">🏠</span> Home
        </a>
        <a
          href="/#schedule"
          className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-xs uppercase tracking-wide border-b border-valley-brown/10 last:border-0"
        >
          <span className="mr-2">📅</span> Schedule
        </a>
        <a
          href="/#sponsors"
          className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-xs uppercase tracking-wide border-b border-valley-brown/10 last:border-0"
        >
          <span className="mr-2">🏢</span> Sponsors
        </a>
        <a
          href={siteConfig.links.ourTeam}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-xs uppercase tracking-wide border-b border-valley-brown/10 sm:border-b-0 last:border-0"
        >
          <span className="mr-2">👥</span> Meet the Team
        </a>
        <a
          href="/login"
          className="sm:hidden block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-xs uppercase tracking-wide"
        >
          Sign In
        </a>
      </div>
    </div>
  )
}
