const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id === ayarlar.sahip) {
let sayılar = ["1","2","3","4"]
let data = db.fetch(`type`)
let status = args[0]
if(!status) return message.channel.send(`${basarisiz} ${message.author}, Lütfen durum şeklinizi belirtiniz.\n1 = Oynuyor\n2 = İzliyor\n3 = Dinliyor\n4 = Sıfırlamak`)
if(!sayılar.some(word => message.content.includes(word))) return message.channel.send(`${basarisiz} ${message.author}, Lütfen aşağıdaki sayılardan belirtiniz.\n1 = Oynuyor\n2 = İzliyor\n3 = Dinliyor\n4 = Sıfırlamak`)
  
if (status === "1"){
db.set(`type`, "PLAYING")
status = "Oynuyor"
}
  
if (status === "2"){
db.set(`type`, "WATCHING")
status = "İzliyor"
}

if (status === "3"){
db.set(`type`, "LISTENING")
status = "Dinliyor"
}
  
if (status === "4"){
db.delete(`type`)
status = "Sıfırlandı"
}

message.channel.send(`${basari} ${message.author}, Durumu şekiliniz \`${status}\` olarak ayarlanıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
message.react('✅')
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["type-ayar","type-ayarla","şekil","sekil"],
  permLevel: 4
};

exports.help = {
  name: "type",
  description: "",
  usage: ""
};