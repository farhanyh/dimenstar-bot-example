module.exports = {
  name: "embed",
  description: "Embed!",
  execute(msg, args, Discord, options) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#304281")
      .setTitle("Test")
      .setDescription(options.desc)
      .addFields(...options.fields);
    msg.channel.send(newEmbed);
  },
};
