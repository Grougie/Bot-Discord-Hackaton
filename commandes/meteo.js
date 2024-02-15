const Discord = require("discord.js");
const config = require("../config")
const intents = new Discord.IntentsBitField(3276799) // permet au bot d'avoir toutes les permissions
const bot = new Discord.Client({intents})


const parameters = { // permet d'accéder aux données de l'api
    access_key:"1bc7074522400cf7a45f8b3459cf3134",
    query: "Nantes, France",
    units: "m"
}

bot.login(config.token)

module.exports =  {

    name: "meteo", // nom de la commande

    async run (message)  {
        try {
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`); // url de l'api avec les données
            const data = await response.json();

            const { current, location } = data;
            const messageContent = `La température à ${location.name} est de ${current.temperature}°C, le ressenti est de ${current.feelslike}°C.`; // permet d'afficher le temps dans le serveur discord

            console.log(messageContent); 
            message.channel.send(messageContent); // envoie le message au serveur
        } catch (error) {
            console.error('Erreur, veuillez réessayer :', error);
        }
    }
}