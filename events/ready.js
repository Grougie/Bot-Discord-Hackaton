const { Events } = require('discord.js');
const cron = require('node-cron');
const { getPlanning } = require('../getPlanning.js');
const { addOneHour } = require('../addOneHour.js')
const { getWeather } = require('../commands/utility/meteo.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		const guild = client.guilds.cache.get('1203977555112370186'); 
        const channel = guild.channels.cache.get('1203977555112370191'); 

		cron.schedule('0 7 * * *', async ()  => {
			const text = getPlanning();
			let planning = text.replace(/\d{2}:\d{2}:\d{2}Z/g, match => addOneHour(match));
			const currentDate = new Date();
			const formatedDate = currentDate.toISOString().split('T')[0];
			const meteo = await getWeather();

			const  message = '🌞 @everyone Bonjour tout le monde! Voici votre planning de la journée et la météo:\n\n' +"📅 Le planning de la journée du : " + formatedDate + " est le suivant:\n\n" + planning + "\n" +"🌤️ Voici la météo du jour:\n\n" + meteo + "\n\n" + "\n" +"😊 Passez une bonne journée à tous!"; 

			channel.send(message);
		}, {
			timezone: "Europe/Paris"
		});
		
	},
};