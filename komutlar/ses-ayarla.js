const Discord = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let data
let kufur = await db.fetch(`ses`);
let kanal2 = client.channels.cache.get(args[0])
let kanal = message.mentions.channels.first()
if(kanal) {data = kanal.id}
if(kanal2) {data = args[0]}
if(client.channels.cache.get(data).type !== "voice") return message.channel.send(`${basarisiz} ${message.author}, Girdiğiniz <#${data}> kanalı bir ses kanalı değil.`).then(x => x.delete({timeout: 5000}));
if(!data) return message.channel.send(`${basarisiz} ${message.author}, Lütfen bir kanal belirtiniz.`).then(x => x.delete({timeout: 5000}));

if (kufur) {
message.channel.send(`${basari} ${message.author}, Ses kanalı <#${data}> olarak ayarlanıyor biraz bekleyin...`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
}
  
if (!kufur) {
message.channel.send(`${basari} ${message.author}, Ses kanalı <#${data}> olarak ayarlandı.`)
}

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