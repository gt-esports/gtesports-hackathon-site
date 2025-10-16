import { useState, useEffect, useCallback } from 'react'
import { siteConfig } from '../config/site';

export default function DashboardHero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  // User Greeting State
  const [user, setUser] = useState({
    name: "Alex Developer",
    profilePic: "https://pbs.twimg.com/profile_images/1762648109044187136/ZSsezdVZ_400x400.jpg",
    email: "alex@example.com",
    university: "Georgia Institute of Technology"
  });

  const hackathonStartDate = new Date(siteConfig.event.date).getTime();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    email: user.email,
    password: "",
    profilePic: user.profilePic,
    university: user.university
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleEditClick = () => {
    setEditForm({
      email: user.email,
      password: "",
      profilePic: user.profilePic,
      university: user.university
    });
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      email: editForm.email,
      profilePic: editForm.profilePic,
      university: editForm.university
    });
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };
  
  // Hackathon Countdown Logic

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const distance = hackathonStartDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [hackathonStartDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const isHackathonStarted = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const countdownContent = (
    <>
      <span className="text-2xl">⏰</span>
      {isHackathonStarted ? (
        <span className="text-valley-gold text-xl">🎉 TECHHACK VALLEY IS LIVE! 🎉</span>
      ) : (
        <>
          <span className="text-white/90">TECHHACK VALLEY 2025 STARTS IN:</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.days}</span>
          <span className="text-white/80">DAYS</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.hours}</span>
          <span className="text-white/80">HOURS</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.minutes}</span>
          <span className="text-white/80">MINUTES</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.seconds}</span>
          <span className="text-white/80">SECONDS</span>
          <span className="text-valley-gold">✦</span>
          <span className="text-white/90">DECEMBER 25, 2025</span>
          <span className="text-valley-gold">⏰</span>
        </>
      )}
    </>
  )
  
  return (
    <>
      {/* Navigation Bar */}
      <div>
        <nav className="fixed top-6 left-6 right-6 z-20 flex justify-between items-center px-4 py-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
          {/* Logo/Brand */}
          <div className="text-white font-pixel text-lg md:text-xl drop-shadow-lg">
            <div>
              <span className="text-valley-gold">TechHack</span> <span className="text-sky-blue">Valley</span>
            </div>
            <div className="text-xs text-white/60 font-pixel">
              by GT Esports
            </div>
          </div>
          
          {/* Navigation Elements */}
          <div className="flex items-center gap-3">
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
                <div className="absolute top-full right-0 mt-2 w-56 card-pixel overflow-hidden z-30 shadow-2xl bg-white rounded-lg border border-gray-200">
                  <a
                    href="/"
                    className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
                  >
                    🏠 Home
                  </a>
                  <a
                    href="/dashboard"
                    className="block px-4 py-3 text-valley-brown hover:bg-valley-gold/20 transition-colors font-pixel text-sm"
                  >
                    🎯 Dashboard
                  </a>
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

      {/* Main Dashboard Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* User Greeting Section */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="relative inline-block">
              <img
                src={user.profilePic}
                alt={`${user.name}'s profile`}
                className="w-48 h-48 rounded-full object-cover border-6 border-white/40 mx-auto mb-10 shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={handleEditClick}
                title="Click to edit profile"
              />
              <button 
                className="absolute bottom-12 right-0 bg-valley-gold hover:bg-valley-gold/90 text-valley-brown rounded-full p-2 border-2 border-white/50 shadow-lg transition-all duration-200 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick();
                }}
              >
                ✏️
              </button>
            </div>
            <h1 className="text-2xl md:text-3xl font-pixel text-white mb-8" style={{fontSize: '1.5rem', textShadow: '0 0 60px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.85), 0 0 100px rgba(0,0,0,0.75), 0 4px 10px rgba(0,0,0,0.9)' }}>
              {getGreeting()}, {user.name}! 👋
            </h1>
            <p className="text-lg md:text-xl text-valley-gold font-pixel mb-10" style={{fontSize: '1rem', textShadow: '0 0 60px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.85), 0 0 100px rgba(0,0,0,0.75), 0 4px 10px rgba(0,0,0,0.9)' }}>
              Ready to build something amazing?
            </p>
            
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-10 border border-white/40 mb-10 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="text-center group">
                  <span className="font-pixel text-white block mb-3 text-sm">Email:</span>
                  <p className="text-valley-gold font-pixel text-sm group-hover:text-valley-gold transition-colors cursor-pointer">
                    {user.email}
                  </p>
                </div>
                <div className="text-center group">
                  <span className="font-pixel text-white block mb-3 text-sm">University:</span>
                  <p className="text-valley-gold font-pixel text-sm group-hover:text-valley-gold transition-colors cursor-pointer">
                    {user.university}
                  </p>
                </div>
              </div>
            </div>

            {/* Team Lookup Button */}
            <a
              href="https://discord.gg/temporary" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pixel btn-pixel-secondary text-lg inline-block hover:scale-105 transition-transform duration-200"
            >
              👥 Team Lookup on Discord
            </a>
          </div>
        </div>
        
        {/* Countdown at bottom of dashboard screen */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden">
          <div className="bg-gradient-to-r from-black/10 via-black/45 to-black/20 backdrop-blur-md border-valley-gold/30 py-6 shadow-2xl">
            <div className="flex animate-scroll-single">
              {/* First countdown */}
              <div className="flex items-center gap-12 whitespace-nowrap text-white font-pixel text-base md:text-lg px-8 flex-shrink-0 min-w-full justify-center">
                {countdownContent}
              </div>
              {/* Second countdown - appears after first exits */}
              <div className="flex items-center gap-12 whitespace-nowrap text-white font-pixel text-base md:text-lg px-8 flex-shrink-0 min-w-full justify-center">
                {countdownContent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsEditModalOpen(false)}>
          <div className="bg-valley-cream rounded-xl border-4 border-valley-brown max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-pixel text-valley-brown">Edit Profile</h2>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-valley-brown hover:text-valley-gold text-3xl font-bold leading-none transition-colors"
                >
                  ✖️
                </button>
              </div>

              {/* Edit Form */}
              <form onSubmit={handleSaveChanges} className="space-y-6">
                {/* Profile Picture URL */}
                <div>
                  <label className="block font-pixel text-valley-brown text-sm mb-2">
                    Profile Picture URL:
                  </label>
                  <input
                    type="url"
                    name="profilePic"
                    value={editForm.profilePic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                    placeholder="https://example.com/image.jpg"
                  />
                  {editForm.profilePic && (
                    <div className="mt-3 flex justify-center">
                      <img 
                        src={editForm.profilePic} 
                        alt="Preview" 
                        className="w-24 h-24 rounded-full object-cover border-2 border-valley-brown"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-pixel text-valley-brown text-sm mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-pixel text-valley-brown text-sm mb-2">
                    New Password (leave blank to keep current):
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={editForm.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                    placeholder="••••••••"
                    minLength={8}
                  />
                  {editForm.password && (
                    <p className="mt-2 text-xs font-pixel text-valley-brown/70">
                      Password must be at least 8 characters
                    </p>
                  )}
                </div>

                {/* University */}
                <div>
                  <label className="block font-pixel text-valley-brown text-sm mb-2">
                    University:
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={editForm.university}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-valley-brown font-pixel text-sm focus:outline-none focus:border-valley-gold"
                    placeholder="Georgia Institute of Technology"
                    required
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="btn-pixel flex-1 text-sm"
                  >
                    💾 Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="btn-pixel flex-1 text-sm"
                    style={{ 
                      backgroundColor: '#e74c3c', 
                      borderColor: '#c0392b',
                      color: 'white'
                    }}
                  >
                    ❌ Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}