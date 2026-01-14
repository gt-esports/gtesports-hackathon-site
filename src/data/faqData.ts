// Suggestion: Create Pixel Art of the Hackathon Organizers in the Style of Stardew Valley Characters
const faqData = {
    general: {
        townie: "Kinglet",
        portrait: "/faq/kinglet.png",
        greeting: `Welcome to my shop! 

...Er, the hackathon! 

How can I help?`,
        questions: [

            { q: "When is TechHack 2026?", a: "March 6-8, 2026." },
            {
                q: "Who can Apply?", a: `Any US student can apply.
                
We prioritize Georgia Tech students.`},
            { q: "What is the cost?", a: "It's free to attend." },
            { q: "When is the registration deadline?", a: "February 22, 2026." },
            { q: "What are the tracks?", a: "One main track + sponsor tracks. Details coming soon!" }
        ]
    },
    food: {
        townie: "Wren",
        portrait: "/faq/wren.png",
        greeting: `Welcome, friend! 

The Saloon is ready to serve. 

Hungry? Thirsty?`,
        questions: [
            {
                q: "Will meals be provided?", a: `No meals this year due to funding. 
                
We hope to offer them in the future!`
            },
            { q: "Will there be snacks and drinks?", a: "Yes! Snacks and drinks available 24/7." },
        ]
    },
    venue: {
        townie: "Gallinule",
        portrait: "/faq/gallinule.png",
        greeting: `Greetings, citizen! 

I hold the official proclamations. 

What do you need?`,
        questions: [
            {
                q: "Where is the hackathon located?", a: `Georgia Tech campus.
                
Exact venues will be announced on Discord.` },
            { q: "Is there parking available?", a: "Yes, paid guest parking is available on campus." },
            { q: "What are the venue hours?", a: "Venues are open from kickoff to final presentations." }
        ]
    },
    items: {
        townie: "Tanager",
        portrait: "/faq/tanager.png",
        greeting: `Hello, dear! Packing up?

Just... please don't bring any stray animals, alright?`,
        questions: [
            { q: "What should I bring?", a: "Laptop, charger, and hardware. We don't provide monitors or peripherals." },
            { q: "Can I bring a sleeping bag?", a: "Yes, bring one if you plan to stay overnight!" },
        ]
    },

    misc: {
        townie: "Vireo",
        portrait: "/faq/vireo.png",
        greeting: `The spirits foresaw your arrival.
        
Speak, and I shall reveal the answers.`,
        questions: [
            { q: "How many members can be in a group?", a: "Up to 4 members." },
            { q: "Will there be prizes?", a: "Yes! Top 3 teams + sponsor prizes." },
            { q: "Who are the judges?", a: "Industry experts, faculty, and GT students." },
            { q: "How do I submit my project?", a: "Devpost. Details at the event." },
            { q: "Is there travel reimbursement?", a: "No, not at this time." }
        ]
    }
};

export default faqData;
