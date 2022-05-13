const Config = require('../config.json');
const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
let famelcimmbed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(Config.Footer, message.guild.iconURL({dynamic: true}))
.setColor(Config.embedColor)


let famelcimRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if (!famelcimRole) return message.channel.send(famelcimmbed.setDescription(`${Config.false} Geçerli bir rol belirtmeli/Rol ID'si girmelisin.`))

  
let satArray = new Array();
let famelcimcimÜyeler = famelcimRole.members.forEach(famelcimcim => {satArray.push(`<@!${famelcimcim.id}> ( \`${famelcimcim.id}\` )`);})


message.channel.send(famelcimmbed.setDescription(`
${famelcimRole} (\`${famelcimRole.id}\`) adlı role ait bilgiler aşağıda verilmiştir.

${Config.Emoji} **Rol Rengi:** \`${famelcimRole.hexColor}\`
${Config.Emoji} **Rol ID'si:** \`${famelcimRole.id}\` 
${Config.Emoji} **Roldeki Kişi Sayısı**: \`${famelcimRole.members.size}\`


**Roldeki kişiler:**

${famelcimRole.members.size <= 15 ? satArray.join("\n") : `Bulamadım. ( **${famelcimRole.members.size}** kişi var! )`}
`))
  
};

module.exports.config = {
    name: "rolbilgi",
    description: "Rolün infolarını atar",
    usage: "rolbilgi",
    guildOnly: false,
    enabled: true,
    aliases: ["rb", "rolinfo","rol-bilgi"],
  };
