const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

if (args[0] === "sil") {
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız silindi.`)  
client.user.setAvatar(null)
message.react('✅')
}
  
if (args[0] === "geri") {
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız önceki ile değiştirildi.`)  
client.user.setAvatar(db.fetch(`avatar`))
message.react('✅')
} 
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "profil-foto",
  description: "",
  usage: ""
};