const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Lütfen bir kanal belirtiniz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

message.channel.send(new MessageEmbed().setDescription(`${basari} ${message.author}, Ses kanalı ${kanal} olarak ayarlandı.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x348f36').setTimestamp())

db.set(`seskanal`, kanal.id)
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ses-kanali","voice-channel","ses-ayar"],
  permLevel: 0
};

exports.help = {
  name: "ses-kanal",
  description: "",
  usage: ""
};