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
      .setColor("BLUE")
      
      .setTitle("Help Menu")
      .setDescription(`[ Invite ](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=42289062318&scope=bot) - [ Support ](https://discord.gg/SCvu2jCF7v)`)
      .addField("General🌎","`help`, `about`,  `invite`, `serverinfo`, `userinfo`, `ping`, `bots`")  
      .addField("economy💰","`daily`, `balance`, `give`, `birthday`")
      .addField("game 🎮"," `coinflip`,`slots`")
      .addField("fun😂","`slap`, `hug`, `ship`, `kiss`, `marry`")
      .addField("ranking"," `profile`, `rank`, `setinfo`, `setbackground`,`tip`, `setcolor`")
 message.channel.send({embeds:[embed]});
  }
}
