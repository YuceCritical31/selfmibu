const Discord = require('discord.js-selfbot');
const data = require('quick.db')
const ayarlar = require("../ayarlar.json");
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {


//-------------------------------------------------------------------------------\\  

if (message.member.hasPermission("BAN_MEMBERS")) return
  
const banlog = message.guild.channels.cache.find(c => c.id === ayarlar.banlog)//Ban log kanalı  
  
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
  
if (args[0] && (args[0].includes('bilgi') || args[0].includes('info'))){
if(!args[1] || isNaN(args[1])) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Geçerli bir ban yemiş kullanıcı ID'si belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
return message.guild.fetchBan(args.slice(1).join(' ')).then(({ user, reason }) => message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x330033').setTimestamp().setDescription(`**Banlanan Üye:** ${user.tag} (\`${user.id}\`)\n**Ban Sebebi:** ${reason ? reason : "Belirtilmemiş!"}`))).catch(err => message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp().setDescription("Belirtilen ID numarasına sahip bir ban bulunamadı!")).then(x => x.delete({timeout: 5000})));
}

let basarisiz = ayarlar.basarisizemoji
let basari = ayarlar.basariliemoji
let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let sebep = args.splice(1).join(" ")
if(!kullanici) return message.channel.send(`${basarisiz} ${message.author}, Bir kullanıcı etiketlemelisin.`).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(`${basarisiz} ${message.author}, Etiketlenen kullanıcı yasaklanamaz.`).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(`${basarisiz} ${message.author}, Bir botu sunucudan yasaklayamazsın`).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(`${basarisiz} ${message.author}, Sunucu sahibini sunucudan yasaklayamazsın.`).then(x => x.delete({timeout: 5000}));
kullanici.ban({reason: sebep}).then(x => message.react('✅')).catch();
   
message.channel.send(`${basari} ${message.author}, Tarafından ${kullanici} \`${sebep}\` Sebebiyle Sunucudan Yasaklandı.`) 
}

exports.conf = {
    aliases: ['yasakla'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'ban'
  };