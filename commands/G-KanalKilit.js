const Discord = require('discord.js');
const config = require('../config.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Yetkin mi var amip bi sen akıllısın");
let channel = message.channel;
channel.updateOverwrite(config.kilit, { 'SEND_MESSAGES': false }, 'Kilitleyen Kişi: '+message.author.tag);
channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setFooter(config.Footer).setDescription("Kanal kilit komutları şu anda bakımdadır.").setFooter(config.Footer));
};
module.exports.config = {
    name: "kanal-kilit",
    description: "Kanalın Yazma Engeli Koyar.",
    usage: "kanal-kilit",
    enabled: true,
    aliases: ["kanal-kilit","kilit","lock","kilit"],
  };

