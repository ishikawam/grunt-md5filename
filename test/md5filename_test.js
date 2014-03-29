var grunt = require('grunt');

exports.copy = {

    main: function(test) {
        'use strict';

        test.expect(5);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/main/d4728e20f195aa3992a6172487f5f91f');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/main/3db5fd673488a73564460f419afe53ef');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/main/dir/0a5556155683808d729747bd2ae40e64');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/main/dir/4c427803070155fb51ff613e9bc77b39');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        // hashFile
        var hashmap = grunt.file.readJSON('tmp/mainHash.json');
        var json = {
            'dir/DirTestFile': 'tmp/main/dir/0a5556155683808d729747bd2ae40e64',
            'dir/dir.dot.file.txt': 'tmp/main/dir/4c427803070155fb51ff613e9bc77b39',
            'dot.file.txt': 'tmp/main/3db5fd673488a73564460f419afe53ef',
            'testFile': 'tmp/main/d4728e20f195aa3992a6172487f5f91f'
        };
        test.deepEqual(hashmap, json);

        test.done();
    },

    hashFileUnexpand: function(test) {
        'use strict';

        test.expect(5);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/hashFileUnexpand/d4728e20f195aa3992a6172487f5f91f');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/hashFileUnexpand/3db5fd673488a73564460f419afe53ef');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/hashFileUnexpand/0a5556155683808d729747bd2ae40e64');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/hashFileUnexpand/4c427803070155fb51ff613e9bc77b39');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        // hashFile
        var hashmap = grunt.file.readJSON('tmp/hashFileUnexpand.json');
        var json = {
            'test/fixtures/dir/DirTestFile': 'tmp/hashFileUnexpand/0a5556155683808d729747bd2ae40e64',
            'test/fixtures/dir/dir.dot.file.txt': 'tmp/hashFileUnexpand/4c427803070155fb51ff613e9bc77b39',
            'test/fixtures/dot.file.txt': 'tmp/hashFileUnexpand/3db5fd673488a73564460f419afe53ef',
            'test/fixtures/testFile': 'tmp/hashFileUnexpand/d4728e20f195aa3992a6172487f5f91f'
        };
        test.deepEqual(hashmap, json);

        test.done();
    },

    hashFile: function(test) {
        'use strict';

        test.expect(5);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/hashFile/d4728e20f195aa3992a6172487f5f91f');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/hashFile/3db5fd673488a73564460f419afe53ef');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/hashFile/0a5556155683808d729747bd2ae40e64');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/hashFile/4c427803070155fb51ff613e9bc77b39');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        // hashFile
        var hashmap = grunt.file.readJSON('tmp/hashFile.json');
        var json = {
            'test/fixtures/dir/DirTestFile': 'tmp/hashFile/0a5556155683808d729747bd2ae40e64',
            'test/fixtures/dir/dir.dot.file.txt': 'tmp/hashFile/4c427803070155fb51ff613e9bc77b39',
            'test/fixtures/dot.file.txt': 'tmp/hashFile/3db5fd673488a73564460f419afe53ef',
            'test/fixtures/testFile': 'tmp/hashFile/d4728e20f195aa3992a6172487f5f91f'
        };
        test.deepEqual(hashmap, json);

        test.done();
    },

    keepBasename: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/keepBasename/testFile-d4728e20f195aa3992a6172487f5f91');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/keepBasename/dot.file-3db5fd673488a73564460f419afe53e');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/keepBasename/dir/DirTestFile-0a5556155683808d729747bd2ae40e6');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/keepBasename/dir/dir.dot.file-4c427803070155fb51ff613e9bc77b3');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    keepExtension: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/keepExtension/d4728e20f195aa3992a6172487f5f9');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/keepExtension/3db5fd673488a73564460f419afe53.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/keepExtension/dir/0a5556155683808d729747bd2ae40e');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/keepExtension/dir/4c427803070155fb51ff613e9bc77b.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    keepBoth: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/keepBoth/testFile-d4728e20f195aa3992a6172487f5f91f');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/keepBoth/dot.file-3db5fd673488a73564460f419afe53ef.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/keepBoth/dir/DirTestFile-0a5556155683808d729747bd2ae40e64');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/keepBoth/dir/dir.dot.file-4c427803070155fb51ff613e9bc77b39.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    unexpand: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/unexpand/d4728e20f195aa3992a6172487f5f91f');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/unexpand/3db5fd673488a73564460f419afe53ef');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/unexpand/0a5556155683808d729747bd2ae40e64');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/unexpand/4c427803070155fb51ff613e9bc77b39');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    unexpandKeepBoth: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('testFile')
        actual = grunt.file.read('tmp/unexpandKeepBoth/testFile-d4728e20f195aa3992a6172487f5f91f');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt')
        actual = grunt.file.read('tmp/unexpandKeepBoth/dot.file-3db5fd673488a73564460f419afe53ef.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile')
        actual = grunt.file.read('tmp/unexpandKeepBoth/DirTestFile-0a5556155683808d729747bd2ae40e64');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt')
        actual = grunt.file.read('tmp/unexpandKeepBoth/dir.dot.file-4c427803070155fb51ff613e9bc77b39.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    filepath: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('test/fixtures/testFile')
        actual = grunt.file.read('tmp/filepath/94cc455579f592e608529122f04a5c29');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('test/fixtures/dot.file.txt')
        actual = grunt.file.read('tmp/filepath/e6c241a74bcaca6790f7827032ea0e48');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('test/fixtures/dir/DirTestFile')
        actual = grunt.file.read('tmp/filepath/dir/2bd59450fc1c9462569c8bb8fdcff56f');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('test/fixtures/dir/dir.dot.file.txt')
        actual = grunt.file.read('tmp/filepath/dir/680e64f6e94d3b4763fff8567fd72e2c');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    filepathKeepBoth: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('test/fixtures/testFile')
        actual = grunt.file.read('tmp/filepathKeepBoth/testFile-94cc455579f592e608529122f04a5c29');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('test/fixtures/dot.file.txt')
        actual = grunt.file.read('tmp/filepathKeepBoth/dot.file-e6c241a74bcaca6790f7827032ea0e48.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('test/fixtures/dir/DirTestFile')
        actual = grunt.file.read('tmp/filepathKeepBoth/dir/DirTestFile-2bd59450fc1c9462569c8bb8fdcff56f');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('test/fixtures/dir.dot.file.txt')
        actual = grunt.file.read('tmp/filepathKeepBoth/dir/dir.dot.file-680e64f6e94d3b4763fff8567fd72e2c.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    saltPrefix: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('*prefix*testFile')
        actual = grunt.file.read('tmp/saltPrefix/4f8ca8ab20dbe3a643409ac86cbd40bf');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('*prefix*dot.file.txt')
        actual = grunt.file.read('tmp/saltPrefix/319df524234ad718d586808805709279');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('*prefix*DirTestFile')
        actual = grunt.file.read('tmp/saltPrefix/dir/423fab4a770e37dea219bcc60224b39e');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('*prefix*dir.dot.file.txt')
        actual = grunt.file.read('tmp/saltPrefix/dir/af3d0ca49d6af4e37a615ca21915f0ed');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    saltSuffix: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('testFile.suffix.')
        actual = grunt.file.read('tmp/saltSuffix/testFile-c642e5406b53e81e83d6f4ef2af6141a');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('dot.file.txt.suffix.')
        actual = grunt.file.read('tmp/saltSuffix/dot.file-49d8dbe13ad74e3876cb5ccd693cf0d9.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('DirTestFile.suffix.')
        actual = grunt.file.read('tmp/saltSuffix/dir/DirTestFile-aa017c3aa55087aa8b5e323c0a228ec6');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('dir.dot.file.txt.suffix.')
        actual = grunt.file.read('tmp/saltSuffix/dir/dir.dot.file-7c250b8ebe11cae3741cf67666bffa9b.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    saltBoth: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('/prefix/test/fixtures/testFile{suffix[')
        actual = grunt.file.read('tmp/saltBoth/testFile-dd5abf00b820bb2b642175d44e8c6d12');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('/prefix/test/fixtures/dot.file.txt{suffix[')
        actual = grunt.file.read('tmp/saltBoth/dot.file-296d142eb460bbecca001b40307d88a3.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('/prefix/test/fixtures/dir/DirTestFile{suffix[')
        actual = grunt.file.read('tmp/saltBoth/dir/DirTestFile-f7319d8db015db869bfc0858e9a6d021');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('/prefix/test/fixtures/dir/dir.dot.file.txt{suffix[')
        actual = grunt.file.read('tmp/saltBoth/dir/dir.dot.file-6cfa6508c19895e4d69fa18139e2081d.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },

    ignorePatterns: function(test) {
        'use strict';

        test.expect(4);

        var actual;
        var expected;

        // md5('/prefix/test/fixtures/testFile{suffix[')
        actual = grunt.file.read('tmp/ignorePatterns/94cc455579f592e608529122f04a5c29');
        expected = grunt.file.read('test/fixtures/testFile');
        test.equal(expected, actual);

        // md5('/prefix/test/fixtures/dot.file.txt{suffix[')
        actual = grunt.file.read('tmp/ignorePatterns/dot.file.txt');
        expected = grunt.file.read('test/fixtures/dot.file.txt');
        test.equal(expected, actual);

        // md5('/prefix/test/fixtures/dir/DirTestFile{suffix[')
        actual = grunt.file.read('tmp/ignorePatterns/dir/2bd59450fc1c9462569c8bb8fdcff56f');
        expected = grunt.file.read('test/fixtures/dir/DirTestFile');
        test.equal(expected, actual);

        // md5('/prefix/test/fixtures/dir/dir.dot.file.txt{suffix[')
        actual = grunt.file.read('tmp/ignorePatterns/dir/dir.dot.file.txt');
        expected = grunt.file.read('test/fixtures/dir/dir.dot.file.txt');
        test.equal(expected, actual);

        test.done();
    },
};
