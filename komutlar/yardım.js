const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../bot.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.addField(`__Mod Komutları__`,` <a:AyarGif:827470153000026142>    \`${prefix}ban\` \n  <a:AyarGif:827470153000026142> \`${prefix}unban\` \n <a:AyarGif:827470153000026142> \`${prefix}kick\` \n <a:AyarGif:827470153000026142> \`${prefix}sesmute\` \n  <a:AyarGif:827470153000026142>   \`${prefix}chatmute\` \n    <a:AyarGif:827470153000026142> \`${prefix}unmute\` \n <a:AyarGif:827470153000026142>   \`${prefix}jail\` \n   <a:AyarGif:827470153000026142> \`${prefix}jailmodlog\` \n <a:AyarGif:827470153000026142> \`${prefix}roljail\`
  <a:AyarGif:827470153000026142> \`${prefix}jailyetkili\` \n <a:AyarGif:827470153000026142> \`${prefix}unjail\`  ` ,true)
.addField(`__Sunucu Komutları__`,`  <a:YklenmeGif:826398963070271498>    \`${prefix}sunucubilgi\`  `,true)
.setImage(`https://cdn.discordapp.com/attachments/827466032704651264/837366600234958898/ezgif-4-777145d13eff.gif`)
.setThumbnail(client.user.avatarURL)
message.channel.send(eklenti)
 };
exports.config = {
name: "yardım",
 aliases: []
}
