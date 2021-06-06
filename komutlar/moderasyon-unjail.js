const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../bot.json');
const prefix = ayarlar.prefix;
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
let botisim = message.guild.members.cache.get(client.user.id).displayName
let data = await db.fetch(`jailrol_${message.guild.id}`)
if(!data)  return message.channel.send(`Jail rolünü bulamadım.`)
let data2 = await db.fetch(`jailyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(`Jail yetkilisi rolünü bulamadım.`)
let data3 = await db.fetch(`jailkanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`Jail log kanalı ayarlı değil.`)
let rol = message.guild.roles.cache.get(data)
if(!rol) return message.channel.send(`Jail rolü bulunamadı.`)
let yetkili = message.guild.roles.cache.get(data2)
if(!yetkili) return message.channel.send(`Jail yetkilisi rolü bulunamadı.`)
  if (!message.member.roles.cache.has(yetkili.id)) return message.channel.send(`**${prefix}jail** isimli komutu kullanabilmek için ${yetkili} rolüne sahip olman gerekiyor.`)
  let kişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!args[0]) return message.channel.send("Bir kişiyi etiketle veya :id: yaz");
  if(!kişi) return message.channel.send(`${args[0]} diye bi kişi bulamadım sunucuda. :C`)
  kişi.roles.remove(rol.id);
   db.delete(`${message.guild.id}.jail.${kişi.id}`)
  message.channel.send(`<@!${kişi.id}> adlı kişi başarıyla hapishaneden çıkarıldı`)
}
exports.config = {
    name: "unjail",
    aliases: []
}
