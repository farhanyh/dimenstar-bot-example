module.exports = {
  name: "addfield",
  description: "Menambahkan field untuk embed!",
  execute(msg, args, Discord, options) {
    if (args.length >= 2) {
      let field = { name: args[0], value: args[1] };
      options.fields.push(field);

      // objective untuk remove
      // 1. cari object yang mau kamu remove di array (bisa pake namenya)
      // 2. remove objectnya dari array
      // caveat: - kamu harus make sure bahwa semua name di dalam arraynya itu unique, atau
      //         - tambah property unique lain di dalam objectnya (misalnya id dalam bentuk integer)
    }
  },
};
