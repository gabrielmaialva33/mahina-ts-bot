import { Bot } from 'grammy'
import env from 'src/env'

export default class BotCore {
  protected bot = new Bot(env.BOT_TOKEN, {})

  public commands() {
    this.bot.command('start', (ctx) => ctx.reply('Oi'))
  }

  public async start() {
    this.commands()

    await this.bot.start({
      drop_pending_updates: true,
      allowed_updates: ['message', 'callback_query', 'chat_member'],
    })
  }
}
