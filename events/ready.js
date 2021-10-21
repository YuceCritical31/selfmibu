const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let durum = ayarlar.durum
  let sebep = db.fetch(`afk_sebep`)
client.user.setPresence({ activity: { name: durum }, status: "dnd" }) 

}