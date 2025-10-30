import { supabase } from '../config/supabaseClient.js'
import bcrypt from 'bcrypt'

const USERS_TABLE = 'users'

export const createUser = async ({ full_name, email, school, password }) => {
  const password_hash = await bcrypt.hash(password, 10)
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .insert([{ full_name, email, school, password_hash }])
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('*')
    .eq('email', email)
    .single()

  if (error) return null
  return data
}
