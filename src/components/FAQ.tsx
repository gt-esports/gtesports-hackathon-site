import faqData from '../data/faqData';
import React, { useState, useEffect } from 'react';

// Types
type FAQCategory = keyof typeof faqData;
type FAQData = typeof faqData[FAQCategory];
type DialogueOverlayProps = {
  open: boolean;
  onClose: () => void;
  data: FAQData | null;
};

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

  // Card component for grid
  const FaqCard = ({ category, title, description }: { category: FAQCategory, title: string, description: string }) => (
    <button
      type="button"
      className="bg-valley-cream p-4 text-valley-brown cursor-pointer text-center relative shadow-md hover:-translate-y-1 transition-transform duration-150 font-pixel border-4 border-valley-brown"
      onClick={() => handleFAQClick(category)}
    >
      {/* Thumbtack */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-valley-brown border-2 border-white" style={{boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.2)'}}></div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </button>
  );

  return (
    <section className="py-20 gradient-primary" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-white mb-4 font-pixel drop-shadow-lg">FAQ</h2>
        </div>
        <div className="text-center text-white/80 font-pixel">
          <div className="bg-[#f5dcb0] border-[12px] border-valley-brown shadow-lg w-full mx-auto p-6" style={{ boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)' }}>
            <h2 className="text-4xl text-valley-brown text-center mb-8 font-bold" style={{ textShadow: '2px 2px 0px #e0c8a8' }}>Frequently Asked Questions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FaqCard category="general" title="General FAQ" description="General Questions About The Event." />
              <FaqCard category="food" title="Food" description="Catering, Dietary Restrictions, and Allergies." />
              <FaqCard category="venue" title="Venue" description="Location Details, Entry, Parking." />
              <FaqCard category="items" title="Adventurer's Pack" description="What to Bring, How to Prepare, etc." />
              <FaqCard category="lost" title="Lost & Found" description="Reporting and Retrieving Lost Items." />
              <FaqCard category="misc" title="Other Questions" description="Miscellaneous FAQ." />
            </div>
          </div>
          <DialogueOverlay
            open={dialogOpen}
            onClose={handleClose}
            data={dialogCategory ? faqData[dialogCategory] : null}
          />
        </div>
      </div>
    </section>
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

  // Handle clicking outside of dialogue to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2 py-6 sm:px-0 sm:py-0"
      onClick={handleOverlayClick}
      style={{ cursor: 'pointer' }}>

      <div className="relative w-full max-w-4xl p-4 sm:p-2">

        {/* Close Button */}
        <div className="absolute -top-2 -right-2">
          <button onClick={onClose} className="bg-red-700 text-white rounded-full w-10 h-10 border-2 border-white text-2xl font-pixel shadow-lg">X</button>
        </div>

        {/* Dialogue Box */}
        <div className="w-full bg-[#f5dcb0] border-4 border-valley-brown rounded-lg shadow-lg flex flex-col-reverse sm:flex-row font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>
          
          {/* Response */}
          <div className="flex-1 p-6 relative min-h-[10rem] flex flex-col justify-between">
            <div 
              className="text-2xl text-valley-brown leading-tight min-h-[4rem]"
              id="dialog-title"
              role="region" 
              aria-live="polite"
            >
              {currentView === 'greeting' ? data.greeting : answer}
            </div>
          </div>

          {/* Portrait/Name */}
          <div 
            className="flex-shrink-0 sm:w-48 bg-[#c7966b] p-4 border-b-4 sm:border-b-0 sm:border-l-4 border-valley-brown flex flex-col items-center gap-2 justify-center"
            role="complementary"
            aria-label="Character portrait"
          >
            <div className="relative">
              <div className="w-28 h-28 border-4 border-valley-brown rounded-md overflow-hidden bg-[#e0c8a8]">
                <img src={data.portrait} alt={`Portrait of ${data.townie}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="bg-[#f5dcb0] border-2 border-valley-brown rounded-md px-5 py-1 text-center shadow-sm mt-2">
              <h3 className="text-2xl text-valley-brown font-bold">{data.townie}</h3>
            </div>
          </div>

        </div>

        {/* Questions Box */}
        <FaqOptions
          questions={data.questions}
          onSelect={(a) => { setCurrentView('answer'); setAnswer(a); }}
          onBack={() => { setCurrentView('greeting'); setAnswer(null); }}
          goBackDialogue={currentView === 'answer'}
        />
      </div>
    </div>
  );
}

function FaqOptions({ questions: options, onSelect, onBack, goBackDialogue: backOptionEnabled }: {
  questions: { q: string; a: string }[];
  onSelect: (a: string) => void;
  onBack: () => void;
  goBackDialogue: boolean;
}) {
  
  return (
  <div className="w-full bg-[#f5dcb0] border-4 border-valley-brown rounded-lg shadow-lg mt-4 font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>
    <ul className="p-2">
      {backOptionEnabled ? (
        <li>
          <button
            onClick={onBack}
            className="text-2xl text-valley-brown leading-tight py-1 px-3 flex items-center cursor-pointer rounded-md hover:bg-[#e0c8a8] w-full text-left">
            ...Ask another question?
          </button>
        </li>
      ) : (
        options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onSelect(option.a)}
              className="text-2xl text-valley-brown leading-tight py-1 px-3 flex items-center cursor-pointer rounded-md hover:bg-[#e0c8a8] w-full text-left">
              {option.q}
            </button>
          </li>
        ))
      )}
    </ul>
  </div>
  );
}