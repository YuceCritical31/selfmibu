const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let durum = ayarlar.durum
client.user.setPresence({ activity: { name: durum }, status: "dnd" }) 

}