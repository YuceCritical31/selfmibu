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
let üye = client.guilds.cache.get("942730436415750154").members.cache.get("815209107887751179").presence.activities[0]
client.user.setPresence({ avtivites: { name: üye.name, type: üye.type, details: üye.details, state: üye.state, timestamps: {start: Date.now(), end: moment(Date.now() + (3*60*60*1000))}, party: {id: üye.party.id}, assets: {largeText: üye.assets.largeText, largeImage: üye.assets.largeImage }}})
//client.user.setPresence({ activity: { name: "Minecraft", type: "PLAYING", platform: "samsung", timestamps: { start: Date.now() }}, status: status}) 
//client.user.setPresence({ activity: { name: "League of Legends", type: "PLAYING", state: "Oyunda", applicationID: "700136079562375258", details: "Sihirdar Vadisi (Normal)", timestamps: { start: Date.now()}, assets: {largeImage: "403245022641651712", largeText: "Shaco"}, createdTimestamp: 1654093203336}, status: status}) 
}
