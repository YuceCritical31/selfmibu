const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, emoji, args) => {
  
if (message.author.id === ayarlar.sahip) {
  

let basarisiz = ayarlar.basarisizemoji
let basari = ayarlar.basariliemoji
let kanal = message.member.voiceChannel
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(`${basarisiz} ${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)
message.react('✅')
message.channel.send(`${basari} ${message.author}, ${member} Kullancısının ses bağlantısı kesildi.`).then(x => x.delete({timeout: 5000}));
}}
exports.conf = { 
enabled: true, 
guildOnly: true, 
aliases: ["ses-kes"]
}

exports.help = {
name: "kes" 
}
