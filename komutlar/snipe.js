const Discord = require('discord.js-selfbot')
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let basarisiz = ayarlar.basarisizemoji;

   exports.run = async(client, message, args) => {
     if (message.author == ayarlar.sahip) {
    const emirhan = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!emirhan) {
    const embeds = `${basarisiz} ${message.author}, Mesaj bulunamadı!`
    message.channel.send(embeds);
    message.react('✅')
          } else {
  let kullanıcı = client.users.cache.get(emirhan);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const silinenk = await data.fetch(`snipe.kanal.${message.guild.id}`)
  const embed = `**${kullanıcı.tag}:** ${silinen}`
  message.channel.send(embed)
  message.react('✅')  
          } 
}}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: ['snipe'],
    permLevel: 0,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 