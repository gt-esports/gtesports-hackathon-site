export default function NavbarDropdownMenu() {
  return (
    <div className="absolute top-full right-0 mt-2 w-56 card-pixel overflow-hidden z-30 shadow-2xl bg-white rounded-lg border border-gray-200">
      <a
        href="/"
        className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
      >
        🏠 Home
      </a>
      <a
        href="/#schedule"
        className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
      >
        📅 Schedule
      </a>
      <a
        href="/#sponsors"
        className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
      >
        🏢 Sponsors
      </a>
      <a href="/teams" className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm">
        👥 Teams
      </a>
    </div>
  )
}
