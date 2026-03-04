import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3000

app.use(cors({
  origin: [
    'https://techhack.gatechesports.com',
    'http://localhost:5173',
    'http://localhost:3000',
  ],
}))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})