 const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = (client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let sayi = args[0];
      let mesaj = args.slice(1).join(' ');
   
if (mesaj.length < 1) return message.channel.send(`${basarisiz} ${message.author}, Kralım Spamlamam İçin Bişe Yazmalısınız.`).then(x => x.delete({timeout: 5000}))
   message.delete();
for (var i = 0; i < sayi; i++)
{
message.channel.send(mesaj)
}

}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'spam',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};