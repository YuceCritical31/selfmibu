const Discord = require("discord.js-selfbot");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json");
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;

exports.run= async(client, message, args) => {
if (message.author.id === ayarlar.sahip) {

let tag = args.slice(0).join(" ")
if(!tag) return message.channel.send(`${basarisiz} ${message.author}, Bir tag belirt!`).then(x => x.delete({timeout: 5000}))
let sonuc = message.guild.members.cache.filter(mr => mr.user.username.includes(tag)).size
let sonuc2 = message.guild.members.cache.filter(mr => mr.user.discriminator.includes(tag)).size

message.channel.send(`${basari} ${message.author}, Belirtilen taga sahip bu sunucuda `+ `**${sonuc}**` +` kişi var!`)
message.react('✅')
}}
exports.conf = {
aliases: ["tag-bilgi","tag-bul"]
}

exports.help = {
name: "tag-info"
};