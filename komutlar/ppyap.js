const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.mentions.users.first() || await client.users.fetch(args[0])
    
let avatar = Atahan.displayAvatarURL({dynamic: true, size: 1024})
if(args[0].endsWith([".webp",".png",".gif",".jpg"].some)) { avatar = args[0] }

message.react('✅')
client.user.setAvatar(avatar)


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