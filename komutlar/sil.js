const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json')
///spammer by planta
 
exports.run = (client, message, args) => {
  if (message.author.id == ayarlar.sahip) {
      let basarisiz = ayarlar.basarisizemoji
message.channel.messages.fetch().then(x => {
x.filter(a => a.author.id === client.user.id).map(a => a).slice(0, 20).forEach(s => s.delete())});

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