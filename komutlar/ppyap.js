const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.mentions.users.first() || client.users.cache.get(args[0])

try{
if (Atahan) { 
await client.user.setAvatar(Atahan.displayAvatarURL({dynamic: true, size: 1024}))
message.react('✅')
}else{
await client.user.setAvatar(args[0])
message.react('✅')
}}catch{
  message.channel.send(`${basarisiz} ${message.author}, Avatarını çok hızlı değişiyorsun veya yanlış kullanıcı/link giriyosun!`).then(x => x.delete({timeout: 5000}))
  return;
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