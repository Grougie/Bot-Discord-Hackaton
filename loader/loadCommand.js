const fs = require("fs")

module.exports = async(bot) => {

    fs.readdirSync("./commandes/").filter(f => f.endsWith(".js")).forEach(async file => { // lit les fichiers js dans le dossier commandes

        let command = require("../commandes/" + file)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas de nom ! `) // renvoie une erreur si la commande n'a pas de nom 
        bot.commands.set(command.name, command)     
        console.log(`Commande ${file} chargé avec succès !`)
    })
}
