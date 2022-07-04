const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  //   baseUrl: "./",
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:80",
      },
    },
    // port: 3000,
  },
};
