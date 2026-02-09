export interface Track {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Emoji for now
  difficulty: string; // "Rank [X] Quest"
  color: string; // Tailwind color class for the "paper" accent
  prizes: string[]; // List of prizes
  pdfUrl?: string; // Optional path to detailed PDF
}

export const tracks: Track[] = [
  {
    id: "overall",
    title: "Best in Show",
    shortDescription: "The ultimate gaming-related project that steals the show.",
    fullDescription: `
      This is the grand prize for the team that creates the most impressive overall contribution to the gaming ecosystem. Whether it's a revolutionary new game, a tool that helps players improve, or a piece of hardware that redefines control, we're looking for the best total package.

      **Criteria:**
      - Relevance: clearly solves a problem or enhances the gaming experience.
      - Execution: High polish and functionality.
      - Innovation: Brings something new to the table.
    `,
    icon: "🏆",
    difficulty: "Rank S+ Quest",
    color: "bg-yellow-100",
    prizes: ["Grand Prize Trophy", "$1000 Cash Prize", "Exclusive Swag"],
  },
  {
    id: "software",
    title: "Software Track",
    shortDescription: "Best gaming utility, tool, mod, or platform.",
    fullDescription: `
      Build software solutions that empower gamers, organizers, or developers. We're looking for tools that solve real problems in the gaming space.

      **Examples:**
      - Tournament bracket generators
      - In-game overlays or analytics dashboards
      - Team finding / matchmaking apps
      - Modding tools or productivity suites for game devs

      **Criteria:**
      - Utility: Does it solve a genuine pain point?
      - UX/UI: Is it intuitive for gamers to use?
    `,
    icon: "💻",
    difficulty: "Rank A Quest",
    color: "bg-blue-100",
    prizes: ["Mechanical Keyboards", "Software Licenses", "$500 Cash Prize"],
    pdfUrl: "/assets/tracks/software-track.pdf",
  },
  {
    id: "hardware",
    title: "Hardware Track",
    shortDescription: "Best custom controller, peripheral, or interaction device.",
    fullDescription: `
      Reimagine how we interact with games. This track is for physical projects that enhance accessibility, immersion, or control.

      **Examples:**
      - Custom accessible controllers
      - Haptic feedback wearables
      - Unique arcade cabinets or rhythm game controllers
      - Smart gaming furniture or setup enhancements

      **Criteria:**
      - Engineering: Solid build quality and circuit design.
      - Interactivity: How well does it interface with a game?
    `,
    icon: "🤖",
    difficulty: "Rank A Quest",
    color: "bg-red-100",
    prizes: ["Arduino Kits", "3D Printing Credit", "$500 Cash Prize"],
    pdfUrl: "/assets/tracks/hardware-track.pdf",
  },
  {
    id: "game-dev",
    title: "Game Dev Track",
    shortDescription: "Best original game or interactive experience.",
    fullDescription: `
      Create the next indie hit! This track is dedicated to the craft of game development itself. Whether 2D, 3D, VR, or text-based, show us your world.

      **Focus:**
      - Engaging gameplay loops
      - Creative mechanics or storytelling
      - Polished visual and audio experience

      **Criteria:**
      - Fun Factor: Is it enjoyable to play?
      - Originality: Does it stand out from clones?
    `,
    icon: "🎮",
    difficulty: "Rank A Quest",
    color: "bg-purple-100",
    prizes: ["Steam Gift Cards", "Game Assets Pack", "$500 Cash Prize"],
    pdfUrl: "/assets/tracks/game-dev-track.pdf",
  },
];
