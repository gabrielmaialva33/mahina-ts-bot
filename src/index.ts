import BotCore from 'src/bot/core/bot.core'
import UserBot from 'src/bot/core/user.bot'

const bot = new BotCore()
const userBot = new UserBot()

Promise.all([bot.start(), userBot.start()])
