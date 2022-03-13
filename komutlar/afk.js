const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {
  
  if (message.author.id === ayarlar.sahip) {
  if (db.fetch(`afk`) === "Açık") return message.channel.send(`${basarisiz} ${message.author}, Görünüşe göre afk modu zaten açık.`).then(x => x.delete({timeout: 5000}));
let sebep = args.slice(0).join(' ');
if (!sebep) return message.channel.send(`${basarisiz} ${message.author}, Bir sebep belirtmelisin.`).then(x => x.delete({timeout: 5000}));
  
message.channel.send(`${basarili} ${message.author}, Başarıyla \`${sebep}\` sebebiyle afk oldunuz.`).then(x => x.delete({timeout: 5000}));
db.set(`afk`, "Açık")
db.set(`afk_sebep`, sebep)
message.react('✅')
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk-a'],
  permLevel: 4
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};