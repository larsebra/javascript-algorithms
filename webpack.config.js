module.exports = {
  context: __dirname,

  entry: "./index.js",

  output: {
    filename: "lib.js",
    path: __dirname + "/lib",
    library: "algdat",
    libraryTarget: "umd"
  },

  resolve:{
    extensions:[".js",".json"]
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
