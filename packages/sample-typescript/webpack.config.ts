import * as webpack from 'webpack';
import path from 'path';
import webpackNodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  target: 'node',
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2015',
        },
      },
    ],
  },
  externals: [webpackNodeExternals()],
};

export default config;
