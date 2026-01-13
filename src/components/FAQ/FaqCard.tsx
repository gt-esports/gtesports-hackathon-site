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
    className="w-full bg-valley-cream p-5 text-valley-brown cursor-pointer text-left relative shadow-sm hover:translate-y-[-4px] hover:shadow-lg transition-all duration-200 border-2 border-[#eec39a] group"
    style={{
      // Paper texture effect
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
      backgroundSize: '100% 24px',
      boxShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    }}
    onClick={() => onClick(category)}
  >
    {/* Tape or Pin */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-valley-brown border border-white/30 shadow-sm opacity-90"></div>

    {/* Quest Content */}
    <div className="mt-2 text-center">
      <h3 className="text-sm md:text-base font-pixel uppercase tracking-wide text-valley-brown mb-2 group-hover:text-valley-green transition-colors">
        {title}
      </h3>

      <div className="w-2/3 mx-auto h-px bg-valley-brown/20 mb-3"></div>

      <p className="text-xs md:text-sm font-pixel text-valley-brown/80 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 text-xs font-pixel text-valley-orange text-right opacity-0 group-hover:opacity-100 transition-opacity">
        Read Page &gt;
      </div>
    </div>
  </button>
);

export default FaqCard;