import React, { type FC, type MouseEvent } from "react";

interface Card {
  img: string;
  title: string;
  desc: string;
  link: string;
}

interface CardComponentProps {
  card: Card;
}

const CardComponent: FC<CardComponentProps> = ({ card }) => {
  const boxBase: React.CSSProperties = {
    position: "relative",
    width: "250px",
    height: "250px",
    overflow: "hidden",
    margin: "30px",
    borderRadius: "10px",
    border: "5px solid rgba(200, 200, 200, 0.5)",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 8px 32px 0 rgba(100, 100, 150, 0.25)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: "rotateY(0deg)",
    cursor: "default",
  };

  const contentStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    width: "90%",
    height: "100%",
    zIndex: 2,
    padding: "15px",
  };

  const handleCardEnter = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    current.style.transform = "rotateY(0deg) scale(1.25)";
    current.style.zIndex = "10";
    current.style.boxShadow = "0 25px 40px rgba(100, 100, 150, 0.5)";
  };

  const handleCardLeave = (e: MouseEvent<HTMLDivElement>) => {
    const current = e.currentTarget;
    current.style.transform = "rotateY(0deg) scale(1)";
    current.style.zIndex = "1";
    current.style.boxShadow = "0 8px 32px 0 rgba(100, 100, 150, 0.25)";
  };

  return (
    <div
      style={boxBase}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src={card.img}
          alt={card.title}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
      </div>
      <div style={contentStyle}>
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h2
            style={{
              color: "rgb(220, 180, 180)",
              fontSize: "20px",
              transform: "translateY(20px)",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          >
            {card.title}
          </h2>
        </a>
        <p
          style={{
            color: "#111",
            fontSize: "14px",
            transform: "translateY(40px)",
            transition: "transform 0.3s",
            backgroundColor: "rgba(255,255,255,0.85)",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          {card.desc}
        </p>
      </div>
    </div>
  );
};

const SponsorsTeaser: FC = () => {
  const cards: Card[] = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      title: "Sponsor1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos beatae maiores velit",
      link: "https://google.com",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Sponsor2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos beatae maiores velit",
      link: "https://google.com",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Sponsor3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos beatae maiores velit",
      link: "https://google.com",
    },
  ];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "rgb(50, 50, 80)",
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    padding: "10px",
  };

  const shellStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    perspective: "900px",
    zIndex: 10,
  };

  const handleShellEnter = (e: MouseEvent<HTMLDivElement>) => {
    const children = e.currentTarget.children;
    for (const child of Array.from(children) as HTMLDivElement[]) {
      child.style.transform = "rotateY(20deg)";
    }
  };

  const handleShellLeave = (e: MouseEvent<HTMLDivElement>) => {
    const children = e.currentTarget.children;
    for (const child of Array.from(children) as HTMLDivElement[]) {
      child.style.transform = "rotateY(0deg)";
    }
  };

  return (
    <div style={containerStyle}>
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-2 h-2 bg-yellow-100 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-8 w-full text-center z-10">
        <h1 className="text-yellow-200 text-4xl font-bold">Our Sponsors</h1>
      </div>

      <div
        style={shellStyle}
        onMouseEnter={handleShellEnter}
        onMouseLeave={handleShellLeave}
      >
        {cards.map((card, index) => (
          <CardComponent key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsTeaser;
