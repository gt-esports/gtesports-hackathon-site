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
                q: "Will meals be provided?", a: `Yes! A meal will be provided on:
                
• Friday Night
• Saturday Night`
            },
            { q: "Will there be snacks and drinks?", a: "Yes, we will be providing snacks and drinks. Details will be posted on Discord." },
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
                q: "Where is the hackathon located?", a: `Howey Physics @ Georgia Tech Campus.
                
Exact room details on Discord.` },
            { q: "Is there parking available?", a: "Yes, paid guest parking is available on campus." }
        ]
    },
    items: {
        townie: "Tanager",
        portrait: "/faq/tanager.png",
        greeting: `Hello, dear! Packing up?

Just... please don't bring any stray animals, alright?`,
        questions: [
            { q: "What should I bring?", a: "Laptop, charger, and hardware. We don't provide monitors or peripherals." },
            { q: "Can I bring sleeping equipment?", a: "We don't offer an overnight venue, so on-campus participants can go home and other participants can try and see if other arrangements can be made." },
        ]
    },

    misc: {
        townie: "Vireo",
        portrait: "/faq/vireo.png",
        greeting: `The spirits foresaw your arrival.
        
Speak, and I shall reveal the answers.`,
        questions: [
            { q: "How many members can be in a group?", a: "Up to 4 members." },
            {
                q: "Will there be prizing?", a: `Yes! There will be a prize for each member on the following winning teams:
                
• Top Overall Team
• Software Track
• Hardware Track
• Game Dev Track`
            },
            { q: "Who are the judges?", a: "Industry experts, faculty, and GT students." },
            { q: "How do I submit my project?", a: "Devpost! Details will be announced on Discord and at the event." },
            { q: "Is there travel reimbursement?", a: "No, not at this time." }
        ]
    }
};

export default faqData;
