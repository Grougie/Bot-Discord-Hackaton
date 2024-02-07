const { Events } = require('discord.js');
const cron = require('node-cron');
const { getPlanning } = require('../import_ical.js');
const { addOneHour } = require('../addOneHour.js')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		const guild = client.guilds.cache.get('1203977555112370186'); 
        const channel = guild.channels.cache.get('1203977555112370191'); 

		cron.schedule('0 7 * * *', () => {
			channel.send('@everyone Good morning, here is your schedule !');
			text = getPlanning();
			let newText = text.replace(/\d{2}:\d{2}:\d{2}Z/g, match => addOneHour(match));
			channel.send(newText);
		});
	},
};