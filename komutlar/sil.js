const Discord = require('discord.js-selfbot');
const database = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if(message.author.id !== ayarlar.sahip) return
  
let basari = ayarlar.basariliemoji
let basarisiz = ayarlar.basarisizemoji
let channel = message.channel;
if(!args[0]) return message.channel.send(`${basarisiz} ${message.author}, Bir kullanıcıyı etiketlemelisin.`);
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(args[1]) {
if(!message.mentions.channels.first()) return message.channel.send(`${basarisiz} ${message.author}, Etiketlediğin kanalı bulamıyorum.`);
channel = message.mentions.channels.first();
};
if(!message.member.hasPermission("MANAGE_MESSAGES") & !args[1]) {member = message.author}
  
var i = 0;
message.delete();
channel.messages.fetch().then(x => {
x.filter(a => a.author.id === member.user.id).map(a => a).slice(0, 100).forEach(s => {
i++
s.delete();
if(i === x.filter(a => a.author.id === member.user.id).map(a => a).slice(0, 100).length) {
return message.channel.send(`${basari} ${message.author}, **${i}** Mesaj siliniyor.`);
}
});
});


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'sil'
};