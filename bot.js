const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client ({
    intents: [ 
        GatewayIntentBits.Guilds
    ]
});

client.on("ready", () => {
    console.log("BotOperationnal")
});

client.login("MTIwMzk3ODE1NDMyMzA4NzM2MA.GGtda-.bWZBM5UW_mBUm2KtEol8b4nta8woeUgIqAacas");
