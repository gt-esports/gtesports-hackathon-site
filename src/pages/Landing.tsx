import Hero from "../components/Hero"
import About from "../components/About"
import ScheduleTeaser from "../components/ScheduleTeaser"
import SponsorsTeaser from "../components/SponsorsTeaser"
import Community from "../components/Community"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tracks from "../components/Tracks"

export default function Landing() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      <Hero />
      <About />
      <Tracks/>
      <ScheduleTeaser />
      <SponsorsTeaser />
      <Community />
      <FAQ />
      <Footer />
    </div>
  )
}
