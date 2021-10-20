const Discord = require('discord.js-selfbot');
const db = require('quick.db');
const { MessageEmbed } = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let yetkili = ayarlar.logger;

exports.run = async(client, message, args) => {
  
  
if (message.author.id !== ayarlar.sahip) {

let kullanıcı = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
if (!kullanıcı) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Bir kullanıcı Etiketle veya İD gir.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
let extacy = args.slice(1).join(" ")
if(!extacy) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Bir mesaj belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
message.delete();
kullanıcı.send(new MessageEmbed().setDescription(extacy).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#3498db').setFooter(`Baska Sorunuz Varsa Buraya Yazın.`, message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })).setTimestamp())
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm-at','dm'],
  permLevel: 0,
};

exports.help = {
  name: 'dmat'
};