# grunt-md5filename
[![Build Status](https://travis-ci.org/ishikawam/grunt-md5filename.png?branch=master)](https://travis-ci.org/ishikawam/grunt-md5filename)
[![Dependency Status](https://gemnasium.com/ishikawam/grunt-md5filename.png)](https://gemnasium.com/ishikawam/grunt-md5filename)
[![endorse](https://api.coderwall.com/m_ishikawa/endorsecount.png)](https://coderwall.com/m_ishikawa)

> ファイル名をMD5に変換して保存します
  
> ex.) octocat.png -> e097c640abd1bba3457ca2deaf0d2cec


## 始め方
このプラグインは Grunt `~0.4.0` が必要です。

もし [Grunt](http://gruntjs.com/) をまだ使っていなければ [Getting Started](http://gruntjs.com/getting-started) をチェックして下さい。
このガイドではインストール、 [Gruntfile](http://gruntjs.com/sample-gruntfile) の作成、Gruntプラグインの使い方などを説明しています。

下記コマンドでプラグインをインストールできます:

```shell
npm install grunt-md5filename --save-dev
```

プラグインをインストールしたら Gruntfile を JavaScript で下記のように記述して使用します:

```js
grunt.loadNpmTasks('grunt-md5filename');
```

*このプラグインは Grunt 0.4.x で動作します。*


## MD5filename タスク
_`grunt md5filename` コマンドでこのタスクを実行します。_

タスクのtargets、files、optionsは Grunt の [Configuring tasks](http://gruntjs.com/configuring-tasks) ガイドに従っても指定出来ます。
 
### オプション

#### pathType
Type: `String`
Default: 'filename'

MD5変換元の文字列を指定したファイル名にするか、パスを含むファイル名にするか選びます

* filename
  * ファイル名
  * octocat.png
* filepath
  * パスを含むファイル名
  * img/github/octocat.png


#### keepBasename
Type: `Boolean`
Default: `false`

MD5変換後のファイル名に元のファイル名を接頭辞として付加します

```
octcat.png
->
octcat-e097c640abd1bba3457ca2deaf0d2cec
```


#### keepExtension
Type: `Boolean`
Default: `false`

MD5変換後のファイル名に元のファイルの拡張子を接尾辞として付加します

```
octcat.png
->
e097c640abd1bba3457ca2deaf0d2cec.png
```


#### saltPrefix
Type: `String`
Default: ''

MD5変換元の文字列にソルト(接頭辞)を指定します

```
octcat.png
-> (md5 -s '__PREFIX__octcat.png')
4dd44b339b8ee57d21894ac57c8ca571
```

#### saltSuffix
Type: `String`
Default: ''

MD5変換元の文字列にソルト(接尾辞)を指定します

```
octcat.png
-> (md5 -s 'octcat.png__SUFFIX__')
d43bc35325462bf21a3c7fba0902ed86
```


#### debug
Type: `Boolean`
Default: `false`

変換の詳細を表示します

```
File 'original/img/github/octocat.png' to 'htdocs/img/github/e097c640abd1bba3457ca2deaf0d2cec.png' created.
…
```


### 使用例

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


## リリース履歴

 * 2013-05-28   v0.0.1   init.

---

Task submitted by [Masayuki Ishikawa](https://github.com/ishikawam)

