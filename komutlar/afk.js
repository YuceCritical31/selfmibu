const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
let basarisiz = ayarlar.basarisizemoji
exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return
  
  const sebep = args[0];
  
  if (db.fetch(`afk`)) return message.channel.send(new MessageEmbed().setDescription(`${basarisiz} ${message.author}, Görünüşe göre afk modu zaten kapalı`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  if (!args[0]) {

    await db.set(
      `afk_sebep`,
      "Sebep Girilmemiş"
    );
    await db.set(`afk`)

    const ramo = await db.fetch(
      `afk_sebep`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${basarili} ${message.author}, Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));
  }
  if (args[0]) {
    let sebep = args.join(" ");
    await db.set(`afk_sebep`, sebep);
    await db.set(`afk`)
    
    const ramo = await db.fetch(
      `afk_sebep`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${basarili} ${message.author}, Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));

  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk-a'],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};