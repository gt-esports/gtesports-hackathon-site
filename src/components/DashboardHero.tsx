import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CountdownCarousel from './CountdownCarousel';
import { supabase } from '../utils/supabaseClient';
import EditProfileModal from './EditProfileModal';
import type { Profile } from '../types/database.types';

interface DashboardHeroProps {
  user: any; // We'll try to cast this or use a better type if possible, but keep it compatible for now
  applications: any[];
}

export default function DashboardHero({ user: initialUser, applications }: DashboardHeroProps) {
  const navigate = useNavigate();
  // We need a local state for the user that can be updated when the profile changes
  // Ideally, the parent should handle this, but for now we can fetch fresh data or update local state
  const [user, setUser] = useState({
    ...initialUser,
    name: initialUser?.user_metadata?.full_name || initialUser?.full_name || initialUser?.email?.split('@')[0] || "Hacker",
    profilePic: initialUser?.user_metadata?.avatar_url || "https://pbs.twimg.com/profile_images/1762648109044187136/ZSsezdVZ_400x400.jpg",
    university: initialUser?.college || "Georgia Institute of Technology"
  });

  // Need a proper Profile object for the modal
  const [profileData, setProfileData] = useState<Profile | null>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    // If we have initialUser, try to set up the profileData for the modal
    if (initialUser) {
      // Map initialUser (which might be a session user or mixed object) to Profile shape as best as we can
      // Or fetch the real profile if initialUser is just auth user
      fetchProfile();
    }
  }, [initialUser]);

  const fetchProfile = async () => {
    if (!initialUser?.id) return;

    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', initialUser.id)
      .single();

    if (data) {
      setProfileData(data);
      // Also update the display user state
      setUser((prev: any) => ({
        ...prev,
        name: data.full_name || data.first_name ? `${data.first_name || ''} ${data.last_name || ''}`.trim() : prev.name,
        university: data.college || prev.university,
        // Keep profile pic from auth metadata if not in profile, or use default
        profilePic: prev.profilePic
      }));
    }
  };

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
    // Refresh profile data
    fetchProfile();
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
                src={user.profilePic}
                alt={`${user.name}'s profile`}
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
            <h1 className="text-2xl md:text-3xl font-pixel text-white mb-8" style={{ fontSize: '1.5rem', textShadow: '0 0 60px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.85), 0 0 100px rgba(0,0,0,0.75), 0 4px 10px rgba(0,0,0,0.9)' }}>
              {getGreeting()}, {user.name}! 👋
            </h1>
            <p className="text-lg md:text-xl text-valley-gold font-pixel mb-10" style={{ fontSize: '1rem', textShadow: '0 0 60px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.85), 0 0 100px rgba(0,0,0,0.75), 0 4px 10px rgba(0,0,0,0.9)' }}>
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

      {profileData && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          currentUser={profileData}
          onUpdate={handleProfileUpdate}
        />
      )}
    </>
  );
}