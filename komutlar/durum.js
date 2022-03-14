const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id === ayarlar.sahip) {
  
let data = db.fetch(`durum`)
let durum = args.splice(0).join(" ")
if(!durum) return message.channel.send(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.`).then(x => x.delete({timeout: 5000}))
if (data === durum) return message.channel.send(`${basarisiz} ${message.author}, Durumunuz önceki ile aynı olamaz.`).then(x => x.delete({timeout: 5000}))
  
message.channel.send(`${basari} ${message.author}, Durumunuz \`${durum}\` olarak ayarlanıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })

db.set(`durum`, durum)
message.react('✅')
ksksmskskekek
}};

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