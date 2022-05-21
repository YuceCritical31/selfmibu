const Discord = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {
let sayılar = ["aç","kapat"]
let data = db.fetch(`durum_süresi`)
let status = args[0]
if(!status) return message.channel.send(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.\n1 = Çevrimiçi\n2 = Boşta\n3 = Rahatsız Etmeyin\n4 = Görünmez\n5 = Sıfırlamak`)
if(!sayılar.some(word => message.content.includes(word))) return message.channel.send(`${basarisiz} ${message.author}, Lütfen aşağıdaki sayılardan belirtiniz.\n1 = Çevrimiçi\n2 = Boşta\n3 = Rahatsız Etmeyin\n4 = Görünmez\n5 = Sıfırlamak`)
  
if (status === "aç"){
await db.set(`durum_süresi`, Date.now())
message.channel.send(`${basari} ${message.author}, Durum zamanınız kapatılıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
message.react('✅')
}
  
if (status === "kapat"){
await db.delete(`durum_süresi`)
message.channel.send(`${basari} ${message.author}, Durum zamanınız kapatılıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
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