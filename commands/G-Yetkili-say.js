const moment = require("moment");
const config = require("../config.json");
moment.locale("tr");

module.exports.run = async (client, message, args, embed) => {
    if(message.member.hasPermission('MANAGE_CHANNELS')) {
        let qqq = args[0];
        if(!qqq) return message.channel.send((`Bir veri belirtiniz.`)).catch(() => { })
    
        if(qqq == "say"){
        let sesdedeğil = message.guild.members.cache.filter(x => x.roles.cache.has(config.Yetkili)).filter(y => !y.voice.channel&& y.presence.status!="offline")
    message.channel.send(`
Seste Olmayan Yetkililer:
${sesdedeğil.map(s => `${s}`).join(', ')}`)
      }
    
    if(qqq == "dm"){
      let kullanıcı = message.guild.members.cache.filter(s => s.roles.cache.has(config.Yetkili)).filter(s => !s.voice.channel).size
    for(var i = 0;i < kullanıcı;i++){
      let qqq = message.guild.members.cache.filter(s => s.roles.cache.has(config.Yetkili)).filter(s => !s.voice.channel).map(a => a)[i]
    try {
      await userDM.send("Sese girsene güzel qardesm")
    } catch {
      await message.channel.send(`<@${a.user.id}> adlı kullanıcının dm kutusu kapalı. Müsaitsen public odalara değilsen alone odalarına geçiş yapabilirsin`)
    }
    }
      }
    
    } else 
     return message.channel.send((`Yetkin mi var amip bi sen akıllısın`))
}

module.exports.config = {
    name: "yetkili say",
    description: "yeysay",
    usage: "yysay",
    enabled: true,
    aliases: ["yyysay"],
  };
  