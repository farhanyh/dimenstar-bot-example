module.exports = {
  name: "setdesc",
  description: "Set description for embed!",
  execute(msg, args, Discord, options) {
    let desc = args.join(" ");
    options.desc = desc;
  },
};
