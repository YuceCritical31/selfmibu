const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
exports.run = async (client , message, args) => {

  if (message.author.id === ayarlar.sahip) {
    
  let basari = ayarlar.basariliemoji;
  let basarisiz = ayarlar.basarisizemoji;  
  let kullanıcı = message.mentions.members.first() || client.users.cache.get(args[0])
    
    let banlılar = await message.guild.fetchBans(true)
    
    let banlımember = banlılar.find(m => `${m.user.username}#${m.user.discriminator}` === kullanıcı || m.user.id === kullanıcı)

    if(!banlımember) return message.channel.send(`${basarisiz} ${message.author}, Lütfen banı açılcak bir kullanıcı İD belirtin.`).then(x => x.delete({timeout: 5000}));
  
    try{
      
    message.channel.send(`${basari} ${message.author}, Başarıyla **${banlımember.user}** kullanıcısının banını kaldırdım.`)
    message.guild.members.unban(banlımember.user)
    message.react('✅');
   
    }catch(err){   
      console.log(err.message)
    
    }
   
}};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unban'],
  permLevel: 4
};

exports.help = {
  name: 'unban',
  description: 'kullanıcı yasağını kaldırır.',
  usage: 'unban'
}; 