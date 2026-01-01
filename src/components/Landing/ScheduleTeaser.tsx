import CountdownCarousel from '../CountdownCarousel';

export default function ScheduleTeaser() {
  return (
    <section id="schedule" className="min-h-screen bg-medium-blue relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-pixel">Schedule</h2>
        </div>
        <div className="text-center text-white/80 font-pixel">
          <p>Coming Soon...</p>
        </div>
      </div>
      <CountdownCarousel />
    </section>
  )
}
