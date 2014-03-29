/*
 * grunt-md5filename
 * https://github.com/ishikawam/grunt-md5filename
 *
 * Copyright (c) 2013 Masayuki Ishikawa
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var path = require('path');

  grunt.registerMultiTask('md5filename', 'change filename md5', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pathType: 'filename',
      keepBasename: false,
      keepExtension: false,
      saltPrefix: '',
      saltSuffix: '',
      ignorePatterns: [],
      hashFile: null,
      hashLength: null,     // default 32 md5
      debug: false,
    });

    var count = 0;
    var hashmap = {};

    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(filePair) {
      var isExpandedPair = filePair.orig.expand || false;

      filePair.src.forEach(function(srcFile) {
        try {
          var basename = '';
          var destFile;
          var ext = '';

          if (grunt.file.isDir(srcFile)) {
            return;
          }

          var isMatch = false;
          options.ignorePatterns.forEach(function(pattern) {
            isMatch = isMatch || (grunt.file.isMatch({matchBase: true}, pattern, srcFile));
          });

          var filename = '';
          if (!isMatch) {
            // default: use filename
            var target = path.basename(srcFile);
            if (options.pathType === 'filepath') {
              target = srcFile;
            }

            target = options.saltPrefix + target + options.saltSuffix;

            if (options.keepBasename === true) {
              basename = path.basename(srcFile, ext || path.extname(srcFile)) + '-';
            }

            if (options.keepExtension === true) {
              ext = path.extname(srcFile);
            }

            var hash = require('crypto').createHash('md5').update(target).digest('hex');
            if (options.hashLength !== null) {
              hash = hash.slice(0, options.hashLength);
            }
            filename = basename + hash + ext;
          } else {
            filename = path.basename(srcFile);
          }

          var regex = new RegExp(escapeRegExp(path.basename(srcFile)) + "$");

          if (detectDestType(filePair.dest) === 'directory') {
            destFile = (isExpandedPair) ? filePair.dest.replace(regex, filename) : unixifyPath(path.join(filePair.dest, filename));
          } else {
            destFile = filePair.dest.replace(regex, filename);
          }
          grunt.file.copy(srcFile, destFile);

          var mapSrcFile = srcFile.replace(new RegExp('^' + filePair.orig.cwd), '');
          hashmap[mapSrcFile] = destFile;

          if (options.debug === true) {
            grunt.log.writeln('File \'' + srcFile + '\' to \'' + destFile + '\' created.');
          }

        } catch(err) {
          grunt.log.error(err);
          grunt.fail.warn('Fail to generate an MD5 file name');
        }
      });
      count++;
    });

    if (options.hashFile !== null) {
      grunt.file.write(options.hashFile, JSON.stringify(hashmap));
    }
    grunt.log.writeln(count + ' files created.');
  });

  var detectDestType = function(dest) {
    if (grunt.util._.endsWith(dest, '/')) {
      return 'directory';
    } else {
      return 'file';
    }
  };

  var unixifyPath = function(filepath) {
    if (process.platform === 'win32') {
      return filepath.replace(/\\/g, '/');
    } else {
      return filepath;
    }
  };

  var escapeRegExp = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
};

