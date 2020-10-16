const Discord = require("discord.js");

module.exports = {
  name: "reverse",
  description: "reverse your text",
  category: "fun",
  usage: "<text>",
  async run(client, msg, args) {
    let text = args.slice(0).join(" ");
    var msg_array = text.split(" ");

    var msg_string = text.split("");

    var reverse_string = "";
    var word;
    var split_word;
    for (var i = msg_string.length - 1; i >= 0; i -= 1) {
      reverse_string += msg_string[i];
    }
    msg.channel.send(reverse_string);

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
};

