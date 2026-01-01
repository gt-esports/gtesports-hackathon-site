import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import ScheduleTeaser from "../components/Landing/ScheduleTeaser"
import SponsorsTeaser from "../components/Landing/SponsorsTeaser"
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Landing() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      <Hero />
      <About />
      <ScheduleTeaser />
      <SponsorsTeaser />
      <FAQ />
      <Footer />
    </div>
  )
}
