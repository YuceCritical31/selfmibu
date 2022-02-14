const { Discord, MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basari = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji;
exports.run = async (bot, message, args) => {
  
if (message.author.id !== ayarlar.sahip)
return message.channel.send(`${basarisiz} ${message.author}, Komutu kullanmak için yetkin bulunmamakta.`).then(x => x.delete({timeout: 5000}));

let sayılar = ["1","2","3","4","5"]
let data = db.fetch(`status`)
let status = args[0]
if(!status) return message.channel.send(`${basarisiz} ${message.author}, Lütfen durumunuzu belirtiniz.\n1 = Çevrimiçi\n2 = Boşta\n3 = Rahatsız Etmeyin\n4 = Görünmez\n5 = Sıfırlamak`)
if(!sayılar.some(word => message.content.includes(word))) return message.channel.send(`${basarisiz} ${message.author}, Lütfen aşağıdaki sayılardan belirtiniz.\n1 = Çevrimiçi\n2 = Boşta\n3 = Rahatsız Etmeyin\n4 = Görünmez\n5 = Sıfırlamak`)
  
if (status === "1"){
db.set(`status`, "online")
status = "Çevrimiçi"
}
  
if (status === "2"){
db.set(`status`, "idle")
status = "Boşta"
}

if (status === "3"){
db.set(`status`, "dnd")
status = "Rahatsız Etmeyin"
}

if (status === "4"){
db.set(`status`, "invisible")
status = "Görünmez"
}
  
if (status === "5"){
db.delete(`status`)
status = "Sıfırlandı"
}

message.channel.send(`${basari} ${message.author}, Durumunuz \`${status}\` olarak ayarlandı.`)
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