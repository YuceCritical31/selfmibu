const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let basarisiz = ayarlar.basarisizemoji

exports.run = async (client, message, emoji, args) => {
  
if (message.author.id === ayarlar.sahip) {
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`${basarisiz} ${message.author}, Kralım bu sunucuda \`ÜYELERİ TAŞI\` yetkiniz yok.`).then(x => x.delete({timeout: 5000}))
  

let basari = ayarlar.basariliemoji
let member = message.mentions.members.first() || client.users.cache.get(args[0])

if(!member) return message.channel.send(`${basarisiz} ${message.author}, Ses bağlantısı kesilcek üyeyi belirtmelisin!`).then(x => x.delete({timeout: 5000}));

member.voice.setChannel(null)
message.react('✅')
}}
exports.conf = { 
enabled: true, 
guildOnly: true, 
aliases: ["ses-kes"]
}

exports.help = {
name: "kes" 
}
