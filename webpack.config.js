const path = require("path");
const fse = require("fs-extra");

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("Copy files", function () {
      fse.copySync("./src/img/", "./build/img/");
      fse.copySync("./src/index.css", "./build/index.css");
    })
  }
}

let config = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader"
      // },
      // {
      //   test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      //   loader: 'url-loader?limit=100000'
      // }
    ]
  },
  externals: {
    react: "react"
  }
};

config.plugins.push(new RunAfterCompile());

module.exports = config;