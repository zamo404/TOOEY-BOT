const Discord = require("discord.js");
const { Color } = require("../../config.js");
const mongoose = require("mongoose");
//let data = require("../../data/user.js")
module.exports = {
  name: "leaderboard",
  aliases: ["lb"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 5000,
  run: async (bot, message, args, dev) => {
    let data = await User.find({ guildID: message.guild.id })
      .sort([["money","descending"]])
      .exec(async (err, res) => {
        if (err) console.log(err);
        let page = Math.ceil(res.length / 10);

        let embed = new Discord.MessageEmbed();
        embed.setTitle("LEADERBOARD");
        let pg = 1;
        if (pg != Math.floor(pg)) pg = 1;
        if (!pg) pg = 1;
        let end = pg * 10;
        let start = pg * 10 - 10;

        if (res.length === 0) {
          embed.addField("Error", "not found");
        } else if (res.length < start) {
          embed.addField("error", "page not found");
        } else if (res.length < 10) {
          embed.setFooter(`page ${pg} of ${page}`);
          for (i = 0; i < res.length; i++) {
            let member =
              message.guild.members.cache.get(res[i].userID) || "user left";
            if (member === "user left") {
              embed.addField(
                `**${i + 1}. ${member}**`,
                `${res[i].money.toLocaleString()}`
                
                
              )
              
            } else {
              embed.addField(
                `**${i + 1}- ${member.user.username}**`,
                `$${res[i].money.toLocaleString()}`
            
              );
            }
          }
          embed.setFooter(`page ${pg} of ${page}`);
        } else {
          for (i = 0; i < 10; i++) {
            let member =
              message.guild.members.cach.get(res[i].userID) || "user left";
            if (member === "user left") {
              embed.addField(
                `**${i + 1}. ${member}**`,
                `$${res[i].money.toLocaleString()}`
              );
            } else {
              embed.addField(
                `${i + 1}- ${member.user.username}`,
                `$${res[i].money.toLocaleString()}`
        
              );
            }
          }
          embed.setFooter(`page ${pg} of ${page}`);
        }

        message.channel.send({ embeds: [embed] });
      });
  }
};
