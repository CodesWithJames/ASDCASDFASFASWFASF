const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");


module.exports = {
  name: "deposit",
  aliases: ["dep"],
  category: "economy",
  usage: "deposit (Credits)",
  description: "Deposit Credits!",
  run: async (client, message, args) => {

     let user = message.author;

  let member = db.fetch(`credits_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let credits = await db.fetch(`credits_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    .setDescription("<:x:729179985038016644> You don't have any credits to deposit")

    if(credits === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, credits)
    db.subtract(`credits_${message.guild.id}_${user.id}`, credits)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:white_check_mark:729179100580675615> You have deposited all your coins into your bank`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:729179985038016644> Specify an amount to deposit`);
  
  if (!args[0]) if (isNaN(amount)) {
		return message.reply('that doesn\'t seem to be a valid number.');
	{ {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }}
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:729179985038016644>> You can't deposit negative credits`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:729179985038016644> You don't have that much credits`);

  if (member < args[0]) if (isNaN(amount)) {
		return message.reply('that doesn\'t seem to be a valid number.');
	{ {
      return message.channel.send(embed4)
  }}

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:white_check_mark:729179100580675615> You have deposited ${args[0]} coins into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`credits_${message.guild.id}_${user.id}`, args[0])
  }
  }
  }
}
}