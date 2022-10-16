import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'
import { LogLevel } from 'telegram/extensions/Logger'
import env from 'src/env'

export default class UserBot {
  public client: TelegramClient

  constructor() {
    this.client = new TelegramClient(new StringSession(env.SESSION), env.API_ID, env.API_HASH, {})
  }

  public async setLogLevel() {
    await this.client.setLogLevel(LogLevel.INFO)
  }

  public async start() {
    await this.setLogLevel()

    await this.client.start({ botAuthToken: env.BOT_TOKEN })
  }
}
