import {
  MessageCircle,
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
      icon: <MessageCircle className="w-5 h-5" />,
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
  ]

  return (
    <footer className="bg-earth-brown text-valley-cream pt-16 pb-8 border-t-8 border-valley-brown relative overflow-hidden">
      {/* Decorative Top Border Pattern */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                    className="group flex items-center space-x-2 text-valley-cream/80 hover:text-valley-gold transition-colors duration-200 font-pixel text-sm"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
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
                  <span>{siteConfig.links.email}</span>
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
              <span className="flex items-center gap-1">
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
