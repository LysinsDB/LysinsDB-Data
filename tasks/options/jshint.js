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
 * @date      : 06-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-contrib-jshint
 * @build     : SEED™ — Örebro
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "LysinsDB®-Data".
 * ___________________________________________________________________________
 */

module.exports = {
  options: {
    curly: true,
    eqeqeq: true,
    eqnull: true,
    browser: true,
    node: true,
    unused: true,
    strict: true,
    undef: true
  },
  ignore_warning: {
    options: {
      '-W015': true // [L24:C9] W015: Expected '}' to have an indentation at 11 instead at 9.
    }
  },
  all: [
    './Gruntfile.js',
    './lib/**/*.js',
    './index.js',
    '!node_modules/**/*.js' // ignores node_modules.
  ]
};
