const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
let talkedRecently = new Set();
let basarisiz = ayarlar.basarisizemoji;
module.exports = async message => {
 
  
const ms = require('parse-ms');
  let client = message.client;

if(message.author.bot) return;
if(!message.guild) return; {
  
  
     var REASON = await db.fetch(`afk_${message.author.id}`);

    let zamant = await db.fetch(`afk_süre_${message.author.id}`);
    let sa = ms(Date.now() - zamant);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    const muah2  = new Discord.MessageEmbed()
    .setDescription(`${message.author} adlı kullanıcı artık AFK değil`)
    .setColor("#00ff88")
    message.channel.send(muah2)

  
  }
  
  
  
  
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, );
  let prefix = await db.fetch(`prefix`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);

  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
};


