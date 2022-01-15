


const { Discord, Client, Intents  } = require("discord.js");
const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
///const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD] });

const { Util } = require("discord.js");
const fs = require("fs");
const prefix = "G";
const { Collection, MessageEmbed } = require("discord.js");
const beautify = require("js-beautify");
const { inspect } = require("util");
let dev = ["637299944939585576"];
const cmd = require("node-cmd");
const { I18n } = require("locale-parser");
bot.reva = new I18n({ defaultLocale: "en" });

global.logChannel = bot.channels.cache.get("916080243884818482")
 
global.mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://economy:reda123456@redoall.zmuvg.mongodb.net/AlexIsHere?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the Mongodb database.");
  })
  .catch(err => {
    console.log("Unable to connect to the Mongodb database. Error:" + err);
  });

global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
global.Owner = require("./data/owner.js");
global.Prime = require("./data/prime.js");
global.Lang = require("./data/lang.js");
global.Black = require("./data/blacklist");
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});

/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new (require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name ; ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 4.0.0`);
  console.log(`[!]-------------------------------------[!]`);
});

bot.on("ready", () => {
  bot.user.setActivity("Ghelp | Updated: 1.0.0V", { type: "STREAMING" });
});
///////////


bot.on("messageCreate", async message => {
  let guild = await Guild.findOne({ guildID: message.guild.id })
  if (message.content.startsWith(`<@${bot.user.id}>`)) {
    return message.reply({ content: `My prefix is \`${guild.prefix}\`` });
  }
});

/////

 

bot.login("OTMxOTc0NjIyNDE5Nzc5NjU1.YeMPAQ.M5ZV3PiuNjDInUZwcIGXMcGJbqk");
