 const db = require('quick.db');
  const { MessageEmbed } = require('discord.js')
  const config = require("../config.json");
  
  exports.run = async (client, message, args) => {
            var Tags = ["Dess", "dess", "DESS", "'", "1745"]
            var isimTags = ["Dess", "dess", "DESS", "'"]
            var toplamüye = message.guild.memberCount
            var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
            var Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
            var famelcim = message.guild.members.cache.filter(s => Tags.some(x => s.user.tag.includes(x))).size;
            var etiket = message.guild.members.cache.filter(s => s.user.tag.includes("1745")).size
            var isim = message.guild.members.cache.filter(s => isimTags.some(a => s.user.tag.includes(a)) && !s.user.tag.includes("1745")).size

  
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setFooter(config.Footer)
                .setTimestamp()
                .setThumbnail(`https://cdn.discordapp.com/attachments/924358628465606707/971510173569024050/indir-unscreen.gif`)
                .setDescription(`
                <a:843822137469960222:970103108472549477>  Ses kanallarında toplam **${Sesli}** üye var.
                <a:843822137469960222:970103108472549477>  Toplam **${famelcim}** kişi tagımıza sahip. 
                <a:843822137469960222:970103108472549477>  (**${etiket}** etiket, **${isim}** isim.)  
                <a:843822137469960222:970103108472549477>  Sunucumuzda toplam **${toplamüye}** üye var.
                <a:843822137469960222:970103108472549477>  Şu an **${online}** çevirimici üye var.
  `)
      message.channel.send(embed)
      message.react(config.onay);
  }
  module.exports.config = {
      name: "say",
      description: "say",
      usage: "say",
      enabled: true,
      aliases: ["say","SAY","Say"],
    };
  
  