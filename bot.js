const Discord = require ("discord.js")
const bot = new Discord.Client({intents: 3276799})
const config = require("./module")

bot.login(config.token)

bot.on("ready", async () => {

    console.log(`${bot.user.tag} est en ligne !`)

})








