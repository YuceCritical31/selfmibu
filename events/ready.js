const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const moment = require('moment')

module.exports = client => {
  
  let şekil = db.fetch(`type`) || "PLAYING"
  let status = db.fetch(`status`) || "invisible"
  let süre = db.fetch(`durum_süresi`) || null
  let durum = db.fetch(`durum`) || ayarlar.durum

    var oyun = [
    `deneme`,
    `#kulakgözaajyok`
]

//setInterval(() => {
  //  var random = Math.floor(Math.random() * (oyun.length - 0 + 1));

//client.user.setPresence({ activity: { name: "Custom Status", type: "CUSTOM_STATUS", state: oyun[random]}, status: status}) 
//}, 5000)
client.user.setPresence({ activity: { name: durum, type: şekil, timestamps: { start: süre }}, status: status}) 
//client.user.setPresence({ activity: { name: "League of Legends", type: "PLAYING", state: "Oyunda", applicationID: "700136079562375258", details: "Sihirdar Vadisi (Normal)", timestamps: { start: Date.now()}, assets: {largeImage: "403245022641651712", largeText: "Shaco"}, createdTimestamp: 1654093203336}, status: status}) 
}
