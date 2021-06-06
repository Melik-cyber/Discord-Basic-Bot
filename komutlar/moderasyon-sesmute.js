const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  //melik
  const mb = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setFooter(`melik`)
    .setTimestamp();

  const emb = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setFooter(`melik`)
    .setTimestamp();

  if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send("Bu komutu kullanabilmek için yetkiniz yetersiz.")
    

  let melik = message.mentions.users.first();
  if (!args[0])
    return message.channel.send(
      mb.setDescription(`Bir kişiyi etiketlemelisin.`)
    );
  if (!melik)
    return message.channel.send(
      mb.setDescription(`**${args[0]}**, kişisini sunucuda bulamıyorum.`)
    );
  if (
    message.guild.members.cache.get(melik.id).roles.highest.position >
    message.member.roles.highest.position
  )
    return message.channel.send(
      mb.setDescription(
        `Bu kişinin rolü/rolleri, senin rolün/rollerinden daha yüksek.`
      )
    );
  if (!message.guild.members.cache.get(melik.id).voice.channel)
    return message.channel.send(
      mb.setDescription(`Bu kullanıcı seslide değil.`)
    );
  if (!args[1])
    return message.channel.send(
      mb.setDescription(`Ne kadar süre susturacağımı belirtmelisin.`)
    );
  let süre = args[1];

  let sebep1 = args.join(" ").slice(args[1].length + args[0].length + 1);
  let sebep = sebep1 ? sebep1 : "Bir sebep girilmemiş.";

  message.guild.members
    .get(melik.id)
    .setMute(true)
    .then(() =>
      message.channel.send(
        mb
          .setDescription(`Birisi ses kanalı üzerinden susturuldu!`)
          .addField(`İşlemi yapan:`, message.author, true)
          .addField(`İşlem yapılan:`, melik.tag, true)
          .addField(
            `Süre:`,
            süre
              .replace(/d/, " gün")
              .replace(/s/, " saniye")
              .replace(/m/, " dakika")
              .replace(/h/, " saat"),
            true
          )
          .addField(`Sebep:`, sebep)
      )
    );
  setTimeout(async () => {
    message.guild.members
      .get(melik.id)
      .setMute(false)
      .then(() =>
        message.channel.send(
          emb
            .setDescription(`Susturulma süresi bitti:`)
            .addField(`İşlemi yapan:`, message.author, true)
            .addField(`İşlem yapılan:`, melik.tag, true)
            .addField(
              `Süre:`,
              süre
                .replace(/d/, " gün")
                .replace(/s/, " saniye")
                .replace(/m/, " dakika")
                .replace(/h/, " saat"),
              true
            )
            .addField(`Sebep:`, sebep)
        )
      );
  }, ms(süre));
};
exports.config = {
  name: 'sesmute',
  aliases: []
};
