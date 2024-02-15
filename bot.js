const Discord = require ("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommand = require("./loader/loadCommand")
const loadEvents = require("./loader/loadEvents")
const Events = require("./Events/messageDaily")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommand(bot)
loadEvents(bot)
Events(bot)

bot.on("messageCreate", async message => {
    if (message.content === "!ping") return bot.commands.get("ping").run(bot,message) // permet de récupérer la commande ping
})

bot.on("messageCreate", async message => {
    if (message.content === "!meteo") return bot.commands.get("meteo").run(bot,message) // permet de récupérer la commande meteo
})

let coubehCount = 0;
let feurCount = 0;

bot.on("messageCreate", async message => {
    const regex = /\bquoi\b(?![^\s,.!?])/gi;
    if (regex.test(message.content)) {
        if (coubehCount === feurCount) {
            message.channel.send("coubeh");
            coubehCount++;
        } else {
            message.channel.send("feur");
            feurCount++;
        }
    }
});

bot.on("guildMemberAdd", function (member){
    member.createDM().then(function (channel){
        return channel.send("Bienvenue sur le channel connard de" + member.displayName)
    }).catch(console.error)
})
