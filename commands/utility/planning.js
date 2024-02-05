const { SlashCommandBuilder } = require('discord.js');
const { myExternalFunction } = require('../../myExternalFunction.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('planning')
        .setDescription('Provides information about the planning.'),
    async execute(interaction) {
        // Appelez la fonction externe ici
        myExternalFunction();
    
        await interaction.reply('This command is not yet implemented.');
    },
};