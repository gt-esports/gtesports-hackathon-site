import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import TracksTeaser from "../components/Landing/TracksTeaser"
import SponsorsTeaser from "../components/Landing/SponsorsTeaser"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Landing() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-valley-cream">
      <Navbar />
      <Hero />
      <About />
      <TracksTeaser />
      {/* Post-event landing page: keep the old Season Recap section code in the repo for future reuse. */}
      {/* <ScheduleTeaser /> */}
      <SponsorsTeaser />
      {/* Post-event landing page: keep the old Town Square section code in the repo for future reuse. */}
      {/* <FAQ /> */}
      <Footer />
    </div>
  )
}
