const { SlashCommandBuilder } = require('discord.js');
const { getPlanning } = require('../../getPlanning.js');
const { addOneHour } = require('../../addOneHour.js');
const { replaceBR } = require('../../replaceText.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('planning')
        .setDescription('Provides information about the planning.'),
    async execute(interaction) {
        text = getPlanning();
		let planning = text.replace(/\d{2}:\d{2}:\d{2}Z/g, match => addOneHour(match));
        planning = replaceBR(planning);
        const currentDate = new Date();
        const formatedDate = currentDate.toISOString().split('T')[0];
        await interaction.reply("👋 Bonjour ! Voici le planning de la journée du : " + formatedDate + " 📅\n\n" + planning +"Bonne journée à vous ! 😊");    },
};