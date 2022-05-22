const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let linkler = [".webp",".png",".jpeg",".gif",".jpg"]
let Atahan = message.mentions.users.first() || client.users.cache.get(args[0])
  
try{
if (message.attachments.size === 1 && !args[0]) {
message.attachments.forEach(x => {
if (!x.url.endsWith(".jpg") & !x.url.endsWith(".gif") & !x.url.endsWith(".png") & !x.url.endsWith(".jpeg") & !x.url.endsWith(".webp")) return message.channel.send(`${basarisiz} ${message.author}, Bir görsel atmalısın.`).then(x => x.delete({timeout: 5000}))
client.user.setAvatar(x.url)
message.channel.send(`${basari} ${message.author}, Başarıyla profil fotoğrafını aşağıdaki görsel olarak yaptım.`, new Discord.MessageAttachment(x.url))
message.react('✅')
})
}else if (!args[0] && message.attachments.size > 1) {
message.channel.send(`${basarisiz} ${message.author}, En fazla 1 tane görsel belirtmelisin!`).then(x => x.delete({timeout: 5000}))
}
  
if (message.attachments.size === 0 && !args[0]) return message.channel.send(`${basarisiz} ${message.author}, Bir görsel linki belirtmelisin.`).then(x => x.delete({timeout: 5000}))

if (Atahan) { 
if (!args[0]) return message.channel.send(`${basarisiz} ${message.author}, Bir link veya kullanıcı belirtmelisin.`).then(x => x.delete({timeout: 5000}))
if (Atahan.id === client.user.id) return message.channel.send(`${basarisiz} ${message.author}, Bu komutu sadece diğer üyeler üzerinde kullanabilirsin.`).then(x => x.delete({timeout: 5000}))
await client.user.setAvatar(Atahan.displayAvatarURL({dynamic: true, size: 1024}))
message.channel.send(`${basari} ${message.author}, Başarıyla ${Atahan} adlı kullanıcının profil fotoğrafını kopyaladım.`)
message.react('✅')
}else if (message.attachments.size === 0 && args[0]) {
await client.user.setAvatar(args[0])
message.channel.send(`${basari} ${message.author}, Başarıyla ${args[0]} linkini profil fotoğrafı olarak koydum.`)
message.react('✅')
}}catch{
  message.channel.send(`${basarisiz} ${message.author}, Avatarını çok hızlı değişiyorsun veya yanlış kullanıcı/link giriyosun!`).then(x => x.delete({timeout: 5000}))
}

}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avçal','ppçal'],
  permLevel: 0
};

exports.help = {
  name: 'ppyap',
  description: '',
  usage: 'avatar [@kullanıcı]'
};