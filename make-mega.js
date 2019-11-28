#!/usr/bin/env node
var program = require('commander')
var makeMega = require('./')
var package = require('./package.json')

program
  .version(package.version)
  .usage('100')

makeMega()