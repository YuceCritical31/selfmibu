const Discord = require("discord.js-selfbot");
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
message.channel.send(`${basari} ${message.author}, Profil fotoğrafını sildim.`)  
await client.user.setAvatar(null)
message.react('✅')
}
  
if (args[0] === "ayarla") {
try{ 
if (message.attachments.size === 1 && !args[1]) {
message.attachments.forEach(x => {
if (!x.url.endsWith(".jpg") || !x.url.endsWith(".gif") || !x.url.endsWith(".png") || !x.url.endsWith(".jpeg") || !x.url.endsWith(".webp")) return message.channel.send(`${basarisiz} ${message.author}, Bir görsel atmalısın.`).then(x => x.delete({timeout: 5000}))
db.set(`avatar`, x.url)
message.channel.send(`${basari} ${message.author}, Başarıyla profil fotoğrafını aşağıdaki görsel olarak kaydettim.`, new Discord.Attachment(db.fetch(`avatar`)))
})
}//else if (!args[1]) {
//message.channel.send(`${basarisiz} ${message.author}, En fazla 1 tane görsel belirtmelisin!`).then(x => x.delete({timeout: 5000}))
//}

if (args[1]) {
if (!linkler.some(word => message.content.endsWith(word))) return message.channel.send(`${basarisiz} ${message.author}, Bir görsel linki belirtmelisin.`).then(x => x.delete({timeout: 5000}))
message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız ayarlandı.`)  
await db.set(`avatar`, args[1])
message.channel.send(`${basari} ${message.author}, Başarıyla profil fotoğrafını aşağıdaki görsel olarak kaydettim.`, new Discord.Attachment(db.fetch(`avatar`)))
}}catch{
message.channel.send(`${basarisiz} ${message.author}, Bu dosya/link bir görsel dosyası/linki değil!`).then(x => x.delete({timeout: 5000}))
}}
  
if (args[0] === "sifirla") {
try{
if (!db.fetch(`avatar`)) return message.channel.send(`${basarisiz} ${message.author}, Profil fotoğrafı ayarlanmamış!`).then(x => x.delete({timeout: 5000}))
await client.user.setAvatar(db.fetch(`avatar`))
message.channel.send(`${basari} ${message.author}, Başarıyla profil fotoğrafını sıfırlandım.`)
message.react('✅')
}catch{
message.channel.send(`${basarisiz} ${message.author}, Avatarını çok hızlı değişiyosun veya ayarlanan link hatalı!`).then(x => x.delete({timeout: 5000}))
}}

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