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
    <section className="py-20 relative overflow-hidden" id="faq" aria-labelledby="faq-heading"
      style={{
        background: 'linear-gradient(to bottom, #66a05b 0%, #5d4037 100%)'
      }}
    >
      {/* Nature/Farm Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#3e2723 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-[#fdf6e3] mb-4 font-serif drop-shadow-md tracking-wider">
            Town Notice Board
          </h2>
          <p className="text-[#e2dbc9] font-pixel text-lg opacity-90">Have a question? Check the board!</p>
        </div>

        <div className="relative">
          {/* Wooden Board/Sign Container */}
          <div className="bg-[#8d6e63] p-1 rounded-sm shadow-2xl border-[6px] border-[#5d4037] relative" style={{ boxShadow: '8px 8px 0px rgba(0,0,0,0.3)' }}>
            {/* Roof/Top of Board */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[98%] h-8 bg-[#5d4037] rounded-t-sm shadow-lg z-0 border-x-[6px] border-t-[6px] border-[#3e2723]"></div>

            {/* Content Area */}
            <div className="bg-[#cc8d58] p-6 rounded-sm border-[4px] border-[#5d4037] border-opacity-70 shadow-inner">
              {/* Notes/Crates Grid */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                  <FaqCard
                    category="general"
                    title="General"
                    description="Basic event info."
                    onClick={handleFAQClick}
                  />
                </div>
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                  <FaqCard
                    category="food"
                    title="Food"
                    description="Meals & Snacks."
                    onClick={handleFAQClick}
                  />
                </div>
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                  <FaqCard
                    category="venue"
                    title="Venue"
                    description="Location & Parking."
                    onClick={handleFAQClick}
                  />
                </div>
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                  <FaqCard
                    category="items"
                    title="Adventure Pack"
                    description="What to bring."
                    onClick={handleFAQClick}
                  />
                </div>

                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                  <FaqCard
                    category="misc"
                    title="Other"
                    description="Everything else."
                    onClick={handleFAQClick}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Post Legs */}
          <div className="w-[80%] mx-auto flex justify-between px-10 -mt-2 relative -z-10">
            <div className="w-8 h-24 bg-[#5d4037] border-x-2 border-[#3e2723]"></div>
            <div className="w-8 h-24 bg-[#5d4037] border-x-2 border-[#3e2723]"></div>
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