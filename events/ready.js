const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
  
  client.user.setStatus("dnd");
  var oyun = [
    `deneme`,
    `deneme2`
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1));

    client.user.setActivity(oyun[random], "");
  }, 2 * 3000);
};