const Discord = require('discord.js-selfbot')
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')


exports.run = function(client, message, args) {
if (message.author !== ayarlar.sahip) return
  
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
  
const embed = message.mentions.users.first() || client.users.fetch(args[0]);
let user;
if (message.mentions.users.first())  {user = message.mentions.users.first();}
  
else {user = message.author;}

message.channel.send(user.avatarURL({dynamic: true, size: 1024}))
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