const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;

exports.run = async (client, message, emoji, args) => {
  
if (message.author.id === ayarlar.sahip) {
  
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`${basarisiz} ${message.author}, Kralım bu sunucuda \`ÜYELERİ TAŞI\` yetkiniz yok.`).then(x => x.delete({timeout: 5000}))
  
    let uye = message.mentions.members.first() || client.users.cache.get(args[0])
  
  if (!uye) return message.channel.send(`${basarisiz} ${message.author}, Ses odasına çekilecek üyeyi belirtmelisin!`).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(`${basarisiz} ${message.author}, İkiniz veya ikinizden birisi ses kanalında değil!`).then(x => x.delete({timeout: 5000}));
  
uye.voice.setChannel(message.member.voice.channelID)
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
  name: 'çek',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '.jail @etiket Sebep'
}
