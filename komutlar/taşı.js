const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;

exports.run = async (client, message, emoji, args) => {
  
if (message.author.id === ayarlar.sahip) {
  
if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`${basarisiz} ${message.author}, Kralım bu sunucuda \`ÜYELERİ TAŞI\` yetkiniz yok.`).then(x => x.delete({timeout: 5000}))
  
  let uye = message.mentions.users.first() || client.users.cache.get(args[0])
  let uye2 = message.mentions.users.first() || client.users.cache.get(args[1])
  
  if (!uye) return message.channel.send(`${basarisiz} ${message.author}, Taşınacak üyeyi belirtmelisin!`).then(x => x.delete({timeout: 5000}));
  if (!args[1]) return message.channel.send(`${basarisiz} ${message.author}, Üyenin hangi kanala/ belirtmelisin!`).then(x => x.delete({timeout: 5000}));
  if (!uye2.voice.channel || !uye.voice.channel || uye.voice.channelID == uye.voice.channelID) return message.channel.send(`${basarisiz} ${message.author}, İkiniz veya ikinizden birisi ses kanalında değil!`).then(x => x.delete({timeout: 5000}));
  
uye.voice.setChannel(uye2.voice.channelID)
message.react('✅')
  };
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tasi"],
  permLevel: 0
}

exports.help = {
  name: 'taşı',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '.jail @etiket Sebep'
}
