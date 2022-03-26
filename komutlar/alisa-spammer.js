const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = async(client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let spam = message.channel.messages.cache.get(mesaj)
      let sayi = args[0];
      let mesaj = args.slice(1).join(' ');

if (isNaN(sayi)) return message.channel.send(`${basarisiz} ${message.author}, .aga-spam <sayı> şeklinde yazınız.`).then(x => x.delete({timeout: 5000}))
message.delete();
for (var i = 0; i < sayi; i++)
{
message.edit(`<@!858060241009377340> .`)
message.edit(`<@!858060241009377340>`)
}}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'alisa-spam',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};