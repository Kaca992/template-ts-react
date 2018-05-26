var plugins = require('./webpack.plugins');

//typeScript
const awesomeTypeScript = {
    test: /\.tsx?$/,
    use: 'awesome-typescript-loader',
    exclude: /node_modules/
};

// sass loader
const sassDev = {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
};

// produciton sass loader separates all css files into a separate file, not inlined with js
const sassProd = {
    test: /\.scss$/,
    use: [plugins.MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
};


//static assets
// exports.htmlLoader = {
//     test: /\.html$/, use: 'html-loader'
// };

// exports.urlLoader = {
//     test: /\.png$/, use: 'url-loader?limit=10000'
// };

const fileLoader = {
    test: /\.(png|jpg|jpeg|gif|svg)$/, use: "file-loader?name=./assets/images/[name].[ext]"
};

const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader?name=./assets/fonts/[name].[ext]']
}

exports.getLoaders = (isProduction) => {
    let loaders = [awesomeTypeScript, fileLoader, fontLoader];

    if (isProduction) {
        loaders.push(sassProd);
    } else {
        loaders.push(sassDev);
    }

    return loaders;
}

//styles

// exports.sassOneFile = {
//     test: /\.scss$/, 
//     loader: plugins.ExtractTextPlugin.extract('css-loader!sass-loader')
// };