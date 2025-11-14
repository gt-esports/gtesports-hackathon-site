const SERVER_URL = import.meta.env.VITE_API_URL 
export async function signup({
  full_name,
  email,
  school,
  password,
}: {
  full_name: string
  email: string
  school: string
  password: string
}) {
  const res = await fetch(`${SERVER_URL}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ full_name, email, school, password }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Signup failed')
  return data
}

export async function signin({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const res = await fetch(`${SERVER_URL}/api/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data.error || 'Signin failed')
  return data
}
