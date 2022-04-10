const Discord = require('discord.js-selfbot');
const db = require('quick.db')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar.json')


exports.run = function (client, message, args) {
if (message.author.id === ayarlar.sahip) {
 
  let basari = ayarlar.basariliemoji
  let basarisiz = ayarlar.basarisizemoji
  
  var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    moment.locale("tr")
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
  
  
  var Durum = message.member.presence.status;
        
        
  var üye = message.mentions.users.first() || client.users.cache.get(args[0])
  if (üye) {
    const embed = (`\`Profil\`\n**Ad:** ${üye.tag}\n**ID: ** ${üye.id}\n**Oluşturulduğu Tarih: ** ${(`${moment(üye.createdAt).format('DD')} ${aylar[moment(üye.createdAt).format('MM')]} ${moment(üye.createdAt).format('YYYY HH:mm:ss')}`)}\n**Bot mu?** ${üye.bot ? basari : basarisiz}`)

message.channel.send(embed)
message.react('✅')
  } else {
const embed = (`\`Profil\`\n**Ad:** ${message.author.tag}\n**ID: ** ${message.author.id}\n**Oluşturulduğu Tarih: ** ${(`${moment(message.author.createdAt).format('DD')} ${aylar[moment(message.author.createdAt).format('MM')]} ${moment(message.author.createdAt).format('YYYY HH:mm:ss')}`)}\n**Bot mu?** ${message.author.bot ? basari : basarisiz}`)

message.channel.send(embed)
message.react('✅')
  
  }
  
}}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle '
};