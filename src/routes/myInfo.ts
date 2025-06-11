import { Router, Request, Response } from 'express'
import { getTextFromModel } from '../services/ai'
const router = Router()

router.get('/my-info', async (req: Request, res: Response) => {
  const INFO = `
    I am a full stack web developer working since 2018.
    I worked in various companies, from small startups to large corporations.
    I have a passion for creating web stuff, solving problems and making money.
    My expertise includes working with various technologies:
    Vue, React, Node.js, MongoDB, MySQL and more.
  `

  const PROMPT = `
    Write a short paragraph, length of up to 3 sentences, about me.
    It should written in a witty and humorous tone, and try to avoid being cringe.
    Write it in first person, as if I wrote it myself.
    This is the info you should use: "${INFO}"
  `

  const content = await getTextFromModel(PROMPT)
  res.json({ content })
})

export default router
