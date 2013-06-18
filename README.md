# grunt-md5filename
[![Build Status](https://travis-ci.org/ishikawam/grunt-md5filename.png?branch=master)](https://travis-ci.org/ishikawam/grunt-md5filename)
[![Dependency Status](https://gemnasium.com/ishikawam/grunt-md5filename.png)](https://gemnasium.com/ishikawam/grunt-md5filename)
[![endorse](https://api.coderwall.com/m_ishikawa/endorsecount.png)](https://coderwall.com/m_ishikawa)

> Convert file names to MD5.

> ex.) octocat.png -> c29b1fd35e7e51210f3264d567650ac7


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-md5filename --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-md5filename');
```

*This plugin was designed to work with Grunt 0.4.x.*


## MD5filename task
_Run this task with the `grunt md5filename` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### pathType
Type: `String`
Default: 'filename'

select MD5 target for file name or file name with path.

* filename
  * file name
  * ex)

```
octcat.png
->  md5('octcat.png')
c29b1fd35e7e51210f3264d567650ac7
```

* filepath
  * file name with path
  * ex)

```
img/github/octocat.png
->  md5('img/github/octocat.png')
ea8bfe94d1b4278fcd9dca963dde3e00
```

#### keepBasename
Type: `Boolean`
Default: `false`

converted file name add to filename(exclude extension).

```
octcat.png
-> 'octcat' + '-' + md5(octcat.png)
octcat-c29b1fd35e7e51210f3264d567650ac7
```

#### keepExtension
Type: `Boolean`
Default: `false`

converted file name add to extension.

```
octcat.png
-> md5(octcat.png) + '.png'
c29b1fd35e7e51210f3264d567650ac7.png
```

#### saltPrefix
Type: `String`
Default: ''

prefix salt

```
octcat.png
-> md5('__PREFIX__octcat.png')
4dd44b339b8ee57d21894ac57c8ca571
```

#### saltSuffix
Type: `String`
Default: ''

suffix salt

```
octcat.png
-> md5('octcat.png__SUFFIX__')
d43bc35325462bf21a3c7fba0902ed86
```

#### hashFile
Type: `String`
Default: null

save hash map file, json format.

```
{
  "octcat.png": "c29b1fd35e7e51210f3264d567650ac7",
  "img/github/octocat.png": "ea8bfe94d1b4278fcd9dca963dde3e00"
}
```

#### debug
Type: `Boolean`
Default: `false`

output debug log.

```
File 'original/img/github/octocat.png' to 'htdocs/img/github/c29b1fd35e7e51210f3264d567650ac7.png' created.
...
…
```

### Usage Examples

```js
md5filename: {
  build: {
    options: {
      keepBasename: false,
      keepExtension: true,
      pathType: 'filename',
      hashFile: 'tmp/hash.json',
      debug: true,
    },
    expand: true,
    cwd: 'original/img/thumbnails/',
    src: ['**/*.{png,jpg}'],
    dest: 'htdocs/img/thumbnails/',
  },
}
```


## Release History

 * 2013-06-18   v0.1.2   Change hashFile path.
 * 2013-06-18   v0.1.1   Support hashFile option.
 * 2013-06-13   v0.1.0   Init.

---

Task submitted by [Masayuki Ishikawa](https://github.com/ishikawam)

