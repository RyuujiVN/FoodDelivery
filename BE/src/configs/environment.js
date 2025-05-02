import 'dotenv/config'

const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,

  BUILD_MODE: process.env.BUILD_MODE,
}

export default env