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

#### pathtype
Type: `String`


#### keepBasename
Type: `String`


#### keepExtension
Type: `String`


### Usage Examples

```js
md5filename: {
  build: {
    options: {
      keepBasename: false, // デフォルトfalseでは(MD5ファイル名.jpg) trueでは(元のファイル名-MD5ファイル名.jpg)
      keepExtension: true, // デフォルトfalseでは拡張子を排除 trueでは元の拡張子を付与
      pathType: 'filename', // MD5元は filename ファイル名, filepath 相対パス
      debug: true, // 元ファイル、保存ファイルを表示
    },
    expand: true, // ディレクトリ構成を保つかどうか
    cwd: 'original/img/thumbnails/', // expand:true の場合のベースパス
    src: ['**/*.{png,jpg}'], // 元のファイル
    dest: 'htdocs/img/thumbnails/', // 保存先
  },
}
```


## Release History

 * 2013-05-28   v0.0.1   init.

---

Task submitted by [Masayuki Ishikawa](https://github.com/ishikawam)

