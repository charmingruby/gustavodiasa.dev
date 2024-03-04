import { z } from 'zod'

const envSchema = z.object({
  EMAIL_CONTACT: z.string().min(1),
  EMAIL_PASSWORD: z.string().min(1),
})

export const env = envSchema.parse(process.env)
