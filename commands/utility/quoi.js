const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quoi')
		.setDescription('Replies with Coubeh!'),
	async execute(interaction) {
		await interaction.reply('Coubeh!');
	},
};