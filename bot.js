const Discord = require ("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommand = require("./loader/loadCommand")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommand(bot)

bot.on("messageCreate", async message => {
    if (message.content === "!ping") return bot.commands.get("ping").run(bot,message)
})

bot.on("messageCreate", async message => {
    if (message.content === "!meteo") return bot.commands.get("meteo").run(bot,message)
})

bot.on("ready", async () => {

    console.log(`${bot.user.tag} est en ligne !`)

})








