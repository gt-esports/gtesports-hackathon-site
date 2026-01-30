import {
  Instagram,
  Linkedin,
  Calendar,
  Building,
  Users,
  Mail,
  FileText,
  MapPin,
  Heart,
  Sprout,
  Gamepad2,
  Rocket
} from "lucide-react"
import { siteConfig } from "../data/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Discord",
      url: siteConfig.links.discord,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
        </svg>
      ),
      label: "Join our Discord"
    },
    {
      name: "Instagram",
      url: siteConfig.links.instagram,
      icon: <Instagram className="w-5 h-5" />,
      label: "Follow us on Instagram"
    },
    {
      name: "LinkedIn",
      url: siteConfig.links.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      label: "Connect on LinkedIn"
    }
  ]

  const quickLinks = [
    { name: "Schedule", url: "/#schedule", icon: <Calendar className="w-4 h-4" /> },
    { name: "Sponsors", url: "/#sponsors", icon: <Building className="w-4 h-4" /> },
    { name: "Teams", url: "/teams", icon: <Users className="w-4 h-4" /> },
    { name: "Meet the Team", url: siteConfig.links.ourTeam, icon: <Users className="w-4 h-4" /> },
  ]

  return (
    <footer className="bg-earth-brown text-valley-cream pt-16 pb-8 border-t-8 border-valley-brown relative overflow-hidden">
      {/* Decorative Top Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-pixel text-valley-gold drop-shadow-sm mb-2">
                {siteConfig.event.name}
              </h3>
              <p className="text-valley-cream/80 text-sm leading-relaxed font-pixel max-w-md">
                {siteConfig.about.intro}
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="text-valley-gold/90 font-pixel text-xs">
                Hosted by <span className="font-bold text-valley-orange">Georgia Tech Esports</span>
              </span>

              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-valley-brown hover:bg-valley-gold text-valley-cream hover:text-valley-brown p-2.5 rounded-lg border-2 border-valley-brown hover:border-valley-orange transition-all duration-200 shadow-md group"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-valley-gold font-pixel border-b-2 border-valley-brown/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center space-x-2 text-valley-cream/80 hover:text-valley-gold transition-colors duration-200 font-pixel text-sm"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            {/* Additional Meet the Team link or buttons if needed */}
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-valley-gold font-pixel border-b-2 border-valley-brown/30 pb-2 inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex items-center space-x-2 text-valley-cream/80 hover:text-valley-gold transition-colors duration-200 font-pixel text-sm"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="break-all">{siteConfig.links.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.codeOfConduct}
                  className="group flex items-center space-x-2 text-valley-cream/80 hover:text-valley-gold transition-colors duration-200 font-pixel text-sm"
                >
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>Code of Conduct</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-valley-cream/60 text-sm font-pixel">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.event.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t-2 border-valley-brown/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-valley-cream/60 text-xs font-pixel text-center md:text-left">
              © {currentYear} {siteConfig.event.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-2 text-valley-cream/60 text-xs font-pixel">
              <span className="flex items-center gap-2 whitespace-nowrap">
                Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> by GT Esports
              </span>
              <div className="flex gap-1 ml-2">
                <Sprout className="w-3 h-3 text-green-400 animate-bounce-gentle" />
                <Gamepad2 className="w-3 h-3 text-blue-400 animate-bounce-gentle delay-150" style={{ animationDelay: "0.2s" }} />
                <Rocket className="w-3 h-3 text-orange-400 animate-bounce-gentle delay-300" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
