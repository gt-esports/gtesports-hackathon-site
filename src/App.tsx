import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

function StubPage({ title, description }: { title: string; description: string }) {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/schedule"
          element={
            <StubPage
              title="Schedule"
              description="The full event schedule will be available soon! Check back later for workshops, meals, and all the exciting activities planned for our 36-hour hackathon."
            />
          }
        />
        <Route
          path="/sponsors"
          element={
            <StubPage
              title="Sponsors"
              description="Meet our amazing sponsors who make HackTech Valley possible! Sponsor information and perks will be listed here soon."
            />
          }
        />
        <Route
          path="/teams"
          element={
            <StubPage
              title="Teams & Community"
              description="Find your perfect teammates and connect with the HackTech Valley community! Team formation tools and community features coming soon."
            />
          }
        />
        <Route
          path="/submit"
          element={
            <StubPage
              title="Submit Project"
              description="Ready to showcase your creation? The project submission portal will be available during the hackathon event!"
            />
          }
        />
        {/* Fallback: redirect anything unknown to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
