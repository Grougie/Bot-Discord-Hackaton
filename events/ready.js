const { Events } = require('discord.js');
const cron = require('node-cron');
const { myExternalFunction } = require('../myExternalFunction.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		const guild = client.guilds.cache.get('1203977555112370186'); 
        const channel = guild.channels.cache.get('1203977555112370191'); 

		cron.schedule('0 7 * * *', () => {
			myExternalFunction();
			channel.send('@everyone Good morning!');
		});
	},
};