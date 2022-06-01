const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let şekil = db.fetch(`type`) || "PLAYING"
  let status = db.fetch(`status`) || "invisible"
  let süre = db.fetch(`durum_süresi`) || null
  let durum = db.fetch(`durum`) || ayarlar.durum
  
client.user.setPresence({ activity: { name: "Custom Status", type: "CUSTOM_STATUS", state: "deneme"}, status: status})
}
