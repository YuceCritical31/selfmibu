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
  
  
  let durum     
  let durum2
  let üye
  let embed2
  let üye2 = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let üye1 = message.mentions.users.first() || client.users.cache.get(args[0])
  
  if(üye1) {üye = üye1; embed2 = `\`Profil\`\n**Ad:** ${üye.tag}\n**ID: ** ${üye.id}\n**Durum: ** ${durum}\n**Oluşturulduğu Tarih: ** ${(`${moment(üye.createdAt).format('DD')} ${aylar[moment(üye.createdAt).format('MM')]} ${moment(üye.createdAt).format('YYYY HH:mm:ss')}`)}\n**Bot mu?** ${üye.bot ? basari : basarisiz}`}
  if(üye2) {üye = üye2; embed2 = `\`Profil\`\n**Ad:** ${üye.user.tag}\n**ID: ** ${üye.id}\n**Durum: ** ${durum}\n**Oluşturulduğu Tarih: ** ${(`${moment(üye.createdAt).format('DD')} ${aylar[moment(üye.createdAt).format('MM')]} ${moment(üye.createdAt).format('YYYY HH:mm:ss')}`)}\n**Bot mu?** ${üye.user.bot ? basari : basarisiz}`}
    
  if (üye) {
  if(üye.presence.status) {
  if(üye.presence.status === "dnd") {durum = "Rahatsız Etmeyin"}
  if(üye.presence.status === "online") {durum = "Çevrimiçi"}
  if(üye.presence.status === "offline") {durum = "Çevrimdışı"}
  if(üye.presence.status === "invisible") {durum = "Görünmez"}
  if(üye.presence.status === "idle") {durum = "Boşta"}
  } else {durum = "belirlenemedi"}

    const embed = embed2
message.channel.send(embed)
message.react('✅')
  } else {
    
  if(message.author.presence.status) {
  if(message.author.presence.status === "dnd") {durum2 = "Rahatsız Etmeyin"}
  if(message.author.presence.status === "online") {durum2 = "Çevrimiçi"}
  if(message.author.presence.status === "offline") {durum2 = "Çevrimdışı"}
  if(message.author.presence.status === "invisible") {durum2 = "Görünmez"}
  if(message.author.presence.status === "idle") {durum2 = "Boşta"}
  }

const embed = (`\`Profil\`\n**Ad:** ${message.author.tag}\n**ID: ** ${message.author.id}\n**Durum: ** ${durum2}\n**Oluşturulduğu Tarih: ** ${(`${moment(message.author.createdAt).format('DD')} ${aylar[moment(message.author.createdAt).format('MM')]} ${moment(message.author.createdAt).format('YYYY HH:mm:ss')}`)}\n**Bot mu?** ${message.author.bot ? basari : basarisiz}`)

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