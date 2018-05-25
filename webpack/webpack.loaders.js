var plugins = require('./webpack.plugins');

//typeScript
exports.awesomeTypeScript = {
    test: /\.tsx?$/,
    use: 'awesome-typescript-loader',
    exclude: /node_modules/
};

// sass loader
exports.sass = {
    test: /\.scss$/, 
    use: ['style-loader', 'css-loader', 'sass-loader']
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

// exports.sassOneFile = {
//     test: /\.scss$/, 
//     loader: plugins.ExtractTextPlugin.extract('css-loader!sass-loader')
// };