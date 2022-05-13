const { MessageEmbed } = require('discord.js')
const config = require('../config.json');

exports.run = (client, message, args) => {
if(!message.member.hasPermission('MESSAGE_SEND')) return message.channel.send("Yetkin Yok!");

const number = args[0];
if (!number) return message.channel.error(message, "Bir sayı girmelisin!");
if (isNaN(number)) return message.channel.error(message, "Geçerli bir sayı girmelisin!");
if (number > 1000) return message.channel.error(message, "Sayı en fazla 100 olmalıdır!");

const embed = new MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
.setFooter(config.Footer)

message.channel.setRateLimitPerUser(args[0]);
message.channel.send(embed.setDescription(`Kanal slowmode'u **${number} saniye** olarak ayarlandı!`));
},

module.exports.config = {
    name: "cooldown",
    description: "Kanalın Yazma Engelini Kaldırır",
    usage: "slowmode",
    enabled: true,
    aliases: ["slowmode","sm","slow"],
  };

