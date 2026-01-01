import faqData from '../../data/faqData';

type FAQCategory = keyof typeof faqData;

const FaqCard = ({ category, title, description, onClick }: {
  category: FAQCategory;
  title: string;
  description: string;
  onClick: (category: FAQCategory) => void;
}) => (
  <button
    type="button"
    className="bg-[#fffdf0] p-4 text-[#5d4037] cursor-pointer text-center relative shadow-sm hover:translate-y-[-4px] hover:shadow-lg transition-all duration-200 font-pixel border-4 border-[#8d6e63] rounded-sm group transform rotate-1 hover:rotate-0"
    style={{
      backgroundImage: 'linear-gradient(#fbf6e0 2px, transparent 2px), linear-gradient(90deg, #fbf6e0 2px, transparent 2px)',
      backgroundSize: '20px 20px',
      imageRendering: 'pixelated'
    }}
    onClick={() => onClick(category)}
  >
    {/* Thumbtack */}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ef5350] border border-[#b71c1c] shadow-sm z-10 group-hover:scale-110 transition-transform"></div>

    {/* Content */}
    <div className="mt-2">
      <h3 className="text-xl font-bold leading-tight break-words uppercase tracking-wide text-[#3e2723] font-pixel">{title}</h3>
      <div className="w-full h-1 bg-[#8d6e63] my-2 opacity-30 border-t-2 border-dashed border-[#5d4037]"></div>
      <p className="text-sm leading-snug break-words text-[#5d4037] opacity-90 font-pixel">{description}</p>
    </div>
  </button>
);

export default FaqCard;