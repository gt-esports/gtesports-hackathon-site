import { useState } from 'react';
import faqData from '../../data/faqData';
import DialogueOverlay from './DialogueOverlay';

type FAQCategory = keyof typeof faqData;

export default function FAQ() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogCategory, setDialogCategory] = useState<FAQCategory | null>(null);

  const handleCharacterClick = (category: FAQCategory) => {
    setDialogCategory(category);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setDialogCategory(null);
  };

  const getCharacterSprite = (category: string) => {
    // Return paths to the new bird images
    switch (category) {
      case 'general': return '/faq/kinglet.png';
      case 'food': return '/faq/wren.png';
      case 'venue': return '/faq/gallinule.png';
      case 'items': return '/faq/tanager.png';
      case 'misc': return '/faq/vireo.png';
      default: return '/faq/kinglet.png';
    }
  };

  const getCharacterRole = (category: string) => {
    switch (category) {
      case 'general': return 'General Store';
      case 'food': return 'The Saloon';
      case 'venue': return 'Town Hall';
      case 'items': return 'Backpack';
      case 'misc': return 'The Tower';
      default: return 'Villager';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="faq" aria-labelledby="faq-heading"
      style={{
        backgroundImage: "url('/faq/town_square_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        imageRendering: "pixelated"
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>


      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">

        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-pixel text-[#fdf6e3] mb-4 drop-shadow-[4px_4px_0_rgba(139,69,19,1)] tracking-wider">
            Town Square
          </h2>
          <p className="text-[#3e2723] font-pixel text-lg bg-[#fdf6e3]/80 px-4 py-2 rounded-lg border-2 border-[#8b4513] inline-block shadow-md">
            Talk to the villagers to learn more!
          </p>
        </div>

        {/* Characters Grid / Town Square */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {(Object.keys(faqData) as FAQCategory[]).map((category) => {
            return (
              <div
                key={category}
                className="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-110"
                onClick={() => handleCharacterClick(category)}
              >
                {/* Speech Bubble on Hover */}
                <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-white px-3 py-2 rounded-lg border-2 border-black font-pixel text-xs text-black whitespace-nowrap shadow-md relative">
                    Click to chat!
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-black border-r-[6px] border-r-transparent"></div>
                    <div className="absolute -bottom-[5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-white border-r-[4px] border-r-transparent z-10"></div>
                  </div>
                </div>

                {/* Character Sprite Container (Pixel Frame) */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#e0c8a8] border-4 border-[#8b4513] rounded-sm flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-[#fcd34d] transition-colors">
                  <img
                    src={getCharacterSprite(category)}
                    alt={getCharacterRole(category)}
                    className="w-full h-full object-contain filter drop-shadow-md animate-bounce-gentle p-2"
                    style={{
                      animationDuration: '3s',
                      imageRendering: 'pixelated'
                    }}
                  />
                </div>

                {/* Character Name Plate */}
                <div className="mt-[-10px] bg-[#8b4513] text-[#fcd34d] px-3 py-1 font-pixel text-xs md:text-sm border-2 border-[#fcd34d] rounded-sm shadow-md z-10 text-center uppercase tracking-wide whitespace-nowrap">
                  {getCharacterRole(category)}
                </div>

                {/* Shadow */}
                <div className="w-20 h-4 bg-black/20 rounded-full mt-2 filter blur-sm"></div>
              </div>
            );
          })}
        </div>

        {/* Dialogue Overlay */}
        <DialogueOverlay
          open={dialogOpen}
          onClose={handleClose}
          data={dialogCategory ? faqData[dialogCategory] : null}
        />
      </div>
    </section>
  );
}