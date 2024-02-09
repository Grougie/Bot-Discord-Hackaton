const { SlashCommandBuilder } = require('discord.js');

const parameters = {
    access_key:"1bc7074522400cf7a45f8b3459cf3134",
    query: "Nantes, France",
    units: "m"
}

// unktion, um das Wetter zu bekommen

async function getWeather() {
    // Get the weather data from the API
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`);
    const data = await response.json();
    // Create the message content
    const { current, location } = data;
    const messageContent = `🌍 La température à ${location.name} est de ${current.temperature}°C 🌡️, le ressenti est de ${current.feelslike}°C. Le temps actuel est : ${current.weather_descriptions.join(', ')} ☁️.`;
    return messageContent;
}

module.exports = {
    data: new SlashCommandBuilder()
        // Set the command name and description
        .setName('meteo')
        .setDescription('Provides information about the meteo.'),
    async execute(interaction) {
        // Get the weather and send the message
        try {
            const messageContent = await getWeather();
            await interaction.reply(messageContent);
        } catch (error) {
            // Log the error
            console.error('Erreur, veuillez réessayer :', error);
        }
    },
    // Export the getWeather function
    getWeather
};

