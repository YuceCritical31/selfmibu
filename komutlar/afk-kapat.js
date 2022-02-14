const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return
  if (!db.fetch(`afk`)) return message.channel.send(`${basarisiz} ${message.author}, Görünüşe göre afk modu zaten kapalı.`).then(x => x.delete({timeout: 5000}));
  
message.channel.send(`${basarili} ${message.author}, Başarıyla afk modu kapandı.`).then(x => x.delete({timeout: 5000}));
db.delete(`afk`)
db.delete(`afk_sebep`)
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk-k'],
  permLevel: 4
};

exports.help = {
  name: "unafk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};