module.exports = {
  context: __dirname,

  entry: "./index.js",

  output: {
    filename: "lib.js",
    path: __dirname + "/dist",
  },

  resolve:{
    extensions:[".js",",json"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }

};
