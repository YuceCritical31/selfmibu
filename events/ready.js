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
//client.user.setPresence({ activity: {name: "Spotify", type: "LISTENING", details: "Another Love", state: "Tom Odell", timestamps: { start: Date.now(), end: Date.now() + ((4 * 60 * 1000) + (4 * 1000))}, party: {id:`spotify:${client.user.id}`}, assets: {largeText: "Long Way Down (Expanded Edition)", largeImage: "spotify:ab67616d0000b2739adb17697c5a5bb02b5cebb7"}, syncID: "5E4jBLx4P0UBji68bBThSw"}, status: status})
//client.user.setPresence({ activity: { name: durum, type: şekil, timestamps: { start: süre }}, status: status}) 
//client.user.setPresence({ activity: { name: "League of Legends", type: "PLAYING", state: "Oyunda", applicationID: "700136079562375258", details: "Sihirdar Vadisi (Normal)", timestamps: { start: Date.now()}, assets: {largeImage: "403245022641651712", largeText: "Shaco"}, createdTimestamp: 1654093203336}, status: status}) 
}
