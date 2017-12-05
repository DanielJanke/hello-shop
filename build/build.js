require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();


var ftpConfig = {
    username: "513449-daniel",
    password: "saka0,5L",
    host: "ftp.iamdaniel.de",
    port: 21,
    localRoot: "./dist/",
    remoteRoot: "/webseiten/",
    include: ['dist/*/*'],
    exclude: ['.git', '.idea', 'tmp/*', 'build/*,','src/*']
}

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log('Local Path:');

    ftpDeploy.deploy(ftpConfig, function(err) {
      if (err) console.log(err)
      else console.log('FTP Upload Complete');
    });

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
