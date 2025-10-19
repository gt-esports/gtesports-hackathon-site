import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(
      location.pathname === '/signup' ? 'signup' : 'login'
  );
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { email, password, name, school })
    
  }

  return (
    <div className="min-h-screen bg-valley-cream">
      
      <div className="pt-28 pb-16 px-4 flex justify-center">
        <div className="w-full max-w-md">
          {/* Pixel art card */}
          <div className="card-pixel bg-white relative overflow-hidden">
            {/* Tab Selector */}
            <div className="flex border-b-3 border-valley-brown">
              <button 
                className={`flex-1 font-pixel py-4 text-sm ${activeTab === 'login' ? 'bg-valley-gold text-valley-brown' : 'bg-white text-valley-brown/70 hover:bg-valley-cream/50'}`}
                onClick={() => {
                  setActiveTab('login');
                  navigate('/login');
                }}
              >
                🔑 Login
              </button>
              <button 
                className={`flex-1 font-pixel py-4 text-sm ${activeTab === 'signup' ? 'bg-valley-gold text-valley-brown' : 'bg-white text-valley-brown/70 hover:bg-valley-cream/50'}`}
                onClick={() => {
                  setActiveTab('signup')
                  navigate('/signup');
                }}
              >
                ✨ Sign Up
              </button>
            </div>
        
            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {activeTab === 'login' ? (
                  <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                ) : (
                  <SignupForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} school={school} setSchool={setSchool} />
                )}
                
                <button 
                  type="submit"
                  className="w-full btn-pixel animate-pulse-glow text-lg py-3"
                >
                  {activeTab === 'login' ? '🌱 Login' : '🌱 Create Account'}
                </button>
                
                <div className="mt-6 text-center">
                  <p className="text-xs font-pixel text-valley-brown">
                    {activeTab === 'login' ? (
                      <>
                        New to TechHack Valley?{" "}
                        <button 
                          type="button"
                          onClick={() => setActiveTab('signup')}
                          className="text-valley-green hover:text-valley-blue"
                        >
                          Sign up here
                        </button>
                      </>
                    ) : (
                      <>
                        Already registered?{" "}
                        <button 
                          type="button"
                          onClick={() => setActiveTab('login')}
                          className="text-valley-green hover:text-valley-blue"
                        >
                          Log in here
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t-2 border-valley-brown/20">
                <div className="text-center">
                  <p className="text-xs font-pixel text-valley-brown mb-4">
                    Or continue with
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="btn-pixel btn-pixel-secondary p-3 text-sm" aria-label="Sign in with Google">
                      G
                    </button>
                    <button className="btn-pixel btn-pixel-secondary p-3 text-sm" aria-label="Sign in with GitHub">
                      🔑
                    </button>
                    <button className="btn-pixel btn-pixel-secondary p-3 text-sm" aria-label="Sign in with Twitter">
                      🐦
                    </button>
                  </div>
                </div>
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
  )
}