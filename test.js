const intents = new Discord.IntentsBitField(3276799)
const prefix = '!';
const bot = new Discord.Client({intents})
const loadCommand = require("./loader/loadCommand")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommand(bot)

bot.on("messageCreate", async message => {
    if (message.content === "!ping") return bot.commands.get("ping").run(bot,message)
})

bot.on("ready", async () => {

    console.log(`${bot.user.tag} est en ligne !`)

})


client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'meteo') {

        message.channel.send('Veuillez spécifier la ville (ex: !meteo Paris):');


        const filter = (response) => response.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { time: 30000 }); 

        collector.on('collect', async (response) => {
            const ville = response.content;

            const parameters = {
                access_key: "c7b7d852d39e5b713bfe1ee2ce46262d",
                query: ville,
                units: "m"
            };

            try {
                const apiResponse = await fetch(`http://api.weatherstack.com/current?access_key=${parameters.access_key}&query=${parameters.query}&units=${parameters.units}`);
                const data = await apiResponse.json();

                const { current, location } = data;
                message.channel.send(`La température à ${location.name} est de ${current.temperature}°C, le ressenti est de ${current.feelslike}°C.`);
            } catch (error) {
                console.error('Erreur, veuillez réessayer :', error);
                message.reply('Une erreur s\'est produite lors de la récupération des données météo.');
            } finally {
                collector.stop();
            }
        });

        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                message.reply('Le délai de réponse a expiré. Veuillez réessayer.');
            }
        });
    }
});

client.login('MTIwMzk3ODE1NDMyMzA4NzM2MA.G448zZ.7TPpuZOBoprducNxqKpJbsdgWbwhcC5CqFCJm4');
