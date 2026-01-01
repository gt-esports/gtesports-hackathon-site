import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

export default function Onboarding() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Check if user is logged in and not already completed
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login');
                return;
            }

            try {
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('first_name, last_name, college')
                    .eq('id', session.user.id)
                    .single();

                if (profile?.first_name && profile?.last_name && profile?.college) {
                    navigate('/dashboard');
                }
            } catch (error) {
                console.error('Error validation profile:', error);
            }
        };
        checkUser();
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!firstName.trim() || !lastName.trim() || !school.trim()) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) throw new Error('No user found');

            const updates = {
                id: user.id,
                first_name: firstName.trim(),
                last_name: lastName.trim(),
                college: school.trim(),
                full_name: `${firstName.trim()} ${lastName.trim()}`,
                updated_at: new Date().toISOString(),
            };

            const { error } = await supabase
                .from('profiles')
                .upsert(updates);

            if (error) throw error;

            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-valley-cream flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="card-pixel bg-white p-8">
                    <h2 className="font-pixel text-2xl text-valley-brown mb-2 text-center">Complete Your Profile</h2>
                    <p className="text-valley-brown/70 text-center mb-8 font-pixel text-sm">
                        Please tell us a bit about yourself to get started.
                    </p>

                    {error && (
                        <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded mb-6 font-pixel text-xs">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="firstName" className="block text-valley-brown font-pixel text-xs mb-2 uppercase tracking-wide">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full bg-valley-cream border-2 border-valley-brown p-3 font-pixel text-sm focus:outline-none focus:border-valley-green transition-colors rounded-none"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-valley-brown font-pixel text-xs mb-2 uppercase tracking-wide">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full bg-valley-cream border-2 border-valley-brown p-3 font-pixel text-sm focus:outline-none focus:border-valley-green transition-colors rounded-none"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="school" className="block text-valley-brown font-pixel text-xs mb-2 uppercase tracking-wide">
                                School
                            </label>
                            <input
                                id="school"
                                type="text"
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}
                                className="w-full bg-valley-cream border-2 border-valley-brown p-3 font-pixel text-sm focus:outline-none focus:border-valley-green transition-colors rounded-none"
                                placeholder="e.g. Georgia Tech"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-pixel py-4 mt-8 flex items-center justify-center font-bold"
                        >
                            {loading ? 'Saving...' : 'Complete Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
