const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let durum = db.fetch(`durum`) || ayarlar.durum
client.user.setActivity(durum, {type: "STREAMING", url: "https://twitch.com/fayring"}) 

}