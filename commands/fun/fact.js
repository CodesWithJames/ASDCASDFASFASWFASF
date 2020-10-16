const discord = require("discord.js");
const got = require("got"); //You Have To Install got package.

module.exports = {
    name: "fact",
    aliases: [],
    category: "Fun",
    usage: "fact",
    description: "Returns random amazing fact/image.",
    run: async (client, message, args) => {

  got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var amazeme = content[0].data.children[0].data.url;
        let wow = new discord.MessageEmbed()
        .setDescription(`**` + title + `**`)
        .setImage(amazeme)
        .setFooter(`Credits to r/interestingasfuck`)
        .setColor("RANDOM")
        message.channel.send(wow)
    }).catch(console.error);

    }
};