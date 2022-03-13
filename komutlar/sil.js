const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let basari = ayarlar.basariliemoji
      let sayı = args[0]
      
if (!sayı) return message.channel.send(`${basarisiz} ${message.author}, Bir sayı belirtmelisin.`).then(x => x.delete({timeout: 5000}))
message.delete();
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