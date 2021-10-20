const db = require("quick.db");
const Discord = require("discord.js-selfbot");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;

exports.run = async (client, message, args) => {

if (message.author.id !== ayarlar.sahip)
return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
  if (!args[0]) {
    
return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} ${message.author}, Doğru bir argüman gir Aç veya Kapat.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));


    return;
  }
let kufur = await db.fetch(`ses`);
if (args[0] == "aç") {
if (kufur) {

return message.channel.send(new Discord.MessageEmbed().setDescription(`${basarisiz} ${message.author}, Görünüşe göre ses sistemi zaten aktif!`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

      return;
    } else {
      db.set(`ses`, "Açık");


return message.channel.send(new Discord.MessageEmbed().setDescription(`${basari} ${message.author}, Ses sistemi başarıyla açıldı!`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp()).then(x => x.delete({timeout: 5000}));
process.exit(1000);
    }
  } else if (args[0] == "kapat") {
    db.delete(`ses`);


return message.channel.send(new Discord.MessageEmbed().setDescription(`${basari} ${message.author}, Ses sistemi başarıyla kapandı!`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp()).then(x => x.delete({timeout: 5000}));
process.exit(1000);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ses",
  description: "Bot",
  usage: "reklam-engel"
};