import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import Onboarding from "./pages/Onboarding";
import RequireProfile from "./components/RequireProfile";

import StubPage from "./components/StubPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route
          path="/dashboard"
          element={
            <RequireProfile>
              <Dashboard />
            </RequireProfile>
          }
        />
        <Route
          path="/application"
          element={
            <RequireProfile>
              <Application />
            </RequireProfile>
          }
        />
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
