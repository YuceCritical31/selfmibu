const express = require('express');
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const ms = require('ms');
const { Client, Util, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;  
    }
  }   
}  
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => { 
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});
client.login(process.env.token)

client.on('message', async (msg, member, guild) => {
  
 {
   
if (msg.content.toLowerCase() === '.alive'){
if (msg.author.id !== ayarlar.sahip) return

msg.channel.send(new Discord.MessageEmbed().setDescription(`Dis siri Çalışıyor Emrindeyim Sahip 🌟`));
}
  
}
});

client.on("ready", async => { 
let kanal = client.channels.cache.get(process.env.sesid)

kanal.join().then(e => {
kanal.guild.me.voice.setSelfMute(true)
kanal.guild.me.voice.setSelfDeaf(true)
}).catch(err => { console.log(err) })
})
