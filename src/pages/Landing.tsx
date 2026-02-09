import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import TracksTeaser from "../components/Landing/TracksTeaser"
import ScheduleTeaser from "../components/Landing/ScheduleTeaser"
import SponsorsTeaser from "../components/Landing/SponsorsTeaser"
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Landing() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-valley-cream">
      <Navbar />
      <Hero />
      <About />
      <TracksTeaser />
      <ScheduleTeaser />
      <SponsorsTeaser />
      <FAQ />
      <Footer />
    </div>
  )
}
