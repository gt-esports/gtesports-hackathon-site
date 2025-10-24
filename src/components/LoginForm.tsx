interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export default function LoginForm({ email, setEmail, password, setPassword} : LoginFormProps) {
  return (
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
  )
}