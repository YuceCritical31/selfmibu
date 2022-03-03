const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id == ayarlar.sahip) {

let kanal
if(client.channels.cache.get(args[0])) {kanal = args[0]}

message.channel.send(`${basari} ${message.author}, Ses kanalı <#${kanal}> olarak ayarlandı.`)

db.set(`seskanal`, kanal)
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