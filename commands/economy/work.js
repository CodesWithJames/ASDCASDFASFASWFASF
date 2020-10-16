const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
  name: "work",
  aliases: ["job"],
  category: "economy",
  usage: "work",
  description: "Work A Job To Get Money!",
  run: async (client, message, args) => {

        let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 3600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        
        .setColor(`RANDOM`)
        
        .setTimestamp()
        
        .setFooter("Work Command!")
        
        .setDescription(`<:x:729179985038016644> You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic', 'Police Officer', 'Bot Developer', 'Discord Trust And Safety Admin', 'Memer', 'Theif', 'Robber', 'Medic', 'Firefighter', 'Dish washer']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 500) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`<:white_check_mark:729179100580675615> You worked as a ${replies[result]} and earned ${amount} coins`)
        .setTimestamp()
        .setFooter("Work Command!");
        message.channel.send(embed1)
        
        db.add(`credits_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
    
  }
}