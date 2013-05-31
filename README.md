# grunt-md5filename
[![Build Status](https://travis-ci.org/ishikawam/grunt-md5filename.png?branch=master)](https://travis-ci.org/ishikawam/grunt-md5filename)
[![Dependency Status](https://gemnasium.com/ishikawam/grunt-md5filename.png)](https://gemnasium.com/ishikawam/grunt-md5filename)
[![endorse](https://api.coderwall.com/m_ishikawa/endorsecount.png)](https://coderwall.com/m_ishikawa)

> Convert file names to MD5.



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
  * ex) octocat.png
* filepath
  * file name with path
  * ex) img/github/octocat.png


#### keepBasename
Type: `Boolean`
Default: `false`

converted file name add to filename(exclude extension).

```
octcat.png
->
octcat-e097c640abd1bba3457ca2deaf0d2cec
```


#### keepExtension
Type: `Boolean`
Default: `false`

converted file name add to extension.

```
octcat.png
->
e097c640abd1bba3457ca2deaf0d2cec.png
```


#### saltPrefix
Type: `String`
Default: ''

prefix salt

```
octcat.png
-> (md5 -s '__PREFIX__octcat.png')
4dd44b339b8ee57d21894ac57c8ca571
```

#### saltSuffix
Type: `String`
Default: ''

suffix salt

```
octcat.png
-> (md5 -s 'octcat.png__SUFFIX__')
d43bc35325462bf21a3c7fba0902ed86
```


#### debug
Type: `Boolean`
Default: `false`

output debug log.

```
File 'original/img/github/octocat.png' to 'htdocs/img/github/e097c640abd1bba3457ca2deaf0d2cec.png' created.
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

 * 2013-05-28   v0.0.1   init.

---

Task submitted by [Masayuki Ishikawa](https://github.com/ishikawam)

