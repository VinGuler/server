import { type GenerativeModel } from '@google/generative-ai'

declare global {
  var myModel: GenerativeModel | undefined
}
