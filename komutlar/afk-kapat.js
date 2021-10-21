const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return
  if (!db.fetch(`afk`)) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Görünüşe göre afk modu zaten kapalı`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
message.channel.send(new MessageEmbed().setDescription(`${basarili} ${message.author}, Başarıyla afk modu kapandı.`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp()).then(x => x.delete({timeout: 5000}));
db.delete(`afk`)
db.delete(`afk_sebep`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk-k'],
  permLevel: 0
};

exports.help = {
  name: "unafk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};