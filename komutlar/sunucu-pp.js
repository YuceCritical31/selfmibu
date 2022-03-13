const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.guild;
let userid;
if(isNaN(args[0])){
  if(!Atahan){
    userid = Atahan.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.guilds.fetch(userid);
let avatar = user.iconURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {

let embed = user.iconURL({dynamic: true, size: 1024})
message.channel.send(embed)
message.react('✅')

} else {

let embed = user.iconURL({size: 1024})
message.channel.send(embed)
message.react('✅')

}
}catch{
  message.channel.send(`${basarisiz} ${message.author}, Hatalı kullanıcı veya ID girdiniz!`)
  return;
}

}}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-av','sunucu-pp'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-avatar',
  description: '',
  usage: 'avatar [@kullanıcı]'
};