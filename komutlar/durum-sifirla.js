const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let data = db.fetch(`durum`)
if (!data) return message.channel.send(`${basarisiz} ${message.author}, Durumunuz zaten sıfırlanmış.`).then(x => x.delete({timeout: 5000}));

db.delete(`durum`)
message.react('✅')
message.channel.send(`${basari} ${message.author}, Durumunuz sıfırlanıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })

}};

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