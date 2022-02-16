const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args)=> {
if(message.author !== ayarlar.sahip) return
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.mentions.users.first();
let userid;
if(isNaN(args[0])){
  if(!Atahan){
    userid = message.author.id;
  }else{
    userid = Atahan.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);
let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {

let embed = user.displayAvatarURL({dynamic: true, size: 1024})
message.channel.send(embed)
message.react('✅')

} else {

let embed = user.displayAvatarURL({size: 1024})
message.channel.send(embed)
message.react('✅')

}
}catch{
  message.channel.send(`${basarisiz} ${message.author}, Hatalı kullanıcı veya ID girdiniz!`)
  return;
}

}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['av','pp'],
  permLevel: 4
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar [@kullanıcı]'
};