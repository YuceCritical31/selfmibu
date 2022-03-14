const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = (client, message, args) => {
  if (message.author.id === ayarlar.sahip) {
      let kullanıcı = client.users.cache.get(args[0]) || message.mentions.members.first()
      let basarisiz = ayarlar.basarisizemoji
      let sayi = args[1];
      let mesaj = args.slice(2).join(' ');

if (!kullanıcı) return message.channel.send(`${basarisiz} ${message.author}, Bir kullanıcı etiketle/ID gir.`).then(x => x.delete({timeout: 5000})) 
if (mesaj.length < 1) return message.channel.send(`${basarisiz} ${message.author}, Kralım Spamlamam İçin Bişe Yazmalısınız.`);
   message.delete();
for (var i = 0; i < sayi; i++)
{
kullanıcı.send(mesaj)
}

}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'dm-spam',
  description: 'spammer',
  usage: 'spam [yazdırmak istediğiniz şey]'
};