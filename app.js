#!/usr/bin/env node

var argv = require('yargs')
.argv
var prompt = require('prompt');
var help = require('./app/help');
var zipFile = require('./app/zipfile');
var fs = require('fs')

if (argv.help) {
	help();
}

if (argv.file) {
	zipFile(argv.file);
}
     prompt.override = argv;
     prompt.message = prompt.delimiter = '';
     prompt.start();

     prompt.get('name', function (err, result) {
  	 printHelloMessage(result.name);
  });

function printHelloMessage(name) {
	console.log('Hello' + name);
    process.stdout.write('Hello' + name + 'Again!\n');
}



