/* eslint-disable */
module.exports = {
  output: {
    library: 'ReactAggridFrameworkComponents',
    libraryTarget: 'umd'
  },
  externals: [
    {
      jquery: {
        amd: 'jquery',
        commonjs: 'jquery',
        commonjs2: 'jquery',
        root: 'JQuery'
      }
    },
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};

