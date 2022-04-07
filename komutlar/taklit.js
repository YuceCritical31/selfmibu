const db = require("quick.db");
const Discord = require("discord.js-selfbot");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;

exports.run = async (client, message, args) => {

if (message.author.id === ayarlar.sahip) {
  
  if (!args[0]) {
    
return message.channel.send(`${basarisiz} ${message.author}, Doğru bir argüman gir Aç veya Kapat.`).then(x => x.delete({timeout: 5000}));


    return;
  }
let kufur = await db.fetch(`taklit`);
if (args[0] == "aç") {
if (kufur) {

return message.channel.send(`${basarisiz} ${message.author}, Görünüşe göre taklit sistemi zaten aktif!`).then(x => x.delete({timeout: 5000}));

      return;
    } else {
      db.set(`taklit`, "Açık");


return message.channel.send(`${basari} ${message.author}, Taklit sistemi açılıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
message.react('✅')
    }
  } else if (args[0] == "kapat") {
    if (!kufur) {

return message.channel.send(`${basarisiz} ${message.author}, Görünüşe göre taklit sistemi zaten kapalı!`).then(x => x.delete({timeout: 5000}));

      return;
    }
    db.delete(`taklit`);


return message.channel.send(`${basari} ${message.author}, Taklit sistemi kapanıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
message.react('✅')
  }

if (args[0] == "kurban") {
let data;
let kanal2 = client.users.cache.get(args[1])
let kanal = message.mentions.members.first()
if(kanal) {data = kanal.id}
if(kanal2) {data = args[1]}

 
if (!data) return message.channel.send(`${basarisiz} ${message.author}, Bir kullanıcı Etiketle/ID gir.`).then(x => x.delete({timeout: 5000}));
if (kufur) return message.channel.send(`${basari} ${message.author}, Kurban <@!${data}> olarak ayarlanıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
  
if (!kufur) return message.channel.send(`${basari} ${message.author}, Kurban <@!${data}> olarak ayarlandı.`)
db.set(`kurban`, data)
message.react('✅')
}
  
}}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "taklit",
  description: "Bot",
  usage: "reklam-engel"
};