#!/usr/bin/env node
/*!
 * --------------
 * LysinsDB®-Data
 * --------------
 * Data of LysinsDB — A manually curated dedicated database of Lysins.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 04-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-cli
 * @build     : SEED™ — Örebro
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "LysinsDB®-Data".
 * ___________________________________________________________________________
 */


// "disallowMultipleSpaces": {"allowEOLComments": true}
// "disallowSemicolons": false
// "requireSemicolons": true
// "requireSpaceAfterLineComment": { "allExcept": ["#", "="] }

// global __dirname: true
// global require: true

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

// Invoking strict mode.
// @purpose: Strict mode applies to entire scripts or to individual functions.
"use strict";

// To load required NPM modules.
// -----------------------------
var chalk      = require('chalk');
var glob       = require('glob');

// To load required Node module.
// -----------------------------
var os         = require('os');
var fs         = require('fs');

// Default color defined.
// ----------------------
var noop       = chalk.red;
var yeep       = chalk.green;
var okay       = chalk.blue;
var boop       = chalk.gray;

///-------------------
// An object literals.
///-------------------
var build = {
  // Nonidentifier property names are quoted.
  "system"     : "SEED™",
  "name"       : "Örebro",
  "year"       : "2015",
  "audience"   : "for all scientist and computational biologist."
};

///-----------------------
// A citation of LysinsDB®
///-----------------------
var cite = JSON.parse(fs.readFileSync('./citation.json', {
  encoding: "utf8"
}));

// To get asset(s) information.
///----------------------------
var pkg  = JSON.parse(fs.readFileSync('./package.json', {
  encoding: "utf8"
}));

// To get credential(s) information.
///---------------------------------
var npm  = JSON.parse(fs.readFileSync('./secret.json', {
  encoding: "utf8"
}));

var message    = "SEED™ — Supported under Mac OS X and Linux only!";

// To get 'version', i.e. required to work on SEED™: Grunt based build system.
var version    = pkg.version;

// ----------------------------------------------------------------------------------------------------------
var banner     =
    '/*!\n' +
    ' * ———————————————\n' +
    ' * LysinsDB®-Data: v' + version + '\n' +
    ' * ———————————————\n' +
    ' * From the Desk of Prabhat Kumar — CEO, Founder & Scientist.\n' +
    ' * Copyright © 2008 - ' + new Date().getFullYear() + ', Prabhat Kumar, All rights reserved.\n' +
    ' * Copyright © 2014 - ' + new Date().getFullYear() + ', Sequømics Research, All rights reserved.\n' +
    ' * Copyright © 2014 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.\n' +
    ' * Released under the Apache License (http://www.apache.org/licenses/).\n' +
    ' */';

// To get 'version' of seed, i.e. required to work on SEED™: Grunt based build system. | See: http://seed.sequomics.com/.
var info = process.env.VERSION || require('./seed.json').version;

///-------------------------
// A smart license function.
///------- Apache ----------
var license    = [
  '/*!                                                                                                  ',
  ' * Build System — ' + yeep(build.system) + ': ' + okay(build.name) + ' — ' + info                     ,
  ' * ' + noop(build.audience)                                                                           ,
  ' * ---------------------------------------------------------------------------                       ',
  ' * Copyright © 2015 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.  ',
  ' * Available via the Apache, version 2.0. [http://www.apache.org/licenses/]                          ',
  ' * See: http://seed.sequomics.com/ — for details.                                                    ',
  ' * ---------------------------------------------------------------------------                       ',
  ' */                                                                                                  ',
  '\n',
].map(function(s) {
  return s.replace(/\s+$/, '');
}).join("\n");
// ----------------------------------------------------------------------------------------------------------

///------------------------------------
// A function to register `dateFormat`.
///------------------------------------
function dateFormat(date, format) {
  if (format === undefined) {
    format = date;
    date = new Date();
  }
  var map = {
    "M": date.getMonth() + 1,
    "d": date.getDate(),
    "h": date.getHours(),
    "m": date.getMinutes(),
    "s": date.getSeconds(),
    "q": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  format = format.replace(/([yMdhmsqS])(\1)*/g, function(all, t){
    var v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length-2);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
}

// ----------------------------------------------------------------------------------------------------------
// All Grunt Operations Defined... |------------------------------------------| 06/Dec/2016 | SEED™ — Örebro.
//                           Copyright © 2016, Prabhat Kumar, All rights reserved.
// ----------------------------------------------------------------------------------------------------------

module.exports = function(grunt) {
  
  // Force use of Unix newlines.
  grunt.util.linefeed = '\n';
  
  // Assigning `grunt.util._` to `_`.
  var _ = grunt.util._;
  
  // 1. time-grunt ——> $ npm install time-grunt --save-dev
  // -----------------------------------------------------
  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);
  
  // Utility to load the different option files,
  // based on their names —————————————————————.
  function loadConfig(path) {
    var object = {};
    var key;
    
    glob.sync('*', {
      cwd: path
    }).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });
    return object;
  }
  
  /// Initial Configurations.
  var config = {
    pkg: grunt.file.readJSON('./package.json')
  };
  
  /// Loading Externally-Defined Tasks.
  /// http://gruntjs.com/api/grunt
  grunt.loadTasks('tasks');
  
  /// Loading all the tasks options in tasks/options base on the name:
  /// watch.js => watch{}
  _.extend(config, loadConfig('./tasks/options/'));
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Project configuration for -//LysinsDB®-Data//- Build.
  // Date: 06-12-2016.
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  grunt.initConfig(config);
  
  // 2. load-grunt-tasks ——> $ npm install load-grunt-tasks --save-dev
  // -----------------------------------------------------------------
  // Load multiple grunt tasks using globbing patterns.
  require('load-grunt-tasks')(grunt, {
    // Load all grunt-contrib tasks and another non-contrib task.
    pattern: ['grunt-contrib-*', 'grunt-jscs'],
    scope: ['devDependencies', 'dependencies'],
    requireResolution: true
  });
  
  // Writing about Build System.
  grunt.log.writeln(license);
