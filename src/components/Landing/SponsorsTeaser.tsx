import { type FC } from "react";
import "../../cssFiles/sponsor.css";

interface Card {
  img: string;
  title: string;
  desc: string;
  link: string;
}



interface CardComponentProps {
  card: Card;
  shellHovered: boolean;
}

const CardComponent: FC<CardComponentProps> = ({ card }) => {
  return (
    <div className="card-component group">
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-sm z-20 border border-red-800"></div>

      <a href={card.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="flex flex-col items-center h-full">
          <div className="flex justify-center w-full mb-4">
            <img src={card.img} alt={card.title} className="card-image" />
          </div>

          <div className="card-content">
            <h2 className="card-title">
              {card.title}
            </h2>
            <div className="w-full h-px bg-[#8d6e63] my-2 opacity-30"></div>
            <p className="card-desc">
              {card.desc}
            </p>
          </div>

          <div className="mt-auto pt-4 text-[#8d6e63] text-xs font-bold uppercase tracking-widest">
            Click for details!
          </div>
        </div>
      </a>
    </div>
  );
};

const SponsorsTeaser: FC = () => {
  const cards: Card[] = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      title: "Sponsor1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae maiores velit.",
      link: "https://google.com",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Sponsor2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae maiores velit.",
      link: "https://google.com",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Sponsor3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae maiores velit.",
      link: "https://google.com",
    },
  ];

  return (
    <div id="sponsors" className="relative flex flex-col items-center justify-center min-h-screen bg-[#66a05b] py-20 overflow-hidden">
      {/* Background Texture (Grass/Nature) */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#88c07b 2px, transparent 2px)",
          backgroundSize: "32px 32px"
        }}>
      </div>

      {/* Floating Leaves Animation Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-green-200 opacity-20 text-6xl transform -rotate-12">🍃</div>
        <div className="absolute bottom-20 right-20 text-green-300 opacity-20 text-5xl transform rotate-45">🌿</div>
        <div className="absolute top-1/2 left-5 text-yellow-100 opacity-20 text-4xl">✨</div>
      </div>

      {/* Wooden Board Container */}
      <div className="relative w-full max-w-6xl mx-auto p-8 bg-[#cc8d58] rounded-xl shadow-2xl border-[12px] border-[#8d5e3c]">
        {/* Board Inner Border/Detail */}
        <div className="absolute inset-2 border-2 border-[#eec39a] opacity-50 rounded-lg pointer-events-none"></div>

        {/* Board Header */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#ffddaa] px-16 py-4 rounded-sm shadow-lg border-4 border-[#b57d4f] rotate-[-1deg] flex flex-col items-center">
          {/* Nails/Pins for the header */}
          <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#8d5e3c] shadow-inner"></div>
          <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#8d5e3c] shadow-inner"></div>

          <h1 className="text-4xl font-bold text-[#5d3a22] tracking-wider uppercase font-serif drop-shadow-sm">
            Our Sponsors
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#5d3a22]">🌾</span>
            <p className="text-center text-[#795548] text-sm font-bold tracking-widest uppercase">
              Community Support
            </p>
            <span className="text-[#5d3a22]">🌾</span>
          </div>
        </div>

        {/* Vine Decorations on Board */}
        <div className="absolute -top-6 -left-6 text-6xl transform -rotate-45 z-20 drop-shadow-md">🌿</div>
        <div className="absolute -bottom-6 -right-6 text-6xl transform rotate-135 z-20 drop-shadow-md">🌿</div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 p-6">
          {cards.map((card, index) => (
            <CardComponent key={index} card={card} shellHovered={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsTeaser;
