# grunt-md5filename
[![NPM version](https://badge.fury.io/js/grunt-md5filename.png)](http://badge.fury.io/js/grunt-md5filename)
[![Build Status](https://travis-ci.org/ishikawam/grunt-md5filename.png?branch=master)](https://travis-ci.org/ishikawam/grunt-md5filename)
[![Dependency Status](https://gemnasium.com/ishikawam/grunt-md5filename.png)](https://gemnasium.com/ishikawam/grunt-md5filename)
[![endorse](https://api.coderwall.com/m_ishikawa/endorsecount.png)](https://coderwall.com/m_ishikawa)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ishikawam/grunt-md5filename/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> ファイル名をMD5に変換して保存します
  
> ex.) octocat.png -> c29b1fd35e7e51210f3264d567650ac7


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
  * 例:

```
octcat.png
->  md5('octcat.png')
c29b1fd35e7e51210f3264d567650ac7
```

* filepath
  * パスを含むファイル名
  * 例:

```
img/github/octocat.png
->  md5('img/github/octocat.png')
ea8bfe94d1b4278fcd9dca963dde3e00
```

#### keepBasename
Type: `Boolean`
Default: `false`

MD5変換後のファイル名に元のファイル名を接頭辞として付加します

```
octcat.png
-> 'octcat' + '-' + md5(octcat.png)
octcat-c29b1fd35e7e51210f3264d567650ac7
```

#### keepExtension
Type: `Boolean`
Default: `false`

MD5変換後のファイル名に元のファイルの拡張子を接尾辞として付加します

```
octcat.png
-> md5(octcat.png) + '.png'
c29b1fd35e7e51210f3264d567650ac7.png
```

#### saltPrefix
Type: `String`
Default: ''

MD5変換元の文字列にソルト(接頭辞)を指定します

```
octcat.png
-> md5('__PREFIX__octcat.png')
4dd44b339b8ee57d21894ac57c8ca571
```

#### saltSuffix
Type: `String`
Default: ''

MD5変換元の文字列にソルト(接尾辞)を指定します

```
octcat.png
-> md5('octcat.png__SUFFIX__')
d43bc35325462bf21a3c7fba0902ed86
```

#### ignorePatterns
Type: `Array`
Default: []

MD5変換から除外するファイルを指定します

```
octcat.png
-> ignorePatterns: ['*.png'],
octcat.png
```

#### hashFile
Type: `String`
Default: `null`

MD5変換元と変換したファイル名のハッシュマップをjson形式でファイル保存します

```
{
  "src/octcat.png": "dest/c29b1fd35e7e51210f3264d567650ac7",
  "src/img/github/octocat.png": "dest/img/github/ea8bfe94d1b4278fcd9dca963dde3e00"
}
```
> **仕様変更のお知らせ**<br>
> v0.1.5より出力するjsonに記載されるMD5変換後のファイルパスの表記仕様を変更しました。<br>
> Gruntのルートディレクトリからの相対パスになります。

#### hashLength
Type: `Number`
Default: `null (32)`

MD5ハッシュ文字をそのまま使わずに指定した文字数だけ先頭から取り出して短くします。
デフォルトでMD5で生成される文字数は32文字です。

```
octcat.png
->  md5('octcat.png'), hashLength = 8
c29b1fd3
```

#### debug
Type: `Boolean`
Default: `false`

変換の詳細を表示します

```
File 'original/img/github/octocat.png' to 'htdocs/img/github/c29b1fd35e7e51210f3264d567650ac7.png' created.
...
```

### 使用例

```js
md5filename: {
  build: {
    options: {
      keepBasename: false, // デフォルトfalseでは(MD5ファイル名.jpg) trueでは(元のファイル名-MD5ファイル名.jpg)
      keepExtension: true, // デフォルトfalseでは拡張子を排除 trueでは元の拡張子を付与
      pathType: 'filename', // MD5元は filename ファイル名, filepath 相対パス
      hashFile: 'tmp/hash.json', // ハッシュマップjsonファイルを保存
      hashLength: 20,
      debug: true, // 元ファイル、保存ファイルを表示
    },
    expand: true, // ディレクトリ構成を保つかどうか
    cwd: 'original/img/thumbnails/', // expand:true の場合のベースパス
    src: ['**/*.{png,jpg}'], // 元のファイル
    dest: 'htdocs/img/thumbnails/', // 保存先ディレクトリ
  },
}
```


## リリース履歴

 * 2014-03-28   v0.1.5   `hashFile` オプション使用時に生成されるjsonファイルに記載されるMD5返還後ファイルパスを、Gruntルートディレクトリからのパスに仕様変更しました。
 * 2013-12-13   v0.1.4   `ignorePatterns` オプションを追加.
 * 2013-08-25   v0.1.3   `hashLength` オプションを追加.
 * 2013-06-18   v0.1.2   `hashFile`に保存するファイルのパスの基準を変更
 * 2013-06-18   v0.1.1   `hashFile`オプションをサポート
 * 2013-06-13   v0.1.0   リリース

---

Task submitted by [Masayuki Ishikawa](https://github.com/ishikawam)

