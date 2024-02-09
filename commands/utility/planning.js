const { SlashCommandBuilder } = require('discord.js');
const { getPlanning } = require('../../getPlanning.js');
const { addOneHour } = require('../../addOneHour.js');
const { replaceBR } = require('../../replaceText.js');


module.exports = {
    data: new SlashCommandBuilder()
        // Give the command a name and description
        .setName('planning')
        .setDescription('Provides information about the planning.'),
    async execute(interaction) {
        // Holen Sie sich die Planung und senden Sie die Nachricht
        text = getPlanning();
        // Replace the hours with the correct time
		let planning = text.replace(/\d{2}:\d{2}:\d{2}Z/g, match => addOneHour(match));
        // Replace the <br> and <br /> with \n
        planning = replaceBR(planning);
        const currentDate = new Date();
        const formatedDate = currentDate.toISOString().split('T')[0];
        await interaction.reply("👋 Bonjour ! Voici le planning de la journée du : " + formatedDate + " 📅\n\n" + planning +"Bonne journée à vous ! 😊");    },
};