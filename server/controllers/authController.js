import { createUser, findUserByEmail } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/generateToken.js'

export const signUp = async (req, res) => {
  try {
    const { full_name, email, school, password } = req.body

    const existing = await findUserByEmail(email)
    if (existing) return res.status(400).json({ error: 'Email already registered' })

    const user = await createUser({ full_name, email, school, password })
    console.log('JWT_SECRET is:', process.env.JWT_SECRET)
    const token = generateToken(user.id)

    res.status(201).json({ message: 'User created', user: { ...user, token } })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await findUserByEmail(email)
    if (!user) return res.status(404).json({ error: 'User not found' })

    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

    const token = generateToken(user.id)
    res.json({ message: 'Signed in', user: { ...user, token } })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
export const signOut = (req, res) => {
  // handled client-side by discarding the token
  res.json({ message: 'Signed out' })
}
