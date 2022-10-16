import { config } from 'dotenv'
import { cleanEnv, str, num } from 'envalid'

config()

export default cleanEnv(process.env, {
  BOT_TOKEN: str(),
  API_ID: num(),
  API_HASH: str(),
  SESSION: str(),
})
