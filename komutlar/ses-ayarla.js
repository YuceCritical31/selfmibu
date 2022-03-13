const Discord = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let data
let kanal2 = client.channels.cache.get(args[0])
let kanal = message.mentions.channels.first()
if(kanal) {data = kanal.id}
if(kanal2) {data = args[0]}
if(!data) return message.channel.send(`${basarisiz} ${message.author}, Lütfen bir kanal belirtiniz.`).then(x => x.delete({timeout: 5000}));

message.channel.send(`${basari} ${message.author}, Ses kanalı <#${data}> olarak ayarlandı.`)

db.set(`seskanal`, data)
message.react('✅')
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ses-kanali","voice-channel","ses-ayar","ses-ayarla"],
  permLevel: 4
};

exports.help = {
  name: "ses-kanal",
  description: "",
  usage: ""
};