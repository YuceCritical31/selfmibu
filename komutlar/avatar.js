const Discord = require('discord.js-selfbot')
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')


exports.run = function(client, message, args) {
  
if (message.author.id !== ayarlar.sahip) return
         
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let user;
if(message.mentions.users.first) {user = message.mentions.users.first();}
  
else {user = message.author}

message.channel.send(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.react('✅')
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