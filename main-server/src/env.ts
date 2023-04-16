import { z } from 'zod'

const isDev = process.env.NODE_ENV === 'DEV'

if (isDev) {
  const dotenv = await import('dotenv')
  console.log(dotenv.config({ path: '../.env' }))
}

let envSchema = z.object({
  MAIN_SERVER_PORT: z.coerce.number(),
})

export const env = envSchema.parse(process.env)
