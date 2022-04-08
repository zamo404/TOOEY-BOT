const Discord = require("discord.js")
module.exports = {
  name: "help",
  aliases: ["h"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 3000,
  run: async (bot, message, args, dev) => {
////if(message.guild.me.has("838593240328044554"))return
let embed = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setDescription(`<@${bot.user.id}> a game bot for spending time and enjoying for you dear\n\n__Prefix Information__\nPrefix: **bom**\nYou can also mention <@${bot.user.id}> to get prefix info\n\n[ Invite ](https://discord.com/api/oauth2/authorize?client_id=951192433767624734&permissions=1644971949393&scope=bot) - [ Support ](https://discord.gg/t3sdXdtBSZ)`)
      .addField("General || 🌎","`prefix`, `news`, `about`,  `invite`, `serverinfo`, `userinfo`, `ping`, `bots`,`redeem`")  
      .addField("Economy || 💶","`daily`, `balance`, `give`, `birthday`")
      .addField("Game ||  🎮"," `coinflip`, `slots`")
      .addField("Shop || 🛍️","`buy`, `shop`, `use`, `unequip`, `inventory`")
      .addField("Fun || 🥳","`slap`, `hug`, `ship`, `kiss`, `marry`")
      .addField("Ranking || 🧧"," `profile`, `rank`, `setinfo`, `setbackground`, `tip`, `setcolor`")
 message.channel.send({embeds:[embed]});
  }
}
