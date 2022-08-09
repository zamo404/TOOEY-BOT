const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "prefix",
  aliases: ["setprefix"],
  description: "Change the prefix of the bot",
  usage: ["Vprefix [Prefix]"],
  category: ["admin"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
        if(!args[1]) return message.channel.send({content:`choose Your prefix`});
        if(args[1].length > 5) return message.channel.send({content:`prefix has too high`});
         
        let dataa = await Guild.findOne({ guildID: message.guild.id })

        let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`prefix has been changed to \`${args[1]}\``)
        message.channel.send({embeds:[embed]})
        dataa.prefix = args[1];
        dataa.save();
    }};
