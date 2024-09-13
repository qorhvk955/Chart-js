const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // 이 부분을 설정
      },
    },
  },
});
