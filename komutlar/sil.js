const Discord = require('discord.js-selfbot');
const database = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if(message.author.id !== ayarlar.sahip) return
  
let basari = ayarlar.basariliemoji
let basarisiz = ayarlar.basarisizemoji
let channel = message.channel;
let member = message.author
  
var i = 0;
message.delete();
channel.messages.fetch().then(x => {
x.filter(a => a.author.id === member.id).map(a => a).slice(0, 100).forEach(s => {
i++
s.delete();
if(i === x.filter(a => a.author.id === member.id).map(a => a).slice(0, 100).length) {
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
  name: "sil"
};