const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let data = db.fetch(`status`)
let datatr = db.fetch(`status_tr`)
let status = args[0]
if(!status) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())
if (data === status) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Durumunuz önceki ile aynı olamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())

if (status === "1"){
db.set(`status`, "online")
db.set(`status_tr`, "Çevrimiçi")
}
  
  
  
message.channel.send(new MessageEmbed().setDescription(`${basari} ${message.author}, Durumunuz \`${datatr}\` olarak ayarlandı.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x348f36').setTimestamp())

message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["status-ayar","status-ayarla"],
  permLevel: 4
};

exports.help = {
  name: "status",
  description: "",
  usage: ""
};