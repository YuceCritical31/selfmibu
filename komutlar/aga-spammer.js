const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = async (client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let sayi = args[0];
      let mesaj = args[1];
      let mesaj2 = args.slice(2).join(' ');
   
if (mesaj.length < 1) return message.channel.send(`${basarisiz} ${message.author}, Kralım Spamlamam İçin Bişe Yazmalısınız.`).then(x => x.delete({timeout: 5000}))
   message.delete();
for (var i = 0; i < sayi; i++)
{
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
message.channel.send(mesaj)
await sleep(5000)
message.channel.senf(mesaj2)
}

}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'aga-spam',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};