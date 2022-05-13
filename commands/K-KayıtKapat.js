const { MessageEmbed } = require('discord.js');
const config = require("../config.json")
exports.run = async(client, message, args) => {

let channel = client.channels.cache.get(config.HoşgeldinKanalID)

let rol = message.guild.roles.cache.find(a => a.name === config.unregisterRoles); 
channel.updateOverwrite(rol, { 'CONNECT': false }, 'Kilitleyen '+message.author.tag);

message.channel.send(new MessageEmbed() .setDescription("Bu Komut /Famelcim tarafından devredışı bırakılmıştır.")).then(orci => orci.delete({ timeout: 5000 }))
message.react(config.onay)}

module.exports.config = {
    name: "kayıtkapat",
    description: "Belirtilen üyeyi kız olarak kaydeder.",
    usage: "kayıtkapat",
    enabled: true,
    aliases: ["kayıtkapat"],
  };