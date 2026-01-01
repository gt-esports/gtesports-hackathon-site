import { useState } from 'react';
import faqData from '../../data/faqData';
import FaqCard from './FaqCard';
import DialogueOverlay from './DialogueOverlay';

type FAQCategory = keyof typeof faqData;

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
    <section className="py-20 gradient-primary" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-white mb-4 font-pixel drop-shadow-lg">FAQ</h2>
        </div>
        <div className="text-center text-white/80 font-pixel">
          <div className="bg-[#f5dcb0] border-[12px] border-valley-brown shadow-lg w-full mx-auto p-6" style={{ boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-valley-brown text-center mb-8 font-bold" style={{ textShadow: '2px 2px 0px #e0c8a8' }}>Frequently Asked Questions</h2>

            {/* FAQ Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FaqCard
                category="general"
                title="General FAQ"
                description="General Questions About The Event."
                onClick={handleFAQClick}
              />
              <FaqCard
                category="food"
                title="Food"
                description="Catering, Dietary Restrictions, and Allergies."
                onClick={handleFAQClick}
              />
              <FaqCard
                category="venue"
                title="Venue"
                description="Location Details, Entry, Parking."
                onClick={handleFAQClick}
              />
              <FaqCard
                category="items"
                title="Adventurer's Pack"
                description="What to Bring, How to Prepare, etc."
                onClick={handleFAQClick}
              />
              <FaqCard
                category="lost"
                title="Lost & Found"
                description="Reporting and Retrieving Lost Items."
                onClick={handleFAQClick}
              />
              <FaqCard
                category="misc"
                title="Other Questions"
                description="Miscellaneous FAQ."
                onClick={handleFAQClick}
              />
            </div>
          </div>

          {/* Overlay to Show Interactive FAQ */}
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