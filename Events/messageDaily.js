const Discord = require("discord.js");
const cron = require("node-cron")
const config = require("../config");
const meteo = require("../commandes/meteo")

const bot = new Discord.Client({ 
    intents: 32767
});

bot.login(config.token);

module.exports = async (message) => {

    cron.schedule('45 08 * * *', async () => {
        try {
            const messageContent = await meteo.run(meteo);
            message.channel.send(messageContent);
        } catch (error) {
            console.error('Erreur lors de l\'exécution de la fonction météo :', error);
        }
    });
};
