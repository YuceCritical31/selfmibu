const Discord = require("discord.js-selfbot");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json");
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;

module.exports.run= async(client, message, args) => {
if (message.author.id === ayarlar.sahip) {

const tag = args.slice(0).join(" ")
if(!tag) return message.channel.send(`${basarisiz} ${message.author}, Bir tag belirt!`).then(x => x.delete({timeout: 5000}))
const sonuc = message.guild.members.cache.filter(mr => mr.user.username.includes(tag)).size

message.channel.send(`${basari} ${message.author}, Belirtilen taga sahip bu sunucuda `+ `**${sonuc}**` +` kişi var!`)
message.react('✅')
}}
module.exports.conf = {
aliases: ["bul","tag-bilgi","tag-bul"]
}

module.exports.help = {
name: "tag-info"
};