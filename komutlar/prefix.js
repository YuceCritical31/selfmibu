const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id === ayarlar.sahip) {
  
let data = db.fetch(`prefix`)
let prefix = args.splice(0).join(" ")
if(!prefix) return message.channel.send(`${basarisiz} ${message.author}, Lütfen bir prefix belirtiniz.`).then(x => x.delete({timeout: 5000}))
if (data === prefix) return message.channel.send(`${basarisiz} ${message.author}, Prefixiniz önceki ile aynı olamaz.`).then(x => x.delete({timeout: 5000}))
  
message.channel.send(`${basari} ${message.author}, Prefixiniz \`${prefix}\` olarak ayarlandı.`)

db.set(`prefix`, prefix)
message.react('✅')
}};

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