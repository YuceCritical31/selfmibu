const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = (client, message, args) => {
  if (message.author.id == ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
      let sayi = args[0];
      let kullanıcı = client.users.cache.get(args[0])
      let kullanıcı2 = message.mentions.members.first()
      let mesaj = args.slice(1).join(' ');
  
    
if(kullanıcı) {sayi = kullanıcı}
if (mesaj.length < 1) return message.channel.send(`${basarisiz} ${message.author}, Kralım Spamlamam İçin Bişe Yazmalısınız.`);
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