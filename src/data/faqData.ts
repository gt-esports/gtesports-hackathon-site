// Suggestion: Create Pixel Art of the Hackathon Organizers in the Style of Stardew Valley Characters
const faqData = {
    general: {
        townie: "Kinglet",
        portrait: "/faq/kinglet.png",
        greeting: `Welcome to my shop!

...Er, the hackathon!

What can I do for you?`,
        questions: [

            { q: "When is TechHack 2026?", a: "TechHack 2026 will be held on March 6-8, 2026." },
            {
                q: "Who can Apply?", a: `Any student in the United States can apply to participate in TechHack.
                
However, we are prioritizing applications from students at Georgia Tech.`},
            { q: "What is the cost?", a: "The hackathon is free to attend." },
            { q: "When is the registration deadline?", a: "The registration deadline is February 22, 2026." },
            { q: "What is the theme of the hackathon?", a: "The theme will be revealed at the opening ceremony!" }
        ]
    },
    food: {
        townie: "Wren",
        portrait: "/faq/wren.png",
        greeting: `Welcome, friend! 

The Stardrop Saloon is proud to cater this hackathon.

I've got a little something for everyone.

What are you thirsty for?`,
        questions: [
            {
                q: "Will meals be provided?", a: `Meals will not be provided at this time due to limited funding as this is our first year hosting the hackathon. 
                
As support and sponsorship grow, we plan to offer meals at future TechHack events.

This is subject to change.`
            },
            { q: "Will there be snacks and drinks?", a: "Yes, we will have snacks and drinks available 24/7." },
        ]
    },
    venue: {
        townie: "Gallinule",
        portrait: "/faq/gallinule.png",
        greeting: `Hello there, villager! 

I've got the official event proclamations right here.

What information do you require?`,
        questions: [
            {
                q: "Where is the hackathon located?", a: `The hackathon is located at the Georgia Institute of Technology.
                
The locations of the venues will be revealed via Discord and the website.` },
            { q: "Is there parking available?", a: "Yes, there is paid guest parking available on campus." },
            { q: "What are the venue hours?", a: "During the Hackathon, you will be able to access announced venues any time from the kickoff ceremony to the final project presentations." }
        ]
    },
    items: {
        townie: "Tanager",
        portrait: "/faq/tanager.png",
        greeting: `Oh, hello, dear! It's lovely to see you.

Are you getting your things ready?

It's always good to be prepared.

Just... please don't bring any stray animals, alright?

I have my hands full with my own!`,
        questions: [
            { q: "What should I bring?", a: "You should bring your laptop, charger, and any other hardware you need for your project. We do not provide monitors, keyboards, and mice." },
            { q: "Can I bring a sleeping bag?", a: "Yes, you should bring a sleeping bag if you plan on staying overnight." },
        ]
    },

    misc: {
        townie: "Vireo",
        portrait: "/faq/vireo.png",
        greeting: `Ah... you have arrived, as the spirits foresaw.
        
Your mind is clouded with questions.

Speak, and I shall consult the spirits for an answer.`,
        questions: [
            { q: "How many members can be in a group?", a: "Teams can have up to 4 members." },
            { q: "Will there be prizes?", a: "Yes, there will be prizes for the top 3 teams selected by our judges as well as company sponsored prizes." },
            { q: "Who are the judges?", a: "The judges will be a panel of industry experts, faculty, and students from Georgia Tech." },
            { q: "How do I submit my project?", a: "Project submissions will be done through Devpost. More details will be provided during the event." }
        ]
    }
};

export default faqData;
