import { useEffect, useRef, useState, useCallback } from 'react';

// Constants
const TYPEWRITER_SEQUENCES = [
  "What's this all about?",
  "Ready to dive in?", 
  "What is\nTechHack Valley?"
];

const FINAL_TEXT = "What is\nTechHack Valley?";
const CURSOR_BLINK_INTERVAL = 530;
const BASE_TYPING_SPEED = 50;
const DELETE_SPEED = 30;

interface TypewriterState {
  displayedText: string;
  showCursor: boolean;
  isTyping: boolean;
  isComplete: boolean;
  showContent: boolean;
  currentSequenceIndex: number;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const speedMultiplier = useRef(1);
  
  const [typewriterState, setTypewriterState] = useState<TypewriterState>({
    displayedText: '',
    showCursor: true,
    isTyping: false,
    isComplete: false,
    showContent: false,
    currentSequenceIndex: 0
  });

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timer => clearTimeout(timer));
    timeoutsRef.current = [];
  }, []);

  const completeAnimation = useCallback(() => {
    clearAllTimeouts();
    setTypewriterState(prev => ({
      ...prev,
      displayedText: FINAL_TEXT,
      currentSequenceIndex: 2,
      isComplete: true,
      isTyping: false,
      showContent: true
    }));
  }, [clearAllTimeouts]);

  // Reset hasAnimated when component mounts
  useEffect(() => {
    hasAnimated.current = false;
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!typewriterState.isTyping) return;

    let sequenceIndex = 0;
    let charIndex = 0;
    let currentText = '';
    
    const type = () => {
      const currentSequence = TYPEWRITER_SEQUENCES[sequenceIndex];
      
      if (charIndex < currentSequence.length) {
        currentText += currentSequence[charIndex];
        setTypewriterState(prev => ({
          ...prev,
          displayedText: currentText,
          currentSequenceIndex: sequenceIndex
        }));
        charIndex++;
        
        const typingSpeed = (Math.random() * 20 + BASE_TYPING_SPEED) / speedMultiplier.current;
        const timer = setTimeout(type, typingSpeed);
        timeoutsRef.current.push(timer);
      } else {
        if (sequenceIndex < TYPEWRITER_SEQUENCES.length - 1) {
          const timer = setTimeout(() => {
            const deleteText = () => {
              if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                setTypewriterState(prev => ({ ...prev, displayedText: currentText }));
                const deleteTimer = setTimeout(deleteText, DELETE_SPEED / speedMultiplier.current);
                timeoutsRef.current.push(deleteTimer);
              } else {
                sequenceIndex++;
                charIndex = 0;
                const nextTimer = setTimeout(type, 300 / speedMultiplier.current);
                timeoutsRef.current.push(nextTimer);
              }
            };
            deleteText();
          }, 1000 / speedMultiplier.current);
          timeoutsRef.current.push(timer);
        } else {
          const contentTimer = setTimeout(() => {
            setTypewriterState(prev => ({
              ...prev,
              isTyping: false,
              isComplete: true,
              showContent: true
            }));
          }, 800 / speedMultiplier.current);
          timeoutsRef.current.push(contentTimer);
        }
      }
    };

    type();
    return clearAllTimeouts;
  }, [typewriterState.isTyping, clearAllTimeouts]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setTypewriterState(prev => ({ ...prev, showCursor: !prev.showCursor }));
    }, CURSOR_BLINK_INTERVAL);

    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll detection to speed up animation
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If user is scrolling very fast, complete animation immediately
      if (scrollVelocity > 50) {
        completeAnimation();
        return;
      }
      
      // Adjust speed based on scroll position
      if (sectionRect.bottom < 0) {
        speedMultiplier.current = 15;
      } else if (sectionRect.top < windowHeight * 0.3 && sectionRect.bottom > windowHeight * 0.7) {
        speedMultiplier.current = 5;
      } else {
        speedMultiplier.current = 1;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [completeAnimation]);

  // Intersection observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            
            if (!hasAnimated.current) {
              setTimeout(() => {
                setTypewriterState(prev => ({ ...prev, isTyping: true }));
                hasAnimated.current = true; 
              }, 400);
            } else {
              completeAnimation();
            }
          } else {
            // Speed up animation when not in view
            speedMultiplier.current = 8;
          }
        });
      },
      { threshold: 0.1 }
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
  }, [completeAnimation]);

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
            typewriterState.isComplete 
              ? 'transform translate-y-0 text-left' 
              : 'transform translate-y-[20vh] md:translate-y-[0vh]'
          } ${
            typewriterState.currentSequenceIndex < 2 ? 'text-center' : 'text-left'
          }`} style={{ fontFamily: "'Press Start 2P', monospace" }}>
            <span className="whitespace-pre-line">
              {typewriterState.displayedText}
              {typewriterState.showCursor && (
                <span className="animate-pulse text-valley-gold">|</span>
              )}
            </span>
          </h2>
        </div>

        {/* Text content - appears after typewriter completes */}
        {typewriterState.showContent && (
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
