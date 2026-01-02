import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(
    location.pathname === '/signup' ? 'signup' : 'login'
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname === '/signup' ? 'signup' : 'login');
  }, [location.pathname]);

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred during login');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-valley-cream">
      <div className="pt-28 pb-16 px-4 flex justify-center">
        <div className="w-full max-w-md">
          {/* Pixel art card */}
          <div className="card-pixel bg-white relative overflow-hidden">
            {/* Tab Selector */}
            <div className="flex border-b-3 border-valley-brown">
              <Link
                to="/login"
                className={`flex-1 font-pixel py-4 text-sm text-center ${activeTab === 'login'
                  ? 'bg-valley-gold text-valley-brown'
                  : 'bg-white text-valley-brown/70 hover:bg-valley-cream/50'
                  }`}
                onClick={() => setActiveTab('login')}
              >
                🔑 Login
              </Link>
              <Link
                to="/signup"
                className={`flex-1 font-pixel py-4 text-sm text-center ${activeTab === 'signup'
                  ? 'bg-valley-gold text-valley-brown'
                  : 'bg-white text-valley-brown/70 hover:bg-valley-cream/50'
                  }`}
                onClick={() => setActiveTab('signup')}
              >
                ✨ Sign Up
              </Link>
            </div>

            {/* Content */}
            <div className="p-12 text-center">
              <h2 className="font-pixel text-2xl text-valley-brown mb-6">
                {activeTab === 'login' ? 'Welcome Back!' : 'Join the Fun!'}
              </h2>

              <p className="text-valley-brown/80 mb-8 font-pixel text-sm">
                {activeTab === 'login'
                  ? 'Sign in to access your dashboard.'
                  : 'Create an account to apply.'}
              </p>

              {error && (
                <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded mb-6 font-pixel text-xs">
                  {error}
                </div>
              )}

              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full btn-pixel py-4 flex items-center justify-center gap-3 transform hover:scale-[1.02] transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                {loading ? 'Connecting...' : 'Continue with Google'}
              </button>

              <div className="mt-8 !text-[9px] font-pixel text-valley-brown opacity-40">
                By continuing, you agree to our Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="font-pixel text-xs text-valley-brown hover:text-valley-green">
              🏠 Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}