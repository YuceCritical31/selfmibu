const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').then(x => x.delete({timeout: 5000}));

let data = db.fetch(`durum`)
let durum = args.splice(0).join(" ")
if(!durum) return message.channel.send(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.`)
if (data === durum) return message.channel.send(`${basarisiz} ${message.author}, Durumunuz önceki ile aynı olamaz.`)
  
message.channel.send(`${basari} ${message.author}, Durumunuz \`${durum}\` olarak ayarlandı.`)

db.set(`durum`, durum)
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["durum-ayar","durum-ayarla"],
  permLevel: 4
};

exports.help = {
  name: "durum",
  description: "",
  usage: ""
};