var plugins = require("./plugins");

//typeScript
const tsloader = {
  test: /\.tsx?$/,
  use: [
    { loader: "babel-loader" },
    {
      loader: "ts-loader",
      options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: true
      }
    }
  ],
  exclude: /node_modules/
};

// sass loader
const sassDev = {
  test: /\.scss$/,
  use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
};

// produciton sass loader separates all css files into a separate file, not inlined with js
const sassProd = {
  test: /\.scss$/,
  use: [
    plugins.MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader"
  ]
};

// assets loaders
const fileLoader = {
  test: /\.(png|jpg|jpeg|gif|svg)$/,
  use: "file-loader?name=./assets/images/[name].[ext]"
};

const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ["file-loader?name=./assets/fonts/[name].[ext]"]
};

// get loaders function
exports.getRules = isProduction => {
  let loaders = [tsloader, fileLoader, fontLoader];

  if (isProduction) {
    loaders.push(sassProd);
  } else {
    loaders.push(sassDev);
  }

  return loaders;
};
