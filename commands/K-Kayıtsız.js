const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/Teyitci.js");
const kayitlar = require("../models/Kayıtlar.js");
const config = require("../config.json")
module.exports.run = async (client, message, args) => {
  
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  if (!member) return message.channel.send(embed.setDescription("Geçerli bir \`@famel/ID\` belirtmelisin")).then(x => x.delete({ timeout: 5500 }));
  if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed
    .setDescription(`${member} Bu işlemi gerçekleştiremiyorum (üst/aynı) yetkidesiniz`)).then(x => x.delete({ timeout: 5500 }));
  
    message.react(client.config.onay);
      if (client.config.unregisterRoles.some(r => member.roles.cache.has(r))) {
    await teyitci.findByIdAndUpdate(message.author.id, { $inc: { teyitler: 1 } }, { upsert: true });
    await kayitlar.findByIdAndUpdate(member.id, { $push: { kayitlar: [{ isim: member.displayName, roller: client.config.girlRoles, tarih: Date.now() }] } }, { upsert: true });
  };
  await member.roles.set(member.roles.cache.map(r => r.id).filter(r => !client.config.unregisterRoles.includes(r) && !client.config.unregisterRoles.includes(r)).concat(client.config.unregisterRoles)).catch(err => { return undefined; });
  await member.roles.add(client.config.unregisterRoles).catch(err => { return undefined; });
  await member.roles.remove(client.config.boyRoles).catch(err => { return undefined; });
  await member.roles.remove(client.config.girlRoles).catch(err => { return undefined; });


  let kanal = member.guild.channels.cache.find(r => r.id === config.chatKanal);
  kanal.send(`${member} Kayıtsıza Atıldı!`).then(x => x.delete({ timeout: 15000 })); 
  let log = member.guild.channels.cache.find(r => r.id === config.reglog);
  log.send(`${member} - (\`${member.id}\`) kayıtsıza atıldı! İşlemi Yapan Yetkili: \`${message.author.tag}\``)
 
};

module.exports.config = {
  name: "kayıtsız",
  description: "Belirtilen üyeyi kayıtsıza atar.",
  usage: "kayıtsız <@üye> [isim yaş]",
  enabled: true,
  aliases: ["kayıtsız", "unreg", "unregister", "woman","kız","Kız","Kadın","K"],
};