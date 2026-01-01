import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';

export default function RequireProfile({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { profile, loading } = useProfile();

    useEffect(() => {
        if (!loading) {
            // Check if profile is missing required fields
            if (profile && (!profile.first_name || !profile.last_name || !profile.college)) {
                // Redirect to onboarding if not on onboarding page
                if (location.pathname !== '/onboarding') {
                    navigate('/onboarding');
                }
            }
        }
    }, [profile, loading, navigate, location.pathname]);

    if (loading) {
        return (
            <div className="min-h-screen bg-valley-cream flex items-center justify-center">
                <div className="text-valley-brown font-pixel text-xl animate-pulse">Checking Profile...</div>
            </div>
        );
    }

    return <>{children}</>;
}
