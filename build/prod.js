const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../webpack.config')
const Uglify = require('uglifyjs-webpack-plugin')

webpack(merge(config, {
  plugins: [
    new Uglify(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
}), (err, stats) => {
  if (err) console.log(err)
  else console.log('Successfully compiled.')
})
