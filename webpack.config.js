
const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    compress: true,
    watchContentBase: true,
    inline: true,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // 最新の構文を変換
                '@babel/preset-env',
                // ReactのJSXを変換
                '@babel/react',
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
};
