const Discord = require("discord.js")
module.exports = {
  name: "support",
  aliases: [],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {

message.channel.send({content: `This is a server support **Bomba** if you need help, enter the server -> \n https://discord.gg/t3sdXdtBSZ`});
    } 
}
