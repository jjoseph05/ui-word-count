const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';


  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    entry: './src/App.js',
    output: {
      path: path.join(__dirname, '/dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, '/dist')
    }
  }
};