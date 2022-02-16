const Discord = require('discord.js-selfbot');
const database = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if(message.author.id !== ayarlar.sahip) return
  
let basari = ayarlar.basariliemoji
let basarisiz = ayarlar.basarisizemoji
let channel = message.channel;
let member = message.author

if(!args[0]) return message.channel.send(`${basarisiz} ${message.author}, Bir sayı belirtmelisin!`)
  

message.delete();
channel.messages.fetch().then(x => {
x.filter(a => a.author.id === member.id).map(a => a)(args[0]).forEach(s => {
s.delete();

message.channel.send(`${basari} ${message.author}, **${args[0]}** Mesaj siliniyor.`);

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