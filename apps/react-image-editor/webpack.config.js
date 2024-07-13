/* eslint-disable */
const path = require('path');
const { version, author, license } = require('./package.json');

const webpack = require('webpack');

module.exports = () => ({
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'toastui-react-image-editor.js',
    path: path.resolve(__dirname, 'dist'),
    library: { type: 'commonjs2' },
  },
  externals: {
    '@jaymanyoo/tui-image-editor': {
      commonjs: '@jaymanyoo/tui-image-editor',
      commonjs2: '@jaymanyoo/tui-image-editor',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: [
        'TOAST UI ImageEditor : React Wrapper',
        `@version ${version}`,
        `@author ${author}`,
        `@license ${license}`,
      ].join('\n'),
    }),
  ],
});
