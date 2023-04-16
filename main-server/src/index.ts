import { app } from './app'

import { env } from '@/env'

try {
  await app.listen({ port: env.MAIN_SERVER_PORT })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}
