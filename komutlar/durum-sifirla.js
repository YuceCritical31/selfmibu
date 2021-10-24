const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let data = db.fetch(`durum`)
if (!data) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Durumunuz zaten sıfırlanmış.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

message.channel.send(new MessageEmbed().setDescription(`${basari} ${message.author}, Durumunuz başarıyla sıfırlandı.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x348f36').setTimestamp())
db.delete(`durum`)
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["durum-reset","durum-sıfırla"],
  permLevel: 4
};

exports.help = {
  name: "durum-sifirla",
  description: "",
  usage: ""
};