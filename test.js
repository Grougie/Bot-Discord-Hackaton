const Discord = require("discord.js");


const parameters = {
    access_key: "c7b7d852d39e5b713bfe1ee2ce46262d",
    query: "Nantes, France",
    units: "m"
}

module.exports = {
    name: "meteo",

    async run(bot, message) {
        try {
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`);
            const data = await response.json();

            const { current, location } = data;
            const messageContent = `La température à ${location.name} est de ${current.temperature}°C, le ressenti est de ${current.feelslike}°C.`;

            console.log(messageContent); 
            message.channel.send(messageContent); 
        } catch (error) {
            console.error('Erreur, veuillez réessayer :', error);
        }
    }
}
