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
    className="bg-valley-cream p-4 text-valley-brown cursor-pointer text-center relative shadow-md hover:-translate-y-1 transition-transform duration-150 font-pixel border-4 border-valley-brown"
    onClick={() => onClick(category)}
  >
    {/* Thumbtack */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-valley-brown border-2 border-white" style={{boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.2)'}}></div>
    
    {/* Question Category Info */}
    <h3 className="text-xl font-bold mt-4">{title}</h3>
    <p className="mt-2 text-sm">{description}</p>
  </button>
);

export default FaqCard;