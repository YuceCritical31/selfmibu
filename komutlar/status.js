const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let data = db.fetch(`status`)
let data2 = db.fetch(`statusdata`)
let status = args[0]
if(!status) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.\n1 = Çevrimiçi\n2 = Boşta\n3 = Rahatsız Etmeyin`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())
if (data === data2) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Durumunuz önceki ile aynı olamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp())

if (status === "1"){
db.set(`status`, "online")
db.set(`statusdata`, "online")
status = "Çevrimiçi"
}
  
if (status === "2"){
db.set(`status`, "idle")
db.set(`statusdata`, "idle")
status = "Boşta"
}

if (status === "3"){
db.set(`status`, "dnd")
db.set(`statusdata`, "dnd")
args[0] = "Rahatsız Etmeyin"
}

  
message.channel.send(new MessageEmbed().setDescription(`${basari} ${message.author}, Durumunuz \`${args[0]}\` olarak ayarlandı.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x348f36').setTimestamp())
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