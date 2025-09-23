export const siteConfig = {
  name: "TechHack Valley",
  description: "Georgia Tech's coziest hackathon hosted by GT Esports - where ideas grow like crops",
  url: "https://techhack-valley.com",

  event: {
    name: "TechHack Valley 2026",
    tagline: "Cultivate Innovation, Harvest Success",
    date: "TBA",
    location: "Georgia Institute of Technology",
    registrationOpen: true,
  },

  stats: [
    { label: "Hackers", value: "500+", icon: "👨‍💻" },
    { label: "Projects", value: "100+", icon: "🚀" },
    { label: "Prizes", value: "$50K+", icon: "💰" },
    { label: "Hours", value: "36", icon: "⏰" },
    { label: "Sponsors", value: "25+", icon: "🏢" },
    { label: "Workshops", value: "15+", icon: "📚" },
  ],

  links: {
    discord: "https://discord.gg/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/company/",
    email: "hello@techhack-valley.com",
    codeOfConduct: "/code-of-conduct",
  },

  about: {
    intro:
      "Welcome to TechHack Valley, where the spirit of Stardew Valley meets the innovation of Georgia Tech! Just like tending to your virtual farm, we believe in nurturing ideas from seed to harvest.",
    mission:
      "Our mission is to create a cozy, inclusive environment where hackers can plant the seeds of creativity, collaborate with fellow farmers of technology, and harvest amazing projects that make a difference.",
    community:
      "Join our growing community of makers, dreamers, and innovators as we cultivate the next generation of tech solutions in the heart of Atlanta.",
  },

  faq: [
    {
      question: "What is TechHack Valley?",
      answer:
        "TechHack Valley is Georgia Tech's 36-hour hackathon with a cozy Stardew Valley theme! It's where students come together to build amazing projects, learn new skills, and make lasting friendships.",
    },
    {
      question: "Who can participate?",
      answer:
        "All Georgia Tech students are welcome! Whether you're a first-year or graduate student, whether you code or design or have never touched a computer - there's a place for you in our valley.",
    },
    {
      question: "Do I need a team?",
      answer:
        "Nope! You can come solo and we'll help you find teammates, or you can form a team of up to 4 people. Think of it like multiplayer farming - more hands make lighter work!",
    },
    {
      question: "What should I bring?",
      answer:
        "Just bring your laptop, charger, and enthusiasm! We'll provide food, drinks, swag, and all the inspiration you need. Don't forget a sleeping bag if you plan to rest!",
    },
    {
      question: "Is there a cost to participate?",
      answer:
        "Absolutely free! Registration, meals, snacks, swag, and workshops are all included. We want to remove any barriers to participation.",
    },
    {
      question: "What if I'm a beginner?",
      answer:
        "Perfect! TechHack Valley is designed to be beginner-friendly. We have mentors, workshops, and starter resources to help you plant your first seeds in tech.",
    },
  ],
} as const
