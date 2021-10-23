const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return
  if (db.fetch(`afk`) === "Açık") return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Görünüşe göre afk modu zaten açık.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
let sebep = args.slice(0).join(' ');
if (!sebep) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Bir sebep belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
  
message.channel.send(new MessageEmbed().setDescription(`${basarili} ${message.author}, Başarıyla \`${sebep}\` sebebiyle afk oldunuz.`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setTimestamp()).then(x => x.delete({timeout: 5000}));
db.set(`afk`, "Açık")
db.set(`afk_sebep`, sebep)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk-a'],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};