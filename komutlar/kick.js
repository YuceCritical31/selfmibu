const Discord = require('discord.js-selfbot');
const data = require('quick.db')
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

if (message.author.id === ayarlar.sahip) {
//-------------------------------------------------------------------------------\\  
let basarisiz = ayarlar.basarisizemoji
if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${basarisiz} ${message.author}, Kralım bu sunucuda kick yetkiniz yok.`)
  
const banlog = message.guild.channels.cache.find(c => c.id === ayarlar.kicklog)//Ban log kanalı  
  
//-------------------------------------------------------------------------------\\


let tumaylar = {
"01": "Ocak",  
"02": "Şubat", 
"03": "Mart",  
"04": "Nisan",  
"05": "Mayıs", 
"06": "Haziran", 
"07": "Temmuz",
"08": "Ağustos", 
"09": "Eylül", 
"10": "Ekim", 
"11": "Kasım", 
"12": "Aralık", 
}
let aylar = tumaylar;  
  

let basari = ayarlar.basariliemoji
let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let sebep = args.splice(1).join(" ")
if(!kullanici) return message.channel.send(`${basarisiz} ${message.author}, Bir kullanıcı etiketlemelisin.`).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(`${basarisiz} ${message.author}, Etiketlenen kullanıcı atılamaz.`).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(`${basarisiz} ${message.author}, Sunucu sahibini sunucudan atamazsın.`).then(x => x.delete({timeout: 5000}));
kullanici.kick({reason: sebep}).then(x => message.react('✅')).catch();
   
message.channel.send(`${basari} ${message.author}, Tarafından ${kullanici} sunucudan atıldı.`) 
}}

exports.conf = {
    aliases: ['kickle'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'kick'
  };