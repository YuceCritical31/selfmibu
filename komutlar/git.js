const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, emoji, args) => {
  
if (message.author.id === ayarlar.sahip) {
    let basarili = ayarlar.basariliemoji;
    let basarisiz = ayarlar.basarisizemoji;
    let uye = message.mentions.members.first() || client.users.cache.get(args[0]);
    let kanal = message.member.voice.setChannel(uye.voice.channelID)

  
  if (!uye) return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} Ses odasına gidilecek üyeyi belirtmelisin!`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} ${message.author}, İkiniz veya ikinizden birisi ses kanalında değil!`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

if (kanal) return
  
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
