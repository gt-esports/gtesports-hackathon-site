
import faqData from '../data/faqData';
import { useState, useEffect } from 'react';

// Stardew-style Dialogue Overlay
type FAQCategory = keyof typeof faqData;
type FAQData = typeof faqData[FAQCategory];
type DialogueOverlayProps = {
  open: boolean;
  onClose: () => void;
  data: FAQData | null;
};


function DialogueOptionsBox({ options, onSelect, onBack, goBackDialogue: showBack }: {
  options: { q: string; a: string }[];
  onSelect: (a: string) => void;
  onBack: () => void;
  goBackDialogue: boolean;
}) {
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="w-full bg-[#f5dcb0] border-4 border-[#8b5a2b] rounded-lg shadow-lg mt-4 font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>
      <ul className="p-2">
        {showBack ? (
          <li>
            <button
              onClick={onBack}
              className="text-2xl text-[#603913] leading-tight py-1 px-3 flex items-center cursor-pointer rounded-md hover:bg-[#e0c8a8] w-full text-left"
            >
              ...Ask something else?
            </button>
          </li>
        ) : (
          options.map((option, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => onSelect(option.a)}
                className="text-2xl text-[#603913] leading-tight py-1 px-3 flex items-center cursor-pointer rounded-md hover:bg-[#e0c8a8] w-full text-left"
              >
                <span className="w-8 h-8 mr-4 flex-shrink-0">
                  {hoveredIndex === index && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
                      <path d="M5 12V8H0V7H4V4H5V0H6V5H10V6H7V12H5Z" fill="#603913"/>
                      <path d="M6 11V7H11V6H7V5H6V0H5V4H1V5H4V8H5V12H6Z" fill="#e4a86f"/>
                    </svg>
                  )}
                </span>
                {option.q}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

function DialogueOverlay({ open, onClose, data }: DialogueOverlayProps) {
  const [currentView, setCurrentView] = useState<'greeting' | 'answer'>('greeting');
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setCurrentView('greeting');
      setAnswer(null);
    }
  }, [open, data]);

  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 py-6 sm:px-0 sm:py-0">
      <div className="relative w-full max-w-2xl p-4 sm:p-2">
        <div className="absolute -top-4 -right-4">
          <button onClick={onClose} className="bg-red-600 text-white rounded-full w-10 h-10 border-2 border-white text-2xl font-pixel shadow-lg hover:bg-red-700">&times;</button>
        </div>
        <div className="w-full bg-[#f5dcb0] border-4 border-[#8b5a2b] rounded-lg shadow-lg flex flex-col-reverse sm:flex-row font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>
          {/* Dialogue Text */}
          <div className="flex-1 p-6 relative min-h-[10rem] flex flex-col justify-between">
            <p className="text-2xl text-[#603913] leading-tight min-h-[4rem]">
              {currentView === 'greeting' ? data.greeting : answer}
            </p>
            
          </div>
          {/* Portrait and Name */}
          <div className="flex-shrink-0 sm:w-48 bg-[#c7966b] p-4 border-b-4 sm:border-b-0 sm:border-l-4 border-[#8b5a2b] flex flex-col items-center gap-2 justify-center">
            <div className="relative">
              <div className="w-28 h-28 border-4 border-[#8b5a2b] rounded-md overflow-hidden bg-[#e0c8a8]">
                <img src={data.portrait} alt={`Portrait of ${data.townie}`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#f5dcb0] border-2 border-[#8b5a2b] rounded-md px-5 py-1 text-center shadow-sm mt-2">
              <h2 className="text-2xl text-[#603913] font-bold">{data.townie}</h2>
            </div>
          </div>
        </div>

        {/* Options Box */}
        <DialogueOptionsBox
          options={data.questions}
          onSelect={(a) => { setCurrentView('answer'); setAnswer(a); }}
          onBack={() => { setCurrentView('greeting'); setAnswer(null); }}
          goBackDialogue={currentView === 'answer'}
        />
      </div>
    </div>
  );
}

export default function FAQ() {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogCategory, setDialogCategory] = useState<FAQCategory | null>(null);

  const handleFAQClick = (category: FAQCategory) => {
    setDialogCategory(category);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setDialogCategory(null);
  };

  return (
    <section className="py-20 gradient-primary">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-pixel drop-shadow-lg">FAQ</h2>
        </div>
        <div className="text-center text-white/80 font-pixel">
          <div className="card-pixel w-full mx-auto p-4">
            <h1 className="text-valley-brown">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="parchment p-4 rounded-lg text-slate-800 cursor-pointer text-center" onClick={() => handleFAQClick('tickets')}>
                <h3 className="text-2xl font-bold">General FAQ</h3>
                <p className="mt-2 text-sm">Need to buy something? Pierre's your man.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-slate-800 cursor-pointer text-center" onClick={() => handleFAQClick('food')}>
                <h3 className="text-2xl font-bold">Food</h3>
                <p className="mt-2 text-sm">Gus is cooking up something special. See what's on the menu!</p>
              </div>
              <div className="parchment p-4 rounded-lg text-slate-800 cursor-pointer text-center" onClick={() => handleFAQClick('venue')}>
                <h3 className="text-2xl font-bold">Venue</h3>
                <p className="mt-2 text-sm">Robin and the Mayor have the blueprints and the official town schedule.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-slate-800 cursor-pointer text-center" onClick={() => handleFAQClick('rules')}>
                <h3 className="text-2xl font-bold">Adventurer's Pack</h3>
                <p className="mt-2 text-sm">Marnie knows what's safe to have around the farm.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-slate-800 cursor-pointer text-center" onClick={() => handleFAQClick('lost')}>
                <h3 className="text-2xl font-bold">Lost & Found</h3>
                <p className="mt-2 text-sm">Gunther is curating a collection of lost artifacts at the Museum Tent.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-slate-800 cursor-pointer text-center" onClick={() => handleFAQClick('special')}>
                <h3 className="text-2xl font-bold">Other Questions</h3>
                <p className="mt-2 text-sm">The Wizard has foreseen this question. Seek his counsel in the tower.</p>
              </div>
            </div>
          </div>
          <DialogueOverlay
            open={dialogOpen}
            onClose={handleClose}
            data={dialogCategory && typeof dialogCategory === 'string' && dialogCategory in faqData ? faqData[dialogCategory as FAQCategory] : null}
          />
        </div>
      </div>
    </section>
  );
}