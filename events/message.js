const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
let basarisiz = ayarlar.basarisizemoji;
module.exports = async message => {
 
  
  let client = message.client;

  
  if(message.author.bot) return;

  
  let prefix = await db.fetch(`prefix`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    //if(cmd.conf.enabled === false) return message.channel.send("⛔ Kullandığın komut **Bakıma Alınmış** veya **Kullanıma Kapatılmıştır!**")
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};