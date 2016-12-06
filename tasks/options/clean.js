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
 * @require   : grunt-contrib-clean
 * @build     : SEED™ — Örebro
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "LysinsDB®-Data".
 * ___________________________________________________________________________
 */

module.exports = {
  // before generating any new files, remove any previously-created files.
  tests: ['tmp', '*.temp', '*.log', '*.knit.md', '*.utf8.md', '*.pdb.gz', '*.cif.gz', '*.sf.ent.gz'],
  // will delete files for `build` target.
  build: ['build'],
  // Will NOT delete files for `release` target.
  release: {
    options: {
      'no-write': true
    },
    src: ['data']
  }
};
