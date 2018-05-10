var plugins = require('./webpack.plugins');
var variables = require('./webpack.variables');

//typeScript
exports.awesomeTypeScript = {
    test: /\.tsx?$/,
    use: variables.isProduction
      ? 'awesome-typescript-loader?module=es6'
      : [
        'react-hot-loader/webpack',
        'awesome-typescript-loader'
      ]
};


//static assets
exports.htmlLoader = {
    test: /\.html$/, use: 'html-loader'
};

// exports.urlLoader = {
//     test: /\.png$/, use: 'url-loader?limit=10000'
// };

exports.fileLoader = {
   test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "file-loader?name=./assets/images/[name].[ext]"
};

//styles

exports.sassOneFile = {
    test: /\.scss$/, 
    loader: plugins.ExtractTextPlugin.extract('css-loader!sass-loader')
};

exports.sass = {
    test: /\.scss$/, 
    loader: 'style-loader!css-loader!sass-loader'
};