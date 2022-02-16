const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')


exports.run = async (client, message, args) {
         
  let basarisiz = ayarlar.basarisizemoji;
  
const embed = message.mentions.users.first() || client.users.fetch(args[0]);
let user;
if (message.mentions.users.first())  {user = message.mentions.users.first();}
  
else {user = message.author;}

return message.channel.send(embed.avatarURL({ dynamic: true, size: 1024 }))
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["pp","av","avatar"],
permLevel: 0
  
};
  
exports.help = {
name: 'avatar'
};