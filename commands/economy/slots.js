const Discord = require("discord.js")
const slot = ["<a:anoslots:933423729151733780>"]
const cash = "<:ano_40:932239945328914433>"
const { Color } = require("../../config.js")
module.exports = {
  name: "slots",
  aliases: ["slots","s"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 8000,
  run: async (bot, message, args, dev) => {
 
    let user = await User.findOne({userID: message.author.id})
    
    let amount = args[1]  ||1
  let money = user.money
  if(isNaN(amount)) return message.channel.send({content: `❎ Please, only number required to amount`})
      
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
if(amount > 50000) return message.channel.send({content:`❎ **${message.author.username}**, You Can't More Than __50,000__ **amount!**`})
  
  /////////////
if(amount > money) return message.channel.send({content: `❎ You don't have enough money to start`})
  /////////////////
  
        
 let br = amount * 1   
  let slots = ["🍇","🍉","🍇","🍌","🍌","🍆","🍆"]
////["🍇","🍌","🍌","🍉"];
  //
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let result1 = Math.floor((Math.random() * slots.length));
  let result2 = Math.floor((Math.random() * slots.length));
  let result3 = Math.floor((Math.random() * slots.length));

  //
  let ust1 = Math.floor((Math.random() * slots.length));
  let ust2 = Math.floor((Math.random() * slots.length));
  let ust3 = Math.floor((Math.random() * slots.length));

  //
  let alt1 = Math.floor((Math.random() * slots.length));
  let alt2 = Math.floor((Math.random() * slots.length));
  let alt3 = Math.floor((Math.random() * slots.length));
  
  
  if (slots[result1] === slots[result2] && slots[result2] === slots[result3] ) {
    var text2 = `
   \`___SLOTS___\`
| ${slot} | ${slot} | ${slot} | **${message.author.username}**,
The slots is spins to win or losse you...
\`|           |\`
\`|           |\``;
          message.channel.send({content: text2}).then(msg => {
            setTimeout(() => {
              msg.edit({content:`
    \`___SLOTS___\`
| ${slots[result1]} | ${slots[result2]} | ${slots[result2]} | **${message.author.username}**,
\`|           |\` You win __\`${br}\` ${cash}__
\`|           |\`
\`|           |\``},true);
            }, 3500);
          });

    user.money += br
     user.save()
  } else {
    var text3 = `
    \`___SLOTS___\`
| ${slot} | ${slot} | ${slot} | **${message.author.username}**,
The slots is spins to win or losse you...
\`|           |\`
\`|           |\``;
         message.channel.send({content: text3 }).then(msg => {
            setTimeout(() => {
              msg.edit({content:`
    \`___SLOTS___\`
| ${slots[result1]} | ${slots[result2]} | ${slots[result3]} | **${message.author.username}**,
\`|           |\` You lost __\`${amount}\`${cash}__
\`|           |\`
\`|           |\``}, true);
            }, 3500);
          });
 user.money -= amount
 user.save()

  }
}
  
}
