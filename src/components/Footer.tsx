import { siteConfig } from "../data/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3e2723] text-[#ffecb3] py-16 border-t-[8px] border-[#5d4037] relative">
      {/* Decorative Top Border Pattern (Grass/Dirt transition) */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-pixel text-[#ffcc80] drop-shadow-sm">TechHack Valley</h3>
            <p className="text-[#ffecb3]/80 mb-4 leading-relaxed font-pixel text-sm">
              Georgia Tech's coziest hackathon where ideas grow like crops. Join us for 36 hours of innovation,
              collaboration, and cozy coding vibes.
            </p>
            <p className="text-[#ffcc80]/80 mb-6 font-pixel text-xs">
              Hosted by <span className="text-[#ffab40] font-semibold">Georgia Tech Esports</span>
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5d4037] hover:bg-[#8d6e63] text-[#ffecb3] p-3 rounded-sm border-2 border-[#8d6e63] hover:border-[#ffe082] transition-colors duration-200"
                aria-label="Join our Discord"
              >
                💬
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5d4037] hover:bg-[#8d6e63] text-[#ffecb3] p-3 rounded-sm border-2 border-[#8d6e63] hover:border-[#ffe082] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                📷
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5d4037] hover:bg-[#8d6e63] text-[#ffecb3] p-3 rounded-sm border-2 border-[#8d6e63] hover:border-[#ffe082] transition-colors duration-200"
                aria-label="Connect on LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#ffcc80] font-pixel">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/schedule" className="text-[#ffecb3]/80 hover:text-[#ffcc80] transition-colors duration-200 font-pixel text-sm">
                  📅 Schedule
                </a>
              </li>
              <li>
                <a href="/sponsors" className="text-[#ffecb3]/80 hover:text-[#ffcc80] transition-colors duration-200 font-pixel text-sm">
                  🏢 Sponsors
                </a>
              </li>
              <li>
                <a href="/teams" className="text-[#ffecb3]/80 hover:text-[#ffcc80] transition-colors duration-200 font-pixel text-sm">
                  👥 Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#ffcc80] font-pixel">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-[#ffecb3]/80 hover:text-[#ffcc80] transition-colors duration-200 font-pixel text-sm"
                >
                  📧 {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.codeOfConduct}
                  className="text-[#ffecb3]/80 hover:text-[#ffcc80] transition-colors duration-200 font-pixel text-sm"
                >
                  📋 Code of Conduct
                </a>
              </li>
              <li className="text-[#ffecb3]/60 text-sm font-pixel">📍 {siteConfig.event.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#8d6e63]/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#ffecb3]/60 text-sm mb-4 md:mb-0 font-pixel">
              © {currentYear} TechHack Valley. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-[#ffecb3]/60 text-sm font-pixel">
              <span>Made with 💚 by Georgia Tech Esports Development Team</span>
              <div className="flex space-x-2">
                <span className="animate-bounce-gentle">🌱</span>
                <span className="animate-bounce-gentle" style={{ animationDelay: "0.2s" }}>💻</span>
                <span className="animate-bounce-gentle" style={{ animationDelay: "0.4s" }}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
