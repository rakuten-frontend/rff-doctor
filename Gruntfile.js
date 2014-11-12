'use strict';

module.exports = function (grunt) {

  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    // JSHint
    jshint: {
      all: [
        'Gruntfile.js',
        'index.js',
        'bin/rff-doctor'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    }

  });

  grunt.registerTask('default', ['jshint']);

};
