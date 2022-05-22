const Discord = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {
let sayılar = ["aç","kapat"]
let data = await db.fetch(`durum`)
let data2 = await db.fetch(`durum_süresi`)
let status = args[0]
if(!status) return message.channel.send(`${basarisiz} ${message.author}, ${db.fetch(`prefix`) || ayarlar.prefix}dz Aç/Kapat şeklinde yazınız.`).then(x => x.delete({timeout: 5000}))
if(!sayılar.some(word => message.content.includes(word))) return message.channel.send(`${basarisiz} ${message.author}, ${db.fetch(`prefix`) || ayarlar.prefix}dz Aç/Kapat şeklinde yazınız.`).then(x => x.delete({timeout: 5000}))

if (status === "aç"){
if (data2) return message.channel.send(`${basarisiz} ${message.author}, Durum zamanı zaten açık.`).then(x => x.delete({timeout: 5000}))
await db.set(`durum_süresi`, Date.now())
if (!data){
message.channel.send(`${basari} ${message.author}, Durum zamanınız açıldı.`)
}
if (data) {
message.channel.send(`${basari} ${message.author}, Durum zamanınız açılıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })}
message.react('✅')
}
  

  
if (status === "kapat"){
if (!data2) return message.channel.send(`${basarisiz} ${message.author}, Durum zamanı zaten kapalı.`).then(x => x.delete({timeout: 5000}))
await db.delete(`durum_süresi`)
if (!data){
message.channel.send(`${basari} ${message.author}, Durum zamanınız kapatıldı.`)
}
if (data) {
message.channel.send(`${basari} ${message.author}, Durum zamanınız kapatılıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })}
message.react('✅')
}

}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["zaman-ayar","dz"],
  permLevel: 4
};

exports.help = {
  name: "durum-zaman",
  description: "",
  usage: ""
};