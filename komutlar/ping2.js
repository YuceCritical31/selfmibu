const Discord = require("discord.js-selfbot");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  
if(message.author.id !== "813799329407041576") return
  
const exampleEmbed = new Discord.MessageEmbed()
  .setFooter(`Extacy Community Tarafından Yapılmıştır`)
  .addField(`Pingim` ,`${client.ws.ping}ms`)
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping',
  usage: 'ping'
};