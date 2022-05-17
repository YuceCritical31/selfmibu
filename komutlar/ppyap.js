const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.mentions.users.first();
let userid;
if(isNaN(args[0])){
  if(!Atahan){
    userid = Atahan.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);
  console.log(user)
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
  message.channel.send(`${basarisiz} ${message.author}, Hatalı kullanıcı veya ID girdiniz!`).then(x => x.delete({timeout: 5000}))
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