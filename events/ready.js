const db = require("quick.db")

module.exports.run = (client) => {
  console.log("Hi people" )
  let activities = [`birds`], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000);
 
}