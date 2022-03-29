const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, emoji, args) => {
  
if (message.author.id === ayarlar.sahip) {
    let basarili = ayarlar.basariliemoji;
    let basarisiz = ayarlar.basarisizemoji;
    let uye = message.mentions.members.first() || client.users.cache.get(args[0]);
  
  if (!uye) return message.channel.send(`${basarisiz} ${message.author}, Ses odasına gidilecek üyeyi belirtmelisin!`).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(`${basarisiz} ${message.author}, İkiniz veya ikinizden birisi ses kanalında değil!`).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.setChannel(uye.voice.channelID)) return message.channel.send(`${basarisiz} ${message.author}, Bu kanal giriş yetkiniz yok!`).then(x => x.delete({timeout: 5000}))
  
message.member.voice.setChannel(uye.voice.channelID)
message.react('✅')
  };
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'git',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '.jail @etiket Sebep'
}
