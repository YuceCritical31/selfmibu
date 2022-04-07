const Discord = require('discord.js-selfbot');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async(client, message, args) => {
  
  if (message.author.id === ayarlar.sahip) {

    let prefix = db.fetch(`prefix`) || ayarlar.prefix
    let basarili = ayarlar.basariliemoji;
    let basarisiz = ayarlar.basarisizemoji;



const extacy = `
> **\`${prefix}ses Aç/Kapat -> Ses sitemini Açar/Kapatır\`**
> 
> **\`${prefix}ses-kanal <ses kanal id> -> Aktif oluncak ses kanalını ayarlar\`**
> 
> **\`${prefix}afk <sebep> -> Sizi afk moduna sokar\`**
> 
> **\`${prefix}unafk -> Sizi afk modundan çıkarır\`**
> 
> **\`${prefix}durum <durum> -> Özel durumunuzu değişir\`**
> 
> **\`${prefix}durum-sifirla -> Özel durumunuzu sıfırlar\`**
> 
> **\`${prefix}prefix <prefix> -> Prefixinizi değişir\`**
> 
> **\`${prefix}ping -> Botun pingini gösterir\`**
> 
> **\`${prefix}status <sayı> -> Botun durumunu belirler\`**
> 
> **\`${prefix}restart -> Botu yeniden başlatır\`**
> 
> **\`${prefix}dm-spam <@üye/ID> <sayı> <mesaj> -> Belirtilen kişinin dmsinde belirtilen mesajı belirtilen sayı ile spamlar\`**
> 
> **\`${prefix}spam <sayı> <mesaj> -> Belirtilen mesajı belirtilen sayı ile spamlar\`**
> 
> **\`${prefix}av -> Etiketlediğiniz veya id sini girdiğiniz kişinin avatarını görüntüliyebilirsiniz\`**
> 
> **\`${prefix}ban <@üye/ID> -> Etiketlediğiniz veya id sini girdiğiniz kişiyi banlar (ban yetkiniz varsa)\`**
> 
> **\`${prefix}kick <@üye/ID> -> Etiketlediğiniz veya id sini girdiğiniz kişiyi kickler (kick yetkiniz varsa)\`**
> 
> **\`${prefix}profil <@üye/ID> -> Etiketlediğiniz veya id sini girdiğiniz kişinin hesap bişgilerini gösterir\`**
> 
> **\`${prefix}tag-bul <tag> -> Belirtilen tagı sunucuda taratır ve kaç kişide olduğunu söyler\`**
>  
> **\`${prefix}etiket-bul <tag> -> Belirtilen etiket tagını sunucuda taratır ve kaç kişide olduğunu söyler\`**
> 
> **\`${prefix}bul <tag> <etiket tag> -> Belirtilen tagları sunucuda taratır ve hem tagı ve etiket tagını taşınyanların kaç kişi olduğunu söyler\`**
> 
> **\`${prefix}snipe -> Sunucudaki son silinen mesajı görüntülersiniz\`**
> 
> **\`${prefix}sil <sayı> -> Belirtilen sayıda kendi mesajlarınızı siler\`**
> 
> **\`${prefix}git <@üye/ID> -> Belirtilen kullanıcın ses odasına girer\`**
> 
> **\`${prefix}çek <@üye/ID> -> Belirtilen kullanıcıyı ses odanıza çeker\`**
> 
> **\`${prefix}kes <@üye/ID> -> Belirtilen kullanıcıyı ses bağlantısını keser\`**
> 
> **\`.unuttum -> Prefixi unuttuysanız bu komut ile prefixi görebilirsiniz\`**
`
const ext

message.channel.send(extacy)
message.react('✅')
}};
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