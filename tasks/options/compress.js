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
 * @require   : grunt-contrib-compress
 * @build     : SEED™ — Örebro
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "LysinsDB®-Data".
 * ___________________________________________________________________________
 */

module.exports = {
  // Used a default pattern of compression for LysinsDB®-Data.
  main: {
    options: {
      // output: --> lysinsdb-data-0.0.1-2016-12-06-data.zip
      archive: '<%= pkg.name %>-<%= pkg.version %>-<%= pkg.author %><%= grunt.template.today("yyyy-mm-dd") %>-data.zip',
      level: 9,
      pretty: true
    },
    files: [
      {
        expand: true,
        src: ['data/**/*.json'],
        dest: './'
      }
    ]
  }
};
