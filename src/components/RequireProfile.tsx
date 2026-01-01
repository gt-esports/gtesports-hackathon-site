import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

export default function RequireProfile({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkProfile = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (!session) {
                    // If no session, wait for auth to potentially initialize or let the page handle it?
                    // But this protects routes, so redirect to login.
                    // navigate('/login');
                    // Actually, let's assume the parent route or component handles auth check, 
                    // OR this component strictly ensures profile completeness for AUTHENTICATED users.
                    setLoading(false);
                    return;
                }

                const { data: profile, error } = await supabase
                    .from('profiles')
                    .select('first_name, last_name, college')
                    .eq('id', session.user.id)
                    .single();

                if (error) {
                    console.error('Error fetching profile:', error);
                    // If error (e.g. no profile row), we might want to create one or redirect.
                    // Assuming row exists (due to triggers) but fields might be empty.
                }

                if (!profile?.first_name || !profile?.last_name || !profile?.college) {
                    // Redirect to onboarding if not on onboarding page
                    if (location.pathname !== '/onboarding') {
                        navigate('/onboarding');
                    }
                }
            } catch (error) {
                console.error('Error checking profile:', error);
            } finally {
                setLoading(false);
            }
        };

        checkProfile();
    }, [navigate, location.pathname]);

    if (loading) {
        return (
            <div className="min-h-screen bg-valley-cream flex items-center justify-center">
                <div className="text-valley-brown font-pixel text-xl animate-pulse">Checking Profile...</div>
            </div>
        );
    }

    return <>{children}</>;
}
