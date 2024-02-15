const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config");

const bot = new Discord.Client({ 
    intents: 32767
});

bot.login(config.token);

module.exports = async bot => {
    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {
        let event = require("../Events/" + file);
        bot.on(file.split(".js").join(""), (...args) => event(bot, ...args));
        console.log(`Évènement ${file} chargé avec succès !`);
    });
};  
