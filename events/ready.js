const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  let durum = db.fetch(`durum`) || ayarlar.durum
client.user.setPresence(durum, type: "STREAMING", url: "https://discord.gg/rP74PaPKVX"}, status: "dnd"  }) 

}