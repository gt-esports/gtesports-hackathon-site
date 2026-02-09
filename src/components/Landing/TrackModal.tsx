import { useRef, useEffect } from "react";
import type { Track } from "../../data/tracks";

interface TrackModalProps {
  track: Track;
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackModal({ track, isOpen, onClose }: TrackModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal Container - "Parchment" style */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#fdf6e3] border-4 border-[#d4a373] shadow-2xl rounded-sm p-8 md:p-12 transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          backgroundImage: "radial-gradient(#d4a373 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Decorative corner nails */}
        <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#8d6e63] shadow-inner border border-[#5d4037]"></div>
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#8d6e63] shadow-inner border border-[#5d4037]"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#8d6e63] shadow-inner border border-[#5d4037]"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#8d6e63] shadow-inner border border-[#5d4037]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-valley-brown hover:text-red-600 transition-colors z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Header */}
          <div className="mb-6 border-b-2 border-valley-brown/20 pb-4 w-full">
            <div className="text-6xl mb-4 animate-bounce-gentle">{track.icon}</div>
            <h2 className="text-3xl md:text-4xl font-pixel text-valley-brown mb-2 uppercase tracking-wide">
              {track.title}
            </h2>
            <span className="inline-block px-4 py-1 bg-valley-brown text-valley-cream font-pixel text-xs rounded-full uppercase tracking-widest">
              {track.difficulty}
            </span>
          </div>

          {/* Body Text */}
          <div className="prose prose-stone max-w-none text-left w-full font-serif text-valley-brown/90 leading-relaxed text-lg whitespace-pre-line mb-8">
            {track.fullDescription}
          </div>

          {/* Prizes Section */}
          <div className="w-full text-left bg-valley-brown/5 p-6 rounded-lg border-2 border-dashed border-valley-brown/20 relative">
            <h3 className="font-pixel text-xl text-valley-brown mb-4 flex items-center gap-2">
              <span>🎁</span> Quest Rewards
            </h3>
            <div className="text-valley-brown/80 font-serif text-lg italic">
              To Be Announced (TBA)
            </div>
            {/* Stamp decoration */}
            <div className="absolute -bottom-2 -right-2 text-4xl opacity-20 transform rotate-12">
              🏆
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 w-full justify-center items-center">
             {track.pdfUrl && (
              <a 
                href={track.pdfUrl}
                download
                className="flex items-center gap-2 px-6 py-3 bg-valley-brown text-valley-cream font-pixel rounded shadow-lg hover:bg-[#5d4037] transition-all transform hover:-translate-y-1"
              >
                <span>📜</span> Download Full Guide (PDF)
              </a>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
