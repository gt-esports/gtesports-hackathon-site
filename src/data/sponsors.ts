export interface Sponsor {
  name: string;
  logo: string;
  emoji: string; // Fallback when logo image is not available
  url?: string;
}

export const sponsors: Sponsor[] = [
  { name: "United States Space Force", logo: "/sponsors/ussf.png", emoji: "🚀", url: "https://www.spaceforce.mil" },
  { name: "ElevenLabs", logo: "/sponsors/elevenlabs-black.png", emoji: "", url: "https://elevenlabs.io"},
  { name: "Rally Cry", logo: "/sponsors/rallycry.png", emoji: "🎮", url: "https://www.rallycry.gg" },
  { name: "Georgia Tech Tools For Life", logo: "/sponsors/tfl.png", emoji: "🛠️", url: "https://gatfl.gatech.edu" },
  { name: "The Able Gamers Charity", logo: "/sponsors/ablegamers.png", emoji: "♿", url: "https://ablegamers.org" },
  { name: "Nerve Gaming", logo: "/sponsors/nervegaming.png", emoji: "🎯", url: "https://unitedspinalga.org/nerve-gaming/" },
  { name: "Overjoyed", logo: "/sponsors/overjoyed.png", emoji: "🎉", url: "https://ourodyssey.org/overjoyed" },
  { name: "Munio", logo: "/sponsors/munio.png", emoji: "🔒", url: "https://secureverificationgroup.com" },
  { name: "Plasma Games", logo: "/sponsors/plasmagames.png", emoji: "🎲", url: "https://play.plasma.games" },
];
