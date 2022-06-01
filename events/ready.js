const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let şekil = db.fetch(`type`) || "PLAYING"
  let status = db.fetch(`status`) || "invisible"
  let süre = db.fetch(`durum_süresi`) || null
  let durum = db.fetch(`durum`) || ayarlar.durum
  
client.user.setPresence({ activity: { name: "Spotify", type: "LISTENING", state: null, assets: {largeImage: client.user.avatarURL(), largeText: "deneme"}, syncID: "58ge6dfP91o9oXMzq3XkIS?si=t0YQrajxRNm1e-uyoFo8BQ"}, status: status})
}
