export interface Sponsor {
  name: string;
  logo: string;
  emoji: string; // Fallback when logo image is not available
}

export const sponsors: Sponsor[] = [
  { name: "United States Space Force", logo: "/sponsors/ussf.png", emoji: "🚀" },
  { name: "Rally Cry", logo: "/sponsors/rallycry.png", emoji: "🎮" },
  { name: "Georgia Tech Tools For Life", logo: "/sponsors/tfl.png", emoji: "🛠️" },
  { name: "The Able Gamers Charity", logo: "/sponsors/ablegamers.png", emoji: "♿" },
  { name: "Nerve Gaming", logo: "/sponsors/nervegaming.png", emoji: "🎯" },
  { name: "Overjoyed", logo: "/sponsors/overjoyed.png", emoji: "🎉" },
  { name: "Munio", logo: "/sponsors/munio.png", emoji: "🔒" },
  { name: "Plasma Games", logo: "/sponsors/plasmagames.png", emoji: "🎲" },
];
