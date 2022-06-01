const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let şekil = db.fetch(`type`) || "PLAYING"
  let status = db.fetch(`status`) || "invisible"
  let süre = db.fetch(`durum_süresi`) || null
  let durum = db.fetch(`durum`) || ayarlar.durum

client.user.setPresence({ activity: { name: "Spotify", type: "LISTENING", state: "Atahan", details: "Ananın Amı", party: { id: "spotify:813799329407041576"}, timestamps: { start: Date.now(), end: 1654113600000 }, assets: {largeImage: "spotify:ab67616d0000b273b1f8da74f225fa1225cdface", largeText: "Atahan"}, syncID: "0BxE4FqsDD1Ot4YuBXwAPp"}, status: status}) 
}
