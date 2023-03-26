const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Algoritmos_Atenea_Page_Vue/" : "/",
};
