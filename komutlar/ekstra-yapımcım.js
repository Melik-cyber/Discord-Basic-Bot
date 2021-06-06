const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let dizzy = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/827466037817376778/831826420287668254/images.png`)
.addField("__**Bot Verileri**__", `<a:KalpGif:827470142513610832> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:KalpGif:827470142513610832>   **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:KalpGif:827470142513610832>   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:KalpGif:827470142513610832>  **Bot Sahibi**  <@717341484453593098> \n **melikchankaneki' 🌙 ꪶ#0061** \n\n <a:KalpGif:827470142513610832>  \ **Bot Geliştiricisi**  <@717341484453593098> \n **melikchankaneki' 🌙 ꪶ#0061** \n\n <a:KalpGif:827470142513610832>   **Bot Sahibi**  <@717341484453593098> \n **melikchankaneki' 🌙 ꪶ#0061** \n`)
.addField("__**Sürümler**__", `<a:KalpGif:827470142513610832>   **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:KalpGif:827470142513610832>   **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:KalpGif:827470142513610832>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:KalpGif:827470142513610832>   " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/827466032704651264/837366600234958898/ezgif-4-777145d13eff.gif`)
.setColor("#ffffff")
message.channel.send(dizzy)
}

exports.config = {
name: "botbilgi",
aliases: []
}
