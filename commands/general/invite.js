const Discord = require("discord.js")
module.exports = {
  name: "invite",
  aliases: ["invites","inv","invite"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {
    let embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Click to invite")
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=850106591051382784&permissions=448824474689&scope=bot`
      )
      .setFooter(message.author.username, message.author.avatarURL());
      
      message.channel.send({embeds:[embed]}).catch(err=>{
      message.author.send({embeds:[embed]})
      })
  }
}
