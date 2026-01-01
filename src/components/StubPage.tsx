import { Link } from "react-router-dom";

interface StubPageProps {
    title: string;
    description: string;
}

export default function StubPage({ title, description }: StubPageProps) {
    return (
        <div className="min-h-screen bg-valley-cream">
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center max-w-2xl mx-auto px-4">
                    <div className="bg-white rounded-lg pixel-border border-valley-brown shadow-xl p-12">
                        <div className="text-6xl mb-6">🚧</div>
                        <h1 className="text-4xl font-bold text-valley-brown mb-4 font-pixel">{title}</h1>
                        <p className="text-valley-brown/80 text-lg mb-8">{description}</p>
                        <Link
                            to="/"
                            className="bg-valley-gold hover:bg-valley-gold/90 text-valley-brown font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 pixel-border border-valley-brown shadow-lg inline-block"
                        >
                            🏠 Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
