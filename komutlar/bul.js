const Discord = require("discord.js-selfbot");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json");
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;

exports.run= async(client, message, args) => {
if (message.author.id === ayarlar.sahip) {

let tag = args[0]
let tag1 = args.slice(1).join(" ")
if(!tag) return message.channel.send(`${basarisiz} ${message.author}, Bir tag belirt!`).then(x => x.delete({timeout: 5000}))
let sonuc = message.guild.members.cache.filter(mr => mr.user.username.includes(tag)).size
let sonuc2 = message.guild.members.cache.filter(mr => mr.user.discriminator.includes(tag1)).size

message.channel.send(`${basari} ${message.author}, Belirtilen taga sahip bu sunucuda `+ `**${sonuc}** normal tag`+ ` **${sonuc2}** etiket tagına` +` sahip kişi var!\nToplam ise **${sonuc + sonuc2}** taglı var!`)
message.react('✅')
}}
exports.conf = {
aliases: ["search"]
}

exports.help = {
name: "bul"
};