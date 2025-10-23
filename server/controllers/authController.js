import { supabase } from '../config/supabase.js'

// Sign In
export const signIn = async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/auth/callback'
      }
    })

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    res.status(200).json({ url: data.url })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Sign Out
export const signOut = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    res.status(200).json({ message: 'Signed out successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}