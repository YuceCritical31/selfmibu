const db = require("quick.db");
const Discord = require("discord.js-selfbot");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;

exports.run = async (client, message, args) => {

if (message.author.id !== ayarlar.sahip) {
  
  if (!args[0]) {
    
return message.channel.send(`${basarisiz} ${message.author}, Doğru bir argüman gir Aç veya Kapat.`).then(x => x.delete({timeout: 5000}));


    return;
  }
let kufur = await db.fetch(`ses`);
if (args[0] == "aç") {
if (kufur) {

return message.channel.send(`${basarisiz} ${message.author}, Görünüşe göre ses sistemi zaten aktif!`).then(x => x.delete({timeout: 5000}));

      return;
    } else {
      db.set(`ses`, "Açık");


return message.channel.send(`${basari} ${message.author}, Ses sistemi başarıyla açıldı!`).then(x => x.delete({timeout: 5000}));
message.react('✅')
    }
  } else if (args[0] == "kapat") {
    if (!kufur) {

return message.channel.send(`${basarisiz} ${message.author}, Görünüşe göre ses sistemi zaten kapalı!`).then(x => x.delete({timeout: 5000}));

      return;
    }
    db.delete(`ses`);


return message.channel.send(`${basari} ${message.author}, Ses sistemi başarıyla kapandı!`).then(x => x.delete({timeout: 5000}));
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
  name: "ses",
  description: "Bot",
  usage: "reklam-engel"
};