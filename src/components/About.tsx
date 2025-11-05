import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);

  // Typewriter sequences
  const typewriterSequence = [
    "What's this all about?", // First Title
    "Ready to dive in?", // Second Title
    "What is\nTechHack Valley?" // Final Title
  ];

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return;

    let sequenceIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let contentTimer: ReturnType<typeof setTimeout> | null = null;
    
    const type = () => {
      const currentSequence = typewriterSequence[sequenceIndex];
      
      if (charIndex < currentSequence.length) {
        currentText += currentSequence[charIndex];
        setDisplayedText(currentText);
        setCurrentSequenceIndex(sequenceIndex);
        charIndex++;
        
        const typingSpeed = Math.random() * 20 + 50;
        const timer = setTimeout(type, typingSpeed);
        timeoutsRef.current.push(timer);
      } else {
        if (sequenceIndex < typewriterSequence.length - 1) {
          const timer = setTimeout(() => {
            const deleteText = () => {
              if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                setDisplayedText(currentText);
                const deleteTimer = setTimeout(deleteText, 30);
                timeoutsRef.current.push(deleteTimer);
              } else {
                sequenceIndex++;
                charIndex = 0;
                const nextTimer = setTimeout(type, 300);
                timeoutsRef.current.push(nextTimer);
              }
            };
            deleteText();
          }, 1000);
          timeoutsRef.current.push(timer);
        } else {
          setIsTyping(false);
          setTypewriterComplete(true);
          contentTimer = setTimeout(() => {
            setShowContent(true);
          }, 800);
        }
      }
    };

    type();

    return () => {
      timeoutsRef.current.forEach(timer => clearTimeout(timer));
      timeoutsRef.current = [];
    };
  }, [isTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            
            if (!hasAnimated.current) {
              setTimeout(() => {
                setIsTyping(true);
                hasAnimated.current = true; 
              }, 400);
            } else {
              setDisplayedText("What is\nTechHack Valley?");
              setCurrentSequenceIndex(2);
              setTypewriterComplete(true);
              setShowContent(true);
            }
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-start md:items-center pt-36 md:pt-0">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-[position:75%_center] md:bg-center bg-no-repeat" 
        style={{
          backgroundImage: 'url("/pixel_art_large-2.png")'
        }}
      ></div>
      
      {/* Semi-transparent gradient overlay */}
      <div className="absolute inset-0 bg-opacity-75" style={{
        background: 'radial-gradient(circle at center, rgba(101, 199, 255, 0.6) 0%, rgba(101, 199, 255, 0.6) 25%, rgba(88, 163, 247, 0.6) 70%, rgba(5, 65, 134, 0.6) 100%)'
      }}></div>
      
      {/* Pixel grid overlay */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
      </div>
      
      {/* Main content */}
      <div 
        ref={sectionRef}
        className="w-full px-4 md:max-w-5xl md:ml-20 lg:ml-32 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10 relative z-10 py-8 md:py-0"
      >
        {/* Large About text */}
        <div className="mb-8 md:mb-12 ml-0 md:ml-4 relative">
          <h2 className={`text-[1.3rem] md:text-[3rem] font-bold text-navy-blue min-h-[4rem] md:min-h-[8rem] transition-all duration-1000 ease-out ${
            typewriterComplete 
              ? 'transform translate-y-0 text-left' 
              : 'transform translate-y-[20vh] md:translate-y-[0vh]'
          } ${
            currentSequenceIndex < 2 ? 'text-center' : 'text-left'
          }`} style={{ fontFamily: "'Press Start 2P', monospace" }}>
            <span className="whitespace-pre-line">
              {displayedText}
              {showCursor && (
                <span className="animate-pulse text-valley-gold">|</span>
              )}
            </span>
          </h2>
        </div>

        {/* Text content - appears after typewriter completes */}
        {showContent && (
          <div className="space-y-8 md:space-y-10 relative z-10 w-full md:w-[85%] lg:w-[90%] animate-fadeInUp">
            <p className="font-pixel text-navy-blue leading-relaxed text-lg md:text-xl relative z-10 pl-4 border-l-4 border-valley-brown/30 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Welcome to GT Esports' inaugural hackathon! We welcome passionate 
            hackers, gamers, and tech enthusiasts from around the globe for a 36-hour 
            adventure into the future of esports and gaming technology.
            </p>
            
            <p className="font-pixel text-navy-blue leading-relaxed text-lg md:text-xl relative z-10 pl-4 border-l-4 border-valley-brown/30 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            This hackathon marks our very first event of its kind hosted by GT Esports, 
            and we're thrilled to bring students together to innovate, problem-solve, and 
            have fun. We hope this will become an annual tradition, inspiring new ideas, teamwork, 
            and creativity across our campus community. Let's make this a kickoff to 
            something amazing that continues year after year!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
