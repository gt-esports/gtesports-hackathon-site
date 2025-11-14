// Suggestion: Create Pixel Art of the Hackathon Organizers in the Style of Stardew Valley Characters
const faqData = {
	general: {
        townie: "Character 1",
        portrait: "https://placehold.co/128x128.png",
        greeting: "Welcome to my shop! ...Er, the hackathon! What can I do for you?",
        questions: [
            { q: "When is the registration deadline?", a: "The registration deadline is [insert date here]." },
            { q: "How many members can be in a group?", a: "Teams can have up to 4 members." },
            { q: "What is the theme of the hackathon?", a: "The theme will be revealed at the opening ceremony!" }
        ]
	},
	food: {
        townie: "Character 2",
        portrait: "https://placehold.co/128x128.png",
        greeting: "Welcome, friend! The Stardrop Saloon is proud to cater this hackathon. I've got a little something for everyone. What are you thirsty for?",
        questions: [
            { q: "What food will be provided?", a: "We will have a variety of snacks and drinks available throughout the event, as well as catered meals for lunch and dinner." },
            { q: "Are there vegetarian/vegan options?", a: "Yes, we will have vegetarian and vegan options available. Please let us know of any dietary restrictions during meal times." },
            { q: "When will food be served?", a: "Meal times will be listed on the hackathon schedule. Snacks and drinks will be available 24/7." }
        ]
	},
	venue: {
        townie: "Character 3",
        portrait: "https://placehold.co/128x128.png",
        greeting: "Hello there, villager! I've got the official event proclamations right here. What information do you require?",
        questions: [
            { q: "Where is the hackathon located?", a: "The hackathon is located at [location here]." },
            { q: "Is there parking available?", a: "Yes, there is paid guest parking available. You must register your vehicle with Georgia Tech and receive a parking permit to keep your vehicle on campus." },
            { q: "What are the venue hours?", a: "During the Hackathon, you will be able to access [location] any time from the kickoff ceremony to the final project presentations." }
        ]
	},
	items: {
        townie: "Character 4",
        portrait: "https://placehold.co/128x128.png",
        greeting: "Oh, hello, dear! It's lovely to see you. Are you getting your things ready? It's always good to be prepared. Just... please don't bring any stray animals, alright? I have my hands full with my own!",
        questions: [
            { q: "What should I bring?", a: "You should bring your laptop, charger, and any other hardware you need for your project. We do not provide monitors, keyboards, and mice." },
            { q: "Can I bring a sleeping bag?", a: "Yes, you should bring a sleeping bag if you plan on staying overnight." },
            { q: "Are there any prohibited items?", a: "Please do not bring any weapons, alcohol, or illegal substances." }
        ]
	},
	lost: {
        townie: "Character 5",
        portrait: "https://placehold.co/128x128.png",
        greeting: "Greetings. While you are enjoying the festivities, should you happen to misplace a 'personal belonging,' please report it to me. I am overseeing the collection.",
        questions: [
            { q: "I lost something, what should I do?", a: "If you lose something, please check with the registration desk to see if it has been turned in." },
            { q: "I found something, what should I do?", a: "If you find something, please turn it in to the registration desk." },
            { q: "Where is the lost and found?", a: "The lost and found is located at the registration desk." }
        ]
	},
	misc: {
        townie: "Character 6",
        portrait: "https://placehold.co/128x128.png",
        greeting: "Ah... you have arrived, as the spirits foresaw. Your mind is clouded with questions. Speak, and I shall consult the spirits for an answer.",
        questions: [
            { q: "Will there be prizes?", a: "Yes, there will be prizes for the top 3 teams." },
            { q: "Who are the judges?", a: "The judges will be a panel of industry experts and faculty from Georgia Tech." },
            { q: "How do I submit my project?", a: "Project submissions will be done through Devpost. More details will be provided during the event." }
        ]
	}
};

export default faqData;
