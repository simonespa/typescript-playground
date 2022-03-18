const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  externals: {
    rxjs: 'rxjs',
    operators: 'rxjs/operators'
  },
  devServer: {
    compress: true,
    port: 8080
  },
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
  },
};
