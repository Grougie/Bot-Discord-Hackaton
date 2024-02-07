const Discord = require("discord.js")
const cron = require("node-cron")
const meteo = require("../commandes/meteo")
const config = require("../config")
const intents = new Discord.IntentsBitField(3276799)

module.exports = async (bot,message) => {

    bot.login(config.token)

    cron.schedule('34 18 * * *', async () => {
        try {
            const messageContent = await meteo.run(meteo);
            channel.send(messageContent);
        } catch (error) {
            console.error('Erreur lors de l\'exécution de la fonction météo :', error);
        }
    });
};
