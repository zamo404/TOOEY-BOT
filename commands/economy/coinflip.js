const Discord = require("discord.js")
const { Color } = require("../../config.js")
const ms = require('parse-ms')
const bobo = "<:Bobocash:896847203669245992>"
const tail = "<a:flip:897157024209592331>"
module.exports = {
  name: "coinflip",
  aliases: ["coinflip","cf"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 8000,
  run: async (bot, message, args, dev) => {
 
    
    let data = await User.findOne({userID: message.author.id}) 
    
    let money = data.money
  
//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
 

        /*if (time !== null && timeout - (Date.now() - time) > 0) {
        
        let time = ms(timeout - (Date.now() - time));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE 
         
          return message.channel.send({content:`**${message.author.username}**, Cool down (**${time.seconds ? time.seconds + ' seconds' : 'try again!'}** left)`})
                    

          
      } else */

    var cf = args[1,2]
  if(!cf) return message.channel.send({content:`**${message.author.username}**, please, Type a number `})
        

    if(cf > money) return message.channel.send({content:`**${message.author.username}**, In your wallet to place a bet **${money ? "just " + money + ' there is!' : 'you have no otaku!'}**`})
  
        if(cf> 50000) return message.channel.send({content:` You can't use your money than 50,000`})
        if (isNaN(cf) || cf < 0 ||cf.startsWith("all"))  return message.channel.send({content:`The amount you entered is not a valid number?`})
    
            
        
                  
  
        
        const result = [ "LOOSELOOSE","WINWIN","WINWIN","LOOSELOOSE","WINWIN"] 
  
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var mon = cf * 2      
        //////        
        var text2 = `**${message.author.username} You spent ${cf}**, chose **heads** The coin spins ${tail}...`;
          message.channel.send({content: text2}).then(msg => {
            setTimeout(() => {
              msg.edit({content:`**${message.author.username} You spent ${cf}**, chose **heads** The coin spins and You lost all ${bobo}`});
            }, 3000);
        });
       
      if(data){
       data.money -= mon  || 2
data.save()}
     } else {
       
          var mon2 = cf * 2
        var text2 = `**${message.author.username} You spent ${cf}**, chose **heads** The coin spins ${tail}...`;
          message.channel.send({content:text2}).then(msg => {
            setTimeout(() => {
              msg.edit( {content:`**${message.author.username} You spent ${cf}**, chose **heads** The coin spins  and Win **${mon2} ${bobo}**`});
            }, 3000);
          });
    if(data){
      data.money += mon2 || 2
      data.save()
    }
      }}}
