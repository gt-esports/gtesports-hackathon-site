import UserGreeting from "./UserGreeting";
import HackathonCountdown from "./HackathonCountdown";

export default function DashboardHero() {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-32">
      <div className="text-center max-w-4xl mx-auto">
        <UserGreeting />
      </div>
      
      {/* Countdown at bottom of dashboard screen */}
      <div className="absolute bottom-0 left-0 right-0">
        <HackathonCountdown />
      </div>
    </div>
  );
}

