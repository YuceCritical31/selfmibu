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
  
if(args[0].endsWith([".webp"].some)) { avatar = args[0] }

try{
let user = await client.users.fetch(userid);
let avatar = user.displayAvatarURL({dynamic: true, size: 1024})

let embed = `${basari} ${message.author}, Profiliniz başarıyla alttaki görsel olarak değiştirildi.\n${avatar}`
message.channel.send(embed)
message.react('✅')
client.user.setAvatar(avatar)

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