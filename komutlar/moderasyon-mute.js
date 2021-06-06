const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (receivedMessage,  msg, args) => {
let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
        if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("Bu komudu kullanabilmek için `Ban` yetkisine sahip olmanız gerek.");
 if (user.hasPermission("BAN_MEMBERS")) return msg.channel.send(`Hata! \`${user.tag}\` isimli kullanıcı bu sunucuda yetkili.`)
var mod = msg.author
var reason = args[1]
 let sebep = args.slice(2).join(' ')

  if (!user) return msg.reply('Kullanıcı Etiketlemedin')
 if (!reason) return msg.reply('Süre Belirtmedin! Seçeneklerin : 1s/1m/1h/1d/1w')
if (!sebep) return msg.reply('Sebep Belirtmedin!')



  let mute = msg.guild.roles.cache.find(r => r.name === "Susturuldu");

  let mutetime = args[1]
if(!mute){
      mute = await msg.guild.roles.create({
        name: "Susturuldu",
        color: "#818386",
        permissions:[]
      })
      msg.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });

    }


  await(user.roles.add(mute.id));
msg.channel.send(``)
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
  msg.channel.send(`${user} Adlı Kişi , ${mutezaman} Susturuldu! Sunucudan Çıkarsa Bile Mutesi Devam edecek!`)
db.set(`muteli_${msg.guild.id + user.id}`, 'muteli')
db.set(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime)

  const muteembed = new Discord.MessageEmbed()
     	.setTitle('Ceza: Mute')
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL())
      .addField('Moderatör', `${mod}`,true)
      .addField('Sebep', `\`${sebep}\``,true)
      .addField('Kullanıcı', `<@${user.id}>`,true)
      .addField('Süre',`\`${mutezaman}\``)
  . setColor("RANDOM")
msg.guild.channels.cache.get(log).send(muteembed)

  setTimeout(function(){
db.delete(`muteli_${msg.guild.id + user.id}`)
    user.roles.remove(mute.id)
 msg.channel.send(`<@${user.id}> Muten açıldı.`)
  }, ms(mutetime));

}
exports.config = {
    name: "chatmute",
    aliases: []
}
