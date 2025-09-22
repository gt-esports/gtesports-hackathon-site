import Hero from "../components/Hero"
import EventStats from "../components/EventStats"
import About from "../components/About"
import ScheduleTeaser from "../components/ScheduleTeaser"
import SponsorsTeaser from "../components/SponsorsTeaser"
import Community from "../components/Community"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

export default function Landing() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Hero />
      <EventStats />
      <About />
      <ScheduleTeaser />
      <SponsorsTeaser />
      <Community />
      <FAQ />
      <Footer />
    </div>
  )
}
