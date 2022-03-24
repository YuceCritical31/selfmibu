const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = async(client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let sayi = args[0];
      let mesaj = args.slice(1).join(' ');

if (isNaN(sayi)) return message.channel.send(`${basarisiz} ${message.author}, .aga-spam <sayı> şeklinde yazınız.`).then(x => x.delete({timeout: 5000}))
   message.delete();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
for (var i = 0; i < sayi; i++)
{
message.channel.send('aga u-4 al')
await sleep(2000)
message.channel.send('aga u-4 aç')
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