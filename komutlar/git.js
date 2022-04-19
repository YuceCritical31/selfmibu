const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;

exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {
  
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`${basarisiz} ${message.author}, Kralım bu sunucuda \`ÜYELERİ TAŞI\` yetkiniz yok.`).then(x => x.delete({timeout: 5000}))

    let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1])
    let data = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
  if (!data) return message.channel.send(`${basarisiz} ${message.author}, Ses odasına gidilecek üyeyi belirtmelisin!`).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !data.voice.channel || message.member.voice.channelID == data.voice.channelID) return message.channel.send(`${basarisiz} ${message.author}, İkiniz veya ikinizden birisi ses kanalında değil!`).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.setChannel(data.voice.channelID)) return message.channel.send(`${basarisiz} ${message.author}, Bu kanala giriş yetkiniz yok!`).then(x => x.delete({timeout: 5000}))
  
if (kanal) {
message.member.voice.setChannel(kanal.id)
message.react('✅')
}
  
message.member.voice.setChannel(data.voice.channelID)
message.react('✅')
  };
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'git',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '.jail @etiket Sebep'
}
