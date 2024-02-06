const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    execute: (message) => {
        console.log(`Message received from ${message.author.tag}: ${message.content}`);
        if (message.author.bot) return;
        const motsCles = ['quoi'];
        if (motsCles.some(mot => message.content.toLowerCase().endsWith(mot))) {
            // Respond to the message
            message.reply('Coubeh !');
        }
    }
};