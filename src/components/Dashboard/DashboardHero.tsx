import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CountdownCarousel from '../CountdownCarousel';
import { supabase } from '../../utils/supabaseClient';
import EditProfileModal from './EditProfileModal';
import { useProfile } from '../../hooks/useProfile';

interface DashboardHeroProps {
  user: any;
  applications: any[];
}

export default function DashboardHero({ user: initialUser, applications }: DashboardHeroProps) {
  const navigate = useNavigate();
  const { profile, refetch } = useProfile();

  // Local state for display, derived from profile or initialUser
  const [displayUser, setDisplayUser] = useState({
    name: "Hacker",
    profilePic: "https://pbs.twimg.com/profile_images/1762648109044187136/ZSsezdVZ_400x400.jpg",
    university: "Georgia Institute of Technology"
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    if (profile) {
      setDisplayUser({
        name: profile.full_name || (profile.first_name ? `${profile.first_name} ${profile.last_name || ''}`.trim() : "Hacker"),
        profilePic: initialUser?.user_metadata?.avatar_url || "https://pbs.twimg.com/profile_images/1762648109044187136/ZSsezdVZ_400x400.jpg",
        university: profile.college || "Georgia Institute of Technology"
      });
    } else if (initialUser) {
      setDisplayUser({
        name: initialUser?.user_metadata?.full_name || initialUser?.full_name || initialUser?.email?.split('@')[0] || "Hacker",
        profilePic: initialUser?.user_metadata?.avatar_url || "https://pbs.twimg.com/profile_images/1762648109044187136/ZSsezdVZ_400x400.jpg",
        university: initialUser?.college || "Georgia Institute of Technology"
      });
    }
  }, [profile, initialUser]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleProfileUpdate = () => {
    refetch(); // Use the refetch from hook
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={handleSignOut}
          className="btn-pixel bg-red-500 hover:bg-red-600 px-4 py-2 text-sm text-white transition-transform duration-200 hover:scale-105 shadow-md flex items-center gap-2"
        >
          <span>🚪</span> Sign Out
        </button>
      </div>

      {/* Main Dashboard Content */}
      <div className="relative z-10 flex items-center justify-center h-screen px-4 overflow-hidden">
        <div className="text-center max-w-4xl mx-auto">
          {/* User Greeting Section */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="relative inline-block">
              <img
                src={displayUser.profilePic}
                alt={`${displayUser.name}'s profile`}
                className="w-48 h-48 rounded-full object-cover border-6 border-white/40 mx-auto mb-10 shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setIsEditModalOpen(true)}
                title="Click to edit profile"
              />
              <button
                className="absolute bottom-12 right-0 bg-valley-gold hover:bg-valley-gold/90 text-valley-brown rounded-full p-2 border-2 border-white/50 shadow-lg transition-all duration-200 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditModalOpen(true);
                }}
              >
                ✏️
              </button>
            </div>
            <h1 className="text-2xl md:text-3xl font-pixel text-white mb-8 text-shadow-glow" style={{ fontSize: '1.5rem' }}>
              {getGreeting()}, {displayUser.name}! 👋
            </h1>
            <p className="text-lg md:text-xl text-valley-gold font-pixel mb-10 text-shadow-glow" style={{ fontSize: '1rem' }}>
              Ready to build something amazing?
            </p>
            {/* Apply Now Button */}
            <div className="mb-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={() => navigate('/application')}
                className="btn-pixel bg-valley-green hover:bg-valley-blue px-6 py-4 text-lg transition-transform duration-200 hover:scale-105"
              >
                Apply Now
              </button>

              <a
                href="https://discord.gg/temporary"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pixel btn-pixel-secondary text-lg inline-block hover:scale-105 transition-transform duration-200"
              >
                👥 Team Lookup on Discord
              </a>
            </div>
            {/* Applications List */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 mb-10 shadow-2xl">
              <h3 className="text-xl font-pixel text-white mb-6">Your Applications</h3>

              {applications.length === 0 ? (
                <p className="text-valley-gold font-pixel text-sm">
                  You haven't submitted any applications yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="bg-white/10 rounded-lg p-4 flex justify-between items-center border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <div className="text-left">
                        <span className="block text-white font-pixel text-sm mb-1">
                          Application #{app.id.slice(0, 8)}
                        </span>
                        <span className="text-white/60 text-xs">
                          Submitted: {new Date(app.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-pixel uppercase tracking-wide
                          ${app.status === 'accepted' ? 'bg-green-500/20 text-green-300 border border-green-500/50' :
                            app.status === 'rejected' ? 'bg-red-500/20 text-red-300 border border-red-500/50' :
                              app.status === 'waitlisted' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/50' :
                                'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                          }`}
                        >
                          {app.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Countdown at bottom of dashboard screen */}
        <CountdownCarousel />
      </div>

      {profile && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          currentUser={profile}
          onUpdate={handleProfileUpdate}
        />
      )}
    </>
  );
}