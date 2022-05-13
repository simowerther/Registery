const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
if(!message.member.hasPermission('MESSAGE_SEND')) return message.channel.send("Yetkin mi var amip bi sen akıllısın");

let channel =  message.channel;


let rol = message.guild.roles.cache.find(a => a.name === config.kilit); 
channel.updateOverwrite(message.guild.roles.everyone, { 'SEND_MESSAGES': null }, 'Kilidi Açan '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('#2F3136')
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
.setFooter(config.Footer)
.setTimestamp()
.setDescription("Kanal kilit komutları şu anda bakımdadır."));

};

module.exports.config = {
    name: "unlock",
    description: "Kanalın Yazma Engelini Kaldırır",
    usage: "kilit-ac",
    enabled: true,
    aliases: ["unlock","kanal-kilit ac","kilit ac"],
  };

