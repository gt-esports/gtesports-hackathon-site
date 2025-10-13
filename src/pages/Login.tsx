import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login')
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
                onClick={() => setActiveTab('login')}
              >
                🔑 Login
              </button>
              <button 
                className={`flex-1 font-pixel py-4 text-sm ${activeTab === 'signup' ? 'bg-valley-gold text-valley-brown' : 'bg-white text-valley-brown/70 hover:bg-valley-cream/50'}`}
                onClick={() => setActiveTab('signup')}
              >
                ✨ Sign Up
              </button>
            </div>
        
            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {activeTab === 'login' ? (
                  <>
                    <h2 className="text-2xl font-bold text-valley-brown font-pixel mb-8 text-center">
                      Welcome Back, Farmer!
                    </h2>
                    
                    <div className="mb-6">
                      <label className="block text-valley-brown font-pixel text-sm mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        id="email"
                        className="w-full p-3 border-3 border-valley-brown font-pixel text-sm bg-valley-cream text-valley-brown focus:outline-none focus:ring-2 focus:ring-valley-gold"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-valley-brown font-pixel text-sm mb-2" htmlFor="password">
                        Password
                      </label>
                      <input 
                        type="password"
                        id="password"
                        className="w-full p-3 border-3 border-valley-brown font-pixel text-sm bg-valley-cream text-valley-brown focus:outline-none focus:ring-2 focus:ring-valley-gold"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="mt-2 text-right">
                        <a href="#" className="text-xs font-pixel text-valley-blue hover:text-valley-purple">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-valley-brown font-pixel mb-8 text-center">
                      Join the Valley!
                    </h2>
                    
                    <div className="mb-4">
                      <label className="block text-valley-brown font-pixel text-sm mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input 
                        type="text"
                        id="name"
                        className="w-full p-3 border-3 border-valley-brown font-pixel text-sm bg-valley-cream text-valley-brown focus:outline-none focus:ring-2 focus:ring-valley-gold"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-valley-brown font-pixel text-sm mb-2" htmlFor="signup-email">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        id="signup-email"
                        className="w-full p-3 border-3 border-valley-brown font-pixel text-sm bg-valley-cream text-valley-brown focus:outline-none focus:ring-2 focus:ring-valley-gold"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-valley-brown font-pixel text-sm mb-2" htmlFor="school">
                        School / University
                      </label>
                      <input 
                        type="text"
                        id="school"
                        className="w-full p-3 border-3 border-valley-brown font-pixel text-sm bg-valley-cream text-valley-brown focus:outline-none focus:ring-2 focus:ring-valley-gold"
                        placeholder="Georgia Tech"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-valley-brown font-pixel text-sm mb-2" htmlFor="signup-password">
                        Password
                      </label>
                      <input 
                        type="password"
                        id="signup-password"
                        className="w-full p-3 border-3 border-valley-brown font-pixel text-sm bg-valley-cream text-valley-brown focus:outline-none focus:ring-2 focus:ring-valley-gold"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </>
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