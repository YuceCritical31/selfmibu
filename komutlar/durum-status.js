const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let data = db.fetch(`durum.status`)
let status = args[0]
if(!status) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.\n1 = Oynuyor\n2 = Dinliyor\n3 = İzliyor`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())

if (status === "1"){
db.set(`durum.status`, "PLAYING")
status = "Oynuyor"
}
  
if (status === "2"){
db.set(`durum.status`, "LISTENING")
status = "Dinliyor"
}

if (status === "3"){
db.set(`durum.status`, "WATCHING")
status = "İzliyor"
}

message.channel.send(new MessageEmbed().setDescription(`${basari} ${message.author}, Durumunuz \`${status}\` olarak ayarlandı.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x348f36').setTimestamp())
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["durum-status-ayar","durum-status-ayarla"],
  permLevel: 4
};

exports.help = {
  name: "durum-status",
  description: "",
  usage: ""
};