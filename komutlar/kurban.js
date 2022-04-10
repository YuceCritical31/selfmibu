const Discord = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (client, message, args) => {
  
if (message.author.id === ayarlar.sahip) {

let data
let kufur = await db.fetch(`taklit`);
let kanal2 = client.users.cache.get(args[0])
let kanal = message.mentions.members.first()
if(kanal) {data = kanal.id}
if(kanal2) {data = args[0]}
if(!data) return message.channel.send(`${basarisiz} ${message.author}, Lütfen bir kullanıcı belirtiniz.`).then(x => x.delete({timeout: 5000}));
if(data === client.user.id) return message.channel.send(`${basarisiz} ${message.author}, Kendinizi taklit edemezsiniz!`).then(x => x.delete({timeout: 5000}));
 
message.channel.send(`${basari} ${message.author}, Kurban <@!${data}> olarak ayarlandı.`)

db.set(`kurban`, data)
message.react('✅')
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "kurban",
  description: "",
  usage: ""
};