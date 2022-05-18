const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let komutlar = ["sil","ayarla","sifirla"]
let linkler = [".webp",".png",".jpeg",".gif",".jpg"]
if(!komutlar.some(word => message.content.includes(word))) return message.channel.send(`${basarisiz} ${message.author}, Yanlış kullanım doğru kullanım şekli: ${db.fetch(`prefix`) || ayarlar.prefix}profil-foto <sil/ayarla/sifirla>`).then(x => x.delete({timeout: 5000}))
  
if (args[0] === "sil") {
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız silindi.`)  
client.user.setAvatar(null)
message.react('✅')
}
  
if (args[0] === "ayarla") {
try{
if (!linkler.some(word => message.content.endsWith(word))) return message.channel.send(`${basarisiz} ${message.author}, Bir link belirtmelisin`).then(x => x.delete({timeout: 5000}))
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız ayarlandı.`)  
db.set(`avatar`, args[1])
}catch{
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
  aliases: ["profil-foto"],
  permLevel: 4
};

exports.help = {
  name: "pf",
  description: "",
  usage: ""
};