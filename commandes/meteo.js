const Discord = require("discord.js");
const config = require("../config")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})


const parameters = {
    access_key:"1bc7074522400cf7a45f8b3459cf3134",
    query: "Nantes, France",
    units: "m"
}

bot.login(config.token)

module.exports =  {

    name: "meteo",

    async run (bot, message)  {
        try {
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`);
            const data = await response.json();

            const { current, location } = data;
            const messageContent = `La température à ${location.name} est de ${current.temperature}°C, le ressenti est de ${current.feelslike}°C. Le temps actuel est : ${current.weather_descriptions.join(', ')}.`;

            console.log(messageContent); 
            message.channel.send(messageContent);
        } catch (error) {
            console.error('Erreur, veuillez réessayer :', error);
        }
    }
}
