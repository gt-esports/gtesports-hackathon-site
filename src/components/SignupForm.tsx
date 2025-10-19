interface SignupFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  name: string;
  setName: (name: string) => void;
  school: string;
  setSchool: (school: string) => void;
}

export default function SignupForm({ email, setEmail, password, setPassword, name, setName, school, setSchool }: SignupFormProps) {
  return (
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
  )
}
