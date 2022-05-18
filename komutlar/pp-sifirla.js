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
  
if (args[0] === "ayarla") {
if (args[1].endsWith[".webp",".jpg",".jpeg",".png",".gif"].some) {
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız ayarlandı.`)  
db.set(`avatar`, args[1])
message.react('✅')
}else{
message.channel.send(`${basarisiz} ${message.author}, Bu link bir görsel linki değil!`).then(x => x.delete({timeout: 5000}))
}}
  
if (args[0] === "sifirla") {
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız ayarlanan foto ile değiştirildi.`)  
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