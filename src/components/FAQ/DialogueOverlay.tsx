import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FaqOptions from './FaqOptions';
import React from 'react';
import faqData from '../../data/faqData';

type FAQCategory = keyof typeof faqData;
type FAQData = typeof faqData[FAQCategory];

function DialogueOverlay({ open, onClose, data }: {
  open: boolean;
  onClose: () => void;
  data: FAQData | null;
}) {
  const [currentView, setCurrentView] = useState<'greeting' | 'answer'>('greeting');
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setCurrentView('greeting');
      setAnswer(null);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open, data]);

  if (!open || !data) return null;

  // Handle clicking outside of dialogue to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-2 py-6 sm:px-4"
      onClick={handleOverlayClick}
      style={{ cursor: 'pointer' }}>

      <div className="relative w-full max-w-4xl p-2 sm:p-6 md:p-8 max-h-[95vh] overflow-y-auto">

        {/* Close Button */}
        <div className="absolute top-2 right-2 z-10">
          <button onClick={onClose} className="bg-red-700 text-white rounded-full w-10 h-10 border-2 border-white text-2xl font-pixel shadow-lg">X</button>
        </div>

        {/* Dialogue Box */}
        <div className="w-full bg-[#f5dcb0] border-4 border-valley-brown rounded-lg shadow-lg flex flex-col-reverse sm:flex-row font-pixel" style={{ boxShadow: '0 0 0 4px #c7966b' }}>

          {/* Response */}
          <div className="flex-1 p-4 sm:p-6 relative min-h-[8rem] sm:min-h-[10rem] flex flex-col justify-between">
            <div
              className="text-base sm:text-lg md:text-xl text-valley-brown leading-relaxed min-h-[4rem] break-words whitespace-pre-wrap"
              id="dialog-title"
              role="region"
              aria-live="polite"
            >
              {currentView === 'greeting' ? data.greeting : answer}
            </div>
          </div>

          {/* Portrait/Name */}
          <div
            className="flex-shrink-0 sm:min-w-48 sm:w-auto bg-[#c7966b] p-2 sm:p-4 border-b-4 sm:border-b-0 sm:border-l-4 border-valley-brown flex flex-row sm:flex-col items-center gap-3 sm:gap-2 justify-start sm:justify-center"
            role="complementary"
            aria-label="Character portrait"
          >
            <div className="relative">
              <div className="w-14 h-14 sm:w-28 sm:h-28 border-4 border-valley-brown rounded-md overflow-hidden bg-[#e0c8a8]">
                <img src={data.portrait} alt={`Portrait of ${data.townie}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="bg-[#f5dcb0] border-2 border-valley-brown rounded-md px-3 sm:px-5 py-1 text-center shadow-sm w-auto sm:w-full">
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-valley-brown font-bold leading-tight whitespace-nowrap">{data.townie}</h3>
            </div>
          </div>

        </div>

        {/* Questions Box */}
        <FaqOptions
          questions={data.questions}
          onSelect={(a) => { setCurrentView('answer'); setAnswer(a); }}
          onBack={() => { setCurrentView('greeting'); setAnswer(null); }}
          backOptionEnabled={currentView === 'answer'}
        />
      </div>
    </div>,
    document.body
  );
}

export default DialogueOverlay;