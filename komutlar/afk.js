const { MessageEmbed } = require("discord.js-selfbot");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let basarili = ayarlar.basariliemoji;
exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return
  
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;

    await db.set(
      `afk_sebep`,
      "Sebep Girilmemiş"
    );
    await db.set(`afk`)

    const ramo = await db.fetch(
      `afk_sebep`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${basarili} ${kullanıcı} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    await db.set(`afk_sebep`, sebep);
    await db.set(`afk`)
    
    const ramo = await db.fetch(
      `afk_sebep`
    );

   message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${basarili} ${kullanıcı} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));

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