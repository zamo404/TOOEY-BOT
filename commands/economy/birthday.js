const Discord = require("discord.js")
const { Color } = require("../../config.js")
const profile = require(`${process.cwd()}/data/user`);
const moment = require('moment');

module.exports = {
  name: "birthday",
  aliases: ["birthday","bh","birthdate"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS"],		
  ownerOnly: false,			
  cooldown: 5000,
  run: async (bot, message,  dev,[date]) => {  
    
    let doc = await User.findOne({userID:message.author.id})

    
    
if (!doc){
      doc = new User({ userID: message.author.id });
    };

    if (!date){
      return message.channel.send({content:`\\❌ **${message.author.tag}**, Please add the date`});
    } else {
      date = moment(date, 'DD-MM-Y');

      if (!date.isValid()){
        return message.channel.send({content:`\\❌ **${message.author.tag}**, Please add the date in DD-MM format`});
      };

      doc.birthdate= date.format('Do MMMM');
        doc.money += 10000
      return doc.save()
      .then(() => message.channel.send({content:`\\✔️ **${message.author.tag}**, your birthday has been updated to **${date.format('Do MMMM')}** and earned $10000!`}))
      .catch(() => message.channel.send({content:`\\❌ **${message.author.tag}**, your birthday update failed!`}))
    };
  }}
