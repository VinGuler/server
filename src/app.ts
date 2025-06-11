import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import myInfoRouter from './routes/myInfo'
import { initAiModel } from './services/ai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(
  cors({
    origin: 'https://vinguler.com',
    methods: ['GET'],
    credentials: false
  })
)

// Initialize AI model
initAiModel()

// Routes
app.use('/', myInfoRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
