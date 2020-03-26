const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require("path");

require("@babel/polyfill");

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  resolve: {
    alias: {
      ROOT: path.resolve(__dirname, "./src")
    },
    extensions: [".json", ".html", ".vue", ".js", ".scss"]
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      { test: /\.pug$/, loader: "pug-plain-loader" },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.(svg|jpg|jpeg|png|gif)(\?.*$|$)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "fonts",
            esModule: false
          }
        }
      }
    ]
  }
};
