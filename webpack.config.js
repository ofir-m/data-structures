const path = require('path');

module.exports = {
  entry: './src/linkedList.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.ofir.js',
    path: path.resolve(__dirname, 'dist')
  }
};