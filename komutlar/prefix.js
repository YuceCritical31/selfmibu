const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let data = db.fetch(`prefix`)
let prefix = args.splice(0).join(" ")
if(!prefix) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Lütfen bir prefix belirtiniz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())
if (data === prefix) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Prefixiniz önceki ile aynı olamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())
  
message.channel.send(new MessageEmbed().setDescription(`${basari} ${message.author}, Prefix \`${prefix}\` olarak ayarlandı.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x348f36').setTimestamp())

db.set(`prefix`, prefix)
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prefix-ayar","prefix-ayarla"],
  permLevel: 4
};

exports.help = {
  name: "prefix",
  description: "",
  usage: ""
};