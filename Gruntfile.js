/*
 * grunt-md5filename
 * https://github.com/ishikawam/grunt-md5filename
 *
 * Copyright (c) 2013 Masayuki Ishikawa
 * Licensed under the MIT license.
 */

// For test
var fs = require('fs');

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
//        globals: {}
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },
    md5filename: {
      main: {
        options: {
          keepBasename: false,
          keepExtension: false,
          pathType: 'filename',
          hashFile: 'tmp/mainHash.json',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/main/',
      },
      hashFileUnexpand: {
        options: {
          keepBasename: false,
          keepExtension: false,
          pathType: 'filename',
          hashFile: 'tmp/hashFileUnexpand.json',
          debug: true,
        },
        expand: false,
        src: ['test/fixtures/**/*'],
        dest: 'tmp/hashFileUnexpand/',
      },
      hashFile: {
        options: {
          keepBasename: false,
          keepExtension: false,
          pathType: 'filename',
          hashFile: 'tmp/hashFile.json',
          debug: true,
        },
        files: {'tmp/hashFile/': 'test/fixtures/**/*'}
      },
      plain: {
        src: ['test/fixtures/**/*'],
        dest: 'tmp/plain/',
      },
      keepBasename: {
        options: {
          keepBasename: true,
          keepExtension: false,
          pathType: 'filename',
          hashLength: 31,
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/keepBasename/',
      },
      keepExtension: {
        options: {
          keepBasename: false,
          keepExtension: true,
          pathType: 'filename',
          hashLength: 30,
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/keepExtension/',
      },
      keepBoth: {
        options: {
          keepBasename: true,
          keepExtension: true,
          pathType: 'filename',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/keepBoth/',
      },
      unexpand: {
        options: {
          keepBasename: false,
          keepExtension: false,
          pathType: 'filename',
          debug: true,
        },
        expand: false,
        src: ['test/fixtures/**/*'],
        dest: 'tmp/unexpand/',
      },
      unexpandKeepBoth: {
        options: {
          keepBasename: true,
          keepExtension: true,
          pathType: 'filename',
          debug: true,
        },
        expand: false,
        src: ['test/fixtures/**/*'],
        dest: 'tmp/unexpandKeepBoth/',
      },
      filepath: {
        options: {
          pathType: 'filepath',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/filepath/',
      },
      filepathKeepBoth: {
        options: {
          keepBasename: true,
          keepExtension: true,
          pathType: 'filepath',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/filepathKeepBoth/',
      },
      saltPrefix: {
        options: {
          saltPrefix: '*prefix*',
          pathType: 'filename',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/saltPrefix/',
      },
      saltSuffix: {
        options: {
          saltSuffix: '.suffix.',
          keepBasename: true,
          keepExtension: true,
          pathType: 'filename',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/saltSuffix/',
      },
      saltBoth: {
        options: {
          saltPrefix: '/prefix/',
          saltSuffix: '{suffix[',
          keepBasename: true,
          keepExtension: true,
          pathType: 'filepath',
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/saltBoth/',
      },
      ignorePatterns: {
        options: {
          pathType: 'filepath',
          ignorePatterns: ['*dot.file.txt'],
          debug: true,
        },
        expand: true,
        cwd: 'test/fixtures/',
        src: ['**/*'],
        dest: 'tmp/ignorePatterns/',
      },
    },
    nodeunit: {
      tests: 'test/*_test.js'
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'md5filename', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
