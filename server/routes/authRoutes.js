import express from 'express'
import { signIn, signOut } from '../controllers/authController.js'

const router = express.Router()

router.post('/google', signIn)
router.post('/signout', signOut)

export default router