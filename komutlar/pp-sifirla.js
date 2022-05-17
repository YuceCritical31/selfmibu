const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

message.channel.send(`${basari} ${message.author}, Profil fotoğrafınız silindi.`)  
client.user.setAvatar(null)
message.react('✅')
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp-reset","pp-sıfırla"],
  permLevel: 4
};

exports.help = {
  name: "pp-sil",
  description: "",
  usage: ""
};