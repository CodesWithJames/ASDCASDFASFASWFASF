const Discord = require("discord.js")
const db = require("quick.db")


module.exports = {
  name: "balance",
  aliases: ["bal", "bank"],
  category: "economy",
  usage: "bal",
  description: "shows you your balance",
  run: async (client, message, args) => {

    
let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`credits_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;
  
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  
  .setTimestamp()
  .setFooter(`Balance Command!`)
  .setTitle(`Balance Command!`)
  .addFields(
      
      { name: "User", value: `${user}`},
      
      { name: "Wallet", value: `${bal}` },
      
      { name: "Bank", value: `${bank}` }
      
      )
  .setDescription(`**${user}'s Balance**`);
  message.channel.send(moneyEmbed)
  }
}