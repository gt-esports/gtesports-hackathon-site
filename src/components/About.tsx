import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-start md:items-center pt-38 md:pt-0">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-[position:75%_center] md:bg-center bg-no-repeat" style={{
        backgroundImage: 'url("/pixel_art_large-2.png")'
      }}></div>
      
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-opacity-75" style={{
        background: 'radial-gradient(circle at center, rgba(101, 199, 255, 0.6) 0%, rgba(101, 199, 255, 0.6) 25%, rgba(88, 163, 247, 0.6) 70%, rgba(5, 65, 134, 0.6) 100%)'
      }}></div>
      
      {/* Pixel grid overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      {/* Main content */}
      <div 
        ref={sectionRef}
        className="w-full px-4 md:max-w-5xl md:ml-20 lg:ml-32 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10 relative z-10 py-8 md:py-0"
      >
        {/* Large About text */}
        <div className="mb-8 md:mb-12 ml-0 md:ml-4">
          <h2 className="text-[1.5rem] md:text-[3rem] font-bold text-navy-blue" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            What is<br/>TechHack Valley?
          </h2>
        </div>

        {/* Text content */}
        <div className="space-y-8 md:space-y-10 relative z-10 w-full md:w-[85%] lg:w-[90%]">
          <p className="font-pixel text-navy-blue leading-relaxed text-lg md:text-xl relative z-10 pl-4 border-l-4 border-valley-brown/30">
          Welcome to GT Esports' inaugural hackathon! We welcome passionate 
          hackers, gamers, and tech enthusiasts from around the globe for a 48-hour 
          adventure into the future of esports and gaming technology.
          </p>
          
          <p className="font-pixel text-navy-blue leading-relaxed text-lg md:text-xl relative z-10 pl-4 border-l-4 border-valley-brown/30">
          This hackathon marks our very first event of its kind hosted by GT Esports, 
          and we're thrilled to bring students together to innovate, problem-solve, and 
          have fun. We hope this will become an annual tradition, inspiring new ideas, teamwork, 
          and creativity across our campus community. Let's make this a kickoff to 
          something amazing that continues year after year!
          </p>
        </div>
      </div>
    </section>
  )
}
