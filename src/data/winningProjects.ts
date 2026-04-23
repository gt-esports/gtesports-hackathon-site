export interface WinningProject {
  id: string;
  awards: string[];
  projectName: string;
  teamName?: string;
  description: string;
  status: "pending" | "published";
  projectUrl?: string;
}

// Replace these placeholders once the winning project details are finalized.
// One project can list multiple awards if it won more than one category.
export const winningProjects: WinningProject[] = [
  {
    id: "box-brewery",
    awards: ["Best Overall", "Game Dev Track"],
    projectName: "Box Brewery",
    description:
      "A whimsical potion-brewing game inspired by cafe sims and sandbox games, where a cat crafts brews for a cast of animal customers with plenty of silly storytelling.",
    status: "published",
    projectUrl: "https://devpost.com/software/box-brewery",
  },
  {
    id: "faceplay",
    awards: ["Software Track"],
    projectName: "FacePlay",
    description:
      "An accessible gaming system that uses face-based controls to help patients and players with limited hand mobility play without expensive specialized hardware.",
    status: "published",
    projectUrl: "https://devpost.com/software/faceplay-rt0i9f",
  },
  {
    id: "gamesense",
    awards: ["Hardware Track"],
    projectName: "GameSense",
    description:
      "A gaming headband that turns spatial audio into directional haptic feedback and adds head-tilt controls for a more accessible, immersive play experience.",
    status: "published",
    projectUrl: "https://devpost.com/software/gamesense-78fswv",
  },
  {
    id: "focus-farmer",
    awards: ["Best Project Built with ElevenLabs"],
    projectName: "Focus Farmer",
    description:
      "A focus-timer game that rewards productive work sessions with coins, jokes, stats, and collectible penguins to make studying and breaks feel more engaging.",
    status: "published",
    projectUrl: "https://devpost.com/software/locked-in-focus-farming",
  },
];
