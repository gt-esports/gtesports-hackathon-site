import Hero from "../components/Hero"
import About from "../components/About"
import ScheduleTeaser from "../components/ScheduleTeaser"
import SponsorsTeaser from "../components/SponsorsTeaser"
import FAQ from "../components/FAQ"
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
