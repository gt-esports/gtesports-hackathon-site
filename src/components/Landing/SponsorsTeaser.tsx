import { type FC, useMemo, useState } from "react";
import "../../cssFiles/sponsor.css";

interface Card {
  img: string;
  title: string;
  desc: string;
  link: string;
}

function generateRandomPositions(num: number): number[] {
  const arr: number[] = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * 100);
  }
  return arr;
}


const BackgroundStars: FC = () => {

  const positions = useMemo(() => generateRandomPositions(160), []);


  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"
          style={{
            left: `${positions[i]}%`,
            top: `${positions[i + 80]}%`,

          }}
        />
      ))}
    </div>
  );
};

interface CardComponentProps {
  card: Card;
  shellHovered: boolean;
}

const CardComponent: FC<CardComponentProps> = ({ card, shellHovered }) => {
  const [hovered, setHovered] = useState(false);

  const spinActive = shellHovered && !hovered;

  return (
    <div
      className="card-container"
      style={{
        transform: spinActive
          ? "rotateY(20deg) scale(1)"
          : hovered
            ? "rotateY(0deg) scale(1.25)"
            : "rotateY(0deg) scale(1)",
        boxShadow: hovered
          ? "0 25px 40px rgba(100, 100, 150, 0.5)"
          : "0 8px 32px 0 rgba(100, 100, 150, 0.25)",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-center">
        <img src={card.img} alt={card.title} className="card-image" />
      </div>

      <div className="card-content">
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          <h2
            className="card-title"
            style={{
              transform: hovered ? "translateY(10px)" : "translateY(20px)",
            }}
          >
            {card.title}
          </h2>
        </a>
        <p
          className="card-desc"
          style={{
            transform: hovered ? "translateY(20px)" : "translateY(40px)",
          }}
        >
          {card.desc}
        </p>
      </div>
    </div>
  );
};

const SponsorsTeaser: FC = () => {
  const [shellHovered, setShellHovered] = useState(false);

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
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[rgb(50,50,80)] overflow-hidden">

      <BackgroundStars />

      <h1 className="absolute top-8 w-full text-center text-yellow-200 text-4xl font-bold z-10">
        Our Sponsors
      </h1>

      <div
        className="flex flex-wrap justify-center w-full max-w-[1200px] perspective-[1500px] z-10"
        onMouseEnter={() => setShellHovered(true)}
        onMouseLeave={() => setShellHovered(false)}
      >
        {cards.map((card, index) => (
          <CardComponent key={index} card={card} shellHovered={shellHovered} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsTeaser;
