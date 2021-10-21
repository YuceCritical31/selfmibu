const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  client.user.setStatus("idle");
  
  let durum = ayarlar.durum
client.user.setActivity(durum, {type: 'PLAYING'}); 

}