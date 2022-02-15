const Discord = require('discord.js-selfbot')
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')


exports.run = function(client, message, args) {
         
  let basarisiz = ayarlar.basarisizemoji;
  
const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

return message.channel.send(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
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