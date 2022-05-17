const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.mentions.users.first() || client.users.cache.get(args[0])
let link = [".webp",".png",".gif",".jpg",".jpeg"]

if (!args[0] && !Atahan) return message.channel.send(`${basarisiz} ${message.author}, Bir kullanıcı veya bir link belirtmelisin.`).then(x => x.delete({timeout: 5000}))
if (Atahan) { 
await client.user.setAvatar(Atahan.displayAvatarURL({dynamic: true, size: 1024}))
message.react('✅')
}
  
if (args[0].endsWith(link.some)) {
if (Atahan) return
//if (!args[0].endsWith(link.some)) return
await client.user.setAvatar(args[0])//.then(x => console.log(x))
message.react('✅')
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