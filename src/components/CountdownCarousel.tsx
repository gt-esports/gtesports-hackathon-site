import { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '../data/site';

interface CountdownCarouselProps {
  className?: string;
}

export default function CountdownCarousel({ className = "" }: CountdownCarouselProps) {
  const hackathonStartDate = new Date(siteConfig.event.date_time).getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const distance = hackathonStartDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [hackathonStartDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const isHackathonStarted = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const countdownContent = (
    <>
      <span className="text-2xl">⏰</span>
      {isHackathonStarted ? (
        <span className="text-valley-gold text-xl">🎉 TECHHACK VALLEY IS LIVE! 🎉</span>
      ) : (
        <>
          <span className="text-white/90">{siteConfig.event.name} STARTS IN:</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.days}</span>
          <span className="text-white/80">DAYS</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.hours}</span>
          <span className="text-white/80">HOURS</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.minutes}</span>
          <span className="text-white/80">MINUTES</span>
          <span className="text-3xl text-valley-gold font-bold">{timeLeft.seconds}</span>
          <span className="text-white/80">SECONDS</span>
          <span className="text-valley-gold">✦</span>
          <span className="text-white/90">{siteConfig.event.date}</span>
          <span className="text-valley-gold">⏰</span>
        </>
      )}
    </>
  );

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-20 overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-black/10 via-black/45 to-black/20 backdrop-blur-md border-valley-gold/30 py-6 shadow-2xl">
        <div className="flex animate-scroll-single">
          {/* First countdown */}
          <div className="flex items-center gap-12 whitespace-nowrap text-white font-pixel text-base md:text-lg px-8 flex-shrink-0 min-w-full justify-center">
            {countdownContent}
          </div>
          {/* Second countdown - appears after first exits */}
          <div className="flex items-center gap-12 whitespace-nowrap text-white font-pixel text-base md:text-lg px-8 flex-shrink-0 min-w-full justify-center">
            {countdownContent}
          </div>
        </div>
      </div>
    </div>
  );
}