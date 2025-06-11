import { type GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai'

declare global {
  var aiModel: GenerativeModel | undefined
}

export function initAiModel(): void {
  const TOKEN = process.env.GEMINI_TOKEN

  if (!TOKEN) {
    throw new Error('Google Generative AI token is not set')
  }

  if (globalThis.myModel) {
    return
  }

  const genAI = new GoogleGenerativeAI(TOKEN)
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' }, { apiVersion: 'v1beta' })

  globalThis.myModel = model
}

export async function getTextFromModel(prompt: string): Promise<string> {
  if (!globalThis.myModel) {
    throw new Error('AI model is not initialized')
  }

  const response = await globalThis.myModel.generateContent(prompt)
  if (!response || !response.response || !response.response.text) {
    throw new Error('Failed to get text from model')
  }

  return response.response.text()
}
