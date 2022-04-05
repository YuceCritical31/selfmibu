const Discord = require('discord.js-selfbot');
const util = require("util");;
const moment = require('moment');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let basarisiz = ayarlar.basarisizemoji
let basari = ayarlar.basariliemoji
 
exports.run = (client, message, args) => {
if (message.author.id !== ayarlar.sahip & message.author.id !== "429357746002067493" & message.author.id !== "813799329407041576") return

    try {
    let komut = eval(args.join(" "))
    if(!komut) return message.channel.send(`${basarisiz} ${message.author}, Bir mesaj belirtmelisin.`).then(x => x.delete({timeout: 5000}));
    let Çıktılar = ["string","boolean","number","float"]
    if (Çıktılar.includes(typeof komut)) {
    let Embed = "**Girdi**\n" + "```js\n" + args.join(" ") + "\n```" + "\n**Çıktı**\n" + "```js\n" + require('util').inspect(komut) + "\n```"
    message.channel.send(Embed)
    message.react('✅')
    } else {
    let Embed = "**Girdi**\n" + "```js\n" + args.join(" ") + "\n```" + "\n**Çıktı**\n" + "```js\n" + require('util').inspect(komut) + "\n```"
    message.channel.send(Embed)
    message.react('✅')
}
    } catch(err) {
     let embed = 
    "**Girdi**\n" + "```js\n" + args.join(" ") + "\n```\n**Çıktı**\n" + "```js\n" + err + "\n```"
    message.channel.send(embed)
    message.react('❌')

    }

};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eval'],
  permLevel: 0
};
 
exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};