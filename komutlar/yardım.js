const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async(client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return

    let prefix = db.fetch(`prefix`) || ayarlar.prefix
    let basarili = ayarlar.basariliemoji;
    let basarisiz = ayarlar.basarisizemoji;



const extacy = new Discord.MessageEmbed()
.setTitle(`Atahan UserBot Yardım`)
.setFooter('Atahan Tarafından Yapılmıştır.')
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setDescription(`
> **\`${prefix}ses Aç/Kapat -> Ses sitemini Açar/Kapatır\`**
> **\`${prefix}ses-kanal <#(ses kanal id)> -> Aktif oluncak ses kanalını ayarlar\`**
> **\`${prefix}afk <sebep> -> Sizi afk moduna sokar\`**
> **\`${prefix}unafk -> Sizi afk modundan çıkarır\`**
> **\`${prefix}durum <durum> -> Özel durumunuzu değişir\`**
> **\`${prefix}durum-sifirla -> Özel durumunuzu sıfırlar\`**
> **\`${prefix}prefix <prefix> -> Prefixinizi değişir\`**
> **\`${prefix}ping -> Botun pingini gösterir\`**
> **\`${prefix}status <sayı> -> Botun durumunu belirler\`**
> **\`${prefix}restart -> Botu yeniden başlatır\`**
> **\`.unuttum -> Prefixi unuttuysanız bu komut ile prefixi görebilirsiniz\`**
`)
message.channel.send(extacy)
message.react('✅')
}
exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help','yardim'],
	permLevel : 4
}

exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}