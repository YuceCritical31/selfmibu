const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let şekil = db.fetch(`type`) || "PLAYING"
  let status = db.fetch(`status`) || "dnd"
  let durum = db.fetch(`durum`) || ayarlar.durum
  
client.user.setStatus(status)
client.user.setActivity(durum, {type: şekil})
}
