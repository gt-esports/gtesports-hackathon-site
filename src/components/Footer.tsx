import { siteConfig } from "../data/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-blue text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-pixel text-sky-blue">TechHack Valley</h3>
            <p className="text-white/80 mb-4 leading-relaxed font-pixel text-sm">
              Georgia Tech's coziest hackathon where ideas grow like crops. Join us for 36 hours of innovation,
              collaboration, and cozy coding vibes.
            </p>
            <p className="text-sky-blue/80 mb-6 font-pixel text-xs">
              Hosted by <span className="text-valley-gold font-semibold">GT Esports</span>
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel-secondary p-3 text-sm"
                aria-label="Join our Discord"
              >
                💬
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel-secondary p-3 text-sm"
                aria-label="Follow us on Instagram"
              >
                📷
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel-secondary p-3 text-sm"
                aria-label="Connect on LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-blue font-pixel">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/schedule" className="text-white/80 hover:text-white transition-colors duration-200 font-pixel text-sm">
                  📅 Schedule
                </a>
              </li>
              <li>
                <a href="/sponsors" className="text-white/80 hover:text-white transition-colors duration-200 font-pixel text-sm">
                  🏢 Sponsors
                </a>
              </li>
              <li>
                <a href="/teams" className="text-white/80 hover:text-white transition-colors duration-200 font-pixel text-sm">
                  👥 Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-blue font-pixel">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-pixel text-sm"
                >
                  📧 {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.codeOfConduct}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-pixel text-sm"
                >
                  📋 Code of Conduct
                </a>
              </li>
              <li className="text-white/60 text-sm font-pixel">📍 {siteConfig.event.location}</li>
              <li className="text-white/60 text-sm font-pixel">🏢 Hosted by <span className="text-valley-gold font-semibold">GT Esports</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0 font-pixel">
              © {currentYear} TechHack Valley. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-white/60 text-sm font-pixel">
              <span>Made with 💚 by Georgia Tech students</span>
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
