const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = async(client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let aga = client.users.cache.get("903919169068740658")
      let sayi = args[0];
      let mesaj = args.slice(1).join(' ');

if (isNaN(sayi)) return message.channel.send(`${basarisiz} ${message.author}, .aga-dm-spam <sayı> şeklinde yazınız.`).then(x => x.delete({timeout: 5000}))
message.delete();
for (var i = 0; i < sayi; i++)
{
aga.send('aga u-4 al')
aga.send('aga u-4 aç')
}  
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'aga-dm-spam',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};