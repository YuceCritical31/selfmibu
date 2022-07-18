const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const moment = require('moment')

exports.run = async (client, message, args)=> {
if(message.author.id === ayarlar.sahip) {
//Atahan Tarafından Yapılmıştır
let basarisiz = ayarlar.basarisizemoji;
let basari = ayarlar.basariliemoji;
let Atahan = message.mentions.users.first() || client.users.cache.get(args[0])
  
if(!Atahan) return message.channel.send('hata')

if(Atahan){
let durum = Atahan.presence.activities[0]
client.user.setPresence({activity: {name: durum.name || null, type: durum.type, url: durum.url, details: durum.details, state: durum.state, applicationID: durum.applicationID, timestamps: {start: (moment(durum.timestamps.start).unix() * 1000), end: (moment(durum.timestamps.end).unix() * 1000)}, party: durum.party, assets: {largeText: durum.assets.largeText, largeImage: durum.assets.largeImage, smallText: durum.assets.smallText, smallImage: durum.assets.smallImage}, emoji: durum.emoji}})
}}}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'durum-çal',
  description: '',
  usage: 'avatar [@kullanıcı]'
};