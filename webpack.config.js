const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-es2015', '@babel/preset-react']
          }              
        }
      },{
        test:/\.(s*)css$/,
        use:[
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },{
        test:/\.css$/,
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [
          require('autoprefixer')(),		// package.json 'browserslist' 
          require('cssnano')()
        ],
          sourceMap: true
        }
      }
    ]
  }
}