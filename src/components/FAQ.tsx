import faqData from '../data/faqData';
import { useState, useEffect } from 'react';

// Types
type FAQCategory = keyof typeof faqData;
type FAQData = typeof faqData[FAQCategory];
type DialogueOverlayProps = {
  open: boolean;
  onClose: () => void;
  data: FAQData | null;
};


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
      <div className="relative w-full max-w-4xl p-4 sm:p-2">

        {/* Close Button */}
        <div className="absolute -top-4 -right-4">
          <button onClick={onClose} className="bg-accent-red text-white rounded-full w-10 h-10 border-2 border-white text-2xl font-pixel shadow-lg hover:bg-red-700">&times;</button>
        </div>

        {/* Dialogue Box */}
        <div className="w-full bg-[#f5dcb0] border-4 border-valley-brown rounded-lg shadow-lg flex flex-col-reverse sm:flex-row font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>
          
          {/* Response */}
          <div className="flex-1 p-6 relative min-h-[10rem] flex flex-col justify-between">
            <p className="text-2xl text-valley-brown leading-tight min-h-[4rem]">
              {currentView === 'greeting' ? data.greeting : answer}
            </p>
          </div>

          {/* Portrait/Name */}
          <div className="flex-shrink-0 sm:w-48 bg-[#c7966b] p-4 border-b-4 sm:border-b-0 sm:border-l-4 border-valley-brown flex flex-col items-center gap-2 justify-center">
            <div className="relative">
              <div className="w-28 h-28 border-4 border-valley-brown rounded-md overflow-hidden bg-[#e0c8a8]">
                <img src={data.portrait} alt={`Portrait of ${data.townie}`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#f5dcb0] border-2 border-valley-brown rounded-md px-5 py-1 text-center shadow-sm mt-2">
              <h2 className="text-2xl text-valley-brown font-bold">{data.townie}</h2>
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
            <h1 className="text-valley-brown text-2xl">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="parchment p-4 rounded-lg text-gray-800 cursor-pointer text-center" onClick={() => handleFAQClick('general')}>
                <h3 className="text-xl font-bold">General FAQ</h3>
                <p className="mt-2 text-sm">General Questions About the Event.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-gray-800 cursor-pointer text-center" onClick={() => handleFAQClick('food')}>
                <h3 className="text-xl font-bold">Food</h3>
                <p className="mt-2 text-sm">Catering, Dietary Restrictions, and Allergies.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-gray-800 cursor-pointer text-center" onClick={() => handleFAQClick('venue')}>
                <h3 className="text-xl font-bold">Venue</h3>
                <p className="mt-2 text-sm">Location, Entry, Parking, etc.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-gray-800 cursor-pointer text-center" onClick={() => handleFAQClick('items')}>
                <h3 className="text-xl font-bold">Adventurer's Pack</h3>
                <p className="mt-2 text-sm">What to Bring, How to Prepare, etc.</p>
              </div>
              <div className="parchment p-4 rounded-lg text-gray-800 cursor-pointer text-center" onClick={() => handleFAQClick('lost')}>
                <h3 className="text-xl font-bold">Lost & Found</h3>
                <p className="mt-2 text-sm">Reporting and Retrieving Lost Items</p>
              </div>
              <div className="parchment p-4 rounded-lg text-gray-800 cursor-pointer text-center" onClick={() => handleFAQClick('misc')}>
                <h3 className="text-xl font-bold">Other Questions</h3>
                <p className="mt-2 text-sm">Miscellaneous FAQ</p>
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