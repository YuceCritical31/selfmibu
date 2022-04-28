const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let şekil = db.fetch(`type`) || "PLAYING"
  let status = db.fetch(`status`) || "invisible"
  let durum = db.fetch(`durum`) || ayarlar.durum
  
client.user.setPresence({ activity: { name: durum, type: şekil }, status: status})
}
