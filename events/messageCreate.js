const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        console.log(`Message received from ${message.author.tag}: ${message.content}`);
        // Ignore messages from the bot itself
        if (message.author.bot) return;

        // Check if the message content ends with "quoi" (case-insensitive)
        if (message.content.trim().toLowerCase().endsWith('quoi')) {
            // Respond with "coubeh"
            await message.reply('coubeh');
        }
    },
};