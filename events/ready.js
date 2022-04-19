const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let status = db.fetch(`status`) || "dnd"
  let durum = db.fetch(`durum`) || ayarlar.durum
  
  
client.user.setActivity(durum, {type: 'PLAYING'})
}
