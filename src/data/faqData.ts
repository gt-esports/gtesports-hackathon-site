// Suggestion: Create Pixel Art of the Hackathon Organizers in the Style of Stardew Valley Characters
const faqData = {
    general: {
        townie: "Kinglet",
        portrait: "/faq/kinglet.png",
        greeting: `Welcome back! 

TechHack 2026 is in the books. 

How can I help?`,
        questions: [
            { q: "Was TechHack 2026 the first TechHack?", a: "Yes. TechHack 2026 was our inaugural hackathon." },
            {
                q: "Will TechHack return next year?", a: `That's the plan.
                
Follow our Discord and GT Esports channels for announcements about the next event.`},
            { q: "What was the cost?", a: "TechHack 2026 was free to attend." },
            { q: "How can I stay updated?", a: "Join the Discord and follow Georgia Tech Esports on social media for future updates." },
            { q: "What were the tracks?", a: "TechHack featured one main track plus sponsor tracks across software, hardware, and game development." }
        ]
    },
    food: {
        townie: "Wren",
        portrait: "/faq/wren.png",
        greeting: `Welcome back, friend! 

The Saloon survived the weekend. 

Hungry? Thirsty?`,
        questions: [
            {
                q: "Was food provided?", a: `Yes. Meals were provided during the event, including:
                
• Friday Night
• Saturday Night`
            },
            { q: "Will future events have snacks and drinks?", a: "That's the goal. We will share food details with next year's attendees once plans are finalized." },
        ]
    },
    venue: {
        townie: "Gallinule",
        portrait: "/faq/gallinule.png",
        greeting: `Greetings, citizen! 

I keep the records of the realm. 

What do you need?`,
        questions: [
            {
                q: "Where was the hackathon located?", a: `Howey Physics @ Georgia Tech Campus.
                
Exact room details on Discord.` },
            { q: "Was parking available?", a: "Yes, paid guest parking was available on campus." }
        ]
    },
    items: {
        townie: "Tanager",
        portrait: "/faq/tanager.png",
        greeting: `Hello, dear! Packing up?

Just... please don't bring any stray animals, alright?`,
        questions: [
            { q: "What did attendees need to bring?", a: "Laptop, charger, and any personal hardware. We did not provide monitors or peripherals." },
            { q: "Was overnight space provided?", a: "We did not offer an overnight venue, so attendees needed to make their own arrangements between event hours." },
        ]
    },

    misc: {
        townie: "Vireo",
        portrait: "/faq/vireo.png",
        greeting: `The spirits foresaw your arrival.
        
Speak, and I shall reveal the answers.`,
        questions: [
            { q: "How many members could be in a group?", a: "Up to 4 members." },
            {
                q: "Was there prizing?", a: `Yes. There was a prize for each member on the following winning teams:
                
• Top Overall Team
• Software Track
• Hardware Track
• Game Dev Track`
            },
            { q: "Who were the judges?", a: "Industry experts, faculty, and GT students." },
            { q: "How were projects submitted?", a: "Projects were submitted through Devpost during the event." },
            { q: "Is there travel reimbursement?", a: "No, not at this time." }
        ]
    }
};

export default faqData;
