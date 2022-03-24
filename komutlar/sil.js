const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let basari = ayarlar.basariliemoji
      let sayı = args[0]

if (sayı < 1) return message.channel.send(`${basarisiz} ${message.author}, **1** adetten az mesaj silemem!`).then(x => x.delete({timeout: 5000}));
if (sayı > 100) return message.channel.send(`${basarisiz} ${message.author}, **100** adetten fazla mesaj silemem!`).then(x => x.delete({timeout: 5000}));
if (isNaN(sayı)) return message.channel.send(`${basarisiz} ${message.author}, 1-100 arasında bir sayı belirtmelisin.`).then(x => x.delete({timeout: 5000}))
message.channel.messages.fetch().then(x => {
x.filter(a => a.author.id === client.user.id).map(a => a).slice(0, sayı).forEach(s => s.delete())});

message.channel.send(`${basari} ${message.author}, Başarılı **${sayı}** mesaj siliniyor...`).then(x => x.delete({timeout: 5000}))
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sil',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};