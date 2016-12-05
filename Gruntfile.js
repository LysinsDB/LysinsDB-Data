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
