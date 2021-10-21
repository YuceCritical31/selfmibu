const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
exports.run = async (client, message, args) => {
  const kisi = db.fetch(`afkid_${message.author.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;

    await db.set(
      `afkSebep_${message.author.id}`,
      "Sebep Girilmemiş"
    );
    await db.set(
      `afkid_${message.author.id}`,
      message.author.id
    );

    const ramo = await db.fetch(
      `afkSebep_${message.author.id}`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${basarili} ${kullanıcı} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    
    const ramo = await db.fetch(
      `afkSebep_${message.author.id}`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${basarili} ${kullanıcı} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));

  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};