#!/usr/bin/env node

const yargs = require('yargs')
const papergen = require('papergen')
const path = require('path')
const pkg = require('./package.json')

let cli = yargs
  .usage('\nUsage: papergen [options]')
  .example('papergen -s letter -r college -o ./')
  .help('help')
  .alias('h', 'help')
  .version('v', pkg.version)
  .alias('v', 'version')

const argv = cli.argv

const options = {
  printSize: argv.s || argv.size,
  ruling: argv.r || argv.ruling,
  outputFolder: path.resolve(argv.o) || path.resolve('~')
}

papergen(options)
